(self["webpackChunkdataforui_common"]=self["webpackChunkdataforui_common"]||[]).push([[327],{88766:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return E}});var s=a(25466),r=(a(17084),a(73095)),i=(a(51573),a(47335)),n=(a(77249),a(35437)),l=(a(68559),a(11927)),o=a(51546),u=a(28162),d=a(52973),c=(a(46172),a(13754)),p=a(24706),h=(a(99506),a(6824)),m=a(79277),f=a(51e3),v=a(68647),Z=a(48928),y=a(93780),g=a(7103),w=a(58233),x=(a(45219),a(26675)),b=a(41863),S=a(85412),k=a(18540),j=a(2784),P=(a(2468),a(96535)),L=(a(42405),a(7204)),M=(a(24481),a(58682)),R=(a(77047),a(32331)),F=(a(96878),a(96894)),C=a(47443),O=a(81954),D=a(76635),q=a.n(D),T=a(45899),I=a(50730),z=a(57200),V=a(52322);a(14149),a(4114);class Q extends j.Component{constructor(e){super(),this.setFromData=()=>{var e,t,a=this.state.params.type,s=!("2"===a),r=[],i=!!this.state.params.id,n="3"===a;"3"===a&&(r=null===(t=JSON.parse(this.state.params.detail))||void 0===t?void 0:t.map((e=>(e.key=e.value,e))));this.setState({sqlFlag:s,rowList:r,listFlag:n,nameDisabled:i}),null===(e=this.formRef.current)||void 0===e||e.setFieldsValue(this.state.params)},this.changeType=e=>{var t,a=!("2"===e),s="3"===e;this.setState({sqlFlag:a,listFlag:s,rowList:[{value:"",key:Date.now()}]}),null===(t=this.formRef.current)||void 0===t||t.setFieldsValue({default:"",dbconn:"",detail:""})},this.onPreviewEvent=e=>{var t;if(this.setState({SQLQuering:!0}),e)t=(0,u.Z)({},e),e.name;else{var a,s,i,n,l=null===(a=this.codeRef.current)||void 0===a?void 0:a.editor.getValue();if((null===(s=this.formRef.current)||void 0===s?void 0:s.getFieldValue("name"))||(null===(i=this.state.params)||void 0===i?void 0:i.name),!l&&""===l.trim())return r.default.error({message:(0,C.ZP)({id:"parameter.sql.empty"})});var o=null===(n=this.formRef.current)||void 0===n?void 0:n.getFieldsValue();t=(0,u.Z)((0,u.Z)({},o),{},{detail:l})}(0,S.queryData)((0,u.Z)((0,u.Z)({},t),{},{visualizerMode:!0})).then((e=>{e&&!0===e.success&&Array.isArray(e.data)?setTimeout((()=>{this.setState({SQLQuering:!1,SQLPreview:e.data.map((e=>{var t=Object.keys(e)[0];return{caption:t,value:e[t],key:e[t]}}))})}),500):(this.setState({SQLQuering:!1}),r.default.error({message:(0,C.ZP)({id:"notice.error.exception"}),message:e.msg||(0,C.ZP)({id:"notice.error.contact.administrator"})}))}))},this.addRow=()=>{var e=this.state.rowList;e.push({value:"",key:Date.now()}),this.setState({rowList:[...e]}),setTimeout((()=>{var e;null===(e=this.inputList[this.inputList.length-1].current)||void 0===e||e.focus()}),250)},this.deleteRow=e=>{var t=this.state.rowList;t.splice(e,1),this.setState({rowList:[...t]})},this.clearData=()=>{var e;this.setState({visible:!1,sample:null,SQLPreview:[],params:{},nameDisabled:!1,sqlFlag:!0,rowList:[{value:"",key:Date.now()}],listFlag:!1}),null===(e=this.formRef.current)||void 0===e||e.resetFields()},this.changeValue=(e,t,a)=>{var s=e.target.value,r=this.state.rowList;r[a].value=s,this.setState({rowList:[...r]})},this.filterData=(e,t,a)=>{var s=e.target.value,r=this.state.rowList.filter((e=>e.value===s));if(r.length>1){if(this.inputList[a]){this.inputList[a].current.value="";var i=this.state.rowList;i[a].value="",this.setState({rowList:[...i]})}return!1}return!0},this.state={visible:!1,sample:null,SQLQuering:!1,SQLPreview:[],params:{},nameDisabled:!1,sqlFlag:!0,rowList:[{value:"",key:Date.now()}],listFlag:!1,databaseList:[]},this.formRef=j.createRef(),this.codeRef=j.createRef(),this.inputList=[],this.cb=e.cb,this.scrollRef=null,console.log("init>>"),this.getConnectionList(e.visualizerMode)}getConnectionList(e){(0,T.getConnectionsArray)(!0,e).then((e=>{var t,a=[],r=(0,s.Z)(e.connections.data);try{for(r.s();!(t=r.n()).done;){var i=t.value;a.push(i.name)}}catch(n){r.e(n)}finally{r.f()}this.setState({databaseList:a})}))}show(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dbconn,a=e.detail,s=e.type,r=e.name;t&&a&&"2"===s&&r&&this.onPreviewEvent(e),this.setState({visible:!0,params:e}),setTimeout((()=>{this.setFromData()}),100)}componentWillUnmount(){this.scrollRef&&this.scrollRef.destroy()}setScroll(){setTimeout((()=>{var e=document.querySelector(".ant-form-item-control-input-content .ant-table-body");e&&(e.style.position="relative",this.scrollRef?this.scrollRef.update&&this.scrollRef.update():this.scrollRef=new z.Z(e,{wheelSpeed:2,wheelPropagation:!0,minScrollbarLength:20}))}),300)}componentDidMount(){this.setFromData()}componentDidUpdate(){this.setScroll(),this.inputList.length,this.state.sqlFlag||setTimeout((()=>{var e;null===(e=this.codeRef.current)||void 0===e||e.editor.refresh()}),500)}onFinish(){var e,t=this;return null===(e=this.formRef.current)||void 0===e?void 0:e.validateFields().then(function(){var e=(0,d.Z)((0,o.Z)().mark((function e(a){var i,n,l,u,d,c;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("3"!==a.type){e.next=10;break}if(!(t.state.rowList.length>0)){e.next=9;break}i=[],n=(0,s.Z)(t.state.rowList);try{for(n.s();!(l=n.n()).done;)u=l.value,u.value&&i.push({name:a.name,value:u.value})}catch(o){n.e(o)}finally{n.f()}i=q().uniqBy(i,"value"),a.detail=JSON.stringify(i),e.next=10;break;case 9:return e.abrupt("return",r.default.warn({message:intl.formatMessage({id:"users.list.input.table"})}));case 10:return t.state.params.id&&(a.id=t.state.params.id),"2"===a.type&&(a.detail=null===(d=t.codeRef.current)||void 0===d?void 0:d.editor.getValue()),e.next=14,t.cb(a);case 14:return c=e.sent,c&&t.clearData(),e.abrupt("return",c);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((e=>!1))}render(){var e=[{title:"value",dataIndex:"value",key:"value",width:"70%",editable:!0,render:(e,t,a)=>{var s=(0,j.useRef)(null);return this.inputList.push(s),(0,V.jsx)(F.Z,{ref:s,onChange:e=>{this.changeValue(e,t,a)},value:e,onKeyPress:e=>{"Enter"===e.key&&this.addRow()}},t.key||a)}},{title:(0,C.ZP)({id:"users.list.action"}),key:"action",align:"center",render:(e,t,a)=>(0,V.jsx)(l.Z,{onClick:this.deleteRow.bind(e,a),style:{border:"none"},icon:(0,V.jsx)(y.Z,{})})}],t=this.state,a=t.sample,s=t.SQLPreview,r=void 0===s?[]:s;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(x.G,{visible:this.state.visible,_t:+new Date,width:600,forceRender:!0,maskClosable:!1,destroyOnClose:!0,title:this.state.params.id?(0,C.ZP)({id:"users.list.action.update"}):(0,C.ZP)({id:"users.list.action.add"}),closable:!1,onOk:()=>this.onFinish(),onCancel:()=>{this.clearData()},children:(0,V.jsxs)(c.Z,{ref:this.formRef,name:"basic",className:"label-can-wrap parameter",labelCol:{span:4},wrapperCol:{span:20},children:[(0,V.jsx)(c.Z.Item,{label:(0,C.ZP)({id:"users.list.param.name"}),name:"name",rules:[{required:!0,message:(0,C.ZP)({id:"users.list.param.input"})+""+(0,C.ZP)({id:"users.list.param.name"})}],children:(0,V.jsx)(F.Z,{disabled:this.state.nameDisabled})}),(0,V.jsx)(c.Z.Item,{label:(0,C.ZP)({id:"users.list.param.input.explain"}),name:"desc",rules:[{required:!1,message:(0,C.ZP)({id:"users.list.param.input"})+""+(0,C.ZP)({id:"users.list.param.input.explain"})}],children:(0,V.jsx)(F.Z.TextArea,{})}),(0,V.jsx)(c.Z.Item,{label:(0,C.ZP)({id:"users.list.param.input.data.type"}),name:"datatype",rules:[{required:!0,message:(0,C.ZP)({id:"users.list.param.select"})+""+(0,C.ZP)({id:"users.list.param.input.data.type"})}],children:(0,V.jsxs)(R.Z,{showSearch:!1,disabled:!!this.props.typeLocked,onChange:e=>{if("2"==e){var t,a,s=null===(t=this.formRef.current)||void 0===t?void 0:t.getFieldValue("type");if("1"==s)null===(a=this.formRef.current)||void 0===a||a.setFieldsValue({type:"3"}),this.changeType("3");else this.setState({_t:Date.now()})}else this.setState({_t:Date.now()})},filterOption:(e,t)=>t.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:[(0,V.jsx)(R.Z.Option,{value:"2",children:(0,C.ZP)({id:"description.column.type.text"})}),(0,V.jsx)(R.Z.Option,{value:"5",children:(0,C.ZP)({id:"description.column.type.number"})})]})}),(0,V.jsx)(c.Z.Item,{label:(0,C.ZP)({id:"users.list.param.input.type"}),name:"type",rules:[{required:!0,message:(0,C.ZP)({id:"users.list.param.select"})+""+(0,C.ZP)({id:"users.list.param.input.type"})}],children:(0,V.jsx)(R.Z,{showSearch:!1,disabled:!!this.props.valueTypeLocked,onChange:this.changeType,filterOption:(e,t)=>t.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:(()=>{var e,t=this.props.onlyValueTypes,a=null===(e=this.formRef.current)||void 0===e?void 0:e.getFieldValue("datatype");void 0==a&&(a=this.state.params.datatype);var s=[(0,V.jsx)(R.Z.Option,{value:"2",children:"SQL"},2),(0,V.jsx)(R.Z.Option,{value:"3",children:(0,C.ZP)({id:"users.list.param.type.list"})},3)];return"2"!=a&&s.unshift((0,V.jsx)(R.Z.Option,{value:"1",children:(0,C.ZP)({id:"users.list.param.type.wantonly"})},1)),Array.isArray(t)&&t.length>0?s.filter((e=>t.includes(e.key))):s})()})}),(0,V.jsx)(c.Z.Item,{hidden:this.state.sqlFlag,label:(0,C.ZP)({id:"parameter.sql.connection"}),name:"dbconn",rules:[{required:!this.state.sqlFlag,message:(0,C.ZP)({id:"users.list.param.input"})+"dbconn"}],children:(0,V.jsx)(R.Z,{showSearch:!0,children:this.state.databaseList.map(((e,t)=>(0,V.jsx)(R.Z.Option,{value:e,children:e},t)))})}),(0,V.jsxs)(c.Z.Item,{hidden:this.state.sqlFlag,label:(0,C.ZP)({id:"users.list.param.input.detail"}),rules:[{required:!this.state.sqlFlag,message:(0,C.ZP)({id:"users.list.param.input"})+""+(0,C.ZP)({id:"users.list.param.input.detail"})}],children:[(0,V.jsx)(I.Rt,{ref:this.codeRef,value:this.state.params.detail,options:{theme:"neo",mode:"sql",lineNumbers:!1},editorDidMount:e=>{e.setSize("100%","150")},onChange:(e,t,a)=>{var s;a&&(null===(s=this.formRef.current)||void 0===s||s.setFieldsValue({detail:a}))},onBeforeChange:(e,t,a,s)=>{s()}}),this.state.SQLQuering?(0,V.jsx)(M.Z,{indicator:(0,V.jsx)(O.Z,{style:{fontSize:24},spin:!0})}):(0,V.jsx)("a",{style:{cursor:"pointer",marginTop:"5px",display:"inline-block"},onClick:()=>{this.onPreviewEvent()},children:(0,C.ZP)({id:"parameter.add.preview"})})]}),(0,V.jsxs)(c.Z.Item,{hidden:!this.state.listFlag,label:(0,C.ZP)({id:"users.list.param.input.table.list"}),style:{justifyContent:"flex-end"},children:[(0,V.jsx)(L.Z,{showHeader:!1,pagination:!1,rowKey:"index",dataSource:this.state.rowList,columns:e,scroll:{y:"150px"}}),(0,V.jsx)("a",{style:{cursor:"pointer",marginTop:"5px",display:"inline-block"},onClick:this.addRow,children:(0,C.ZP)({id:"parameter.add.row"})})]}),(0,V.jsx)(c.Z.Item,{label:(0,C.ZP)({id:"users.list.param.input.default"}),name:"default",rules:[{required:!0,message:(0,C.ZP)({id:"users.list.param.input"})+""+(0,C.ZP)({id:"users.list.param.input.default"})}],children:this.state.listFlag?(0,V.jsx)(R.Z,{showSearch:!0,children:q().uniqBy(this.state.rowList,"value").map(((e,t)=>(0,V.jsx)(R.Z.Option,{value:e.value,children:e.value},e.key||t)))}):this.state.sqlFlag?(0,V.jsx)(F.Z,{}):(0,V.jsx)(R.Z,{showSearch:!0,children:(null===r||void 0===r?void 0:r.map((e=>{var t=e.key,a=e.value;return(0,V.jsx)(R.Z.Option,{value:t,children:a},t)})))||[]})})]})}),(0,V.jsx)(P.Z,{title:(0,C.ZP)({id:"parameter.add.preview"}),placement:"right",closable:!0,onClose:e=>{this.setState({sample:null})},visible:null!==a,children:(0,V.jsx)(L.Z,{columns:null!==a&&(null===a||void 0===a?void 0:a.colModel)||[],dataSource:null!=a&&(null===a||void 0===a?void 0:a.data)||[],showHeader:!1,pagination:!1})})]})}}var _=a(19034),A=a.n(_);h.Z.Sider,h.Z.Content,Math.ceil(document.body.clientHeight-120);function E(e){var t={formatMessage:C.ZP},a=(0,j.useState)([]),h=(0,p.Z)(a,2),P=h[0],L=h[1],M=(0,j.useState)([]),R=(0,p.Z)(M,2),F=R[0],O=R[1],D=(0,j.useState)(!0),T=(0,p.Z)(D,2),I=(T[0],T[1],(0,j.useState)(!0)),_=(0,p.Z)(I,2),E=(_[0],_[1],(0,j.useState)(!0)),N=(0,p.Z)(E,2),B=(N[0],N[1],(0,j.useState)({})),J=(0,p.Z)(B,2),U=J[0],H=(J[1],(0,j.useState)([])),K=(0,p.Z)(H,2),W=(K[0],K[1],(0,j.useState)(!1)),G=(0,p.Z)(W,2),X=G[0],Y=(G[1],(0,j.useState)(!0)),$=(0,p.Z)(Y,2),ee=$[0],te=$[1],ae=(0,j.useState)(0),se=(0,p.Z)(ae,2),re=(se[0],se[1],(0,j.useState)({})),ie=(0,p.Z)(re,2),ne=ie[0],le=(ie[1],(0,j.useState)(!1)),oe=(0,p.Z)(le,2),ue=(oe[0],oe[1],(0,j.useState)("")),de=(0,p.Z)(ue,2),ce=(de[0],de[1],(0,j.useState)([])),pe=(0,p.Z)(ce,2),he=pe[0],me=pe[1],fe=(0,j.useState)([]),ve=(0,p.Z)(fe,2),Ze=ve[0],ye=ve[1],ge=(0,j.useState)(!1),we=(0,p.Z)(ge,2),xe=(we[0],we[1],(0,j.useState)("")),be=(0,p.Z)(xe,2),Se=be[0],ke=be[1],je=c.Z.useForm(),Pe=(0,p.Z)(je,1),Le=Pe[0],Me=(0,j.useRef)(null),Re=j.useState(j.createRef()),Fe=(0,p.Z)(Re,1),Ce=Fe[0],Oe=e.serviceMap||{},De=Oe.queryReportParameterList,qe=Oe.getReportParameterDetail,Te=Oe.tryUpdateReportParameter,Ie=Oe.tryDeleteReportParameter,ze=Oe.visualizerMode,Ve=void 0!==ze&&ze,Qe=e.typeLocked,_e=void 0!==Qe&&Qe,Ae=e.valueTypeLocked,Ee=void 0!==Ae&&Ae,Ne=e.onViewLoadedEvent,Be=void 0===Ne?()=>({}):Ne,Je=e.onlyValueTypes,Ue=void 0===Je?[]:Je,He=De||S.queryParameter,Ke=qe||S.queryData,We=Te||S.updateParameter,Ge=Ie||S.deleteParameter,Xe=Ve?function(){var e=(0,d.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,He((0,u.Z)((0,u.Z)({},t),{},{visualizerMode:!0}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}():He,Ye=Ve?function(){var e=(0,d.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ke((0,u.Z)((0,u.Z)({},t),{},{visualizerMode:!0}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}():Ke,$e=Ve?function(){var e=(0,d.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,We((0,u.Z)((0,u.Z)({},t),{},{visualizerMode:!0}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}():We,et=Ve?function(){var e=(0,d.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ge((0,u.Z)((0,u.Z)({},t),{},{visualizerMode:!0}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}():Ge,tt={selectedRowKeys:Ze,columnWidth:parseInt(Z.dp.checkboxColumnSize),onChange:(e,t)=>{ye(e),t&&Array.isArray(he)&&(te(0===t.length),me(t))}};(0,j.useEffect)((()=>{setTimeout((()=>{var e=document.querySelector(".users-parameter-list .ant-table-body");e&&(Se?Se.update&&Se.update():ke(new z.Z(e,{wheelSpeed:2,wheelPropagation:!0,minScrollbarLength:20})))}),100)}),[F]);var at=(e,t)=>{var a=e||{},s=t||{},r=Object.getOwnPropertyNames(a),i=Object.getOwnPropertyNames(s);if(r.length!=i.length)return!1;for(var n=0;n<r.length;n++){var l=r[n],o=a[l],u=s[l];if(!s.hasOwnProperty(l))return!1;if(o instanceof Object){if(!at(o,u))return!1}else if(o!==u)return!1}return!0};q().isFunction(e.overideRef)&&e.overideRef({isUnsaved:function(){var e=(0,u.Z)({},U);delete e["key"];var a=Le.getFieldValue();if(U.id){if(at(e,a))return!1}else{var s=!1;if(!X)for(var r in a)if(a[r]){s=!0;break}if(!s)return!1}return t.formatMessage({id:"users.params.not.save.msg"})}});var st=e=>{var t=e.key,a={edit:()=>{ut(ne)},delete:()=>{lt(ne)}};a[t]()},rt=(n.Z,n.Z.Item,l.Z,y.Z,t.formatMessage({id:"users.list.action.delete"}),[{title:t.formatMessage({id:"users.list.param.name"}),align:"left",dataIndex:"name",sorter:(e,t)=>String(e.name).localeCompare(String(t.name)),key:"name",render:(e,t)=>{var a=t.name_matched||t.name;return(0,V.jsx)("a",{onClick:()=>{ut(t)},children:a})}},{title:t.formatMessage({id:"users.list.param.input.data.type"}),align:"center",sorter:(e,t)=>e.datatype-t.datatype,dataIndex:"datatype",key:"datatype",render:(e,t)=>{var a=ot(e);return(0,V.jsx)(i.Z,{title:a,destroyTooltipOnHide:{keepParent:!1},children:a})}},{title:t.formatMessage({id:"users.list.param.input.type"}),align:"center",sorter:(e,t)=>e.type-t.type,dataIndex:"type",key:"type",render:(e,a)=>"1"===a.type?t.formatMessage({id:"users.list.param.type.wantonly"}):"2"===a.type?"SQL":t.formatMessage({id:"users.list.param.type.list"})},{title:t.formatMessage({id:"users.list.param.input.default"}),align:"center",sortable:!0,sorter:(e,t)=>String(e.default).localeCompare(String(t.default)),dataIndex:"default",key:"default",render:(e,t)=>(0,V.jsx)(i.Z,{title:e,children:(0,V.jsx)("div",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.default_matched||t.default})})}]),it=function(){var e=(0,d.Z)((0,o.Z)().mark((function e(a){var i,n,l,u,d;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return v.Z.show(t.formatMessage({id:"notice.content_is_loading"})),e.next=3,Xe(a);case 3:if(i=e.sent,n=0,i.success&&!i.msg){e.next=11;break}return r.default.error({message:(0,C.ZP)({id:"notice.error.exception"}),description:i.msg||(0,C.ZP)({id:"notice.error.contact.administrator"})}),O([]),L([]),v.Z.hide(),e.abrupt("return");case 11:l=(0,s.Z)(i.data);try{for(l.s();!(u=l.n()).done;)d=u.value,d.key=n++}catch(o){l.e(o)}finally{l.f()}O(i.data),L(i.data),v.Z.hide();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),nt=e=>{var t=(0,f._z)(JSON.parse(JSON.stringify(P)),e,["name","desc","default"],"key");e?O(t.tree):it()},lt=function(){var e=(0,d.Z)((0,o.Z)().mark((function e(a){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:x.Z.show({title:t.formatMessage({id:"users.list.action.title"}),type:"warn",okButtonProps:{danger:!0},content:t.formatMessage({id:"users.list.param.delete"}),okText:t.formatMessage({id:"action.delete"}),okEvent:function(){var e=(0,d.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return v.Z.show(t.formatMessage({id:"notify.doing.delete"})),e.next=3,et({id:a.id});case 3:e.sent,r.default.success({message:t.formatMessage({id:"users.list.delete.success"})}),it(),v.Z.hide(),Le.resetFields();case 8:case"end":return e.stop()}}),e)})));function s(){return e.apply(this,arguments)}return s}()});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ot=e=>"2"===e?t.formatMessage({id:"description.column.type.text"}):"3"===e?t.formatMessage({id:"description.column.type.date"}):"5"===e?t.formatMessage({id:"description.column.type.number"}):void 0,ut=function(){var e=(0,d.Z)((0,o.Z)().mark((function e(t){var a;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ye({id:t.id});case 2:a=e.sent,Ce.current.show(a.config);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,j.useEffect)((()=>{if(e.createDirectly){var t=Be();Ce.current.show(t)}else it()}),[]);var dt=()=>{0!==(null===he||void 0===he?void 0:he.length)&&x.Z.show({type:"warn",title:t.formatMessage({id:"users.list.action.delete.title"}),okButtonProps:{danger:!0},content:t.formatMessage({id:"users.list.param.delete"}),okText:t.formatMessage({id:"action.delete"}),okEvent:function(){var e=(0,d.Z)((0,o.Z)().mark((function e(){var a,i,n,l;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:v.Z.show(t.formatMessage({id:"notify.doing.delete"})),a=(0,s.Z)(he),e.prev=2,a.s();case 4:if((i=a.n()).done){e.next=12;break}return n=i.value,e.next=8,et({id:n.id});case 8:l=e.sent,l.success&&Me.current.setState({value:""});case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](2),a.e(e.t0);case 17:return e.prev=17,a.f(),e.finish(17);case 20:r.default.success({message:t.formatMessage({id:"users.list.delete.success"})}),ye([]),it(),v.Z.hide();case 24:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));function a(){return e.apply(this,arguments)}return a}()})},ct=function(){var e=(0,d.Z)((0,o.Z)().mark((function e(a){var s;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(0,f.JX)(a.name)){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,$e(a);case 4:if(s=e.sent,!s.success){e.next=9;break}r.default.success({message:t.formatMessage({id:"users.list.action.save.success"})}),e.next=11;break;case 9:return r.default.warn({message:t.formatMessage({id:"users.list.name.exist"})}),e.abrupt("return",!1);case 11:return it(),e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pt=()=>[{p:0,id:"group1",ui:[{p:2,id:"delete",ui:(0,V.jsxs)(n.Z.Item,{children:[(0,V.jsx)(y.Z,{style:{fontSize:16}}),t.formatMessage({id:"action.delete"})]},"delete"),fn:e=>{lt(e)}}]}];return e.createDirectly?(0,V.jsx)(V.Fragment,{children:(0,V.jsx)(Q,{ref:Ce,onlyValueTypes:Ue,cb:ct,visualizerMode:Ve,typeLocked:_e,valueTypeLocked:Ee},Date.now())}):(0,V.jsxs)("div",{className:"content",style:(0,u.Z)({},e.style||{}),children:[(0,V.jsxs)("div",{style:{marginTop:13,marginBottom:10,display:"flex",alignItems:"center",whiteSpace:"nowrap",height:48},children:[(0,V.jsxs)("h2",{style:{margin:"0px 20px 0px 0px",fontSize:e.tab?18:"inherits"},children:[e.tab?"":(0,V.jsx)(w.US,{style:{fontSize:Z.dp.pageNameIconSize,marginRight:Z.dp.itemIconMarginRight}}),(0,V.jsx)("span",{children:t.formatMessage({id:"users.list.param.title"})})]}),(0,V.jsxs)("div",{style:{height:"auto",width:"100%"},children:[(0,V.jsx)(k.Z,{placeholder:t.formatMessage({id:"users.list.param.search"}),onChange:e=>{nt(e)},sref:Me,style:{width:260,float:"right"}}),(0,V.jsx)(i.Z,{title:t.formatMessage({id:"users.list.action.add"}),children:(0,V.jsx)(b.rP,{onClick:()=>{Ce.current.show()},icon:(0,V.jsx)(g.Z,{})})}),Array.isArray(F)&&F.length?(0,V.jsx)(i.Z,{title:t.formatMessage({id:"users.list.action.batch.delete"}),children:(0,V.jsx)(b.rP,{disabled:ee,style:{marginLeft:Z.dp.toolbarIconMargin},onClick:()=>{dt()},icon:(0,V.jsx)(y.Z,{})})}):""]})]}),(0,V.jsx)(m.Z,{datasets:(()=>{var e=F.map((e=>(e.more=!0,e)));return e.sort(((e,t)=>A()(t.update_time).valueOf()-A()(e.update_time).valueOf())),e})(),rowSelection:(0,u.Z)({},tt),defsMenuArray:pt(),size:"small",extrCols:rt,columnonly:rt.map((e=>e.key)).concat("more"),extendSearchOut:!0,pickRecordEvent:e=>{},actionMenus:e=>new Promise((e=>{e({accessMap:[{name:"0",value:!0},{name:"1",value:!0},{name:"2",value:!0},{name:"4",value:!0}],filter:null})}))}),j.useMemo((()=>(0,V.jsx)(Q,{ref:Ce,onlyValueTypes:Ue,cb:ct,visualizerMode:Ve,typeLocked:_e,valueTypeLocked:Ee},Date.now())),[Ce])]})}}}]);
//# sourceMappingURL=327.dcd14aaf.async.js.map