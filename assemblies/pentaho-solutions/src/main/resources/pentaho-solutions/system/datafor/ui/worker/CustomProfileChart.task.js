importScripts("task.min.js");var getProperFormat=function(e){return{TIME_SECONDS:"YYYY-MM-DD hh:mm:ss",TIME_MINUTES:"YYYY-MM-DD hh:mm",TIME_HOURS:"YYYY-MM-DD hh",TIME_DAYS:"YYYY-MM-DD",TIME_WEEKS:"YYYY-WW",TIME_MONTHS:"YYYY-MM",TIME_QUARTERS:"YYYY-Q",TIME_YEARS:"YYYY"}[e.type]},getProperReplacedFormat=function(e,a){return e=String(e).replace(/^\[|\]$/g,"").replace(/y/g,"Y").replace(/d/,"D")};function dataNormalTranslate(e){try{dataUtils.getJsonArray(e.data,e.attrs)}catch(e){console.log(e.stack)}}componentsUtils.CustomProfileChart=function(e,a,t,r,n){var o={type:"custom",itemStyle:{opacity:.8},encode:{x:[1,2],y:0},data:[],dateFormat:null,itemsArray:[],start:[],category:[]},i=e[0].key,s=e[1].key,l=e[2].key,m=e[3]?e[3].key:null,u=e.map((function(e){return e.title})),Y=(_.find(n.dateAnalyzerFormats,{uniqueName:s})||{}).format,d=(_.find(n.dateAnalyzerFormats,{uniqueName:l})||{}).format,c={},p=n.toParseWorker.colors||[],y=n.toParseWorker.levelType;return Y&&(Y=getProperReplacedFormat(Y,_.find(y,{key:s}))),d&&(d=getProperReplacedFormat(d,_.find(y,{key:l}))),o.dateFormat=getProperFormat(_.find(y,(function(e){return!!e.type}))),a.forEach((function(e){var a,t,r=e[m],n=e[i],y=e[s],f=e[l],M=o.category.indexOf(r);M<0&&(o.category.push(r),M=o.category.indexOf(r)),y=moment(y,Y).valueOf(),f=moment(f,d).valueOf(),o.start.push(y),n in c||(c[n]=p[Object.keys(c).length]),a=c[n],(t=_.find(e.datafor_rows,{level:i}))&&!_.find(o.itemsArray,{id:t.uniqueName})&&o.itemsArray.push({id:t.uniqueName,label:t.value}),o.data.push({name:n,levels:JSON.parse(JSON.stringify(e.datafor_rows)),measures:[],ssid:t?t.uniqueName:n,value:[M,y,f,f-y],captions:u.map((function(a,t){var o={name:a};return o.value=0==t?n:1==t?e[s]:2==t?e[l]:r,o})),itemStyle:{normal:{color:a}}})})),o.start=Math.min.apply(null,o.start),o},addEventListener("message",(function(e){var a=e.data;if("dataNormalTranslate"===a.type)dataNormalTranslate(a.data)}));
//# sourceMappingURL=CustomProfileChart.task.js.map