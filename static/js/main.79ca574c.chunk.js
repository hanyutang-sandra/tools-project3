(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(26),o=a.n(s),i=a(8),c=a(9),l=a(12),u=a(10),p=a(13),d=a(2),h=a.n(d),m=a(5),b=a(4),f=a.n(b),g=a(17),y=a.n(g),v=a(74),E=a.n(v),j=a(75),k=a.n(j),O=a(35),x=a.n(O),S=a(34),T=a.n(S),D=a(77),w=a.n(D),C=Object(m.createMuiTheme)({palette:{primary:{main:x.a[200]},secondary:{main:T.a[200]}},typography:{fontFamily:"Rubik"},overrides:{title:{fontSize:"50px",color:x.a[200]},subtitle:{display:"inline-block",fontSize:"21.32px",color:"#5b5b5b",fontWeight:300,marginTop:"0.7rem"},image:{display:"inline-block",width:"338px",overflow:"hidden",marginTop:"2rem"},image_img:{width:"100%",height:"auto"},button:{display:"inline-block",width:"351px",height:"58px",backgroundColor:x.a[200],fontSize:"21px",marginTop:"3rem","&:hover":{backgroundColor:x.a[100],color:"#0097A7",transition:"0.5s"},"&:disabled":{backgroundColor:T.a[200]}},authors:{display:"inline-block",fontSize:"12.19px",color:T.a[400],fontWeight:300,marginTop:"3rem"}}});var P=function(e){return function(t){return r.a.createElement(m.MuiThemeProvider,{theme:C},r.a.createElement(w.a,null),r.a.createElement(e,t))}},N=a(6),A="START_APP",F="USEOLD_FORM",R="UPLOAD_FORM",q="START_TEST",I="GET_FEEDBACK",_="GET_NEXTTEST",B="END_APP",M="BACK_HOME",L=function(){return{type:A}},z=function(){return{type:F}},G=function(){return{type:R}},U=function(){return{type:q}},W=function(){return{type:I}},H=function(){return{type:_}},J=function(){return{type:B}},Q=a(11),K=a.n(Q),X=a(31),Y={page:"coverPage"};var $=Object(X.b)({changePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;switch((arguments.length>1?arguments[1]:void 0).type){case A:return Object.assign({},{page:"olddataPage"});case R:return Object.assign({},{page:"uploadPage"});case F:return Object.assign({},{page:"olddataPage"});case q:return Object.assign({},{page:"testPage"});case I:return Object.assign({},{page:"feedbackPage"});case _:return Object.assign({},{page:"testPage"});case B:return Object.assign({},{page:"endPage"});case M:return Object.assign({},{page:"coverPage"});default:return e}}}),V=Object(X.c)($);console.log(V.getState()),V.subscribe(function(){return console.log(V.getState())});var Z=V,ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleInfo=function(){a.setState({loading:!0}),fetch("https://cryptic-journey-75247.herokuapp.com/info",{method:"GET",mode:"cors",cache:"no-cache"}).then(function(e){return e.json()}).then(function(e){a.setState({info:e,loading:!1},a.props.passInfo(e))}).then(function(){return Z.dispatch(L())}).catch(function(e){alert("Something is wrong"),a.setState({loading:!1})})},a.state={info:null,loading:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root,style:this.props.style},r.a.createElement(f.a,{className:t.title},!0===this.state.loading?"Fetching data. Please wait.":"Hi, Welcome to SmartTest!"),r.a.createElement("br",null),r.a.createElement(f.a,{className:t.subtitle,style:{width:"600px"}},!0===this.state.loading?"":" SmartTest is a smart tool for teachers to easily generate tests for students leveraging students\u2019 answers. Try it now! "),r.a.createElement("br",null),r.a.createElement("div",{className:t.image},r.a.createElement("img",{className:t.image_img,src:!0===this.state.loading?k.a:E.a,alt:"Display"})),r.a.createElement("br",null),r.a.createElement(y.a,{className:t.button,onClick:!0===this.state.loading?null:function(){return e.handleInfo()}},"Start"),r.a.createElement("br",null),r.a.createElement(f.a,{className:t.authors},"\xa9 2019. A Work Crafted by Jiasi Tan & Hanyu Tang"))}}]),t}(r.a.Component);ee.protoTypes={classes:h.a.object.isRequired};var te=P(K()(Object(m.withStyles)(function(e){return{root:{textAlign:"center",paddingTop:"100px",paddingBottom:"50px"},title:e.overrides.title,subtitle:e.overrides.subtitle,image:e.overrides.image,image_img:e.overrides.image_img,button:e.overrides.button,authors:e.overrides.authors}},{name:"Cover"}),Object(N.b)(function(e){return{page:e.changePage.page}},function(e){return{startApp:function(){return e(L())}}}))(ee)),ae=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleStartTest=function(){var e=new FormData;e.append("name",a.props.info.name),e.append("id",a.props.info.start),e.append("type","MC"),fetch("https://cryptic-journey-75247.herokuapp.com/gettest",{method:"POST",mode:"cors",cache:"no-cache",body:e}).then(function(e){return e.json()}).then(function(e){a.setState({testData:e}),a.props.passTestData(e)}).then(function(){return Z.dispatch(U())}).catch(function(e){return alert("Generate failed. Please upload new files.")})},a.state={info:a.props.info,testData:null},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.old},r.a.createElement(f.a,{className:t.title},"Now in Database"),r.a.createElement("br",null),r.a.createElement(f.a,{className:t.subtitle,style:{width:"1000px"}},this.props.info.name),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(y.a,{className:t.button,variant:"outlined",style:{backgroundColor:"white",marginRight:"0.5rem"},onClick:this.props.uploadForm},"Upload New Files"),r.a.createElement(y.a,{className:t.button,style:{marginRight:"0.5rem"},onClick:function(){return e.handleStartTest()}},"Generate Using Current Files")),r.a.createElement("br",null)))}}]),t}(r.a.Component);ae.protoTypes={classes:h.a.object.isRequired};var ne=P(K()(Object(m.withStyles)(function(e){return{root:{textAlign:"center",paddingTop:"100px",paddingBottom:"50px"},title:e.overrides.title,subtitle:e.overrides.subtitle,button:e.overrides.button,authors:e.overrides.authors,uploadSec:{display:"inline-block",width:"500px",marginTop:"2rem",textAlign:"left"}}},{name:"Olddata"}),Object(N.b)(function(e){return{page:e.changePage.page}},function(e){return{uploadForm:function(){return e(G())},useoldForm:function(){return e(z())},startTest:function(){return e(U())}}}))(ae)),re=a(27),se=a(44),oe=a.n(se),ie=a(45),ce=a.n(ie),le=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){"name"===e.target.name?a.setState({name:e.target.value}):"questions"===e.target.name?a.setState({questions:e.target.files[0]}):"answers"===e.target.name&&a.setState({answers:e.target.files[0]})},a.handleSubmit=function(e){e.preventDefault();var t=new FormData;t.append("name",a.state.name),t.append("questions",a.state.questions),t.append("answers",a.state.answers),fetch("https://cryptic-journey-75247.herokuapp.com/upload",{method:"POST",mode:"cors",cache:"no-cache",body:t}).then(function(e){return e.json()}).then(function(e){a.setState({info:e}),a.props.passInfo(e)}).then(function(){return Z.dispatch(z())}).catch(function(e){return alert("Parse failed. Please use what's already there")})},a.handleSubmit=a.handleSubmit.bind(Object(re.a)(a)),a.handleChange=a.handleChange.bind(Object(re.a)(a)),a.state={name:null,questions:null,answers:null,testData:null,info:null},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.upload},r.a.createElement(f.a,{className:t.title},"Generate Questions"),r.a.createElement(f.a,{className:t.subtitle,style:{width:"1000px"}},"Simply by uploading a csv file contains questions, and a csv files with initial sets of answers with grading, this smart tool will help you generate more questions which help students practice more!"),r.a.createElement("br",null),r.a.createElement("form",{className:t.uploadSec,onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(oe.a,{required:!0},"Project Name"),r.a.createElement("br",null),r.a.createElement(ce.a,{type:"text",name:"name",className:t.textField,style:{marginTop:"0.7rem",width:"100%"},onBlur:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("div",{style:{marginTop:"2rem"}},r.a.createElement(oe.a,{required:!0},"Question File"),r.a.createElement("br",null),r.a.createElement(ce.a,{name:"questions",type:"file",label:"File",variant:"outlined",style:{width:"100%"},onChange:function(t){return e.handleChange(t)},required:!0})),r.a.createElement("div",{style:{marginTop:"2rem"}},r.a.createElement(oe.a,{required:!0},"Answer File"),r.a.createElement("br",null),r.a.createElement(ce.a,{name:"answers",type:"file",label:"File",variant:"outlined",style:{width:"100%"},onChange:function(t){return e.handleChange(t)},required:!0})),r.a.createElement("div",{style:{textAlign:"Center"}},r.a.createElement(y.a,{className:t.button,variant:"outlined",style:{backgroundColor:"white",marginRight:"0.5rem"},onClick:this.props.useoldForm},"Use what's already there"),r.a.createElement(y.a,{type:"submit",className:t.button,style:{marginRight:"0.5rem"}},"Upload")))),r.a.createElement("br",null))}}]),t}(r.a.Component);le.protoTypes={classes:h.a.object.isRequired};var ue=P(K()(Object(m.withStyles)(function(e){return{root:{textAlign:"center",paddingTop:"-20px",paddingBottom:"50px"},title:e.overrides.title,subtitle:e.overrides.subtitle,button:e.overrides.button,authors:e.overrides.authors,uploadSec:{display:"inline-block",width:"800px",marginTop:"2rem",textAlign:"left"}}},{name:"Uploadnew"}),Object(N.b)(function(e){return{page:e.changePage.page}},function(e){return{uploadForm:function(){return e(G())},useoldForm:function(){return e(z())},startTest:function(){return e(U())}}}))(le)),pe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handlePassTestData=function(e){a.setState({testData:e}),a.props.passTestData_toindex(e)},a.handlePassInfo=function(e){a.setState({info:e})},a.state={testData:null,info:a.props.info},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},"uploadPage"===this.props.page?r.a.createElement(ue,{passInfo:this.handlePassInfo}):r.a.createElement(ne,{info:this.state.info,passTestData:this.handlePassTestData}))}}]),t}(r.a.Component);pe.protoTypes={classes:h.a.object.isRequired};var de=P(K()(Object(m.withStyles)(function(e){return{root:{textAlign:"center",paddingTop:"100px",paddingBottom:"50px"},upload:{},old:{display:"none"},title:e.overrides.title,subtitle:e.overrides.subtitle,button:e.overrides.button,authors:e.overrides.authors,uploadSec:{display:"inline-block",width:"500px",marginTop:"2rem",textAlign:"left"}}},{name:"Upload"}),Object(N.b)(function(e){return{page:e.changePage.page}},function(e){return{uploadForm:function(){return e(G())},useoldForm:function(){return e(z())},startTest:function(){return e(U())}}}))(pe)),he=a(25),me=a(78),be=a.n(me);var fe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e,t){var a=e.currentTarget;("rgb(178, 235, 242)"===a.style.backgroundColor?a.style.backgroundColor="#f1f1f1":a.style.backgroundColor="rgb(178, 235, 242)","MC"===t)&&function(e){var t=[];return Object(he.a)(e.parentNode.childNodes).forEach(function(a){return a===e?null:t.push(a)}),t}(a).forEach(function(e){e.style.backgroundColor="#f1f1f1",e.classList.remove("selected")});Object(he.a)(a.classList).indexOf("selected")>-1?a.classList.remove("selected"):a.classList.add("selected")},a.handleSubmit=function(){var e=[];Object(he.a)(document.querySelectorAll(".selected")).map(function(t){return e.push(t.children[0].innerHTML)});var t=new FormData;t.append("id",a.props.testData.id),t.append("number",a.props.testData.number),t.append("type",a.props.testData.type),e.map(function(e,a){return t.append("choice_"+a.toString(),e)}),a.props.testData.answer.map(function(e,a){return t.append("choices_"+a.toString(),e)}),fetch("https://cryptic-journey-75247.herokuapp.com/getfeedback",{method:"POST",mode:"cors",cache:"no-cache",body:t}).then(function(e){return e.json()}).then(function(e){var t,n;a.setState({feedbackData:e}),a.setState({counter:(t=e.result,n=a.state.counter,"True"===t||2===n?n=0:n+=1,n)}),a.props.passFeedbackData(e),a.props.passCounter(a.state.counter)}).then(function(){return Z.dispatch(W())}).then(Object(he.a)(a.choiceSec.current.childNodes).forEach(function(e){e.style.backgroundColor="#f1f1f1"})).then(function(){a.state.feedbackData.generalright.forEach(function(e){Object(he.a)(a.choiceSec.current.childNodes)[parseInt(e)].style.border="4px solid #80DEEA"}),a.state.feedbackData.generalwrong.forEach(function(e){Object(he.a)(a.choiceSec.current.childNodes)[parseInt(e)].style.border="4px solid #8d3a3c"}),Object(he.a)(document.querySelectorAll(".selected")).map(function(e){e.style.backgroundColor="#FFF2D2",e.classList.remove("selected")})}).catch(function(e){return alert("Cannot get feedback now.")})},a.choiceSec=r.a.createRef(),a.state={testData:null,choices:a.props.testData.answer,feedbackData:null,counter:0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(f.a,{className:t.title},"Question ",this.props.testData.testid),r.a.createElement(f.a,{className:t.subtitle,style:{marginTop:"-1rem"}},this.props.testData.testid,"/",this.props.testData.number," ","MC"===this.props.testData.type?"Multiple choice":"Select all that apply"),r.a.createElement("br",null),r.a.createElement(f.a,{className:t.subtitle,style:{width:"1000px"}},this.props.testData.question),r.a.createElement("br",null),r.a.createElement("div",{className:t.choiceSec,ref:this.choiceSec},this.props.testData.answer.map(function(a,n){return r.a.createElement(be.a,{className:t.choice,onClick:"testPage"===e.props.page?function(t,a){return e.handleClick(t,e.props.testData.type)}:null,style:"testPage"===e.props.page?{border:"none",background:"#f1f1f1"}:null,key:n},r.a.createElement(f.a,{className:t.subtitle,style:{marginTop:0,fontSize:"17px"}},a))})),"testPage"===this.props.page?r.a.createElement(y.a,{className:t.button,style:{marginTop:"0.5rem"},onClick:this.handleSubmit},"Confirm"):null)}}]),t}(r.a.Component);fe.protoTypes={classes:h.a.object.isRequired};var ge=P(K()(Object(m.withStyles)(function(e){return{root:{textAlign:"center",paddingTop:"px",paddingBottom:"50px"},title:e.overrides.title,subtitle:e.overrides.subtitle,button:e.overrides.button,authors:e.overrides.authors,choiceSec:{position:"absolutes",zIndex:0,marginTop:"3rem",marginBottom:"2rem"},choice:{width:"1000px",display:"inline-block",textAlign:"left",marginLeft:"1rem",marginTop:"1rem",padding:"1rem",cursor:"pointer",backgroundColor:e.palette.secondary.light,borderRadius:"5px",boxShadow:"none","&:hover":{border:"1px solid #80DEEA"}}}},{name:"Testwords"}),Object(N.b)(function(e){return{page:e.changePage.page}},function(e){return{getFeedback:function(){return e(W())}}}))(fe));var ye=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getNextTest=function(){if(parseInt(a.props.feedbackData.testid)===parseInt(a.props.feedbackData.number)&&0===a.state.counter&&"SA"===a.props.feedbackData.type)Z.dispatch(J());else{var e=function(e,t,a,n,r,s){var o=new FormData;return o.append("name",e),parseInt(a)!==parseInt(n)?0===s&&"MC"===r?(o.append("id",t),o.append("type","SA")):0===s&&"SA"===r?(o.append("id",parseInt(t)+1),o.append("type","MC")):0!==s&&(o.append("id",t),o.append("type",r)):parseInt(a)===parseInt(n)&&(0===s&&"MC"===r?(o.append("id",t),o.append("type","SA")):0!==s&&(o.append("id",t),o.append("type",r))),o}(a.props.feedbackData.name,a.props.feedbackData.id,a.props.feedbackData.testid,a.props.feedbackData.number,a.props.feedbackData.type,a.state.counter);fetch("https://cryptic-journey-75247.herokuapp.com/gettest",{method:"POST",mode:"cors",cache:"no-cache",body:e}).then(function(e){return e.json()}).then(function(e){a.setState({testData:e}),a.props.passTestData(e)}).then(function(){return Z.dispatch(H())}).catch(function(e){return alert("Generate failed. Please try again later.")})}},a.state={testData:null,feedbackData:a.props.feedbackData,counter:a.props.counter},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.feedback},r.a.createElement(f.a,{className:e.title,style:"False"===this.props.feedbackData.result?{color:"#8D3A3C",fontSize:"30px"}:{color:"#80DEEA",fontSize:"30px"}},"False"===this.props.feedbackData.result?"Oops! Incorrect":"Correct!"),r.a.createElement(f.a,{className:e.subtitle,style:{width:"800px",marginTop:"0rem"}},r.a.createElement("b",{style:{color:"black"}},function(e){return"False"===e?"Explanation: ":"This is an alternative correct answer: "}(this.props.feedbackData.result)),this.props.feedbackData.feedback),r.a.createElement("br",null),r.a.createElement(y.a,{className:e.button,onClick:this.getNextTest},0===this.state.counter?"Next Question":"Try Again")))}}]),t}(r.a.Component);ye.protoTypes={classes:h.a.object.isRequired};var ve=P(K()(Object(m.withStyles)(function(e){return{root:{textAlign:"center",paddingTop:"0px",paddingBottom:"50px"},title:e.overrides.title,subtitle:e.overrides.subtitle,button:e.overrides.button,authors:e.overrides.authors,choiceSec:{marginTop:"3rem"},choice:{display:"inline-flex",width:"1000px",cursor:"pointer",marginBottom:"1rem"},choiceNum:{alignSelf:"flex-end",display:"inline-block",width:"80px",height:"60px",backgroundColor:e.palette.secondary.light,borderRadius:"50%",verticalAlign:"sub",boxShadow:"none"},choiceText:{alignSelf:"flex-start",textAlign:"left",marginLeft:"1rem",padding:"1rem",backgroundColor:e.palette.secondary.light,borderRadius:"5px",boxShadow:"none"},feedback:{marginTop:"2rem"}}},{name:"Feedback"}),Object(N.b)(function(e){return{page:e.changePage.page}},function(e){return{getNext:function(){return e(H())}}}))(ye)),Ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handlePassFeedbackData=function(e){a.setState({feedbackData:e})},a.handlePassTestData=function(e){a.setState({testData:e})},a.handleCounter=function(e){a.setState({counter:e})},a.handlePassRef=function(e){a.setState({ref:e})},a.state={testData:a.props.testData,feedbackData:null,counter:0,ref:null},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(ge,{testData:this.state.testData,passFeedbackData:this.handlePassFeedbackData,passCounter:this.handleCounter,passRef:this.handlePassRef}),"feedbackPage"===this.props.page?r.a.createElement(ve,{feedbackData:this.state.feedbackData,passTestData:this.handlePassTestData,counter:this.state.counter,ref:this.state.ref}):null)}}]),t}(r.a.Component);Ee.protoTypes={classes:h.a.object.isRequired};var je=P(K()(Object(m.withStyles)(function(e){return{root:{textAlign:"center",paddingTop:"100px",paddingBottom:"50px"},title:e.overrides.title,subtitle:e.overrides.subtitle,button:e.overrides.button,authors:e.overrides.authors,choiceSec:{marginTop:"3rem"},choice:{display:"inline-flex",width:"1000px",cursor:"pointer",marginBottom:"1rem"},choiceNum:{alignSelf:"flex-end",display:"inline-block",width:"80px",height:"60px",backgroundColor:e.palette.secondary.light,borderRadius:"50%",verticalAlign:"sub",boxShadow:"none"},choiceText:{alignSelf:"flex-start",textAlign:"left",marginLeft:"1rem",padding:"1rem",backgroundColor:e.palette.secondary.light,borderRadius:"5px",boxShadow:"none"},feedback:{marginTop:"2rem"}}},{name:"Test"}),Object(N.b)(function(e){return{page:e.changePage.page}},function(e){return{startApp:function(){return e(L())}}}))(Ee)),ke=a(79),Oe=a.n(ke),xe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root,style:this.props.style},r.a.createElement(f.a,{className:e.title},"Congratulations!"),r.a.createElement("br",null),r.a.createElement(f.a,{className:e.subtitle,style:{width:"600px"}},"You have finished the practice! Good luck on learning!"),r.a.createElement("br",null),r.a.createElement("div",{className:e.image},r.a.createElement("img",{className:e.image_img,src:Oe.a,alt:"Display"})),r.a.createElement("br",null),r.a.createElement(y.a,{className:e.button,onClick:function(){return Z.dispatch({type:M})}},"Back to home page"),r.a.createElement("br",null),r.a.createElement(f.a,{className:e.authors},"\xa9 2019. A Work Crafted by Jiasi Tan & Hanyu Tang"))}}]),t}(r.a.Component);xe.protoTypes={classes:h.a.object.isRequired};var Se=P(K()(Object(m.withStyles)(function(e){return{root:{textAlign:"center",paddingTop:"100px",paddingBottom:"50px"},title:e.overrides.title,subtitle:e.overrides.subtitle,image:e.overrides.image,image_img:e.overrides.image_img,button:e.overrides.button,authors:e.overrides.authors}},{name:"End"}),Object(N.b)(function(e){return{page:e.changePage.page}},function(e){return{startApp:function(){return e(L())}}}))(xe)),Te=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handlePassInfo=function(e){a.setState({info:e})},a.handlePassTestData=function(e){a.setState({testData:e})},a.state={info:null,testData:null},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},"coverPage"===this.props.page?r.a.createElement(te,{passInfo:this.handlePassInfo}):null,"olddataPage"===this.props.page||"uploadPage"===this.props.page?r.a.createElement(de,{info:this.state.info,passTestData_toindex:this.handlePassTestData}):null,"testPage"===this.props.page||"feedbackPage"===this.props.page?r.a.createElement(je,{testData:this.state.testData}):null,"endPage"===this.props.page?r.a.createElement(Se,null):null)}}]),t}(r.a.Component);Te.protoTypes={classes:h.a.object.isRequired};var De=P(K()(Object(m.withStyles)(function(e){return{root:{textAlign:"center"},authors:e.overrides.authors}},{name:"Page"}),Object(N.b)(function(e){return{page:e.changePage.page}}))(Te));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N.a,{store:Z},r.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,t,a){e.exports=a.p+"static/media/start.6b74001f.png"},75:function(e,t,a){e.exports=a.p+"static/media/loading.a66bd14f.png"},79:function(e,t,a){e.exports=a.p+"static/media/end.89017076.png"},80:function(e,t,a){e.exports=a(177)}},[[80,1,2]]]);
//# sourceMappingURL=main.79ca574c.chunk.js.map