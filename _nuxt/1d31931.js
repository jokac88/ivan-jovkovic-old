(window.webpackJsonp=window.webpackJsonp||[]).push([[20,6,21],{351:function(t,e,r){var content=r(355);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("ace21b20",content,!0,{sourceMap:!1})},352:function(t,e,r){"use strict";r.r(e);r(12);var c={props:{property:String},methods:{toggle:function(t){var e=this;"/"===this.$route.path?"Hide"===t.currentTarget.title?t.currentTarget.title="Open":t.currentTarget.title="Hide":"Sakrij"===t.currentTarget.title?t.currentTarget.title="Otvori":t.currentTarget.title="Sakrij","technical-skills"===t.currentTarget.name&&this.$bus.$emit("remove-pb",t.currentTarget.classList.contains("not-collapsed")),setTimeout((function(){var t=(document.body.clientHeight-window.outerHeight)/100,r=+(+window.scrollY.toFixed(2)/t).toFixed(2);e.$store.commit("store/SET_PACE_WIDTH",r)}),500)}}},n=(r(354),r(10)),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.property+"-collapse",expression:"property + '-collapse'"}],staticClass:"button-toggle",attrs:{title:"/"===t.$route.path?"Hide":"Sakrij",name:t.property},on:{click:t.toggle}},[r("span",{staticClass:"slider"})])}),[],!1,null,null,null);e.default=component.exports},353:function(t,e,r){var content=r(363);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("3317042c",content,!0,{sourceMap:!1})},354:function(t,e,r){"use strict";r(351)},355:function(t,e,r){var c=r(23)(!1);c.push([t.i,'.button-toggle{position:relative;display:flex;justify-content:center;align-items:center;width:32px;height:19px;margin:0;padding:0;border:none;border-radius:33px;background-color:transparent!important}.button-toggle:before{-moz-background:linear-gradient(135deg,#0082c3,#02be8a);-webkit-background:linear-gradient(135deg,#0082c3,#02be8a);background:linear-gradient(135deg,#0082c3,#02be8a);visibility:hidden;opacity:0}.button-toggle:after,.button-toggle:before{content:"";position:absolute;width:32px;height:19px;border-radius:33px;transition:.5s ease}.button-toggle[aria-expanded=false] .slider:before{visibility:visible;opacity:1}.button-toggle[aria-expanded=false]:after{background-color:var(--bg-button)}.button-toggle[aria-expanded=true]:before{visibility:visible;opacity:1}.button-toggle[aria-expanded=true] .slider:after,.button-toggle[aria-expanded=true] .slider:before{transform:translateX(13px)}.button-toggle[aria-expanded=true] .slider:after{background-color:var(--bg-button-2)}.button-toggle .slider{position:absolute;top:0;left:0;width:32px;height:19px;border-radius:50%;transition:.5s ease}.button-toggle .slider:before{-moz-background:linear-gradient(135deg,#0082c3,#02be8a);-webkit-background:linear-gradient(135deg,#0082c3,#02be8a);background:linear-gradient(135deg,#0082c3,#02be8a);border-radius:33px;visibility:hidden;opacity:0}.button-toggle .slider:after,.button-toggle .slider:before{content:"";position:absolute;top:3px;left:3px;height:13px;width:13px;transition:.5s ease;z-index:1}.button-toggle .slider:after{border-radius:50%}',""]),t.exports=c},356:function(t,e,r){"use strict";r.r(e);var c=r(358),n=r.n(c),l=r(359),o=r.n(l),d=r(360),h=r.n(d),f=r(361),v=r.n(f),y=r(352),w={props:{heading:String,property:String},components:{AboutMe:n.a,Education:o.a,EmploymentHistory:h.a,TechnicalSkills:v.a,ButtonToggle:y.default}},x=(r(362),r(10)),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"header-right"},[r("div",{staticClass:"header-shape"},[r("div",{staticClass:"shape"},[r("div",{staticClass:"header-shape-wrapper"},[r(t.property,{tag:"component",staticClass:"icon"}),t._v(" "),r("h4",[t._v(t._s(t.heading))])],1)]),t._v(" "),r("ButtonToggle",{attrs:{property:t.property}})],1),t._v(" "),r("hr",{staticClass:"gradient"})])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ButtonToggle:r(352).default})},358:function(t,e,r){r(5),r(2),r(3),r(1),r(4);var c=r(27),n=r(28);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),o=e.children,d=void 0===o?[]:o,h=data.class,f=data.staticClass,style=data.style,v=data.staticStyle,y=data.attrs,w=void 0===y?{}:y,x=n(data,["class","staticClass","style","staticStyle","attrs"]);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){c(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,f],style:[style,v],attrs:Object.assign({"enable-background":"new 0 0 64 64",height:"64px",version:"1.1",viewBox:"0 0 64 64",width:"64px","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},w)},x),d.concat([r("g",{attrs:{id:"Layer_1"}},[r("g",[r("circle",{attrs:{cx:"32",cy:"32",fill:"#66ccff",r:"32"}})]),r("g",{attrs:{opacity:"0.2"}},[r("path",{attrs:{d:"M37,14H27c-1.657,0-3,1.343-3,3v5v1v23l5.333,8L32,58l2.667-4L40,46V23v-1v-5C40,15.343,38.657,14,37,14z",fill:"#231F20"}})]),r("g",[r("path",{attrs:{d:"M40,21c0,1.657-1.343,3-3,3H27c-1.657,0-3-1.343-3-3v-6c0-1.657,1.343-3,3-3h10c1.657,0,3,1.343,3,3V21z",fill:"#C75C5C"}})]),r("g",[r("rect",{attrs:{fill:"#E0995E",height:"24",width:"4",x:"24",y:"20"}})]),r("g",[r("rect",{attrs:{fill:"#F5CF87",height:"26",width:"8",x:"28",y:"20"}})]),r("g",[r("rect",{attrs:{fill:"#E0995E",height:"24",width:"4",x:"36",y:"20"}})]),r("g",[r("g",[r("polygon",{attrs:{fill:"#4F5D73",points:"32,56 34.667,52 29.333,52    "}})]),r("g",[r("polygon",{attrs:{fill:"#FFFFFF",points:"24,44 29.333,52 34.667,52 40,44 38,44 36,42 32,46 28,42 26,44    "}})])])]),r("g",{attrs:{id:"Layer_2"}})]))}}},359:function(t,e,r){r(5),r(2),r(3),r(1),r(4);var c=r(27),n=r(28);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),o=e.children,d=void 0===o?[]:o,h=data.class,f=data.staticClass,style=data.style,v=data.staticStyle,y=data.attrs,w=void 0===y?{}:y,x=n(data,["class","staticClass","style","staticStyle","attrs"]);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){c(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,f],style:[style,v],attrs:Object.assign({"enable-background":"new 0 0 64 64",height:"64px",version:"1.1",viewBox:"0 0 64 64",width:"64px","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},w)},x),d.concat([r("g",{attrs:{id:"Layer_1"}},[r("g",[r("circle",{attrs:{cx:"31.833",cy:"32",fill:"#66ccff",r:"32"}})]),r("g",{attrs:{opacity:"0.2"}},[r("path",{attrs:{d:"M52,48c0,1.105-0.895,2-2,2H14c-1.105,0-2-0.895-2-2l0,0c0-1.105,0.895-2,2-2h36    C51.105,46,52,46.895,52,48L52,48z",fill:"#231F20"}})]),r("g",[r("path",{attrs:{d:"M52,46c0,1.105-0.895,2-2,2H14c-1.105,0-2-0.895-2-2l0,0c0-1.105,0.895-2,2-2h36    C51.105,44,52,44.895,52,46L52,46z",fill:"#E0995E"}})]),r("g",[r("path",{attrs:{d:"M23,20h-4c-1.657,0-3,1.343-3,3v17v1v3h3h4h3v-3v-1V23C26,21.343,24.657,20,23,20z",fill:"#C75C5C"}})]),r("g",[r("path",{attrs:{d:"M45,16h-4c-1.657,0-3,1.343-3,3v21v1v3h3h4h3v-3v-1V19C48,17.343,46.657,16,45,16z",fill:"#E0E0D1"}})]),r("g",[r("rect",{attrs:{fill:"#E0995E",height:"3",width:"10",x:"16",y:"24"}})]),r("g",[r("rect",{attrs:{fill:"#E0995E",height:"3",width:"10",x:"16",y:"37"}})]),r("g",[r("rect",{attrs:{fill:"#FFFFFF",height:"3",width:"10",x:"38",y:"37"}})]),r("g",[r("rect",{attrs:{fill:"#FFFFFF",height:"3",width:"10",x:"38",y:"20"}})]),r("g",[r("g",{attrs:{opacity:"0.2"}},[r("path",{attrs:{d:"M40,40V16.184c-1.163,0.413-2,1.512-2,2.816v21v1v3h2v-3V40z",fill:"#231F20"}})]),r("g",{attrs:{opacity:"0.2"}},[r("path",{attrs:{d:"M26,40V23c0-1.304-0.837-2.403-2-2.816V40v1v3h2v-3V40z",fill:"#231F20"}})])]),r("g",[r("path",{attrs:{d:"M35,12h-6c-1.657,0-3,1.343-3,3v25v1v3h3h6h3v-3v-1V15C38,13.343,36.657,12,35,12z",fill:"#4F5D73"}})]),r("g",[r("rect",{attrs:{fill:"#76C2AF",height:"3",width:"12",x:"26",y:"16"}})]),r("g",[r("rect",{attrs:{fill:"#76C2AF",height:"3",width:"12",x:"26",y:"37"}})])]),r("g",{attrs:{id:"Layer_2"}})]))}}},360:function(t,e,r){r(5),r(2),r(3),r(1),r(4);var c=r(27),n=r(28);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),o=e.children,d=void 0===o?[]:o,h=data.class,f=data.staticClass,style=data.style,v=data.staticStyle,y=data.attrs,w=void 0===y?{}:y,x=n(data,["class","staticClass","style","staticStyle","attrs"]);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){c(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,f],style:[style,v],attrs:Object.assign({"enable-background":"new 0 0 64 64",height:"64px",version:"1.1",viewBox:"0 0 64 64",width:"64px","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},w)},x),d.concat([r("g",{attrs:{id:"Layer_1"}},[r("g",[r("circle",{attrs:{cx:"32",cy:"32",fill:"#66ccff",r:"32"}})]),r("g",{attrs:{opacity:"0.2"}},[r("path",{attrs:{d:"M52,44c0,2.209-1.791,4-4,4H16c-2.209,0-4-1.791-4-4V26c0-2.209,1.791-4,4-4h32c2.209,0,4,1.791,4,4V44z",fill:"#231F20"}})]),r("g",[r("path",{attrs:{d:"M38,17v20H26V17H38 M38,13H26c-2.209,0-4,1.791-4,4v20c0,2.209,1.791,4,4,4h12c2.209,0,4-1.791,4-4V17    C42,14.791,40.209,13,38,13L38,13z",fill:"#4F5D73"}})]),r("g",[r("g",[r("path",{attrs:{d:"M12,29v13c0,2.209,1.791,4,4,4h32c2.209,0,4-1.791,4-4V29H12z",fill:"#C75C5C"}})])]),r("g",[r("path",{attrs:{d:"M36,28v3h-8v-3H36 M36,24h-8c-2.209,0-4,1.791-4,4v3c0,2.209,1.791,4,4,4h8c2.209,0,4-1.791,4-4v-3    C40,25.791,38.209,24,36,24L36,24z",fill:"#F5CF87"}})]),r("g",{attrs:{opacity:"0.2"}},[r("path",{attrs:{d:"M52,26c0-2.209-1.791-4-4-4H16c-2.209,0-4,1.791-4,4v5h40V26z",fill:"#231F20"}})]),r("g",[r("path",{attrs:{d:"M52,24c0-2.209-1.791-4-4-4H16c-2.209,0-4,1.791-4,4v5h40V24z",fill:"#C75C5C"}})])]),r("g",{attrs:{id:"Layer_2"}})]))}}},361:function(t,e,r){r(5),r(2),r(3),r(1),r(4);var c=r(27),n=r(28);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),o=e.children,d=void 0===o?[]:o,h=data.class,f=data.staticClass,style=data.style,v=data.staticStyle,y=data.attrs,w=void 0===y?{}:y,x=n(data,["class","staticClass","style","staticStyle","attrs"]);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){c(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,f],style:[style,v],attrs:Object.assign({"enable-background":"new 0 0 64 64",height:"64px",version:"1.1",viewBox:"0 0 64 64",width:"64px","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},w)},x),d.concat([r("g",{attrs:{id:"Layer_1"}},[r("g",[r("circle",{attrs:{cx:"32",cy:"32",fill:"#66ccff",r:"32"}})]),r("g",{attrs:{opacity:"0.2"}},[r("g",[r("g",[r("path",{attrs:{d:"M42.461,44c-0.671,0-1.326-0.338-1.705-0.951c-0.58-0.94-0.287-2.172,0.653-2.752l10.124-6.242      c0.005-0.018,0.007-0.036,0.007-0.056s-0.002-0.038-0.007-0.056L41.41,27.703c-0.94-0.58-1.232-1.812-0.653-2.752      c0.58-0.94,1.812-1.232,2.752-0.653l10.63,6.554l0.165,0.165c0.797,0.797,1.236,1.856,1.236,2.983      c0,1.126-0.439,2.186-1.236,2.983l-0.166,0.166l-10.63,6.554C43.182,43.904,42.819,44,42.461,44z",fill:"#231F20"}})])]),r("g",[r("g",[r("path",{attrs:{d:"M21.539,44c-0.358,0-0.721-0.096-1.048-0.298l-10.63-6.554l-0.166-0.166      C8.898,36.186,8.459,35.126,8.459,34c0-1.127,0.439-2.187,1.236-2.983l0.165-0.165l10.63-6.554      c0.941-0.58,2.172-0.287,2.752,0.653c0.58,0.94,0.287,2.172-0.653,2.752l-10.124,6.242c-0.005,0.018-0.007,0.036-0.007,0.056      s0.002,0.038,0.007,0.056l10.124,6.242c0.94,0.58,1.232,1.812,0.653,2.752C22.865,43.663,22.209,44,21.539,44z",fill:"#231F20"}})])])]),r("g",{attrs:{opacity:"0.2"}},[r("g",[r("path",{attrs:{d:"M25.5,53c-0.237,0-0.479-0.042-0.714-0.132c-1.032-0.395-1.548-1.551-1.154-2.583l13-34     c0.395-1.032,1.551-1.549,2.583-1.154c1.032,0.395,1.548,1.551,1.154,2.583l-13,34C27.063,52.511,26.305,53,25.5,53z",fill:"#231F20"}})])]),r("g",[r("g",[r("path",{attrs:{d:"M42.461,42c-0.671,0-1.327-0.337-1.705-0.95c-0.58-0.94-0.287-2.173,0.653-2.752l10.123-6.241     c0.01-0.037,0.01-0.076,0-0.113L41.41,25.702c-0.94-0.579-1.233-1.812-0.653-2.752c0.58-0.94,1.811-1.233,2.752-0.652     l10.631,6.554l0.166,0.165c1.644,1.646,1.644,4.321,0,5.967l-0.166,0.165l-10.631,6.554C43.182,41.904,42.819,42,42.461,42z",fill:"#FFFFFF"}})]),r("g",[r("path",{attrs:{d:"M21.539,42c-0.358,0-0.72-0.096-1.047-0.298L9.86,35.148l-0.166-0.165c-1.644-1.646-1.644-4.321,0-5.967     l0.166-0.165l10.631-6.554c0.939-0.581,2.173-0.288,2.752,0.652c0.58,0.94,0.287,2.173-0.653,2.752l-10.123,6.241     c-0.01,0.037-0.01,0.076,0,0.113l10.123,6.241c0.94,0.579,1.233,1.812,0.653,2.752C22.865,41.663,22.209,42,21.539,42z",fill:"#FFFFFF"}})])]),r("g",[r("path",{attrs:{d:"M25.5,51.001c-0.237,0-0.479-0.043-0.714-0.133c-1.032-0.395-1.548-1.551-1.154-2.582l13-34    c0.395-1.031,1.551-1.55,2.583-1.154c1.032,0.395,1.548,1.551,1.154,2.582l-13,34C27.063,50.511,26.305,51.001,25.5,51.001z",fill:"#FFFFFF"}})])]),r("g",{attrs:{id:"Layer_2"}})]))}}},362:function(t,e,r){"use strict";r(353)},363:function(t,e,r){var c=r(23)(!1);c.push([t.i,".header-shape{display:flex;justify-content:space-between;align-items:center}.header-shape .shape{margin-left:15px;transform:skew(-30deg);-webkit-transform:skew(-30deg);-moz-transform:skew(-30deg);border-radius:5px;-moz-background:linear-gradient(135deg,#0082c3,#02be8a);-webkit-background:linear-gradient(135deg,#0082c3,#02be8a);background:linear-gradient(135deg,#0082c3,#02be8a)}.header-shape-wrapper{display:flex;justify-content:flex-start;align-items:center;padding:10px 20px;transform:skew(30deg)}.header-shape-wrapper .icon{width:35px;height:35px;margin-right:10px;border-radius:50%;box-shadow:0 5px 15px -10px rgba(0,0,0,.75)}.header-shape-wrapper h4{color:var(--color-left);font-weight:700;transition:.5s ease}",""]),t.exports=c}}]);