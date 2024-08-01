"use strict";function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,o=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _defineProperty(e,t,n){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}define("AssistantLine",["BaseComponentClass","Base.Panel","underscore","echartbase/echarts","ui/extendIconUI","Kit","Utility","utility/runtime"],(function(e,t,n,o,r,i,c,a){var l=new t,u=(c.getReactExport("React"),{animation:!1,grid:{left:0,right:0,top:0,bottom:0},xAxis:{show:!1,type:"value",min:-1,max:1},yAxis:{show:!1,type:"value",min:-1,max:1},series:[{data:[[-1,0],[1,0]],type:"line",triggerLineEvent:!0,symbol:"none",lineStyle:{}}]});var s=function(e){_inherits(r,e);var t=_createSuper(r);function r(e){var i;return _classCallCheck(this,r),(i=t.call(this,e)).tryUpdateCaptionUI(null,{display:"none"}),i.echart=o.init(i.el,"shine",{renderer:"svg"}),i.echart.on("click",(function(e){var t=i.model.getCustomizeFunction("action","_cell_click");n.isFunction(t)&&t.call(_assertThisInitialized(i),e)})),i.tryUpdateStatus(["timestamp"],Date.now()),i}return _createClass(r,[{key:"onComponentResize",value:function(){var e;null===(e=this.echart)||void 0===e||e.resize(),this.onComponentRendered()}},{key:"render",value:function(){return null}},{key:"onComponentRendered",value:function(){var e,t,n,o,r=this.options,i=r.lineWidth,c=r.lineColor,a=void 0===c?"#888":c,l=r.lineStyle,s=void 0===l?"dash":l,f=r.rotate,p=void 0===f?0:f,y=parseFloat(this.componentContainer.width()),d=parseFloat(this.componentContainer.height()),b=(e=y/2,n=d,90==(t=p)?[[0,-n/2],[0,n/2]]:[[-e,-(o=Math.tan(t*Math.PI/180))*e],[e,o*e]]),h=_objectSpread(_objectSpread({},u),{},{xAxis:_objectSpread(_objectSpread({},u.xAxis),{},{min:-y/2,max:y/2}),yAxis:_objectSpread(_objectSpread({},u.yAxis),{},{min:-d/2,max:d/2}),series:[_objectSpread(_objectSpread({},u.series[0]),{},{data:b,lineStyle:{normal:{width:i,color:a,type:s,opcity:1}}})]});this.echart.setOption(h)}}]),r}(e);return _defineProperty(s,"type","AssistantLine"),s.defineComponentToolbar({outer:[],inner:[]}),s.defineSolidifiedPanels([],[l.label((function(){return this.toLocale("line options")}),!1,!0),{type:"Slider",name:"line.size",min:.5,max:10,formatter:function(e){return"".concat(e,"px")},step:.5,label:function(){return this.toLocale("line size")},tooltip:function(){return this.toLocale("line size desc")},value:1,queried:!1,execute:function(e,t,n){this.tryUpdateStatus(["lineWidth"],e)}},{type:"ColorPicker",name:"line.color",label:function(){return this.toLocale("line color")},tooltip:function(){return this.toLocale("line color desc")},value:"#888",queried:!1,execute:function(e,t,n){this.tryUpdateStatus(["lineColor"],e)}},{type:"SingleSelect",name:"line.style",label:function(){return this.toLocale("line type")},tooltip:function(){return this.toLocale("line type desc")},value:["solid"],queried:!1,search:!1,available:[{label:function(){return this.toLocale("line type solid")},value:"solid"},{label:function(){return this.toLocale("line type dashed")},value:"dashed"},{label:function(){return this.toLocale("line type dotted")},value:"dotted"}],execute:function(e,t,n){this.tryUpdateStatus(["lineStyle"],e[0])}},l.label((function(){return this.toLocale("rotate options")}),!1,!0),{type:"Slider",name:"rotate",label:function(){return this.toLocale("rotate angle")},tooltip:function(){return this.toLocale("rotate angle desc")},min:0,max:180,formatter:function(e){return"".concat(e,"°")},step:1,value:0,queried:!1,execute:function(e,t,n){this.tryUpdateStatus(["rotate"],e)}}],[l.label((function(){return this.toLocale("custom event")}),!1,!0),l.dataPointClick((function(){return this.toLocale("custom click")}),(function(){return this.toLocale("custom click desc")}),"","function (event) {\n\t//console.log('Click Event:',event);\n}")]),s.registerComponent({name:function(){return this.toLocale("name")},tooltip:function(){return this.toLocale("name tip")},desc:function(){return this.toLocale("name desc")},version:"1.0.0",classify:"_statics",icon:r.getLineIcon(),orderIndex:9,queryRequired:!1}),s}));
//# sourceMappingURL=AssistantLine.js.map