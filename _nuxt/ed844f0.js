(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{235:function(t,e,r){var content=r(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(88).default)("3dcbdc40",content,!0,{sourceMap:!1})},242:function(t,e,r){t.exports=r.p+"img/imavinyllover-logo.fc8fb91.png"},243:function(t,e,r){"use strict";r(235)},244:function(t,e,r){var c=r(87)(!1);c.push([t.i,".hero{display:flex;flex-direction:column;justify-content:center;max-width:1240px;margin-left:auto;margin-right:auto;min-height:calc(100vh - 60px)}@media (min-width:768px){.hero{flex-direction:row}}.hero__title{line-height:1.5;text-transform:uppercase;margin-bottom:20px;font-size:40px}.hero__section{padding:30px;display:flex;flex-direction:column;flex-basis:100%;justify-content:center}.hero__subtitle{font-size:18px;text-transform:lowercase;line-height:1.5}.hero__image{width:300px;height:auto;max-width:100%}.discs-caroussel{display:flex;flex-direction:column;justify-content:center}.discs-caroussel__image{margin:auto;max-width:100%;height:auto}.discs-caroussel__control{display:flex;list-style:none;flex-direction:row;grid-gap:10px;gap:10px;padding:0;margin-top:20px;margin-left:auto;flex-wrap:wrap;margin-right:auto}.discs-caroussel__control__item,.discs-caroussel__control__item--active{cursor:pointer;width:10px;height:10px;background:var(--color-white);border-radius:50%;opacity:.5}.discs-caroussel__control__item--active{opacity:1}",""]),t.exports=c},260:function(t,e,r){"use strict";r.r(e);r(50);var c=r(1).a.extend({created:function(){var t=this;setInterval((function(){t.currentDiscIndex=(t.currentDiscIndex+1)%t.discs.length}),2500)},props:{text:{type:Object,required:!0},discs:{type:Array,required:!0}},data:function(){return{currentDiscIndex:0}}}),o=(r(243),r(38)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("header",{staticClass:"hero"},[c("div",{staticClass:"hero__section"},[c("h1",{staticClass:"hero__title"},[t._v("\n      "+t._s(t.text.titulo||"...")+"\n    ")]),t._v(" "),c("p",{staticClass:"hero__subtitle"},[t._v("\n      "+t._s(t.text.subtitulo||"...")+"\n    ")]),t._v(" "),c("img",{staticClass:"hero__image",attrs:{src:r(242),width:"556",height:"376",alt:"I'm a Vinyl Lover Logo"}})]),t._v(" "),c("div",{staticClass:"hero__section"},[c("div",{staticClass:"discs-caroussel"},[c("img",{staticClass:"discs-caroussel__image",attrs:{src:t.discs[t.currentDiscIndex].imageSmall,alt:"Capa de disco",width:"300",height:"300",loading:"lazy"}}),t._v(" "),c("ul",{staticClass:"discs-caroussel__control"},t._l(t.discs,(function(e,r){return c("li",{key:r,class:t.currentDiscIndex===r?"discs-caroussel__control__item--active":"discs-caroussel__control__item",on:{click:function(e){t.currentDiscIndex=r}}})})),0)])])])}),[],!1,null,null,null);e.default=component.exports}}]);