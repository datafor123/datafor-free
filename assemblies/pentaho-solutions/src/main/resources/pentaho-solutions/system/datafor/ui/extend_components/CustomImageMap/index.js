"use strict";function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=_superPropBase(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},_get.apply(this,arguments)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var r,n=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _classPrivateMethodInitSpec(e,t){_checkPrivateRedeclaration(e,t),t.add(e)}function _checkPrivateRedeclaration(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function _classPrivateMethodGet(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],u=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}function _arrayWithHoles(e){if(Array.isArray(e))return e}define("CustomImageMap",["BaseComponentClass","echartbase/echarts","Utility","Kit","utility/runtime","CustomImageMap/panel","CustomImageMap/getBaseOption","render/extroControls"],(function(e,t,r,n,o,i,a,l){var u={primary_x:"field.x",primary_y:"field.y",size:"field.size"},s=_slicedToArray(i(u),3),c=s[0],f=s[1],d=void 0===f?[]:f,p=s[2],y=void 0===p?[]:p,v=l.getSystemPathDictionary().reduce((function(e,t){return e[t.key]=t.offset,e}),{}),m=new WeakSet,h=function(e){_inherits(l,e);var i=_createSuper(l);function l(e){var t,r,n;return _classCallCheck(this,l),_classPrivateMethodInitSpec(_assertThisInitialized(n=i.call(this,e)),m),null===(t=n.componentContainer)||void 0===t||t.find(".drager-resizer").append("<span class='position-message-box'>"),null===(r=n.componentContainer)||void 0===r||r.find(".panel-body").prepend('<div class="map-background-image">'),n}return _createClass(l,[{key:"onSystemGetPreviewData",value:function(e){var t=e,r=(null==t?void 0:t.formatAsPivot)||{},n=r.dataSource,o=void 0===n?[]:n,i=r.columns;return{datasets:o,columns:void 0===i?[]:i}}},{key:"onComponenetDataFormat",value:function(e,t){var r=this,n=this.model.getSelectedFields(),i=n[u.primary_x],a=n[u.primary_y],l=n[u.size],s=n[o.get_CONST_ICON_FIELD_KEY()];return this.doTask(_objectSpread(_objectSpread({},e),{},{dataKeys:{xField:i,yField:a,size:l,icon:s}}),!0).then((function(e){var t=e.options,n=t.series,o=t.xAxis,i=t.yAxis;r.tryUpdateStatus(["series"],n),r.tryUpdateStatus(["xAxis"],o),r.tryUpdateStatus(["yAxis"],i)}))}},{key:"tryUpdateCaptionUI",value:function(){var e,t=this;return null!==(e=this.model)&&void 0!==e&&e.isValidQueryModel()?(setTimeout((function(){var e;return null===(e=t.echart)||void 0===e?void 0:e.resize()}),10),_get(_getPrototypeOf(l.prototype),"tryUpdateCaptionUI",this).apply(this,Array.from(arguments))):this}},{key:"onComponentResize",value:function(){var e;null===(e=this.echart)||void 0===e||e.resize()}},{key:"onComponentRendered",value:function(){var e,t=this.model.getCustomizations()["style.".concat(o.get_CONST_ICON_CONFIG_SAVED_KEY())],r=_objectSpread({},this.options),n=this.componentContainer.find(".map-background-image"),i=r.backgroundImageLayout,a=void 0===i?"full":i,l=r.backgroundImage,u=r.backgroundImageOpacity;if(n.css({backgroundImage:"url(".concat(l,")"),opacity:u,backgroundSize:"full"==a?"100% 100%":"contain"}),null!==(e=r.series)&&void 0!==e&&e.length){var s,c=r.series[0],f=(null==t?void 0:t.categories)||[];_classPrivateMethodGet(this,m,b).call(this,c),c.symbol=function(e,t){var r,n=f.find((function(e){var r;return e.key===(null==t||null===(r=t.data)||void 0===r?void 0:r.icon)})),o=null==n||null===(r=n.icon)||void 0===r?void 0:r.content;return o?"path://".concat(o):"circle"};var d=Math.min(r.minMarkerSize||20,r.maxMarkerSize||50),p=Math.max(r.minMarkerSize||20,r.maxMarkerSize||50);c.symbolSize=function(e,t){var r,n=(null===(r=t.data)||void 0===r?void 0:r.extrim)||{},o=n.min,i=n.max;return d+(e[2]-o||1)*((p-d)/(i-o||1))},c.symbolOffset=function(e,t){var r,n,o=null==t||null===(r=t.data)||void 0===r?void 0:r.icon,i=f.find((function(e){return e.key===o})),a=null==i||null===(n=i.icon)||void 0===n?void 0:n.content;return v[a]||[0,0]},c.label={normal:_objectSpread(_objectSpread({},(null===(s=c.label)||void 0===s?void 0:s.normal)||{}),{},{formatter:function(e){var t,r,n=(null==e||null===(t=e.data)||void 0===t?void 0:t.value)||["",""];return(null==e||null===(r=e.data)||void 0===r?void 0:r.formatted)||n.slice(0,2).join(" , ")}})}}this.echart&&this.echart.setOption(r,!0)}},{key:"onExecuteJumpEvent",value:function(e,t,i,a){var l,s=this,c=this.model.getSelectedFields()[u.size],f=null===(l=this.model.getSavedJumpOptions(c,!0,!0))||void 0===l||null===(l=l[0])||void 0===l?void 0:l.options,d=function(e,t){var r=null==t?void 0:t.find((function(t){var r;return(null===(r=t.toLink)||void 0===r?void 0:r.sort((function(e,t){return e-t})).join("..."))==e}));return r?Object.keys(r).filter((function(e){return"toLink"!=e})).reduce((function(e,t){var n,i,a;return e.push({value:null===(n=r[t])||void 0===n?void 0:n.value,levelCaption:null===(i=r[t])||void 0===i?void 0:i.caption,uniqueName:null===(a=r[t])||void 0===a?void 0:a.value,level:t,hierarchy:String(t).replace(/(^\[.*\])\.\[.*\]$/,"$1"),axis:o.get_CONST_DIM_MEASUER_TYPE()}),e}),[]):null};if(this.jumpable&&f){var p=JSON.parse(this.response)||{},y=p.color,v=void 0===y?[]:y,m=p.tooltips,h=void 0===m?[]:m,b=p.icon,g=void 0===b?[]:b,S=r.getSequenceKeys(e.levels||[]);return function(r,o,i,l){var u=_objectSpread({},e);u.levels=[].concat(_toConsumableArray(u.levels||[]),_toConsumableArray(o||[]),_toConsumableArray(i||[]),_toConsumableArray(l||[])),u.levels=_.uniq(u.levels,(function(e){return e.uniqueName})),n.openLinkedPage({savedJumpOptions:_objectSpread({},r),component:s,params:{message:u},event:t.event},a)}(f,d(S,h),d(S,v),d(S,g)),!1}return!0}},{key:"onComponentPlotAreaClickEvent",value:function(e){var t=e.data,r=t.event,n=t.data,i=o.isCtrlKeyPressed(null==r?void 0:r.event,this);return this.toUpdateDataJoinPoint({data:{levels:null==n?void 0:n.levels}},i,this.drillable).then((function(e){return e.filter((function(e){var t;return Array.isArray(null===(t=e.data)||void 0===t?void 0:t.levels)})).length>0?e:null}))}},{key:"render",value:function(){var e=this;if(!this.echart){this.echart=t.init(this.el,"shine",{renderer:"svg"}),this.echart.on("click","series",(function(t){return e.publish("CHARTPLOTAREACLICK",t)}));var r=this.componentContainer.find(".position-message-box");this.echart.getZr().on("mousemove",(function(t){var n=t.offsetX,o=t.offsetY;if(e.options.enablePositionControl){var i=_slicedToArray(e.echart.convertFromPixel({seriesName:"CUSTOM-IMAGE-MAP"},[n,o])||[],2),a=i[0],l=i[1];a&&l&&(null==r||r.show().html("X:".concat(Number(a).toFixed(0),", Y: ").concat(Number(l).toFixed(0))))}})),this.$el.on("mouseleave",(function(e){null==r||r.hide()}))}}}],[{key:"instanceStatusDef",value:function(){return a()}}]),l}(e);function b(e){var t=this.getOutputLinkPoints().map((function(e){return e.name})),n=t.length,o=__ENV.colors,i=o.length,a=!!this.options.showMarkerShadow;if(e.itemStyle=e.itemStyle||{},e.itemStyle.normal=e.itemStyle.normal||{},e.itemStyle.normal.shadowColor="#000",a?(e.itemStyle.normal.shadowBlur=8,e.itemStyle.normal.shadowOffsetX=2,e.itemStyle.normal.shadowOffsety=-2):(e.itemStyle.normal.shadowOffsetX=0,e.itemStyle.normal.shadowOffsety=0,e.itemStyle.normal.shadowBlur=0),n){var l,u=r.getUnhighlightOpacity();null===(l=e.data)||void 0===l||l.forEach((function(e){e.itemStyle.normal=_objectSpread(_objectSpread({},e.itemStyle.normal||{}),{},{opacity:t.indexOf(e.id)>=0?1:u})}))}else{var s;null===(s=e.data)||void 0===s||s.forEach((function(e){e.itemStyle.normal=_objectSpread(_objectSpread({},e.itemStyle.normal||{}),{},{opacity:1})}))}e.itemStyle.normal.color=function(e){var t,r=e.dataIndex;return(null===(t=e.data)||void 0===t?void 0:t.color)||o[r%i]}}_defineProperty(h,"type","CustomImageMap"),h.extendComponentModelProperties({entranceConstraintsForLinkConfs:[u.size]}),h.defineSolidifiedPanels(c,d,y),h.defineComponentToolbar({outer:[{value:"Enlarge"}],inner:[{value:"Export",children:[{value:"Excel"},{value:"Csv"},{value:"Image"}]},{value:"Preview"}]}),h.extendComponentModelMethods({getSelectedFields:function(e){var t=[u.primary_x,u.primary_y,u.size,o.get_CONST_TOOLTIP_FIELD_KEY(),o.get_CONST_ICON_FIELD_KEY()],r=this.getCustomizations()||{},n=t.reduce((function(e,t){return e[t]=r["data.".concat(t)]||[],e}),{});return e?_objectSpread({},n):t.reduce((function(e,t){var r,o=null===(r=n[t])||void 0===r?void 0:r.map((function(e){return e.uuid||e.id})),i=null==o?void 0:o.length;return e[t]=i?1==i?o[0]:o.join(":::"):null,e}),{})},isValidQueryModel:function(){var e=this.getSelectedFields(),t=e[u.primary_x],r=e[u.primary_y];return t&&r}}),h.registerComponent({name:function(){return this.toLocale("component name")},version:"1.0.0",tooltip:function(){return this.toLocale("component tip")},desc:function(){return this.toLocale("component desc")},classify:"_map",classifyLabel:r.locale("components","universal","custom component"),classPriority:null,icon:h.generateSvgICON('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="26" height="19" viewBox="0 0 26 19"><g><g><path d="M18.9,2.11111L2.1,2.11111L2.1,16.8889L11.8566,7.07856C12.2666,6.66648,12.9313,6.66648,13.3413,7.07856L18.8999,12L18.9,2.11111ZM0,1.04817C0.00399823,0.471364,0.467838,0.00460055,1.0416,0L19.9584,0C20.5338,0,21,0.469722,21,1.04817L21,17.9518C20.996,18.5286,20.5322,18.9954,19.9584,19L1.0416,19C0.46617,18.9994,-1.87755e-7,18.5303,0,17.9518L0,1.04817ZM6.3,8.44445C5.1398,8.44501,4.19897,7.49967,4.19897,6.33333C4.19897,5.167,5.1398,4.22165,6.3,4.22222C7.4598,4.22222,8.4,5.1674,8.4,6.33334C8.4,7.49927,7.4598,8.44445,6.3,8.44445Z" fill="#0070DF" fill-opacity="1"/></g><g><g><path d="M20,15Q26,10.5,26,5.625C26,2.51839,23.31372,0,20,0C16.68628,0,14,2.51839,14,5.625Q14,10.5,20,15Z" fill="#FFA800" fill-opacity="1"/></g><g><path d="M22,6Q22,6.09825,21.99037,6.19603Q21.98074,6.293810000000001,21.961570000000002,6.39018Q21.9424,6.486549999999999,21.91388,6.58057Q21.88536,6.67459,21.84776,6.76537Q21.81016,6.85614,21.763840000000002,6.9427900000000005Q21.71753,7.029450000000001,21.66294,7.11114Q21.60835,7.19284,21.54602,7.26879Q21.48369,7.34474,21.41421,7.414210000000001Q21.34474,7.48369,21.26879,7.54602Q21.19284,7.60835,21.11114,7.66294Q21.02945,7.71753,20.94279,7.76384Q20.85614,7.81016,20.76537,7.84776Q20.67459,7.88536,20.58057,7.91388Q20.48655,7.9424,20.39018,7.96157Q20.29381,7.98074,20.19603,7.99037Q20.09825,8,20,8Q19.90175,8,19.80397,7.99037Q19.70619,7.98074,19.60982,7.96157Q19.51345,7.9424,19.41943,7.91388Q19.32541,7.88536,19.23463,7.84776Q19.14386,7.81016,19.05721,7.76384Q18.970554,7.71753,18.888859,7.66294Q18.807164,7.60835,18.731213,7.54602Q18.655262,7.48369,18.585786,7.414210000000001Q18.516311,7.34474,18.453979,7.26879Q18.391648,7.19284,18.337061,7.11114Q18.282474,7.029450000000001,18.236157,6.9427900000000005Q18.189841,6.85614,18.152241,6.76537Q18.114641,6.67459,18.0861193,6.58057Q18.0575978,6.486549999999999,18.0384294,6.39018Q18.0192611,6.293810000000001,18.00963055,6.19603Q18,6.09825,18,6Q18,5.90175,18.00963055,5.80397Q18.0192611,5.70619,18.0384294,5.60982Q18.0575978,5.51345,18.0861193,5.41943Q18.114641,5.32541,18.152241,5.23463Q18.189841,5.14386,18.236157,5.0572099999999995Q18.282474,4.970554,18.337061,4.888859Q18.391648,4.807164,18.453979,4.731213Q18.516311,4.6552620000000005,18.585786,4.585786Q18.655262,4.516311,18.731213,4.453979Q18.807164,4.391648,18.888859,4.337061Q18.970554,4.282474,19.05721,4.236157Q19.14386,4.189841,19.23463,4.152241Q19.32541,4.114641,19.41943,4.0861193Q19.51345,4.0575978,19.60982,4.0384294Q19.70619,4.0192611,19.80397,4.00963055Q19.90175,4,20,4Q20.09825,4,20.19603,4.00963055Q20.29381,4.0192611,20.39018,4.0384294Q20.48655,4.0575978,20.58057,4.0861193Q20.67459,4.114641,20.76537,4.152241Q20.85614,4.189841,20.94279,4.236157Q21.02945,4.282474,21.11114,4.337061Q21.19284,4.391648,21.26879,4.453979Q21.34474,4.516311,21.41421,4.585786Q21.48369,4.6552620000000005,21.54602,4.731213Q21.60835,4.807164,21.66294,4.888859Q21.71753,4.970554,21.763840000000002,5.0572099999999995Q21.81016,5.14386,21.84776,5.23463Q21.88536,5.32541,21.91388,5.41943Q21.9424,5.51345,21.961570000000002,5.60982Q21.98074,5.70619,21.99037,5.80397Q22,5.90175,22,6Z" fill="#FFFFFF" fill-opacity="1"/></g></g></g></svg>'),orderIndex:30,task:!0,queryRequired:!0,editPointEventNone:!0})}));
//# sourceMappingURL=CustomImageMap.js.map