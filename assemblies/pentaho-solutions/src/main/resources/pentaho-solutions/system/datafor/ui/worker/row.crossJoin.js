!function(e){var t={getPrimaryFields:function(e,t,r){var n=r||"detail.fields",i=e.filter((function(e){return"false"==String(e.isMeasureNode)}));return i.length<2?i:i.filter((function(e){var r=e.key,i=!0;return t.queryModel.axes.ROWS.hierarchies.every((function(e){var t;for(var u in e.levels)(t=e.levels[u])&&t.extend_properties&&t.extend_properties.identifyPosition&&t.extend_properties.identifyPosition.uuid==n&&t.extend_properties.identifyPosition.uniqueName==r&&(i=!1);return i})),i}))},getCrossField:function(e,t,r){var n=e.filter((function(e){return"false"==String(e.isMeasureNode)})),i=null,u=r||"legend.fields";return n.length<2?null:(t.queryModel.axes.ROWS.hierarchies.every((function(e){var t;for(var r in e.levels)(t=e.levels[r])&&t.extend_properties&&t.extend_properties.identifyPosition&&t.extend_properties.identifyPosition.uuid==u&&(i=_.extend({},t,{uniqueName:t.extend_properties.identifyPosition.uniqueName}));return!i})),i?_.find(n,{key:i.uniqueName}):null)},getCrossFields:function(e,t,r){var n=e.filter((function(e){return"false"==String(e.isMeasureNode)})),i=[],u=r||"legend.fields";return n.length<2?[]:(t.queryModel.axes.ROWS.hierarchies.every((function(e){var t;for(var r in e.levels)(t=e.levels[r])&&t.extend_properties&&t.extend_properties.identifyPosition&&t.extend_properties.identifyPosition.uuid==u&&i.push(t.extend_properties.identifyPosition.uniqueName);return!0})),i.length?n.filter((function(e){return i.indexOf(e.key)>=0})):[])},getQueryMesures:function(e,t){return e.filter((function(e){return!("true"!=String(e.isMeasureNode)||t&&String(e.key).match(/^\[Measures\]\.\[UUID\-/))}))},getSystemCalculatedMeasuresValue:function(e,t){return e.reduce((function(e,r){var n=String(r.key||r.uniqueName);return n.match(/^\[Measures\]\.\[UUID\-/)&&(e[n]=Number((t[n]||{}).raw)||0),e}),{})},tryPackageMesures:function(e,t,r){return t.map((function(t){var n=t.key||t.uniqueName,i=e[n]||{};return _.extend({caption:t.title,formatted:i.formatted,vtip:i.hasOwnProperty("vtip")?i.vtip:i.formatted,value:Number(i.raw),uniqueName:n},r)}))},tryOrderComplexByTemplate:function(e,t,r){var n,i=this.tryGetMaxPointsLengthSeriesData(t),u=r||"name";return e.sort((function(e,t){return i.indexOf(e[u])-i.indexOf(t[u])})),n=e.map((function(e){return e.value})),t.forEach((function(e){var t=e.data||[],r=[];n.forEach((function(e){var n=_.find(t,{name:e});r.push(n||{name:e,value:null,formatted:"",tip:null})})),e.data=r})),e},tryGetMaxPointsLengthSeriesData:function(e){var t,r=0;return e.forEach((function(e){e&&Array.isArray(e.data)&&e.data.length>r&&(r=e.data.length,t=JSON.parse(JSON.stringify(e.data)))})),t},getMemberTimestamp:function(e,t,r,n){var i=n(e,String(r||"").replace(/y/g,"Y").replace(/q/g,"Q").replace(/W/g,"w").replace(/d/g,"D"));return i.isValid()?i.valueOf():t}};"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define((function(){return t})):e.rCrossJoin=t}(this);
//# sourceMappingURL=row.crossJoin.js.map