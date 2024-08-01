/**
 * @Description:
 * @Author: 美神猎手
 * @Date:   2019-02-23T22:38:19+08:00
 * @Email:  meishenlieshou@gmail.com
 * @Project: Datafor
 * @Filename: dataInterface.js
 * @Last modified by:   美神猎手
 * @Last modified time: 2021-01-20T11:01:32+08:00
 * @License: 收费
 * @Copyright: 上海数为信息技术有限公司
 */
(function () {
	var Utility = require("Utility");
	var $ = require("jquery");
	var CodeMirror = Utility.getReactExport('CodeMirror');
	const React = Utility.getReactExport('React');
	const ReactDOM = Utility.getReactExport('ReactDOM');
	var Saiku = require("model/Saiku");
	var Component = require("model/Component");
	var Dashboard = require("model/Dashboard");
	var Events = require("Event");
	var Selector = require("lib/backbone.select");
	var Loader = require("Loader");
	const runtime = require("utility/runtime");
	var CubeTreeNode = require("utility/CubeTreeNode");
	var Calculated = require("ui/CalculatedMeasureView");
	var Http = require("Http");
	var UINotification = require("ui/Notification");
	var placeholders = {
		mdx: "MDX模式，请先选择数据源，然后在这里输入MDX查询",
		queryModel: "QUERYMODEL模式，请先选择数据源，然后在这里修改查询"
	};
	require("nicescroll");
	require("vim");
	require("codemark");
	require("pqgrid");
	require("lib/switchery");
	require("mdx");
	var datasourceArray = new Array();
	var backQuery;
	(function (baseQuery, baseMDX) {
		var UI = {
			cubeList: new Array(),
			metadata: {},
			cube: {},
			getValidLevelNode: function (dimensions) {
				var msg = null;
				dimensions.every(function (dim) {
					var hierarchies = dim.hierarchies;
					if (Array.isArray(dim.hierarchies) && dim.hierarchies.length) {
						dim.hierarchies.every(function (hierarchy) {
							var levelNode;
							if (Array.isArray(hierarchy.levels) && hierarchy.levels.length > 1) {
								msg = {};
								msg.name = hierarchy.uniqueName;
								levelNode = hierarchy.levels[hierarchy.levels.length - 1];
								msg.levels = {};
								msg.cmembers = {};
								msg.filters = [];
								msg.levels[levelNode.name] = {
									name: levelNode.name,
									caption: levelNode.caption,
									mdx: null,
									selection: {
										type: "INCLUSION",
										members: [],
										parameterName: null
									},
									aggregators: null,
									filters: []
								};
							}
							return !msg;
						});
					}
					return !msg;
				});
				return msg;
			},
			/**
			 * 切换了数据模型
			 * @param       {[type]}                 value [description]
			 * @return      {[type]}                 [description]
			 * @usage:
			 * @author: 美神猎手
			 * @email:      meishenlieshou@gmail.com
			 * @copyrights: 上海数为信息技术有限公司
			 * @time:       2020-08-06T19:49:11+080
			 */
			datasourceUpdate: function (value) {
				var id = Array.isArray(value) ? value[0] : value;
				var myself = this;
				var cube;
				if (id !== this.datasourceActive) {
					this.currentValue = null;
				}
				if (!id) {
					Events.trigger("TipNotify", {
						controls: {
							include: ["tip"]
						},
						data: {
							text: "请选中一个数据源",
							duration: 2,
							type: "error"
						}
					});
					return this;
				}
				cube = _.find(this.cubeList, function (o) {
					return o.uniqueName == id;
				});
				if (!cube) {
					Events.trigger("TipNotify", {
						controls: {
							include: ["tip"]
						},
						data: {
							text: "没有找到对应的数据源",
							duration: 2,
							type: "error"
						}
					});
					return this;
				}
				this.loader = new Loader();
				this.cube = Utility.deepCopy(cube);
				localStorage.setItem("visualizer.api.test.datasource", id);
				this.datasourceActive = id;
				new CubeTreeNode({
					cube: cube
				}).getNodes(function (data) {
					baseQuery = Utility.deepCopy(backQuery);
					myself.loader && myself.loader.remove();
					baseQuery.cube = Utility.deepCopy(cube);
					if (!data || !Array.isArray(data.dimensions) || !Array.isArray(data.measures)) {
						Events.trigger("TipNotify", {
							controls: {
								include: ["tip"]
							},
							data: {
								text: "数据源可能已经损坏",
								duration: 2,
								type: "error"
							}
						});
						return;
					}
					baseQuery.queryModel.axes.ROWS.hierarchies = [
						myself.getValidLevelNode(data.dimensions)
					];
					if (data.measures.length) {
						baseQuery.queryModel.details.measures = [{
							caption: data.measures[0].caption,
							name: data.measures[0].name,
							uniqueName: data.measures[0].uniqueName,
							type: "EXACT"
						}];
					} else {
						Events.trigger("TipNotify", {
							controls: {
								include: ["tip"]
							},
							data: {
								text: "数据源中没有指标",
								duration: 2,
								type: "error"
							}
						});
					}
					myself.metadata = data || {};
					myself.contentRender();
				});
				return this;
			},
			getDatasourcesList: function (callback) {
				var myself = this;
				this.cubeList = new Array();
				new Http().getResources(Utility.getURL("MODELS_LIST"), {}, function (data) {
					var list = new Array();
					Array.isArray(data) && data.every(function (connection) {
						Array.isArray(connection.catalogs) && connection.catalogs.every(function (catalog) {
							Array.isArray(catalog.schemas) && catalog.schemas.every(function (schema) {
								Array.isArray(schema.cubes) && schema.cubes.every(function (cube) {
									myself.cubeList.push(Utility.deepCopy(cube));
									list.push({
										id: cube.uniqueName,
										text: cube.schema + " -> " + cube.caption,
										name: cube.name
									});
									return true;
								});
								return true;
							});
							return true;
						});
						return true;
					});
					myself.selector.model.unset("datasets", {
						silent: true
					});
					datasourceArray = Utility.deepCopy(list);
					myself.selector.model.set({
						datasets: list,
						selected: [list[0].id]
					});
					_.isFunction(callback) && callback(list);
					myself.loader && myself.loader.remove();
					myself.datasourceUpdate([list[0].id]);
				});
				return this;
			},
			getValidUniqueName: function (dimensions) {
				var msg = null;
				dimensions.every(function (dim) {
					var hierarchies = dim.hierarchies;
					if (Array.isArray(dim.hierarchies) && dim.hierarchies.length) {
						dim.hierarchies.every(function (hierarchy) {
							var levelNode;
							if (Array.isArray(hierarchy.levels) && hierarchy.levels.length > 1) {
								levelNode = hierarchy.levels[hierarchy.levels.length - 1];
								msg = levelNode.uniqueName;
							}
							return !msg;
						});
					}
					return !msg;
				});
				return msg;
			},
			/**
			 * 生成mdx末班
			 * @return      {[type]}                 [description]
			 * @usage:
			 * @author: 美神猎手
			 * @email:      meishenlieshou@gmail.com
			 * @copyrights: 上海数为信息技术有限公司
			 * @time:       2020-08-06T20:11:20+080
			 */
			getSampleMDX: function () {
				var uniqueName = this.getValidUniqueName(this.metadata.dimensions);
				var mUniqueName = this.metadata.measures[0].uniqueName;
				var cubeName = this.cube.name;
				var mdx = "WITH SET [~ROWS] AS {" + uniqueName + ".Members} \n" + "SELECT \n" + "\tNON EMPTY {" + mUniqueName + "} ON COLUMNS, \n" + "\tNON EMPTY [~ROWS] ON ROWS \n" + "FROM [" + cubeName + "]";
				return mdx;
			},
			/**
			 * 更新查询内容
			 * @return      {[type]}                 [description]
			 * @usage:
			 * @author: 美神猎手
			 * @email:      meishenlieshou@gmail.com
			 * @copyrights: 上海数为信息技术有限公司
			 * @time:       2020-08-06T20:11:08+080
			 */
			contentRender: function () {
				var content = this.currentValue || (this.isMdxMode ? this.getSampleMDX() : JSON.stringify(Utility.deepCopy(baseQuery), "\t", 4));
				//this._coder.getDoc().setValue(content);
				return this;
			},
			currentValue: null,
			yLoc: 0,
			datasourceActive: null,
			// /**
			//  * 编辑器滚动事件
			//  * @param       {[type]}                 e [description]
			//  * @return      {[type]}                 [description]
			//  * @usage:
			//  * @author: 美神猎手
			//  * @email:      meishenlieshou@gmail.com
			//  * @copyrights: 上海数为信息技术有限公司
			//  * @time:       2020-08-07T09:40:01+080
			//  */
			// editorScrollEvent: function (e) {
			// 	this.yLoc = Number($(".CodeMirror-scroll").scrollTop());
			// 	return this;
			// },
			/**
			 * 编辑器内容变更事件
			 * @param       {[type]}                 e [description]
			 * @return      {[type]}                 [description]
			 * @usage:
			 * @author: 美神猎手
			 * @email:      meishenlieshou@gmail.com
			 * @copyrights: 上海数为信息技术有限公司
			 * @time:       2020-08-07T09:40:28+080
			 */
			editorContentUpdate: function (e) {
				try {
					this.currentValue = this._coder.getDoc().getValue();
				} catch (e) { }
				return this;
			},
			/**
			 * 查看元数据
			 * @param       {[type]}                 e [description]
			 * @return      {[type]}                 [description]
			 * @usage:
			 * @author: 美神猎手
			 * @email:      meishenlieshou@gmail.com
			 * @copyrights: 上海数为信息技术有限公司
			 * @time:       2020-08-07T10:13:01+080
			 */
			viewMetadataEvent: function (e) {
				Events.trigger("FUNCTION_EDITOR", {
					controls: {
						include: ["Alert"]
					},
					data: {
						vim: false,
						sizey: "500",
						callback: function () { },
						title: "当前数据源的指标和维度元数据",
						content: JSON.stringify(this.metadata, "\t", 4),
						shown: function (dialog) { }
					}
				});
				return this;
			},
			keyHandledEvent: function (instance, name, event) {
				if (window.event) {
					event.cancelBubble = true;
				} else {
					event.stopPropagation();
				}
				return this;
			},
			commitQuery: function () {
				var _baseQuery = Utility.deepCopy(baseQuery);
				var container = $(".ctable>div");
				var value = this._coder.getDoc().getValue();
				var component = new Saiku();
				var query = new Component();
				var myself = this;
				var page = new Dashboard();
				var element = $(".CodeMirror-scroll");
				var swap;
				query.parent = page;
				this.loader = new Loader({
					layout: "absolute",
					block: false
				});
				query.execute = component.execute.bind(query);
				query.set('skipQueryPropertiesCheck', true); //接口测试模式，不要检查
				if (!myself.isMdxMode) {
					if (Utility.isJSON(value)) { } else {
						try {
							swap = Utility.render(value);
						} catch (e) {
							console.log(">>这不是加密数据");
							swap = value;
						}
					}
					value = swap || value;
					try {
						value = JSON.parse(value);
					} catch (e) {
						console.log(">>请求对象解析失败");
					}
					try {
						var top = element.scrollTop();
						//console.log(value);
						var target = null;
						Array.isArray(value.queryModel.calculatedMeasures) && value.queryModel.calculatedMeasures.every(function (item) {
							if (item && item.name.match(/^__.*/g)) {
								target = item;
								return false;
							}
							return true;
						});
						if (target) {
							var content = new Calculated({
								model: new Calculated.Model({
									measuresArray: [],
									create: false,
									formula: cache ? cache.formula : "",
									name: cache ? cache.name : target.name
								})
							});
							//console.log(target);
							Events.trigger("BOOTSTRAP_DIALOG", {
								controls: {
									include: ["Alert"]
								},
								data: {
									content: content.el,
									type: 1,
									size: "l",
									helplink: false,
									metadata: true,
									title: Utility.locale("panel", "data panel", "create calculated measure"),
									autoclose: false,
									onshown: function () {
										content.render();
									},
									confirm: function (ok, dialog) {
										var attrs = content.getValue();
										var f;
										if (!ok) {
											dialog.close();
											return;
										} else {
											cache = Utility.deepCopy(attrs);
											attrs.formula = attrs.formula.replace(/\r|\n|\t/g, "");
											target.name = attrs.name;
											target.formula = attrs.formula;
											target.uniqueName = attrs.uniqueName;
											target.hierarchyName = "[Measures]";
											target.properties = {};
											dialog.close();
											//value.properties["datafor.query.formatter.debug"] = true;
											query.set({
												query: value
											}, {
												silent: true
											});
											query.execute();
										}
									}
								}
							});
						} else {
							myself._coder.getDoc().setValue(JSON.stringify(value, "\t", 4));
							element.scrollTop(top);
							//value.properties["datafor.query.formatter.debug"] = true;
							query.set({
								query: value
							}, {
								silent: true
							});
							query.execute();
						}
					} catch (e) {
						Events.trigger("TipNotify", {
							controls: {
								include: ["tip"]
							},
							data: {
								text: "配置格式有误",
								duration: 2,
								type: "error"
							}
						});
						this.loader && this.loader.remove();
					}
				}
				//$(this).blur();
				Events.COMPONENT_QUERY_SUCCESS(query.id, 0, function (data) {
					var datalist = new Array();
					var raw = data.data;
					var colModel = [];
					var dataArray = new Array(["No data"]);
					var options;
					var executeTime = $(".datasource").find(".runtime");
					var time;
					if (!data || !data.json || data.json.isEmpty) {
						new UINotification({
							message: '无数据',
							description: '当前配置没有数据',
							type: 'warning',
							duration: 2000
						});
						myself.loader && myself.loader.remove();
						return;
					}
					if (data && data.err) {
						new UINotification({
							message: '查询异常',
							description: data.err.statusText || '',
							type: 'error',
							duration: 2000
						});
						myself.loader && myself.loader.remove();
						return;
					}
					if (data && data.raw && Array.isArray(data.raw.cellset) && data.raw.cellset.length) {
						dataArray.splice(0);
						data.raw.cellset.every(function (item) {
							var list = new Array();
							item.every(function (o) {
								list.push(o ? o.value : "");
								return true;
							});
							dataArray.push(list);
							return true;
						});
					}
					console.log(data);
					console.log(dataArray);
					options = {
						showHeader: false,
						showToolbar: false,
						showTop: false,
						height: "100%",
						stripeRows: true,
						title: null,
						numberCell: {
							resizable: true,
							title: "#"
						},
						columnTemplate: {
							width: 160
						},
						selectionModel: {
							type: "",
							native: true
						},
						bootstrap: {
							on: true,
							thead: "table table-striped table-condensed table-bordered",
							tbody: "table table-striped table-condensed table-bordered",
							grid: "panel panel-default"
						},
						hwrap: true,
						wrap: true,
						scrollModel: {
							autoFit: false
						},
						dragColumns: {
							enabled: false
						},
						collapsible: {
							on: false,
							toggle: false
						},
						stripeRows: true,
						editable: false,
						sortModel: {
							on: false
						},
						showBottom: false,
						refresh: function () {
							var view = container.find(".pq-body-outer .pq-cont-right");
							var scroll = view.getNiceScroll();
							if (scroll && scroll.length) {
								_.delay(function () {
									scroll.resize();
								}, 100);
							} else {
								view.niceScroll({
									...runtime.getBaseScrollbarProps(),
								});
							}
						},
						resizable: true,
						dataModel: {
							data: dataArray
						},
						freezeRows: (function (list) {
							return list.filter(function (arr) {
								return _.find(arr, function (tt) {
									return tt.type === 'COLUMN_HEADER';
								});
							}).length;
						})(Array.isArray(data.raw.cellset) && data.raw.cellset.length ? data.raw.cellset : null),
						freezeCols: (function (item) {
							return Array.isArray(item) ? item.filter(function (tt) {
								return tt && tt.properties && tt.properties.dimension
							}).length : 0;
						})(Array.isArray(data.raw.cellset) && data.raw.cellset.length ? data.raw.cellset[data.raw.cellset.length - 1] : null)
					};
					try {
						container.pqGrid("destroy");
					} catch (e) { }
					$(".data-content").show().find(".canvas-content").animate({
						height: 500
					}, 200, function () {
						try {
							console.log(options);
							container.pqGrid(options);
						} catch (e) { }
						try {
							if (data.err && data.err.statusText) {
								$(".data-content").find(".mdx-content").addClass("error").val(data.err.statusText);
							} else {
								$(".data-content").find(".mdx-content").removeClass("error").val(data.raw && data.raw.query && data.raw.query.mdx ? data.raw.query.mdx : "");
							}
						} catch (e) { }
						Events.off_COMPONENT_QUERY_SUCCESS(query.id);
					});
					try {
						time = (data.raw.runtime / 1000).toFixed(3);
					} catch (e) {
						time = "--";
					}
					if (isNaN(time) || (data.err && data.err.statusText)) {
						executeTime.attr("class", "runtime").html("--");
					} else {
						if (data.raw.runtime < 2500) {
							executeTime.attr("class", "runtime").html(time + "s");
						} else if (data.raw.runtime < 5000) {
							executeTime.attr("class", "runtime warn").html(time + "s");
						} else {
							executeTime.attr("class", "runtime danger").html(time + "s");
						}
					}
					myself.loader && myself.loader.remove();
				});
				if (myself.isMdxMode) {
					_baseQuery.type = "MDX";
					_baseQuery.mdx = value;
					_baseQuery.properties["datafor.olap.result.formatter"] = this.fmode || "flattened";
					query.set({
						query: _baseQuery
					}, {
						silent: true
					});
					query.execute();
				} else { }
				return this;
			},
			fmode: "flattened",
			/**
			 * 初始化
			 * @return      {[type]}                 [description]
			 * @usage:
			 * @author: 美神猎手
			 * @email:      meishenlieshou@gmail.com
			 * @copyrights: 上海数为信息技术有限公司
			 * @time:       2020-08-06T20:06:21+080
			 */
			init: function () {
				var sizey = $(".CodeMirror-vscrollbar>div").height();
				var myself = this;
				var container = $(".ctable>div");
				var vim = localStorage.getItem("visualizer.api.test.vim") || "vim";
				var mode = localStorage.getItem("visualizer.api.test.queryMode") || "queryModel";
				var configs;
				var checkbox;
				//var editorScrollEvent = this.editorScrollEvent.bind(this);
				var editorContentUpdate = this.editorContentUpdate.bind(this);
				var viewMetadataEvent = this.viewMetadataEvent.bind(this);
				var keyHandledEvent = this.keyHandledEvent.bind(this);
				var commitQuery = this.commitQuery.bind(this);
				this.fmode = this.fmode || "flattened";
				this.datasourceActive = localStorage.getItem("visualizer.api.test.datasource") || "";
				this.vim = Boolean(vim === "vim");
				this.isMdxMode = Boolean(mode === "mdx");
				configs = {
					//theme: "datafor",
					tabSize: 8,
					styleSelectedText: true,
					mode: this.isMdxMode ? "mdx" : "json",
					indentWithTabs: true,
					cursorHeight: 1,
					lineNumbers: true,
					indentUnit: 8
				};
				if (this.isMdxMode) {
					$("button.apply").html("提交（MDX）");
				} else {
					$("button.apply").html("提交（QUERYMODEL）");
				}
				try {
					$(".datasource").find(".js-switch").off("change");
					this.switchery && this.switchery.destroy();
					$(".switchery ").remove();
					$(".data-content").off("mouseup");
					$(".data-content").off("mousedown");
					this.activeMode && this.activeMode.remove();
					this.selector && this.selector.remove();
					this.formatter && this.formatter.remove();
					if (this._coder) {
						//this._coder.off("scroll", editorScrollEvent);
						this._coder.off("change", editorContentUpdate);
						this._coder.off("keyHandled", keyHandledEvent);
						this._coder.getWrapperElement().parentNode.removeChild(this._coder.getWrapperElement());
						this._coder.toTextArea();
					}
					$(".viewmsg").off("click", viewMetadataEvent);
					//query && Events.off_COMPONENT_QUERY_SUCCESS(query.id);
					//container.pqGrid("destroy");
				} catch (e) {
					console.log(e.stack);
				}
				checkbox = $(".datasource").find(".js-switch");
				if (this.vim) {
					checkbox.attr("checked", "checked");
				} else {
					checkbox.removeAttr("checked");
				}
				checkbox.on("change", function (e) {
					var element = $(e.target);
					var checked = !!element[0].checked;
					localStorage.setItem("visualizer.api.test.vim", checked ? "vim" : "normal");
					myself.init();
				});
				this.switchery = new Switchery(checkbox[0], {
					size: "small",
					speed: "0"
				});
				if (this.vim) {
					configs.keyMap = "vim";
				}
				backQuery = Utility.deepCopy(baseQuery);
				ReactDOM.render(React.createElement(CodeMirror, {
					mode: 'javascript', // 'javascript' | 'css' | 'sql' | 'xml'
					theme: 'xq-light',
					lineNumbers: false,
					tabSize: 2,
					scrollbarStyle: 'overlay',
					indentAuto: true,
					indentWithTabs: true,
					indentUnit: 2,
					lineWrapping: false,
					placeholder: formatMessage({ id: 'action.please_input' }),
				}), document.querySelector(".text-content"));
				//this._coder = CodeMirror.fromTextArea(document.querySelector(".text-content"), configs);
				$(".viewmsg").on("click", viewMetadataEvent);
				this.activeMode = new Selector({
					model: new Selector.Model({
						multiple: false,
						singleRequireSelected: true,
						placeholder: "查询模式选择",
						datasets: [{
							id: "queryModel",
							text: "QueryModel查询模式",
							disable: false,
							icon: ""
						}, {
							id: "mdx",
							text: "MDX查询模式",
							disable: false,
							icon: ""
						}],
						search: false,
						sizex: 180,
						selected: [mode],
						height: 34,
						updated: function (value) {
							var val = Array.isArray(value) ? value[0] : value;
							localStorage.setItem("visualizer.api.test.queryMode", val);
							myself.currentValue = "";
							myself.yLoc = 0;
							myself.init();
						}
					})
				});
				this.selector = new Selector({
					model: new Selector.Model({
						multiple: false,
						singleRequireSelected: true,
						placeholder: "请选择数据源",
						datasets: Array.isArray(datasourceArray) && datasourceArray.length ? Utility.deepCopy(datasourceArray) : [],
						height: 34,
						selected: Array.isArray(datasourceArray) && datasourceArray.length ? [this.datasourceActive || datasourceArray[0].id] : [],
						sizex: 180,
						width: 340,
						updated: this.datasourceUpdate.bind(this)
					})
				});
				var cache = null;
				// this._coder.on("keyHandled", keyHandledEvent);
				// this._coder.on("change", editorContentUpdate);
				// this._coder.on("scroll", editorScrollEvent);
				$(".text-content").attr("placeholder", placeholders[mode]);
				$(".datasource>.list").append(this.selector.$el);
				$(".datasource>.query-mode").append(this.activeMode.$el);
				if (this.isMdxMode) {
					this.formatter = new Selector({
						model: new Selector.Model({
							multiple: false,
							search: false,
							selected: [this.fmode],
							singleRequireSelected: true,
							placeholder: "格式类型",
							datasets: [{
								id: "mix",
								text: "mix"
							}, {
								id: "flattened",
								text: "flattened"
							}, {
								id: "flat",
								text: "flat"
							}],
							sizex: 180,
							height: 34,
							updated: function (value) {
								value = Array.isArray(value) ? value[0] : value;
								myself.fmode = value;
							}
						})
					});
					$(".formatter-label").show();
					$(".datasource>.formatter").show().append(this.formatter.$el);
				} else {
					$(".formatter-label").hide();
					$(".datasource>.formatter").hide();
				}
				if (datasourceArray.length) {
					this.datasourceUpdate([
						this.datasourceActive || datasourceArray[0].id
					]);
				} else {
					this.loader = new Loader({
						container: this.selector.$el,
						layout: "absolute"
					});
					this.getDatasourcesList();
				}
				$(".btn.apply").off("click").on("click", commitQuery);
				var down;
				var up;
				$(".data-content").on("mousedown", function (event) {
					down = event.target;
				});
				$(".data-content").on("mouseup", function (event) {
					var mdxBox = $(".data-content").find(".mdx-content");
					var target = $(event.target);
					var grid;
					var selection;
					up = event.target;
					if (target.closest(".ctable").length || target.hasClass("mdx-content") || down !== up) {
						event.stopPropagation();
						mdxBox.focus();
						return this;
					}
					$(".datasource").find(".runtime").attr("class", "runtime").html("--");
					try {
						container.pqGrid("destroy");
					} catch (e) { }
					$(".data-content").find(".canvas-content").animate({
						height: 0
					}, 200, function () {
						target.closest(".data-content").hide();
					});
				});
				$(".CodeMirror-scroll").scrollTop(this.yLoc || 0);
			}
		};
		UI.init();
	})({
		cube: {
			uniqueName: "[SteelWheels].[SteelWheels].[SteelWheels].[SteelWheelsSales]",
			name: "SteelWheelsSales",
			connection: "SteelWheels",
			catalog: "SteelWheels",
			schema: "SteelWheels",
			caption: "SteelWheelsSales",
			visible: true
		},
		queryModel: {
			axes: {
				FILTER: {
					mdx: null,
					filters: [],
					sortOrder: null,
					sortEvaluationLiteral: null,
					hierarchizeMode: null,
					location: "FILTER",
					hierarchies: [],
					nonEmpty: false
				},
				COLUMNS: {
					mdx: null,
					filters: [],
					sortOrder: null,
					sortEvaluationLiteral: null,
					hierarchizeMode: null,
					location: "COLUMNS",
					hierarchies: [],
					nonEmpty: true
				},
				ROWS: {
					mdx: null,
					filters: [],
					sortOrder: null,
					sortEvaluationLiteral: null,
					hierarchizeMode: null,
					location: "ROWS",
					hierarchies: [{
						name: "[Time]",
						levels: {
							Years: {
								name: "Years",
								caption: "Years",
								mdx: null,
								selection: {
									type: "INCLUSION",
									members: [],
									parameterName: null
								},
								aggregators: [],
								filters: []
							}
						},
						cmembers: {},
						filters: []
					}],
					nonEmpty: true
				}
			},
			visualTotals: false,
			visualTotalsPattern: null,
			lowestLevelsOnly: false,
			details: {
				axis: "COLUMNS",
				location: "BOTTOM",
				measures: []
			},
			calculatedMeasures: [],
			calculatedMembers: []
		},
		queryType: "OLAP",
		properties: {
			"datafor.olap.query.automatic_execution": true,
			"datafor.olap.query.nonempty": true,
			"datafor.olap.query.nonempty.rows": true,
			"datafor.olap.query.nonempty.columns": true,
			"datafor.ui.render.mode": "chart",
			"datafor.ui.render.type": "table",
			"datafor.olap.query.filter": true,
			"datafor.olap.result.formatter": "flattened",
			"org.datafor.query.explain": true,
			"org.datafor.connection.scenario": false,
			"datafor.olap.query.drillthrough": true,
			"datafor.query.location": null,
			//"datafor.query.formatter.debug": true
		},
		parameters: {},
		plugins: {},
		mdx: null,
		name: "54655AFB-34A1-0B8E-80F0-284D4A45591B",
		metadata: {},
		type: "QUERYMODEL"
	}, "WITH SET [~ROWS] AS {[Time].[Years].Members} SELECT NON EMPTY {[Measures].[Quantity]} ON COLUMNS, NON EMPTY [~ROWS] ON ROWS FROM [SteelWheelsSales]");
})();