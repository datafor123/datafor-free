"use strict";define("CustomImageMap/getBaseOption",["template/compile"],(function(t){return function(){return{animationEasing:"elasticOut",animationDuration:800,animationDelayUpdate:function(t){return 5*t},title:{show:!1},graphic:{elements:[{type:"image",x:"0",y:"0",scaleX:1,scaleY:1,bounding:"all",rotation:0,style:{width:"100%",height:"100%"}}]},tooltip:{trigger:"item",transitionDuration:.4,hideDelay:0,formatter:function(n){var i,o=null===(i=(Array.isArray(n)?n:[n]).find((function(t){var n;return!(null==t||null===(n=t.data)||void 0===n||null===(n=n.tip)||void 0===n||!n.rows)})))||void 0===i?void 0:i.data,e=null==o?void 0:o.tip;return e?((e=JSON.parse(JSON.stringify(e))).rows=e.rows.filter((function(t){return!t.only||(t.only==n.seriesId||t.only==(null==o?void 0:o.id))})),Array.isArray(e.rows)&&(e.rows=e.rows.filter((function(t){return!String(t.caption).match(/^UUID\-/g)}))),t.tooltip(e)):null},appendToBody:!0,confine:!1,position:function(t,n,i,o,e){var r=Math.max.apply(null,__ENV.scale||[1,1]),a={top:t[1]};return t[0]<e.viewSize[0]/2?a.left=t[0]+30/r:a.left=t[0]-(e.contentSize[0]+30)/r,a},extraCssText:"padding:0px;font-size:12px;color: white;border:none;background:transparent;box-shadow:none;"},legend:{type:"scroll",show:!1},grid:{left:0,right:0,top:0,bottom:0,containLabel:!0},toolbox:{show:!1},series:[]}}}));
//# sourceMappingURL=CustomImageMap.js.map