(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4R7y":function(t,n,r){},"4l63":function(t,n,r){var a=r("I+eb"),e=r("wg0c");a({global:!0,forced:parseInt!=e},{parseInt:e})},HUPu:function(t,n,r){"use strict";r.r(n);var a=r("klUM"),e={props:{colors:{type:Array,default:function(){return[]}}},methods:{isLight:a.a}},o=(r("odqC"),r("KHd+")),s=Object(o.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("ul",{staticClass:"flex h-full"},t._l(t.colors,(function(n){return r("li",{key:n,staticClass:"flex-grow"},[r("div",{staticClass:"brand__color",class:t.isLight(n)?"brand__color--light":"brand__color--dark",style:{backgroundColor:"#"+n}},[r("code",{staticClass:"brand__color__code smooth-transition",attrs:{dir:"ltr"}},[t._v("\n                "+t._s(n)+"\n            ")])])])})),0)}),[],!1,null,"e3ad57fc",null).exports,i={props:{colors:{type:Array,default:function(){return[]}}}},l={components:{ColorBanner:s,ColorDetail:Object(o.a)(i,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"text-black text-opacity-80"},[n("div",{staticClass:"flex-center bg-rb-violet-100 py-2 px-4 font-bold"},[n("div",[this._v("\n            رنگ‌\n        ")]),n("div",[this._v("\n            توضیحات\n        ")])])])}],!1,null,null,null).exports},metaInfo:function(){return{title:"رنگ‌های ".concat(this.$page.brand.title)}},computed:{brand:function(){return this.$page.brand||{colors:[]}}}},c=(r("v5NN"),null),u=Object(o.a)(l,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("Layout",[r("div",{staticClass:"color-banner hidden md:block"},[r("color-banner",{attrs:{colors:t.brand.colors}})],1),r("main",{staticClass:"wrapper text-black text-opacity-80 py-8"},[r("h1",{staticClass:"text-3xl font-bold mt-8 mb-4"},[t._v("\n            پالت رنگ‌های رسمی "+t._s(t.brand.title)+" به همراه کدهای RGB و HEX\n        ")]),t.brand.description?r("p",{staticClass:"mb-2"},[t._v("\n            "+t._s(t.brand.description)+"\n        ")]):t._e(),r("p",{staticClass:"mb-2"},[t._v("\n            در جدول زیر رنگ‌های رسمی برند "+t._s(t.brand.title)+" را مشاهده می‌کنید. برای اطمینان از این که متریال تبلیغاتی شما با برند "+t._s(t.brand.title)+" هماهنگ باشد، در کارهای خود از این رنگ‌ها استفاده کنید:\n        ")])]),r("div",{staticClass:"color-detail"},[r("color-detail",{attrs:{colors:t.brand.colors}})],1)])}),[],!1,null,"5a93ad72",null);"function"==typeof c&&c(u);n.default=u.exports},Rm1S:function(t,n,r){"use strict";var a=r("14Sl"),e=r("glrk"),o=r("UMSQ"),s=r("HYAF"),i=r("iqWW"),l=r("FMNM");a("match",1,(function(t,n,r){return[function(n){var r=s(this),a=null==n?void 0:n[t];return void 0!==a?a.call(n,r):new RegExp(n)[t](String(r))},function(t){var a=r(n,t,this);if(a.done)return a.value;var s=e(t),c=String(this);if(!s.global)return l(s,c);var u=s.unicode;s.lastIndex=0;for(var d,f=[],p=0;null!==(d=l(s,c));){var b=String(d[0]);f[p]=b,""===b&&(s.lastIndex=i(c,o(s.lastIndex),u)),p++}return 0===p?null:f}]}))},hsyt:function(t,n,r){},klUM:function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));var a=r("ODXe"),e=(r("2B1R"),r("4l63"),r("rB9j"),r("Rm1S"),function(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}),o=function(t){var n=t.match(/.{1,2}/g).map((function(t){return parseInt(t,16)})).map((function(t){return t/255})),r=Object(a.a)(n,3),o=r[0],s=r[1],i=r[2];return function(t){return t<=216/24389?t*(24389/27):116*Math.pow(t,1/3)-16}(.2126*e(o)+.7152*e(s)+.0722*e(i))>60}},odqC:function(t,n,r){"use strict";r("4R7y")},v5NN:function(t,n,r){"use strict";r("hsyt")},wg0c:function(t,n,r){var a=r("2oRo"),e=r("WKiH").trim,o=r("WJkJ"),s=a.parseInt,i=/^[+-]?0[Xx]/,l=8!==s(o+"08")||22!==s(o+"0x16");t.exports=l?function(t,n){var r=e(String(t));return s(r,n>>>0||(i.test(r)?16:10))}:s}}]);