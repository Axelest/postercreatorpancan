(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{276:function(e,t,a){e.exports=a(481)},285:function(e,t,a){},369:function(e,t,a){},374:function(e,t,a){},379:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/momentsmatterlogo.65b8dd8a.png"},476:function(e,t,a){},481:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(74),c=a.n(o),s=a(19),i=a(20),l=a(22),u=a(21),m=a(23),d=a(11),p=a(489),h=a(25),g=a(498),f=(a(285),a(43)),b=a.n(f),E=function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.poster,t=e.backgroundImg,a=e.title,n=e.message;return r.a.createElement(p.a,null,r.a.createElement("div",{className:"preview-vertical"},r.a.createElement("div",{id:"preview-vertical",className:"image-half",style:{backgroundImage:"url( "+t+" )"}},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo-holder"},r.a.createElement("img",{src:b.a,alt:"moments matter logo"})))),r.a.createElement("div",{className:"body-copy"},r.a.createElement(g.a,{as:"h2",className:"title",textAlign:"center",content:a}),r.a.createElement("p",{className:"content"},n))),r.a.createElement("div",{className:"final-vertical",id:"final-vertical"},r.a.createElement("div",{className:"image-half",style:{backgroundImage:"url( "+t+" )"}},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo-holder"},r.a.createElement("div",{className:"white-drop"}),r.a.createElement("img",{src:b.a,alt:"moments matter logo"})))),r.a.createElement("div",{className:"body-copy"},r.a.createElement("h2",{className:"title"},a),r.a.createElement("p",{className:"content"},n))))}}]),t}(n.Component),v=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},null)(E),y=a(499),w=(a(369),function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.poster,t=e.backgroundImg,a=e.title,n=e.message;return r.a.createElement("div",null,r.a.createElement(y.a,{columns:2,className:"preview-horizontal"},r.a.createElement(y.a.Column,{id:"preview-horizontal",className:"image-half",style:{backgroundImage:"url( "+t+" )"}}),r.a.createElement(y.a.Column,{className:"text-half"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo-holder"},r.a.createElement("img",{src:b.a,alt:"moments matter logo"}))),r.a.createElement(g.a,{as:"h2",className:"title",textAlign:"left",content:a}),r.a.createElement("p",{className:"content"},n))),r.a.createElement(y.a,{columns:2,id:"final-horizontal"},r.a.createElement(y.a.Column,{className:"image",style:{backgroundImage:"url( "+t+" )"}}),r.a.createElement(y.a.Column,{className:"body-text"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo-holder"},r.a.createElement("img",{src:b.a,alt:"moments matter logo"}))),r.a.createElement(g.a,{as:"h2",className:"title",content:a}),r.a.createElement("p",{className:"content"},n))))}}]),t}(n.Component)),O=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},null)(w),j=(a(374),function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.poster,t=e.backgroundImg,a=e.message;return r.a.createElement("div",{id:"preview-square",className:"preview-square poster-preview-holder image-half",style:{backgroundImage:"url( "+t+" )"}},r.a.createElement("p",{className:"message-holder"},a),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"logo-holder"},r.a.createElement("img",{src:b.a,alt:"momments matter logo"}))))}}]),t}(n.Component)),k=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},null)(j),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).renderPreview=a.renderPreview.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderPreview",value:function(){switch(this.props.poster.layoutType){case 1:return r.a.createElement(k,null);case 2:return r.a.createElement(O,null);case 3:return r.a.createElement(v,null);default:return console.log("invalid layout type")}}},{key:"render",value:function(){return r.a.createElement(p.a,{className:"preview-container"},r.a.createElement("div",{id:"final-poster"},this.renderPreview()))}}]),t}(n.Component),S=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},null)(C),I=a(496),x=a(482),T=a(497),N=a(33),L=a(500),A=a(495),U="SET_LAYOUT",R="SET_LANGUAGE",M="SET_IMAGE",H="SET_LOGO",P="SET_MESSAGE",_="SET_TITLE",B="SET_STEP",z="SET_THEME",G="POSTER_CREATE",W="POSTER_SCALE",D="IMAGE_SET_POSITION",F="IMAGE_CROP",V=function(e){return{type:"LAYOUT_SET",payload:e}},q=function(e){return{type:"LANGUAGE_SET",payload:{language:e}}},Y=function(e){return{type:"STEP_SET",payload:{step:e}}},J=function(e){return{type:"THEME_SET",payload:{theme:e}}},X=function(e){return{type:"IMAGE_SET",payload:{image:e}}},$=function(e){return{type:"LOGO_SET",payload:{logo:e}}},K=function(e){return{type:"MESSAGE_SET",payload:{message:e}}},Q=function(e){return{type:"POSTER_CREATE_SUCCESS",payload:{posterImage:e}}},Z=function(e){return{type:"SCALE_SET",payload:{scale:e}}},ee=function(e){return{type:"TITLE_SET",payload:{title:e}}},te=function(e,t){return{type:"IMAGE_POSITION_SET",payload:{positionX:e,positionY:t}}},ae=function(e){return{type:"IMAGE_CROP_SET",payload:{backgroundImg:e}}},ne=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).layoutHandler=a.layoutHandler.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"layoutHandler",value:function(e){(0,this.props.setLayout)(e)}},{key:"render",value:function(){var e=this,t=this.props.poster;return r.a.createElement("div",{className:"step-card paddingTop"},r.a.createElement(g.a,{as:"h2",className:"text-center poster-h2"},"Choose your layout"),r.a.createElement(y.a,{centered:!0,columns:3},r.a.createElement(y.a.Column,{computer:5,mobile:10,tablet:5,textAlign:"center",className:"poster message only"===t.type?"active layout-selector":"layout-selector ",onClick:function(){return e.layoutHandler("poster message only")}},r.a.createElement(L.a,{raised:!0},r.a.createElement(A.a,null,r.a.createElement(A.a.Paragraph,null,r.a.createElement(A.a.Line,{length:"short"}),r.a.createElement(A.a.Line,{length:"medium"}),r.a.createElement(A.a.Line,{length:"short"}),r.a.createElement(A.a.Line,{length:"medium"}),r.a.createElement(A.a.Line,{length:"short"}),r.a.createElement(A.a.Line,{length:"medium"}),r.a.createElement(A.a.Line,{length:"short"})))),r.a.createElement("p",{className:"center layout-type-text"},"Square\xa0",r.a.createElement("br",null),"(Short message only)")),r.a.createElement(y.a.Column,{computer:7,mobile:16,tablet:7,textAlign:"center",className:"poster message and image"===t.type?"active layout-selector":"layout-selector",onClick:function(){return e.layoutHandler("poster message and image")}},r.a.createElement(L.a,{raised:!0},r.a.createElement(A.a,null,r.a.createElement(A.a.Header,{image:!0},r.a.createElement(A.a.Line,null),r.a.createElement(A.a.Line,null)),r.a.createElement(A.a.Paragraph,null,r.a.createElement(A.a.Line,{length:"medium"}),r.a.createElement(A.a.Line,{length:"short"}),r.a.createElement(A.a.Line,{length:"medium"})))),r.a.createElement("p",{className:"center layout-type-text"},"Horizontal\xa0",r.a.createElement("br",null),"(Share your story)")),r.a.createElement(y.a.Column,{computer:4,mobile:8,tablet:4,textAlign:"center",className:"post message only"===t.type?"active layout-selector":"layout-selector",onClick:function(){return e.layoutHandler("post message only")}},r.a.createElement(L.a,{raised:!0},r.a.createElement(A.a,null,r.a.createElement(A.a.Paragraph,null,r.a.createElement(A.a.Line,{length:"medium"}),r.a.createElement(A.a.Line,{length:"short"}),r.a.createElement(A.a.Line,{length:"medium"}),r.a.createElement(A.a.Line,{length:"short"}),r.a.createElement(A.a.Line,{length:"medium"}),r.a.createElement(A.a.Line,{length:"short"}),r.a.createElement(A.a.Line,{length:"medium"}),r.a.createElement(A.a.Line,{length:"short"}),r.a.createElement(A.a.Line,{length:"medium"})))),r.a.createElement("p",{className:"center layout-type-text"},"Vertical\xa0",r.a.createElement("br",null),"(Share your story)"))))}}]),t}(n.Component),re=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},function(e){return{setLayout:function(t){return e({type:U,payload:t})}}})(ne),oe=a(491),ce=a(493),se=a(492),ie=a(50),le=a.n(ie),ue=a(183),me=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={width:400,height:0,streaming:!1,video:null,canvas:null,startbutton:null,ready:!1,stream:null,isMobile:!1},a.startup=a.startup.bind(Object(d.a)(a)),a.clearPhoto=a.clearPhoto.bind(Object(d.a)(a)),a.startStream=a.startStream.bind(Object(d.a)(a)),a.makeBlob=a.makeBlob.bind(Object(d.a)(a)),a.stopStream=a.stopStream.bind(Object(d.a)(a)),a.isMobile=a.isMobile.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.startup(),this.isMobile()}},{key:"isMobile",value:function(){navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)?this.setState({isMobile:!0}):this.setState({isMobile:!1})}},{key:"startup",value:function(){var e=Object(ue.a)(le.a.mark(function e(){var t=this;return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({video:document.getElementById("video-stream"),canvas:document.getElementById("image-canvas"),startbutton:document.getElementById("takepicture")});case 2:this.state.video.addEventListener("canplay",function(e){t.state.streaming||(t.state.height=t.state.video.videoHeight/(t.state.video.videoWidth/t.state.width),t.state.video.setAttribute("width",t.state.width),t.state.video.setAttribute("height",t.state.height),t.state.canvas.setAttribute("width",t.state.width),t.state.canvas.setAttribute("height",t.state.height),t.state.streaming=!0,t.forceUpdate())},!1);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"startStream",value:function(){var e=this;if(this.state.ready){var t=this.props.setImage,a=this.state.canvas.getContext("2d");if(this.state.width&&this.state.height){this.state.canvas.width=this.state.width,this.state.canvas.height=this.state.height,a.drawImage(this.state.video,0,0,this.state.width,this.state.height);var n=this.state.canvas.toDataURL("image/jpeg");t(this.makeBlob(n)),this.forceUpdate(),this.stopStream()}}else{document.getElementById("camera-stream").style.display="block",navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(function(t){e.state.video.srcObject=t,e.state.video.play(),e.setState({ready:!0,stream:t})}).catch(function(e){return console.log("cannot open stream: ",e)})}}},{key:"clearPhoto",value:function(){(0,this.props.setImage)(null)}},{key:"stopStream",value:function(){document.getElementById("camera-stream").style.display="none",this.state.stream.getTracks().forEach(function(e){return e.stop()}),this.setState({ready:!1,stream:null})}},{key:"makeBlob",value:function(e){var t="";t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);for(var a=e.split(",")[0].split(":")[1].split(";")[0],n=new Uint8Array(t.length),r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return URL.createObjectURL(new Blob([n],{type:a}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"camera",id:"camera-stream",style:{display:"none"}},r.a.createElement("video",{id:"video-stream"})),r.a.createElement(T.a,{disabled:this.state.isMobile,color:"green",onClick:this.startStream},"Take photo"),this.state.ready?r.a.createElement("span",null,r.a.createElement(T.a,{color:"orange",onClick:this.clearPhoto},"Clear photo"),r.a.createElement(T.a,{color:"red",onClick:this.stopStream},"Cancel")):"",r.a.createElement("canvas",{id:"image-canvas",style:{display:"none"}}))}}]),t}(n.Component),de=Object(h.b)(function(e){return{poster:e.rootReducer}},function(e){return{setImage:function(t){return e({type:M,path:t})}}})(me),pe=a(247),he=a.n(pe),ge=(a(379),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={crop:{aspect:1,x:20,y:10,width:25,height:25}},a.handleOnCropChange=function(e){a.setState({crop:e})},a.handleOnCropComplete=function(e,t){var n=a.props.poster.image,r=a.props.imageCropChangeComplete,o=document.createElement("canvas");o.width=t.width,o.height=t.height;var c=o.getContext("2d"),s=new Image;s.src=n,s.onload=function(){c.drawImage(s,t.x,t.y,t.width,t.height,0,0,t.width,t.height);try{o.toBlob(function(e){r(URL.createObjectURL(e))})}catch(e){console.log("Error ocurred ignored")}}},a.handleOnCropChange=a.handleOnCropChange.bind(Object(d.a)(a)),a.imageLoaded=a.imageLoaded.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"imageLoaded",value:function(){document.getElementById("crop-holder-element").style.display="block"}},{key:"render",value:function(){var e=this.props.poster.image;return r.a.createElement("div",null,r.a.createElement(he.a,{src:e,crop:this.state.crop,onImageLoaded:this.imageLoaded,onComplete:this.handleOnCropComplete,onChange:this.handleOnCropChange}))}}]),t}(n.Component)),fe=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},function(e){return{imageCropChangeComplete:function(t){return e({type:"IMAGE_CROP",payload:{url:t}})}}})(ge),be=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={messageType:1,error:{message:"",active:!1},zoom:1},a.themeImage=a.themeImage.bind(Object(d.a)(a)),a.selectorHandler=a.selectorHandler.bind(Object(d.a)(a)),a.changeHandler=a.changeHandler.bind(Object(d.a)(a)),a.logoHandler=a.logoHandler.bind(Object(d.a)(a)),a.zoomChange=a.zoomChange.bind(Object(d.a)(a)),a.startStream=a.startStream.bind(Object(d.a)(a)),a.titleChangeHandler=a.titleChangeHandler.bind(Object(d.a)(a)),a.findImageOrientation=a.findImageOrientation.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"findImageOrientation",value:function(e,t){(0,this.props.setImage)(e,t)}},{key:"themeImage",value:function(e){var t=e.target.files[0];if(t.size>5242880)return console.log("Image way to big"),this.setState({error:{message:"File is way to big...",active:!0}});!function(e,t){var a=new FileReader,n=document.createElement("canvas"),r=n.getContext("2d"),o=new Image;a.onload=function(a){if(a.target){var c=a.target,s=new DataView(c.result);if(o.src=URL.createObjectURL(e),65496!==s.getUint16(0,!1))return t(-2,o.src);for(var i=s.byteLength,l=2;l<i;){if(s.getUint16(l+2,!1)<=8)return t(-1,o.src);var u=s.getUint16(l,!1);if(l+=2,65505===u){if(1165519206!==s.getUint32(l+=2,!1))return t(-1,o.src);var m=18761==s.getUint16(l+=6,!1);l+=s.getUint32(l+4,m);var d=s.getUint16(l,m);l+=2;for(var p=0;p<d;p++)if(274==s.getUint16(l+12*p,m)){var h=function(){var e=s.getUint16(l+12*p+8,m);return o.onload=function(){switch(n.width=o.width,n.height=o.height,r.save(),r.translate(o.width/2,o.height/2),e){case 1:return r.rotate(360*Math.PI/180),r.drawImage(o,-o.width/2,-o.height/2),r.restore(),t(e,n.toDataURL());case 8:return r.rotate(270*Math.PI/180),r.drawImage(o,-o.width/2,-o.height/2),r.restore(),t(e,n.toDataURL());case 3:return r.rotate(180*Math.PI/180),r.drawImage(o,-o.width/2,-o.height/2),r.restore(),t(e,n.toDataURL());case 6:return r.rotate(90*Math.PI/180),r.drawImage(o,-o.width/2,-o.height/2),r.restore(),t(e,n.toDataURL());default:return t(e,"nothing here")}},{v:t(e)}}();if("object"===typeof h)return h.v}}else{if(65280!=(65280&u))break;l+=s.getUint16(l,!1)}}return t(-1,o.src)}},a.readAsArrayBuffer(e)}(t,this.findImageOrientation)}},{key:"selectorHandler",value:function(e){(0,this.props.setMessage)(e)}},{key:"titleChangeHandler",value:function(e){(0,this.props.setTitle)(e.target.value)}},{key:"changeHandler",value:function(e){(0,this.props.setMessage)(e.target.value)}},{key:"logoHandler",value:function(e){var t=this.props.setLogo,a=e.target.files[0],n=URL.createObjectURL(a);if(a.size>5242880)return this.setState({error:{message:"File is way to big...",active:!0}});t(a,n)}},{key:"zoomChange",value:function(e,t){t.name;var a=t.value,n=this.props.setSize;this.setState({zoom:a}),n(a)}},{key:"startStream",value:function(){console.log("will start camera streaming here")}},{key:"render",value:function(){var e=this.props.poster;return r.a.createElement(p.a,{textAlign:"center"},r.a.createElement(g.a,{as:"h2",className:"text-center poster-h2"},"Upload your image"),r.a.createElement(oe.a,{icon:"file",iconPosition:"left",placeholder:"Upload Image",accept:"image/*",type:"file",onChange:this.themeImage}),r.a.createElement("p",null,"10 MB limit. Allowed types: gif png jpg jpeg."),r.a.createElement(g.a,{as:"h2",className:"text-center poster-h2 take-picture"},"Take a picture"),r.a.createElement("div",{className:"take-picture"},r.a.createElement(de,null)),r.a.createElement("div",{className:"cropper",id:"crop-holder-element"},r.a.createElement(g.a,{as:"h2",textAlign:"center",className:"text-center poster-h2"},"Edit Image"),r.a.createElement(fe,null)),r.a.createElement(g.a,{as:"h2",textAlign:"center",className:"text-center poster-h2"},"Share Your Moment"),r.a.createElement(ce.a,null,r.a.createElement(oe.a,{className:1===e.layoutType?"hide":"show paddingBottom",placeholder:"Poster title",type:"text",onChange:this.titleChangeHandler,defaultValue:e.title,maxLength:"35"}),r.a.createElement(se.a,{placeholder:"Write 'I am and will' message here. eg. 'I am a student and I will spread the word'.",maxLength:"150",onChange:this.changeHandler,defaultValue:e.message}),r.a.createElement("p",null,"Maximum 150 characters")))}}]),t}(n.Component),Ee=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},function(e){return{setImage:function(t,a){return e({type:M,payload:t,path:a})},setLogo:function(t,a){return e({type:H,payload:t,path:a})},setMessage:function(t){return e({type:P,payload:t})},setSize:function(t){return e({type:W,payload:t})},setTitle:function(t){return e({type:_,payload:t})}}})(be),ve=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).renderStep=a.renderStep.bind(Object(d.a)(a)),a.langHandler=a.langHandler.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"langHandler",value:function(e){(0,this.props.setLanguage)(e)}},{key:"renderStep",value:function(e){return r.a.createElement(Ee,null)}},{key:"render",value:function(){var e=this.props.poster;return r.a.createElement("div",{className:"step-card"},this.renderStep(e.layoutType))}}]),t}(n.Component),ye=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},function(e){return{setLanguage:function(t){return e({type:R,payload:t})}}})(ve),we=a(494),Oe=a(86),je=a.n(Oe),ke=function(){function e(){return Object(s.a)(this,e),this.screenLeft=void 0,this.screenTop=void 0,this.screenWidth=void 0,this.screenHeight=void 0,this.zoom=void 0,this.screenLeft=window.screenLeft||window.screenX,this.screenTop=window.screenTop||window.screenY,this.screenWidth=window.innerWidth||document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,this.screenHeight=window.innerHeight||document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,this.zoom=this.screenWidth/window.screen.availWidth,this}return Object(i.a)(e,[{key:"getWindow",value:function(e,t,a,n){var r=(this.screenWidth-a)/2/this.zoom+this.screenLeft,o=(this.screenHeight-n)/2/this.zoom+this.screenTop,c="scrollbars=yes, width="+a/this.zoom+", height="+n/this.zoom+", top="+o+", left="+r,s=window.open(e,t,c);window.focus&&s.focus()}}]),e}(),Ce=function(e){return fetch("https://core.pancan.org/api/poster/email",{method:"post",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:e}).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){return e})},Se=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={facebook:"https://www.facebook.com/sharer/sharer.php?u=https://www.pancan.org/get-involved/moments-matter/",twitter:"https://twitter.com/intent/tweet/?text="+encodeURIComponent("#MomentsMatter. Join me & @PanCAN in sharing our stories & raising #pancreaticcancer awareness so more patients can have more moments with their loved ones. http://pcan.at/MnM"),instagram:"https://www.instagram.com/pancan/"},a.socialHandler=a.socialHandler.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"socialHandler",value:function(e){(new ke).getWindow(e,"Share Poster Creator",530,400)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"social-button-container"},r.a.createElement(T.a,{circular:!0,color:"facebook",icon:"facebook",onClick:function(){return e.socialHandler(e.state.facebook)}}),r.a.createElement(T.a,{circular:!0,color:"twitter",icon:"twitter",onClick:function(){return e.socialHandler(e.state.twitter)}}),r.a.createElement(T.a,{circular:!0,color:"instagram",icon:"instagram",onClick:function(){return e.socialHandler(e.state.instagram)}}))}}]),t}(n.Component),Ie=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isUploaded:!1,posterId:-1,emailInfo:!1,user:{fname:"",lname:"",email:""},error:{error:!1,det:""},elementIds:{1:"preview-square",2:"final-horizontal",3:"final-vertical"}},a.controllers=a.controllers.bind(Object(d.a)(a)),a.downloadPosterImage=a.downloadPosterImage.bind(Object(d.a)(a)),a.shareTwitter=a.shareTwitter.bind(Object(d.a)(a)),a.shareFacebook=a.shareFacebook.bind(Object(d.a)(a)),a.dataURItoBlob=a.dataURItoBlob.bind(Object(d.a)(a)),a.base64ToBlob=a.base64ToBlob.bind(Object(d.a)(a)),a.emailModal=a.emailModal.bind(Object(d.a)(a)),a.formChange=a.formChange.bind(Object(d.a)(a)),a.error=a.error.bind(Object(d.a)(a)),a.sendToEmail=a.sendToEmail.bind(Object(d.a)(a)),a.checkErrors=a.checkErrors.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"downloadPosterImage",value:function(e){var t=this.props.poster,a=this.state.elementIds,n=document.getElementById(a[t.layoutType]);je()(n).then(function(e){e.toBlob(function(e){var t=URL.createObjectURL(e),a=document.createElement("a");a.href=t,a.download="poster.jpeg",a.click()},"image/jpeg",1)})}},{key:"sendToEmail",value:function(){var e=Object(ue.a)(le.a.mark(function e(){var t,a,n,r,o=this;return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.poster,a=this.state.elementIds,n=document.getElementById(a[t.layoutType]),r=this.state.isUploaded,this.checkErrors()){e.next=7;break}return e.next=7,je()(n).then(function(){var e=Object(ue.a)(le.a.mark(function e(t){var a,n,c,s;return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.toDataURL("image/jpeg",1),n={key:"5994766c58613900370b6153",image:a,lname:o.state.user.lname,email:o.state.user.email,fname:o.state.user.fname},c=Object.keys(n).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])}).join("&"),r){e.next=8;break}return e.next=6,Ce(c);case 6:s=e.sent,o.setState({isUploaded:!0,posterId:s.id,error:{error:!1},emailInfo:!1});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"formChange",value:function(e,t){var a=t.name,n=t.value,r=this.state.user,o=r.fname,c=r.lname,s=r.email;switch(a){case"lname":this.setState({user:{lname:n,fname:o,email:s}});break;case"fname":this.setState({user:{lname:c,fname:n,email:s}});break;case"email":this.setState({user:{lname:c,fname:o,email:n}});break;default:console.log(this.state.user)}}},{key:"error",value:function(){return r.a.createElement("b",{style:{color:"red"}},"Error! make sure to have vaild form values.")}},{key:"checkErrors",value:function(){var e=this.state.user,t=e.lname,a=e.fname,n=e.email;return(""===t||""===a||""===n)&&(this.setState({error:{error:!0}}),!0)}},{key:"emailModal",value:function(){var e=this,t=this.state,a=t.emailInfo,n=t.isUploaded;return r.a.createElement(we.a,{open:a,trigger:r.a.createElement(T.a,{color:"purple",disabled:!!n,content:n?"Email sent!":"Send via Email",onClick:function(){return e.setState(function(e){return{emailInfo:!e.emailInfo}})}}),basic:!0,size:"small"},r.a.createElement(g.a,{icon:"send",content:"Send me my poster"}),r.a.createElement(we.a.Content,null,r.a.createElement("strong",{className:"over-image"},"Your email information:"),r.a.createElement(ce.a,null,r.a.createElement(ce.a.Field,{required:!0},r.a.createElement("label",{style:{color:"#ffffff"}},"First name:"),r.a.createElement(oe.a,{placeholder:"First Name",name:"fname",type:"text",onChange:this.formChange})),r.a.createElement(ce.a.Field,{required:!0},r.a.createElement("label",{style:{color:"#ffffff"}},"Last name:"),r.a.createElement(oe.a,{placeholder:"Last Name",name:"lname",type:"text",onChange:this.formChange})),r.a.createElement(ce.a.Field,{required:!0},r.a.createElement("label",{style:{color:"#ffffff"}},"Email:"),r.a.createElement(oe.a,{name:"email",placeholder:"Email address",type:"email",onChange:this.formChange})))),r.a.createElement(we.a.Actions,null,r.a.createElement(T.a,{color:"red",inverted:!0,onClick:function(){return e.setState(function(e){return{emailInfo:!e.emailInfo}})}},r.a.createElement(N.a,{name:"remove"}),"No"),r.a.createElement(T.a,{color:"green",inverted:!0,onClick:this.sendToEmail},r.a.createElement(N.a,{name:"mail"}),"Send"),this.state.error.error?this.error():""))}},{key:"shareTwitter",value:function(){var e=this,t=document.getElementById("final-poster"),a=this.state,n=a.isUploaded,r=a.posterId;je()(t,{scale:2}).then(function(){var t=Object(ue.a)(le.a.mark(function t(a){var o,c,s,i;return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=a.toDataURL("image/png"),c={key:"5994766c58613900370b6153",image:o},n){t.next=10;break}return t.next=5,Ce(c);case 5:i=t.sent,e.setState({isUploaded:!0,posterId:i.id}),s="https://twitter.com/intent/tweet/?text="+encodeURIComponent("PanCAN Poster #demandbetter #advocate at http://www.worldpancreaticcancercoalition.org/poster/"+i.id),t.next=11;break;case 10:s="https://twitter.com/intent/tweet/?text="+encodeURIComponent("PanCAN Poster #demandbetter #advocate at http://www.worldpancreaticcancercoalition.org/poster/"+r);case 11:(new ke).getWindow(s,"Share Poster",530,400);case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"shareFacebook",value:function(){var e=this,t=document.getElementById("final-poster"),a=this.state,n=a.isUploaded,r=a.posterId;je()(t,{scale:2}).then(function(){var t=Object(ue.a)(le.a.mark(function t(a){var o,c,s,i;return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=a.toDataURL("image/png"),s={key:"5994766c58613900370b6153",image:o},n){t.next=10;break}return t.next=5,Ce(s);case 5:i=t.sent,e.setState({isUploaded:!0,posterId:i.id}),c="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent("http://www.worldpancreaticcancercoalition.org/poster/"+i.id),t.next=11;break;case 10:c="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent("http://www.worldpancreaticcancercoalition.org/poster/"+r);case 11:(new ke).getWindow(c,"Share Poster",530,200);case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"dataURItoBlob",value:function(e){for(var t=atob(e.split(",")[1]),a=new ArrayBuffer(t.length),n=new Uint8Array(a),r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return new Blob([a],{type:"image/png"})}},{key:"base64ToBlob",value:function(e){var t="";t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);for(var a=e.split(",")[0].split(":")[1].split(";")[0],n=new Uint8Array(t.length),r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return new Blob([n],{type:a})}},{key:"controllers",value:function(e){var t=this;switch(e){case 1:case 2:case 3:case 4:return r.a.createElement(y.a,{container:!0,columns:1,stackable:!0},r.a.createElement(y.a.Column,{textAlign:"center"},r.a.createElement(T.a,{content:"Download JPG",className:"gutter-mobile",color:"purple",onClick:function(){return t.downloadPosterImage("image")}})));default:return r.a.createElement("div",null)}}},{key:"render",value:function(){var e=this.props.poster;return r.a.createElement(p.a,{className:"step paddingTop"},r.a.createElement(g.a,{as:"h2",content:"#MomentsMatter",textAlign:"center",className:"poster-h2"}),r.a.createElement("p",{style:{textAlign:"center"},className:"paddingBottom over-solid leadin-copy"},"Share your Moment with the world by downloading your image and sharing it to social media with #MomentsMatter and tagging us @PanCAN."),r.a.createElement(Se,null),r.a.createElement("br",null)," ",this.controllers(e.layoutType))}}]),t}(n.Component),xe=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},function(e){return{setPoster:function(t){return e({type:G,payload:t})}}})(Ie),Te=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={top:0,isMobile:!1},a.stepHandler=a.stepHandler.bind(Object(d.a)(a)),a.stepRender=a.stepRender.bind(Object(d.a)(a)),a.setView=a.setView.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.setView,!1),this.setView()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("resize",this.setView,!1)}},{key:"setView",value:function(){if(window.innerWidth<1200){var e=document.getElementById("controller-container-app").offsetHeight+80;return this.setState({isMobile:!0,top:e})}return this.setState({isMobile:!1})}},{key:"stepHandler",value:function(e){var t=this.props.setStep;this.state.isMobile&&(document.body.scrollTop=this.state.top),t(e)}},{key:"stepRender",value:function(){switch(this.props.poster.step){case 1:return r.a.createElement(re,null);case 2:return r.a.createElement(ye,null);case 3:return r.a.createElement(xe,null)}}},{key:"render",value:function(){var e=this,t=this.props.poster;return r.a.createElement("div",{className:"controller-container",id:"controller-container-app"},r.a.createElement(p.a,null,r.a.createElement(I.a.Group,{fluid:!0,unstackable:!0},r.a.createElement(I.a,{active:1===t.step,onClick:function(){return e.stepHandler(1)},className:"step-button"},r.a.createElement(x.a,{src:"https://0b9aafecab229788ebf1-90f622f94aeb4d165ef7469777c28f31.ssl.cf2.rackcdn.com/poster-creator/NavigationIcons-01.png",size:"mini"}),r.a.createElement(I.a.Content,{className:"step-text"},r.a.createElement(I.a.Title,null,"Start"))),r.a.createElement(I.a,{active:2===t.step,onClick:function(){return e.stepHandler(2)},className:"step-button"},r.a.createElement(x.a,{src:"https://0b9aafecab229788ebf1-90f622f94aeb4d165ef7469777c28f31.ssl.cf2.rackcdn.com/poster-creator/NavigationIcons-02.png",size:"mini"}),r.a.createElement(I.a.Content,{className:"step-text"},r.a.createElement(I.a.Title,null,"Customize"))),r.a.createElement(I.a,{active:3===t.step,onClick:function(){return e.stepHandler(3)},className:"step-button"},r.a.createElement(x.a,{src:"https://0b9aafecab229788ebf1-90f622f94aeb4d165ef7469777c28f31.ssl.cf2.rackcdn.com/poster-creator/NavigationIcons-03.png",size:"mini"}),r.a.createElement(I.a.Content,{className:"step-text"},r.a.createElement(I.a.Title,null,"Save & Share")))),this.stepRender(),r.a.createElement(T.a,{onClick:function(){return e.stepHandler(t.step-1)},className:t.step>1?"back-button show":" hide"},r.a.createElement(N.a,{name:"arrow left"}),"\xa0Back"),r.a.createElement(T.a,{className:t.step<3?"next-button show":" hide",onClick:function(){return e.stepHandler(t.step+1)}},"Next\xa0",r.a.createElement(N.a,{name:"arrow right"}))))}}]),t}(n.Component),Ne=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},function(e){return{setStep:function(t){return e({type:B,payload:t})}}})(Te),Le=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{container:!0,columns:"equal",divided:!0,stackable:!0,id:"controller-container-app"},r.a.createElement(y.a.Column,{mobile:16,tablet:16,computer:16,largeScreen:10},r.a.createElement(Ne,null)),r.a.createElement(y.a.Column,{mobile:16,tablet:16,computer:16,largeScreen:6,className:"purple-gradient-bck",style:{paddingTop:25,display:"flex",alignItems:"center",minHeight:"100%"}},r.a.createElement(S,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ae=a(264),Ue=a(36),Re=a(265),Me=a(34),He=Object(Ue.combineReducers)({poster:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{step:1,type:"poster message only",layoutType:1,language:"english",message:"Place holder",createdDate:Date(),shareNetwork:"",theme:"pancan-purple",image:"",logo:"https://www.pancan.org//wp-content/uploads/2018/05/pancan-logo.png",posterImage:{},scale:1,title:"",positionX:0,positionY:0,backgroundImg:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LAYOUT_SET":case"STEP_SET":case"LANGUAGE_SET":case"THEME_SET":case"MESSAGE_SET":case"LOGO_SET":case"IMAGE_SET":case"POSTER_CREATE_SUCCESS":case"SCALE_SET":case"TITLE_SET":case"IMAGE_POSITION_SET":case"IMAGE_CROP_SET":return Object(Me.a)({},e,t.payload);default:return e}}}),Pe=a(24),_e=le.a.mark(Qe),Be=le.a.mark(Ze),ze=le.a.mark(et),Ge=le.a.mark(tt),We=le.a.mark(at),De=le.a.mark(nt),Fe=le.a.mark(rt),Ve=le.a.mark(ot),qe=le.a.mark(ct),Ye=le.a.mark(st),Je=le.a.mark(it),Xe=le.a.mark(lt),$e=le.a.mark(ut),Ke=le.a.mark(mt);function Qe(){return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Pe.c)(U,Ze);case 2:return e.next=4,Object(Pe.c)(R,et);case 4:return e.next=6,Object(Pe.c)(B,tt);case 6:return e.next=8,Object(Pe.c)(z,at);case 8:return e.next=10,Object(Pe.c)(P,nt);case 10:return e.next=12,Object(Pe.c)(M,rt);case 12:return e.next=14,Object(Pe.c)(H,ot);case 14:return e.next=16,Object(Pe.c)(G,ct);case 16:return e.next=18,Object(Pe.c)(W,st);case 18:return e.next=20,Object(Pe.c)(_,it);case 20:return e.next=22,Object(Pe.c)(D,lt);case 22:return e.next=24,Object(Pe.c)(F,ut);case 24:case"end":return e.stop()}},_e)}function Ze(e){var t;return le.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:a.t0=e.payload,a.next="poster message only"===a.t0?3:"poster message and image"===a.t0?5:"post message only"===a.t0?7:"post image"===a.t0?9:11;break;case 3:return t={type:"poster message only",layoutType:1},a.abrupt("break",11);case 5:return t={type:"poster message and image",layoutType:2},a.abrupt("break",11);case 7:return t={type:"post message only",layoutType:3},a.abrupt("break",11);case 9:return t={type:"post image",layoutType:4},a.abrupt("break",11);case 11:return a.next=13,Object(Pe.b)(V(t));case 13:case"end":return a.stop()}},Be)}function et(e){return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Pe.b)(q(e.payload));case 2:case"end":return t.stop()}},ze)}function tt(e){return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Pe.b)(Y(e.payload));case 2:case"end":return t.stop()}},Ge)}function at(e){return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Pe.b)(J(e.payload));case 2:case"end":return t.stop()}},We)}function nt(e){return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Pe.b)(K(e.payload));case 2:case"end":return t.stop()}},De)}function rt(e){return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Pe.b)(X(e.path));case 2:case"end":return t.stop()}},Fe)}function ot(e){return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Pe.b)($(e.path));case 2:case"end":return t.stop()}},Ve)}function ct(e){return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Pe.b)(Q(e.payload));case 2:case"end":return t.stop()}},qe)}function st(e){return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Pe.b)(Z(e.payload));case 2:case"end":return t.stop()}},Ye)}function it(e){return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Pe.b)(ee(e.payload));case 2:case"end":return t.stop()}},Je)}function lt(e){return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Pe.b)(te(e.payload.x,e.payload.y));case 2:case"end":return t.stop()}},Xe)}function ut(e){return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Pe.b)(ae(e.payload.url));case 2:case"end":return t.stop()}},$e)}function mt(){var e;return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=[Qe()],t.next=3,Object(Pe.a)(e);case 3:case"end":return t.stop()}},Ke)}var dt=Object(Ae.composeWithDevTools)({}),pt=Object(Re.a)(),ht=[pt],gt=dt(Ue.applyMiddleware.apply(void 0,ht)),ft=Object(Ue.combineReducers)({rootReducer:He}),bt=Object(Ue.createStore)(ft,gt);pt.run(mt);a(476);c.a.render(r.a.createElement(h.a,{store:bt},r.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[276,2,1]]]);
//# sourceMappingURL=main.d7c0f867.chunk.js.map