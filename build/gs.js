!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s=36)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(14),o=e(19);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(5)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(1),o=e(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(23)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(24);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(7)("wks"),o=e(6),i=e(0).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,n,e){e(12),t.exports=e(1).Array.find},function(t,n,e){"use strict";var r=e(13),o=e(25)(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),r(r.P+r.F*i,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e(34)("find")},function(t,n,e){var r=e(0),o=e(1),i=e(3),c=e(20),u=e(8),a=function(t,n,e){var f,s,l,p,d=t&a.F,v=t&a.G,y=t&a.S,h=t&a.P,m=t&a.B,g=v?r:y?r[n]||(r[n]={}):(r[n]||{}).prototype,b=v?o:o[n]||(o[n]={}),w=b.prototype||(b.prototype={});for(f in v&&(e=n),e)l=((s=!d&&g&&void 0!==g[f])?g:e)[f],p=m&&s?u(l,r):h&&"function"==typeof l?u(Function.call,l):l,g&&c(g,f,l,t&a.U),b[f]!=l&&i(b,f,p),h&&w[f]!=l&&(w[f]=l)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,e){var r=e(15),o=e(16),i=e(18),c=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(2);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(4)&&!e(5)((function(){return 7!=Object.defineProperty(e(17)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(2),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(2);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(0),o=e(3),i=e(21),c=e(6)("src"),u=e(22),a=(""+u).split("toString");e(1).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,e,u){var f="function"==typeof e;f&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(f&&(i(e,c)||o(e,c,t[n]?""+t[n]:a.join(String(n)))),t===r?t[n]=e:u?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[c]||u.call(this)}))},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){t.exports=e(7)("native-function-to-string",Function.toString)},function(t,n){t.exports=!1},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(8),o=e(26),i=e(27),c=e(29),u=e(31);t.exports=function(t,n){var e=1==t,a=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l,d=n||u;return function(n,u,v){for(var y,h,m=i(n),g=o(m),b=r(u,v,3),w=c(g.length),x=0,S=e?d(n,w):a?d(n,0):void 0;w>x;x++)if((p||x in g)&&(h=b(y=g[x],x,m),t))if(e)S[x]=h;else if(h)switch(t){case 3:return!0;case 5:return y;case 6:return x;case 2:S.push(y)}else if(s)return!1;return l?-1:f||s?s:S}}},function(t,n,e){var r=e(9);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(28);t.exports=function(t){return Object(r(t))}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(30),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(32);t.exports=function(t,n){return new(r(t))(n)}},function(t,n,e){var r=e(2),o=e(33),i=e(10)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},function(t,n,e){var r=e(9);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(10)("unscopables"),o=Array.prototype;null==o[r]&&e(3)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,n){var e;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),(e=Element.prototype).matches=e.matches||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector,e.closest=e.closest||function(t){return this?this.matches(t)?this:this.parentElement?this.parentElement.closest(t):null:null}},function(t,n,e){"use strict";e.r(n);e(11),e(35);var r=function(t){for(var n,e,r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];(n=window).ga.apply(n,["send","event",t].concat(o)),(e=console).log.apply(e,["ga --\x3e",t].concat(o))},o=function(t){var n=document.querySelector('meta[property="og:'.concat(t,'"]'));return n&&n.getAttribute("content")},i=function(t,n,e){var r=t.share,i=t.options,c=n&&n.parentElement,u=encodeURIComponent(i&&i.title||c&&c.getAttribute("data-title")||e&&e.title||o("title")),a=encodeURIComponent(i&&i.image||c&&c.getAttribute("data-image")||e&&e.image||o("image")),f=encodeURIComponent(i&&i.url||c&&c.getAttribute("data-url")||e&&e.url||o("url")),s={vk:"https://vk.com/share.php?url=".concat(f,"&title=").concat(u,"&image=").concat(a),fb:"https://www.facebook.com/share.php?u=".concat(f),tw:"https://twitter.com/intent/tweet?url=".concat(f,"&text=").concat(u),ok:"https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl=".concat(f),tb:"https://www.tumblr.com/widgets/share/tool?posttype=link&canonicalUrl=".concat(f,"&title=").concat(u),tg:"tg://msg?text=".concat(f),wa:"whatsapp://send?text=".concat(f)};window.open(s[r],"Поделиться","width=500,height=500,resizable=yes,scrollbars=yes,status=yes"),console.log("sharing --\x3e",r)},c=function(t){var n=t.defaultAttr,e=t.clickArray,o=t.sharingOptions;return function(){document.body.addEventListener("click",(function(t){var c=null,u=t.target,a=e.find((function(t){var e=t.attr||n,r=t.id||t;return(c=u&&u.closest("[".concat(e,"]")))&&c.getAttribute(e)===r}));if("string"==typeof a)return r(a);a&&(a.mark&&r(a.mark),a.share&&i(a,c,o))}))}},u=function(t){var n=t.defaultAttr,e=t.appearArray;return function(){var t=document.documentElement.clientHeight;e.forEach((function(o,i){var c=o.attr||n,u=o.id||o,a=o.mark||o,f=document.querySelector("[".concat(c,'="').concat(u,'"]'));if(f){var s=t-f.getBoundingClientRect().top,l=f.getBoundingClientRect().top+f.offsetHeight;s>0&&l>0&&(e.splice(i,1),r(a))}}))}},a=function(t){var n=t.defaultAttr,e=t.hoverArray;return function(){var t=document.documentElement.clientHeight;e.forEach((function(o,i){var c=o.attr||n,u=o.id||o,a=o.mark||o,f=document.querySelector("[".concat(c,'="').concat(u,'"]'));if(f){var s=t-f.getBoundingClientRect().top,l=f.getBoundingClientRect().top+f.offsetHeight;s>0&&l>0&&(e.splice(i,1),f.addEventListener("mouseenter",(function(){r(a)})))}}))}};window.gs={config:function(t){var n=t.defaultAttr,e=void 0===n?"data-id":n,r=t.scrollElement,o=t.click,i=void 0===o?[]:o,f=t.appear,s=void 0===f?[]:f,l=t.hover,p=void 0===l?[]:l,d=t.sharing,v=c({defaultAttr:e,clickArray:i,sharingOptions:void 0===d?{}:d}),y=u({defaultAttr:e,appearArray:s}),h=a({defaultAttr:e,hoverArray:p});window.addEventListener("DOMContentLoaded",(function(){v(),y(),h();var t,n=r?document.querySelector(r):window;n&&n.addEventListener("scroll",(function(){clearTimeout(t),t=window.setTimeout(y,100)}))}))},analytics:r}}]);