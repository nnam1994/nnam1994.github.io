(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],d=0,u=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},3467:function(t,e,a){},"48ca":function(t,e,a){"use strict";var n=a("9130"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Profile"),a("v-main",[a("Content")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{fixed:"",app:"",color:"#1B1B1B",width:"350px"}},[a("v-layout",{staticClass:"pl-5 pt-12",attrs:{"justify-center":"","align-left":"",wrap:"",column:""}},[a("h1",{staticClass:"display-2 white--text"},[t._v("Jason Nam "),a("v-btn",{attrs:{icon:"",href:"https://www.linkedin.com/in/nokhimnam"}},[a("v-icon",{staticClass:"mt-2 mr-8",attrs:{mid:"",color:"white"}},[t._v("mdi-linkedin")])],1)],1),a("span",{staticClass:"display-1 pb-5 font-weight-light title orange--text"},[t._v("SOFTWARE DEVELOPER ")]),a("v-responsive",{staticClass:"pt-5",attrs:{"max-width":"300",height:"100%"}},[a("h2",{staticClass:"orange--text"},[t._v("University of Washington Tacoma")]),a("p",{staticClass:"white--text"},[t._v("B.S. Science in Computer Science and Systems "),a("br"),a("span",{staticClass:"body-2 font-weight-light"},[t._v("December 2016")]),a("br"),a("span",{staticClass:"body-2 font-weight-light"},[t._v("Cumulative GPA: 3.64")])])]),a("div",{staticClass:"divider"})],1),a("div",{staticClass:"pl-5"},[a("v-row",{staticStyle:{height:"500px"},attrs:{align:"end"}},[a("div",t._l(t.contacts,(function(e,n){return a("v-row",{key:n},[a("v-col",{attrs:{cols:"2"}},[a("v-icon",{staticClass:"pl-2",attrs:{size:"40px",color:"orange"}},[t._v(t._s(e.icon))])],1),a("v-col",{attrs:{cole:"8",width:"100%"}},[a("p",{staticClass:"orange--text subheading pl-3"},[t._v(t._s(e.attribute)+" "),a("br"),a("span",{staticClass:"white--text body-2"},[t._v(t._s(e.value))])])])],1)})),1)])],1)],1)},r=[],l={name:"App",data:function(){return{contacts:[{icon:"mdi-phone",attribute:"Contact",value:"(425) 287-1721"},{icon:"mdi-email",attribute:"Email",value:"namnokhim@gmail.com"},{icon:"mdi-google-maps",attribute:"Address",value:"Indianapolis, Indiana"}]}}},c=l,p=(a("48ca"),a("2877")),d=a("6544"),u=a.n(d),v=a("8336"),f=a("62ad"),m=a("132d"),h=a("a722"),g=a("f774"),y=a("6b53"),w=a("0fd9"),b=Object(p["a"])(c,o,r,!1,null,"6277372f",null),_=b.exports;u()(b,{VBtn:v["a"],VCol:f["a"],VIcon:m["a"],VLayout:h["a"],VNavigationDrawer:g["a"],VResponsive:y["a"],VRow:w["a"]});var C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{style:{background:t.$vuetify.theme.themes.dark.background},attrs:{height:"100%",width:"100%",flat:"",tile:""}},[a("Project"),a("Div",{staticClass:"pt-12"}),a("v-layout",{staticClass:"pl-5 pt-12",attrs:{"justify-left":"","align-left":""}},[a("v-icon",{attrs:{size:"40px",color:"orange"}},[t._v("mdi-briefcase")]),a("h1",{staticClass:"pl-3 white--text display-1"},[t._v("MY JOURNEY SO FAR")])],1),a("div",{staticClass:"pt-12"}),a("v-layout",{attrs:{"justify-left":"","align-left":""}},[a("v-timeline",{attrs:{"align-top":""}},t._l(t.experiences,(function(e,n){return a("v-timeline-item",{key:n,attrs:{color:"orange",right:""},scopedSlots:t._u([{key:"opposite",fn:function(){return[a("p",{staticClass:"white--text"},[a("span",{staticClass:"headline"},[t._v(t._s(e.workTitle))]),a("br"),a("br"),t._v(t._s(e.company)+" "),a("br"),t._v(t._s(e.period)+" ")])]},proxy:!0}],null,!0)},[a("div",[a("h2",{staticClass:"display-2 font-weight-light mb-4 orange--text"},[t._v(t._s(e.descriptionTitle))]),a("div",[a("v-responsive",{attrs:{"max-width":"850"}},[a("div",{staticClass:"white--text pre-formatted"},[t._v(t._s(e.description))])])],1)])])})),1)],1),a("Skills")],1)},x=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{staticClass:"pl-5 pt-12",attrs:{"justify-left":"","align-left":""}},[a("v-icon",{attrs:{size:"40px",color:"orange"}},[t._v("mdi-xml ")]),a("h1",{staticClass:"pl-3 display-1 white--text"},[t._v("MY PERSONAL PROJECTS")])],1),a("v-layout",{staticClass:"pl-3 pt-12",attrs:{"justify-left":"","align-left":""}},[a("v-row",[a("v-col",{attrs:{cols:"5"}},[a("v-expansion-panels",{attrs:{dark:"",popout:""},model:{value:t.panelIndex,callback:function(e){t.panelIndex=e},expression:"panelIndex"}},t._l(t.projects,(function(e){return a("v-expansion-panel",{key:e.id},[a("v-expansion-panel-header",{attrs:{color:"#424242"}},[a("div",{staticClass:"white--text title font-weight-light"},[t._v(t._s(e.name))])]),a("v-expansion-panel-content",{staticStyle:{background:"#212121"}},[a("v-row",{staticClass:"pt-6 text-wrap",attrs:{justify:"start",align:"start"}},[a("v-icon",{staticClass:"pl-7",attrs:{size:"20px",color:"orange"}},[t._v("mdi-link-variant")]),a("p",{staticClass:"ml-3 white--text text-wrap",staticStyle:{width:"30rem"}},[t._v(t._s(e.url))])],1),a("v-row",{attrs:{justify:"start",align:"start"}},[a("v-icon",{staticClass:"pl-7",attrs:{size:"20px",color:"orange"}},[t._v("mdi-tools")]),a("p",{staticClass:"ml-3 white--text "},[t._v(t._s(e.technologies))])],1),a("v-row",{attrs:{justify:"start",align:"start"}},[a("v-icon",{staticClass:"pl-7",attrs:{size:"20px",color:"orange"}},[t._v("mdi-calendar-range")]),a("p",{staticClass:"ml-3 white--text"},[t._v(t._s(e.date))])],1)],1)],1)})),1)],1),a("v-col",{staticClass:"pl-12 pt-n12",attrs:{cols:"7"}},[a(t.projects[t.panelIndex].content,{tag:"component"})],1)],1)],1)],1)},j=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{attrs:{justify:"start",align:"start",dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"orange--text display-4  pl-12 animated fadeInRight"},[t._v("Online Portfolio")])]),a("v-col",[a("p",{staticClass:"white--text title font-weight-light mt-n5 animated fadeInLeft"},[t._v("Web Application")])])],1),a("v-row",{attrs:{justify:"end",align:"end",dense:""}},[a("v-col",{attrs:{cols:"10"}},[a("v-responsive",{staticClass:"white--text",attrs:{"max-width":"500"}},[a("p",{staticClass:"animated fadeInUp f-delay"},[t._v("This is a simple online portfolio, which you are seeing right now, created using Vue.JS and Vuetify. This portfolio provides a brief description of all my projects, experenices, and my skill set. "),a("br"),a("br"),t._v(" "),a("span",{staticClass:"caption"},[t._v("**The current version of the project is not responsive")])])])],1)],1)],1)},V=[],P={name:"Project_s1",data:function(){return{}}},I=P,O=(a("96ce"),Object(p["a"])(I,k,V,!1,null,"537a1b69",null)),T=O.exports;u()(O,{VCol:f["a"],VResponsive:y["a"],VRow:w["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{attrs:{justify:"start",align:"start",dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"display-4 orange--text pl-12 animated fadeInRight"},[t._v("Demie's Cake")])]),a("v-col",[a("p",{staticClass:"white--text title font-weight-light mt-n5 animated fadeInLeft"},[t._v("Web Application")])])],1),a("v-row",{attrs:{justify:"end",align:"end",dense:""}},[a("v-col",{attrs:{cols:"10"}},[a("v-responsive",{staticClass:"white--text",attrs:{"max-width":"500"}},[a("p",{staticClass:"description-color animated fadeInUp f-delay"},[t._v("A prototype web application created using Vue.JS and Vuetify for a local bakery business in Indianapolis. The application displays different products information and allows customers to place orders via the built-in order form inside the application. Customer orders will be processed by a back-end service written in Spring framework. "),a("br"),a("br"),t._v(" "),a("span",{staticClass:"caption"},[t._v("**The current version of the project is not responsive")])])])],1)],1)],1)},E=[],R={name:"Project_s3",data:function(){return{}}},M=R,J=(a("8cce"),Object(p["a"])(M,A,E,!1,null,"653cab25",null)),L=J.exports;u()(J,{VCol:f["a"],VResponsive:y["a"],VRow:w["a"]});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{attrs:{justify:"start",align:"start",dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"display-4 orange--text pl-12 animated fadeInRight"},[t._v("TV listing")])]),a("v-col",[a("p",{staticClass:"white--text title font-weight-light mt-n5 animated fadeInLeft"},[t._v("Android Mobile Application")])])],1),a("v-row",{attrs:{justify:"end",align:"end",dense:""}},[a("v-col",{attrs:{cols:"10"}},[a("v-responsive",{staticClass:"white--text",attrs:{"max-width":"500"}},[a("p",{staticClass:"animated fadeInUp f-delay"},[t._v("An Android-based mobile application provides reliable listings for all major TV channels in Hong Kong. This is a project that I collabed with another developer in Hong Kong. The application is built in Android Studio. TV show details are extracted from plain-text websites using PHP. After extraction, data will be sent to a database for production use.")])])],1)],1)],1)},W=[],$={name:"Project_s3",data:function(){return{}}},z=$,B=(a("c678"),Object(p["a"])(z,D,W,!1,null,"4803bafa",null)),N=B.exports;u()(B,{VCol:f["a"],VResponsive:y["a"],VRow:w["a"]});var F={name:"Project",components:{Project_s1:T,Project_s2:L,Project_s3:N},data:function(){return{panelIndex:0,projects:[{id:"0",name:"Online Portfolio - Web Application",date:"Fall 2020",technologies:"Node JS, Vue.JS, Vuetify",url:"N/A",content:"Project_s1"},{id:"1",name:"Demie's Cake - Web Application",date:"Summer 2020",technologies:"Node JS, Vue.JS, Vuetify, Java, Spring",url:"http://www.hktvlist.com/index.html",content:"Project_s2"},{id:"2",name:"TV listing - Android Mobile Application",date:"Fall - 2017",technologies:"PHP, Java, Spring",url:"https://play.google.com/store/apps/details?id=com.hktvlisting.v2&hl=en_US",content:"Project_s3"}]}},watch:{panelIndex:function(t,e){this.panelIndex="undefined"===typeof t?e:t}},methods:{}},H=F,U=(a("838b"),a("cd55")),Y=a("49e2"),Q=a("c865"),G=a("0393"),K=Object(p["a"])(H,S,j,!1,null,"f9315c62",null),q=K.exports;u()(K,{VCol:f["a"],VExpansionPanel:U["a"],VExpansionPanelContent:Y["a"],VExpansionPanelHeader:Q["a"],VExpansionPanels:G["a"],VIcon:m["a"],VLayout:h["a"],VRow:w["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{staticClass:"pl-5 pt-12",attrs:{"justify-left":"","align-left":""}},[a("v-icon",{attrs:{size:"40px",color:"orange"}},[t._v("mdi-toolbox")]),a("h1",{staticClass:"pl-3 white--text display-1"},[t._v("MY TOOLBOX")])],1),a("v-layout",{staticClass:"pl-5 pt-12",attrs:{"justify-left":"","align-left":""}},[a("v-row",{attrs:{align:"start",dense:""}},t._l(t.skills,(function(e,n){return a("v-col",{key:n,attrs:{cols:"2",align:"center"}},[a("v-progress-circular",{attrs:{value:e.value,size:"120",rotate:"90",width:"6",color:"orange"}},[a("div",{staticClass:"white--text subheading font-weight-light"},[t._v(t._s(e.competency))])]),a("div",[a("v-icon",{staticClass:"pt-3",attrs:{size:"30",color:"orange"}},[t._v(t._s(e.icon))]),a("p",{staticClass:"white--text title"},[t._v(" "+t._s(e.name))])],1)],1)})),1)],1),a("v-layout",{staticClass:"pl-12 pt-n12",attrs:{"justify-left":"","align-left":""}},[a("Chips")],1)],1)},Z=[],tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"8"}},t._l(t.chips,(function(e,n){return a("v-chip",{key:n,staticClass:"ma-1",attrs:{outlined:"",large:"",color:"grey"}},[a("v-icon",{attrs:{left:"",color:"orange"}},[t._v(" "+t._s(e.icon)+" ")]),a("div",{staticClass:"white--text"},[t._v(t._s(e.name))])],1)})),1)],1)],1)},et=[],at={name:"Chips",data:function(){return{chips:[{name:"Vue.JS",icon:"mdi-vuejs"},{name:"Vuetify",icon:"mdi-vuetify"},{name:"Salesforce Marketing Cloud",icon:"mdi-salesforce"},{name:"Spring",icon:"mdi-code-tags"},{name:"Spring boot",icon:"mdi-code-tags"},{name:"MySQL Workbench",icon:"mdi-database-search"},{name:"Postman",icon:"mdi-protocol"},{name:"Visual Studio Code",icon:"mdi-microsoft-visual-studio-code "},{name:"Eclipse",icon:"mdi-code-tags"},{name:"NetBeans",icon:"mdi-code-tags"},{name:"Android Studio",icon:"mdi-android"},{name:"Spring Tool Suite",icon:"mdi-code-tags"},{name:"Github",icon:"mdi-github "}]}},watch:{},methods:{}},nt=at,it=a("cc20"),st=Object(p["a"])(nt,tt,et,!1,null,"6a0ba7ba",null),ot=st.exports;u()(st,{VChip:it["a"],VCol:f["a"],VIcon:m["a"],VRow:w["a"]});var rt={name:"Skills",components:{Chips:ot},data:function(){return{skills:[{key:1,name:"Java",icon:"mdi-language-java",competency:"Proficient",value:80},{key:2,name:"SQL",icon:"mdi-database-search",competency:"Proficient",value:80},{key:3,name:"JavaScript",icon:"mdi-language-javascript ",competency:"Intermediate",value:60},{key:4,name:"Php",icon:"mdi-language-php ",competency:"Intermediate",value:50}]}},watch:{},methods:{}},lt=rt,ct=a("490a"),pt=Object(p["a"])(lt,X,Z,!1,null,"5fb54039",null),dt=pt.exports;u()(pt,{VCol:f["a"],VIcon:m["a"],VLayout:h["a"],VProgressCircular:ct["a"],VRow:w["a"]});var ut={name:"HelloWorld",components:{Project:q,Skills:dt},data:function(){return{computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}},experiences:[{workTitle:"Marketing Cloud - Email Specialist",company:"Tata Consultancy Services",period:"Aug 2017 – Present",descriptionTitle:"Road to Salesforce",description:"In 2017, I received my first on-site project as a Salesforce Marketing Cloud support representative. In 2019, because of the mentorship and knowledge my colleague has given me, I was able to pass my Salesforce Email Specialist exam and became a certified Email Specialist. Moreover, I was given the opportunity to take on a bigger chellange and became the support team lead. \n\nCurrently, our team provide on-going administrative assistant and technical consulting for over 60+ business stakeholders across the global on all major Marketing Cloud applications such as Email Studio, Journey Builder, Web Studio, and Automation Studio.\n\nOver the years, our team has worked with customers to identify bugs in platform solutions to drive customer success. We provide development approach oversight to make sure customers receive the support they needed.\n\nFurthermore, we have helped customers to implement different marketing assets such as personalized emails with AMPScripts, dynamic contents, journeys, landing pages, and automations in Marketing Cloud and develop various automation activities such as SQL query, Filter, and Data extract. \n\nAside from helping our customers, we also provide end users and internal staffs technical expertise, development guidelines, training, and recommendations focused on marketing best practices."},{workTitle:"Software Developer",company:"Tata Consultancy Services",period:"Feb 2017 - Jul 2017",descriptionTitle:"My advanture begins here",description:"My career began as an associate software developer in a team of three in a R&D department. We participated in all phases of software development life cycle including design, development, testing, and deployment.\n\nIn addition, we were responsible to research new technologies for product development and existing functionality enhancements.\n\nDuring these five months, we completed two POCs for two potential clients:\n\n1. Spring application deployment\n-    Developed and deployed a simple Spring application to the OpenShift platform as a Docker image.\n-    Successfully created a continuous integration delivery pipeline between Jenkins and the OpenShift platform for the application.\n\n2. Chatbot application conversion\n-    Converted a Chatbot application written in JavaScript into TypeScript\n-    Integrated the application with IBM Watson API to analyze user’s input. "}]}}},vt=ut,ft=(a("cdf5"),a("b0af")),mt=a("8414"),ht=a("1e06"),gt=Object(p["a"])(vt,C,x,!1,null,"a56fae1a",null),yt=gt.exports;u()(gt,{VCard:ft["a"],VIcon:m["a"],VLayout:h["a"],VResponsive:y["a"],VTimeline:mt["a"],VTimelineItem:ht["a"]});var wt={name:"App",components:{Profile:_,Content:yt},data:function(){return{}}},bt=wt,_t=a("7496"),Ct=a("f6c4"),xt=Object(p["a"])(bt,i,s,!1,null,"888cb1b0",null),St=xt.exports;u()(xt,{VApp:_t["a"],VMain:Ct["a"]});var jt=a("f309");n["a"].use(jt["a"]);var kt=new jt["a"]({theme:{themes:{dark:{background:"#232b2b"}}}});n["a"].use(kt),n["a"].config.productionTip=!1,new n["a"]({vuetify:kt,render:function(t){return t(St)}}).$mount("#app")},"838b":function(t,e,a){"use strict";var n=a("9937"),i=a.n(n);i.a},"8cce":function(t,e,a){"use strict";var n=a("3467"),i=a.n(n);i.a},9130:function(t,e,a){},9141:function(t,e,a){},"96ce":function(t,e,a){"use strict";var n=a("dd22"),i=a.n(n);i.a},9937:function(t,e,a){},a30b:function(t,e,a){},c678:function(t,e,a){"use strict";var n=a("9141"),i=a.n(n);i.a},cdf5:function(t,e,a){"use strict";var n=a("a30b"),i=a.n(n);i.a},dd22:function(t,e,a){}});
//# sourceMappingURL=app.2d498b94.js.map