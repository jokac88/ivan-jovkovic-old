(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{391:function(t,e,r){var content=r(448);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("4531e88e",content,!0,{sourceMap:!1})},447:function(t,e,r){"use strict";r(391)},448:function(t,e,r){var o=r(23)(!1);o.push([t.i,".personal-info-wrapper{padding:0 30px 15px}.personal-info-wrapper .property{font-weight:700}.personal-info-wrapper .value{padding-bottom:10px}.personal-info-wrapper .value:last-child{padding-bottom:0}.personal-info-wrapper a{border-bottom:1px solid transparent;transition:.3s ease}.personal-info-wrapper a:hover{border-color:var(--color-left)}.personal-info-wrapper a.link{color:var(--color-left)!important;margin-bottom:10px;padding-bottom:0}",""]),t.exports=o},474:function(t,e,r){"use strict";r.r(e);var o=r(357),l={props:{personalInfo:Object},components:{HeaderLeft:o.default}},n=(r(447),r(10)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"personal-info",attrs:{id:"personal-info"}},[r("HeaderLeft",{attrs:{heading:"/"===t.$route.path?"Personal Info":"Lični Podaci",property:"personal-info"}}),t._v(" "),r("b-collapse",{attrs:{id:"personal-info-collapse",visible:""}},[r("div",{staticClass:"personal-info-wrapper"},["/"===t.$route.path?r("p",{staticClass:"property"},[t._v("Date of birth")]):r("p",{staticClass:"property"},[t._v("Datum rođenja")]),t._v(" "),r("p",{staticClass:"value",domProps:{innerHTML:t._s(t.personalInfo["date-of-birth"])}}),t._v(" "),"/"===t.$route.path?r("p",{staticClass:"property"},[t._v("City")]):r("p",{staticClass:"property"},[t._v("Grad")]),t._v(" "),r("p",{staticClass:"value"},[t._v(t._s(t.personalInfo.city))]),t._v(" "),"/"===t.$route.path?r("p",{staticClass:"property"},[t._v("Nationality")]):r("p",{staticClass:"property"},[t._v("Državljanstvo")]),t._v(" "),r("p",{staticClass:"value"},[t._v(t._s(t.personalInfo.nationality))]),t._v(" "),"/"===t.$route.path?r("p",{staticClass:"property"},[t._v("Residence")]):r("p",{staticClass:"property"},[t._v("Prebivalište")]),t._v(" "),r("p",{staticClass:"value"},[t._v(t._s(t.personalInfo.residence))]),t._v(" "),"/"===t.$route.path?r("p",{staticClass:"property"},[t._v("Mobile")]):r("p",{staticClass:"property"},[t._v("Mobilni")]),t._v(" "),t._l(t.personalInfo.mobile,(function(e){return r("a",{staticClass:"value link",attrs:{href:"tel:"+e.number}},[t._v(t._s(e.text))])})),t._v(" "),r("p",{staticClass:"property"},[t._v("E-mail")]),t._v(" "),r("a",{staticClass:"value link",attrs:{href:"mailto:"+t.personalInfo.email,title:"Contact me"}},[t._v(t._s(t.personalInfo.email))]),t._v(" "),r("p",{staticClass:"property"},[t._v("Website")]),t._v(" "),r("a",{staticClass:"value link",attrs:{href:t.personalInfo.website,title:"Website",target:"_blank"}},[t._v(t._s(t.personalInfo.website))]),t._v(" "),r("p",{staticClass:"property"},[t._v("LinkedIn")]),t._v(" "),r("a",{staticClass:"value link",attrs:{href:t.personalInfo.linkedin,title:"LinkedIn",target:"_blank"}},[t._v(t._s(t.personalInfo.linkedin))]),t._v(" "),r("p",{staticClass:"property"},[t._v("GitHub")]),t._v(" "),r("a",{staticClass:"value link",attrs:{href:t.personalInfo.github,title:"GitHub",target:"_blank"}},[t._v(t._s(t.personalInfo.github))]),t._v(" "),r("p",{staticClass:"property"},[t._v("Skype")]),t._v(" "),r("p",{staticClass:"value"},[t._v(t._s(t.personalInfo.skype))])],2)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);