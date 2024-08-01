"use strict";function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _defineProperty(e,t,n){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}define("PropertyCardchart",["Utility","Kit","ui/extendIconUI","BaseQueryComponent","template/compile","model/Component","log/Log","utility/colors","sizes","Event","echartbase/Echart_cda","underscore","utility/runtime","Base.Panel","numeral","promise","echartbase/EchartsBase.Panel","render/Base","render/Renderer","nicescroll"],(function(e,t,n,i,o,l,r,a,s,c,u,d,p,m,h,y,f,v){var b=new m,g={label:"Untitle",cardtext:"",cardMessage:{},textStyle:{color:"#888",fontSize:24,fontFamily:""},wrap:!0,title:{show:!0,textStyle:{},text:"Untitle"}},x="PropertyCardchart",w=i.getLocaleFn(["components","extends",x]),S=i.extend({type:x,name:w("name"),classify:"_data",description:w("name tip"),_queryLevelChanged:function(){var e=this.model.getAxesLevels("ROWS"),t=new Array,n="";return Array.isArray(e)&&e.every((function(e){return this.push(e.label)||!0}),t),t.length&&(n+=t.join(",")),this.model.locking=!0,this.model.checkTitleUpdatedByUser()||this.model.customizationUpdate("style.title",n),this.model.defaultValueUpdated(null),this.model.locking=!1,this.panelMerge(!0),this.model.isValidQueryModel()||this.render(),d.isFunction(this.axisUpdate)&&this.axisUpdate(),this},queryExtend:function(){var t=this.model.isValidQueryModel.bind(this.model),n=this,i=this.remove.bind(this);return this.remove=function(){this.$el.off("click"),i()},this.model.isValidQueryModel=function(){return t(!1,!0)&&n.axisLevelsRequired("ROWS")&&n.axisLevelsRequired("Measures",-1)},this.options=e.deepCopy(g),this.model.backup=e.deepCopy(this.model.toJSON()),this.$el.closest(".c-node").find(".panel-body").css({overflow:"inherit"}),this.$el.addClass("flex"),this.$el.on("click",(function(e){var t,i,o=n.getCustomizeFunction("action","_plotclick"),l={};n.readonly&&(l.message={},l.message.measures=[],l.message.levels=n.levels,d.isFunction(o)&&(t=n.levels[0].caption,i=o.call(n,_objectSpread({},l),e,null,t,null,{})),!1!==i&&n.isJumpMode()&&d.isFunction(n.onExecuteJumpEvent)&&n.onExecuteJumpEvent(l,e,i))})),this},beforeQuery:function(t){var n=this.getCustomizeFunction("action","_preFetch"),i=new l({chartType:this.model.get("chartType"),query:e.deepCopy(t)}),o=(t.cube,i.getMeasures());return t&&t.queryModel&&t.queryModel.axes&&t.queryModel.axes.COLUMNS&&i.setAxisNonEmpty("COLUMNS",!1),0==o.length&&i.includeMeasure({name:"Fact Count",type:"EXACT",caption:"Fact Count",uniqueName:"[Measures].[Fact Count]",id:"[Measures].[Fact Count]"}),o=i.getMeasures()[0],i.setPropertyFilters(null,"ROWS",{flavour:"N",function:"TopCount",operator:null,expressions:["1",o.id]}),t=i.get("query"),d.isFunction(n)?n.call(this,t):t},options:null,checkQm:function(e,t,n){return this.model.hslice("COLUMNS",0),this.model.hslice("ROWS",1),this.model.mslice(0),null},onExecuteJumpEvent:function(e,n,i){var o,l=this,r=null===(o=this.model.getAxesLevels("ROWS"))||void 0===o||null===(o=o[0])||void 0===o?void 0:o.id;return r?(function(o){var r=l.model.getSavedJumpOptions(o,!0),a=null==r?void 0:r.find((function(e){return e.uniqueName==o}));if(!a)return l;var s=a.options;t.openLinkedPage({savedJumpOptions:_objectSpread({},s),component:l,params:_objectSpread({},e),event:n},i)}(r),this):this},dataFormatter:function(t,n,i,o){this.model.getCustomizations();var l=this;return o&&Array.isArray(o.children)&&0!=o.children.length?(u.travelDeeply(o,null,(function(t,n,i){l.levels=e.deepCopy(i)})),this.options.cardtext=o.children[0].caption,this.options.cardMessage={caption:o.children[0].caption,level:o.children[0].level,hierarchy:o.children[0].hierarchy,id:o.children[0].uniqueName,header:o.children[0].headerName},this):(this.dataEmpty(),this)},dataEmpty:function(){return this.blocking||(this.options.cardtext="",this.options.cardMessage={},(new i).dataEmpty.call(this)),this},clearContent:function(){return this.$el.children().remove(),this},draw:function(){var e,t=null==this.options.cardtext?"N/A":this.options.cardtext,n=this.$el,i=this.getPanelControlValue("style","mainFont")||[18,a.chartDefaultColor(),"",!1,!1];Number(i[0]),i[2],i[3],i[4];if(this.$el.css("overflow","visible"),d.isEmpty(this.options.cardMessage))return this.dataEmpty(),this;try{n.css("padding","0px 0.35em 0.35em").children().remove()}catch(e){console.log(e.message)}return e=this.options.wrap?"width:100%;white-space:wrap;overflow:visible;":"width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;",n.append(o.plainCompile([{class:"indicator-main",html:t,style:e}])),n.find(".indicator-main").css(this.options.textStyle),this},colorsUpdated:function(e){return this}},{thumbnail:"icon iconfont icon-datafor-str",menus:function(){return{outer:[],inner:[{value:"Export",children:[{value:"Excel"},{value:"Csv"},{value:"Image"}]},{value:"Preview"}]}},privates:{disableDrilldown:!0,entranceConstraintsForLinkConfs:["row_dim"]},_sort_order:3.2,symbol:"indicate.svg",logo:n.getDimComponentIcon(),staticPanelOptions:d.extend([],[{name:"data",label:e.locale("panel","data"),active:!0,datasets:[b.datasource(null,["row_dim","date_dim","filter"]),b.line(),b.dimensionPrimary(w("field"),"single",null,null,null,[]),b.line(),b.dimensionDate(),b.line(),b.filters()]},{name:"style",label:e.locale("panel","styles"),active:!1,datasets:[b.label(e.locale("panel","title style")),b.titleSwitch(e.locale("panel","shown")),b.titleParimary(e.locale("panel","content")),b.titlePrimaryAlign(),b.titlePrimaryStyle(),b.titleBackground("transparent"),b.line(),b.label(e.locale("panel","frame style")),b.background(e.locale("panel","background color")),b.border(e.locale("panel","border")),b.styleRadius(),b.shadow(),b.line(),b.label(e.locale("components","system default","indicator","main value style")),d.extend(v.getRendererBaseAttrs("Font"),{name:"mainFont",label:e.locale("components","system default","indicator","main value font"),value:[28,a.chartDefaultColor(),"",!1,!1],sizes:[12,14,16,18,20,22,24,26,28,32,36,42,48,60,72,84,96,128],bold:!0,italic:!0,tooltip:e.locale("components","system default","indicator","main value font description"),execute:function(e,t,n){t.textStyle=d.extend(t.textStyle||{},{color:e[1],fontSize:Number(e[0]),fontFamily:e[2],fontWeight:e[3]?"bold":"normal",fontStyle:e[4]?"italic":"normal"})}}),d.extend(v.getRendererBaseAttrs("QuickPicker"),{name:"_mainAlign",value:"left",tooltip:e.locale("components","system default","indicator","value align description"),label:e.locale("components","system default","indicator","value align"),execute:function(e,t,n){t.textStyle.textAlign=e}}),d.extend(v.getRendererBaseAttrs("RadioBox"),{name:"_content_wrap",value:!0,label:w("content wrap"),tooltip:w("content wrap description"),execute:function(e,t,n){t.wrap=!!e}}),b.line(),b.label(e.locale("panel","style panel","component menu settings","name")),b.menuEnable(),b.setOuterMenuColor(),b.enlargeBackground()]},{name:"action",label:e.locale("panel","actions"),datasets:[b.label(e.locale("panel","action panel","refresh")),b.refresh(),b.period(),b.line(),b.label(e.locale("panel","action panel","custom blocks")),f.clickPlotEvent(),b.preExecution(),b.preFetch(),b.postExecution()]}])});return i.register(S),S}));
//# sourceMappingURL=PropertyCardchart.js.map