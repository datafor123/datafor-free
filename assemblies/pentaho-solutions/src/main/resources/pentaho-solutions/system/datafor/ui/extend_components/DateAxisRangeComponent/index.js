"use strict";define("DateAxisRangeComponent",["Utility","utility/params","ui/extendIconUI","underscore","utility/CubeCollection","template/compile","DateAxisPickerComponent","model/Component","log/Log","utility/colors","utility/runtime","validator","Base.Panel","render/Base","moment","utility/relExpression","lib/backbone.daterange","render/Renderer"],(function(e,t,a,n,l,r,s,i,o,d,c,u,p,f,m,y){var h=new p,v=s.extend({type:"DateAxisRangePickerUI",name:e.locale("components","system default","datepicker","timeline range component"),description:e.locale("components","system default","datepicker","timeline range component description"),tryUpdatePicker:function(t){return(t=t||this.options).presets=y.getElements(e.getDatePresetArray(t.picker,!0)),Array.isArray(t.value)&&t.value.length>1&&(t.value=[t.value[0],t.value[1]]),!Array.isArray(this.options.value)||this.options.value.length<2||(new s).tryUpdatePicker.call(this,t),this},onPickUpdatedEvent:function(e){var t,a;if(Array.isArray(e)&&0!==e.length)return t=e[0],a=e.length<2?e[0]:e[1],this.model.defaultValueUpdated({start:t.valueOf(),end:a.valueOf()}),this.options.value=[t,a],this},overideValueUpdateMethod:function(e,t){var a=this.getDateType(),n=m(e.end);return"years"===a?n=n.endOf("year"):"quarters"===a?n=n.endOf("quarter"):"months"===a?n=n.endOf("month"):"days"===a&&(n=n.endOf("day")),e.end=n.valueOf(),t(e)},staticExtend:function(){(new s).staticExtend.call(this),this.options.rangeMode=!0,this.tryUpdatePicker();var e=this,t=this.model.defaultValueUpdated.bind(this.model);return this.model.defaultValueUpdated=function(a){return e.overideValueUpdateMethod(a,t)},this},displayFormatters:{}},{thumbnail:"icon iconfont icon-datafor-date",logo:a.getDateRangepickIcon(),_sort_order:6.5,staticPanelOptions:[{name:"data",label:e.locale("panel","data"),active:!0,datasets:[h.label(e.locale("components","system default","datepicker","calendar type"),null,!0),s.inheritPanelControl("data","_dateType"),s.inheritPanelControl("data","_displayFormat"),h.line(),h.label(e.locale("panel","action panel","default value"),null,!0),n.extend(f.getRendererBaseAttrs("DaterValue"),{name:"_defaults",tooltip:e.locale("components","system default","datepicker","description of date default"),label:e.locale("components","system default","datepicker","date default"),width:200,range:!0,chainLinker:function(e,t,a){this.model.getCustomizations();var n,l=a.model.get("value"),r=e.value;"years"==(r=this.getDateType())?(n=l.start||(new Date).getTime(),l.start=m(n).startOf("year").valueOf(),l.end=l.start):"quarters"==r?(n=l.start||(new Date).getTime(),l.start=m(n).startOf("quarter").valueOf(),l.end=l.start):"months"==r?(n=l.start||(new Date).getTime(),l.start=m(n).startOf("month").valueOf(),l.end=l.start):"weeks"===r?(n=l.start||(new Date).getTime(),l.start=m(n).startOf("week").valueOf(),l.end=l.start):"days"==r&&(n=l.start||(new Date).getTime(),l.start=m(n).startOf("day").valueOf(),l.end=l.start),l.dateType=r,this.model.clearDateListener(),a.model.set({value:l},{silent:!0}),a.render().show()},execute:function(e,t,a){var l=y.getElement(e.expression);(e.start||e.end)&&(l&&n.isFunction(l.expression)&&"relative"==e.type&&(l=l.expression(),e.start=l.start,e.end=l.end),e.start=e.start||e.end,e.end=e.end||e.start,this.model.defaultValueUpdated({start:e.start,end:e.end},!0),t.value=[m(e.start),m(e.end)],this.tryUpdatePicker(t))},init:function(e){var t=e.getCustomizations()["data._defaults"],a=this.getDateType();return t||(t={type:"relative",expression:"Last 7 Days"},"months"==a?t.expression="This Month":"years"==a&&(t.expression="This Year")),{dateType:a,type:t.type,expression:t.expression,start:t.start,end:t.end}}})]},{name:"style",label:e.locale("panel","styles"),active:!1,datasets:[h.label(e.locale("panel","frame style")),h.background(e.locale("panel","background color"),"#ffffff"),h.border(e.locale("panel","border"),[1,"rgb(217, 217, 217)","solid"]),h.styleRadius(2),h.shadow(null,".c-ui"),h.line(),h.label(e.locale("panel","content")),n.extend(f.getRendererBaseAttrs("Font"),{name:"_content_font",label:e.locale("panel","style panel","universal","font"),tooltip:e.locale("panel","universal","font description"),value:[14,d.chartDefaultColor(),"",!1,!1],bold:!0,italic:!0,execute:function(e,t,a){t.style=n.extend({},t.style||{},{fontSize:Number(e[0]),color:e[1],fontFamily:e[2],fontWeight:e[3]?"bold":"normal",fontStyle:e[4]?"italic":"normal"}),this.tryUpdatePicker()}})]},{name:"action",label:e.locale("panel","actions"),datasets:[h.label(e.locale("panel","action panel","subscribers")),s.inheritPanelControl("action","_subscribers")]}]});return s.register(v),v}));
//# sourceMappingURL=DateAxisRangeComponent.js.map