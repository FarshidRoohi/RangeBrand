(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+62L":function(t,r,n){"use strict";n.r(r);n("oVuX"),n("2B1R"),n("rB9j"),n("UxlC"),n("EnZy");var e=n("VTBJ"),a=n("ODXe"),o=(n("LKBx"),{props:{value:{type:String,default:""},label:{type:String,default:""},name:{type:String,default:""}},computed:{inputVal:{get:function(){return this.value},set:function(t){this.$emit("input",t.startsWith("#")?t:"#"+t)}}}}),i=(n("cMHz"),n("KHd+")),c=Object(i.a)(o,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("label",{staticClass:"label",attrs:{for:t.name}},[t._v("\n        "+t._s(t.label)+"\n    ")]),n("div",{staticClass:"relative"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],staticClass:"input",attrs:{dir:"ltr",name:t.name,id:t.name},domProps:{value:t.inputVal},on:{input:function(r){r.target.composing||(t.inputVal=r.target.value)}}}),n("div",{staticClass:"preview",style:{background:t.inputVal}})])])}),[],!1,null,"cdc6e5a8",null).exports,u=n("zJCt"),s=n.n(u),l=n("cQwu"),f=n("1QNJ"),d={metaInfo:{title:"محاسبه کنتراست رنگ‌ها"},components:{ColorInput:c,IconStar:s.a},data:function(){var t,r,n=(null===(t=this.$route.query)||void 0===t||null===(r=t.colors)||void 0===r?void 0:r.split("-"))||["FFFFFF","9529FF"],e=Object(a.a)(n,2),o=e[0],i=e[1];return{color:{text:"#".concat(o),background:"#".concat(i)}}},computed:{txtColor:function(){return this.color.text.replace("#","")},bgColor:function(){return this.color.background.replace("#","")},contrast:function(){return function(t,r){if(Object(l.a)(t)&&Object(l.a)(r)){var n=Object(f.a)(t),e=Object(f.a)(r),a=(Math.max(n,e)+.05)/(Math.min(n,e)+.05);return Math.round(100*a)/100}return 0}(this.bgColor,this.txtColor)},results:function(){var t=this,r={Poor:1,AA:2,AAA:3};return[{id:"small-text",label:"نوشته‌های معمولی"},{id:"large-text",label:"نوشته‌های بزرگ"},{id:"ui-component",label:"کامپوننت‌های UI"}].map((function(n){var a,o,i,c=(a=t.contrast,o=n.id,(i={"small-text":{min:4.5,max:7},"large-text":{min:3,max:4.5},"ui-component":{min:3,max:3}}[o])?a<i.min?"Poor":a<i.max?"AA":"AAA":"Unknown");return Object(e.a)(Object(e.a)({},n),{},{standard:c,stars:r[c]})}))}},watch:{txtColor:function(t){Object(l.a)(t)&&this.$router.push({path:"/contrast-checker",query:{colors:[t,this.bgColor].join("-")}})},bgColor:function(t){Object(l.a)(t)&&this.$router.push({path:"/contrast-checker",query:{colors:[this.txtColor,t].join("-")}})}}},v=(n("ZTXn"),Object(i.a)(d,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("Layout",[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"row mb-8"},[n("div",{staticClass:"col w-full sm:w-1/2"},[n("ColorInput",{attrs:{label:"رنگ زمینه",name:"background-color"},model:{value:t.color.background,callback:function(r){t.$set(t.color,"background",r)},expression:"color.background"}})],1),n("div",{staticClass:"col w-full sm:w-1/2"},[n("ColorInput",{attrs:{label:"رنگ متن",name:"text-color"},model:{value:t.color.text,callback:function(r){t.$set(t.color,"text",r)},expression:"color.text"}})],1)]),n("div",{staticClass:"preview-card"},[n("div",{staticClass:"preview-card--color",style:{backgroundColor:t.color.background,color:t.color.text}},[n("h1",{staticClass:"text-2xl font-bold mb-4"},[t._v("محاسبه‌ی کنتراست رنگ‌ها")]),n("p",{staticClass:"mb-4"},[t._v("ابزار محاسبه کننده‌ی کنتراست رنگ‌های رنگ برند، از قوانین دسترسی‌پذیری محتوای وب (WCAG) که مجموعه‌ای از پیشنهادات برای تبدیل وب به مکانی با دسترسی‌پذیری بیشتر است پیروی می‌کند.")]),n("p",{staticClass:"mb-4"},[t._v("\n                    بنابر WCAG، دو استاندارد برای سطح کنتراست بین رنگ‌ها تعریف شده است: AA (حداقل کنتراست) و AAA ( کنتراست بهبودیافته).\n                    "),n("br"),t._v("\n                    سطح AA به نسبت کنتراست حداقل 4.5:1 برای نوشته‌های معمولی و 3:1 برای نوشته‌های بزرگ و یا توپر نیاز دارد.\n                    "),n("br"),t._v("\n                    سطح AAA نیز به نسبت کنتراسل حداقل 7:1 برای نوشته‌های معمولی و 4.5:1 برای نوشته‌های بزرگ و یا توپر نیاز دارد.\n                ")]),n("p",{staticClass:"editable",attrs:{contenteditable:"true"}},[t._v("شما می‌توانید با کلیک کردن بر روی این نوشته، متن را ویرایش کنید.")])])]),n("div",{staticClass:"row mt-8"},t._l(t.results,(function(r){return n("div",{key:r.id,staticClass:"col w-full sm:w-1/3",attrs:{title:r.standard}},[n("div",{staticClass:"result"},[n("div",{staticClass:"result-title"},[t._v("\n                        "+t._s(r.label)+"\n                    ")]),n("div",{staticClass:"result-stars",attrs:{dir:"ltr"}},t._l(3,(function(t){return n("icon-star",{key:t,class:["star",t<=r.stars?"opacity-60":"opacity-10"]})})),1)])])})),0)])])}),[],!1,null,"defe319a",null));r.default=v.exports},"1QNJ":function(t,r,n){"use strict";n.d(r,"a",(function(){return i})),n.d(r,"b",(function(){return u}));var e=n("ODXe"),a=n("eUpm"),o=n("cQwu"),i=function(t){if(Object(o.a)(t)){var r=Object(a.e)(Object(a.b)(t)),n=Object(e.a)(r,3),i=n[0],c=n[1],u=n[2];return.2126*Object(a.f)(i)+.7152*Object(a.f)(c)+.0722*Object(a.f)(u)}return 0},c={},u=function(t){if(Object(o.a)(t)){if(!c[t]){var r=i(t);c[t]=function(t){return t<=216/24389?t*(24389/27):116*Math.pow(t,1/3)-16}(r)>60}return c[t]}return!0}},"1Y/n":function(t,r,n){var e=n("HAuM"),a=n("ewvW"),o=n("RK3t"),i=n("UMSQ"),c=function(t){return function(r,n,c,u){e(n);var s=a(r),l=o(s),f=i(s.length),d=t?f-1:0,v=t?-1:1;if(c<2)for(;;){if(d in l){u=l[d],d+=v;break}if(d+=v,t?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:f>d;d+=v)d in l&&(u=n(u,l[d],d,s));return u}};t.exports={left:c(!1),right:c(!0)}},"4l63":function(t,r,n){var e=n("I+eb"),a=n("wg0c");e({global:!0,forced:parseInt!=a},{parseInt:a})},DQNa:function(t,r,n){var e=n("busE"),a=Date.prototype,o=a.toString,i=a.getTime;new Date(NaN)+""!="Invalid Date"&&e(a,"toString",(function(){var t=i.call(this);return t==t?o.call(this):"Invalid Date"}))},DuXc:function(t,r,n){},E9XD:function(t,r,n){"use strict";var e=n("I+eb"),a=n("1Y/n").left,o=n("pkCn"),i=n("rkAj"),c=n("LQDL"),u=n("YF1G"),s=o("reduce"),l=i("reduce",{1:0});e({target:"Array",proto:!0,forced:!s||!l||!u&&c>79&&c<83},{reduce:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},EUja:function(t,r,n){"use strict";var e=n("ppGB"),a=n("HYAF");t.exports="".repeat||function(t){var r=String(a(this)),n="",o=e(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(r+=r))1&o&&(n+=r);return n}},QIpd:function(t,r,n){var e=n("xrYK");t.exports=function(t){if("number"!=typeof t&&"Number"!=e(t))throw TypeError("Incorrect invocation");return+t}},Rm1S:function(t,r,n){"use strict";var e=n("14Sl"),a=n("glrk"),o=n("UMSQ"),i=n("HYAF"),c=n("iqWW"),u=n("FMNM");e("match",1,(function(t,r,n){return[function(r){var n=i(this),e=null==r?void 0:r[t];return void 0!==e?e.call(r,n):new RegExp(r)[t](String(n))},function(t){var e=n(r,t,this);if(e.done)return e.value;var i=a(t),s=String(this);if(!i.global)return u(i,s);var l=i.unicode;i.lastIndex=0;for(var f,d=[],v=0;null!==(f=u(i,s));){var p=String(f[0]);d[v]=p,""===p&&(i.lastIndex=c(s,o(i.lastIndex),l)),v++}return 0===v?null:d}]}))},ZTXn:function(t,r,n){"use strict";n("DuXc")},cMHz:function(t,r,n){"use strict";n("yBEj")},cQwu:function(t,r,n){"use strict";n.d(r,"a",(function(){return e}));var e=function(t){try{return/^[0-9A-F]{6}$/i.test(t.toUpperCase())}catch(t){return!1}}},eUpm:function(t,r,n){"use strict";n.d(r,"f",(function(){return e})),n.d(r,"e",(function(){return a})),n.d(r,"d",(function(){return o})),n.d(r,"a",(function(){return c})),n.d(r,"c",(function(){return u})),n.d(r,"b",(function(){return l}));n("2B1R"),n("E9XD"),n("DQNa"),n("toAj"),n("07d7"),n("4l63"),n("rB9j"),n("JfAA"),n("Rm1S");var e=function(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},a=function(t){return t.map((function(t){return t/255}))},o=function(t){return t.reduce((function(t,r){var n=r.toString(16);return t+(1===n.length?"0":"")+n}),"")},i={},c=function(t){if(!i[t]){var r=l(t);i[t]=function(t){var r,n,e,a=t[0]/255,o=t[1]/255,i=t[2]/255,c=Math.max(a,o,i),u=Math.min(a,o,i),s=c-u;if(r=n=e=(c+u)/2,0===s)r=n=0;else{switch(c){case a:r=(o-i)/s%6;break;case o:r=(i-a)/s+2;break;case i:r=(a-o)/s+4}(r=Math.round(60*r))<0&&(r+=360),e=(c+u)/2,n=0===s?0:s/(1-Math.abs(2*e-1))}return[r,n=+(100*n).toFixed(1),e=+(100*e).toFixed(1)]}(r)}return i[t]},u=function(t){var r=function(t){var r=t[0],n=t[1],e=t[2];n/=100,e/=100;var a=(1-Math.abs(2*e-1))*n,o=r/60,i=a*(1-Math.abs(o%2-1)),c=0,u=0,s=0;o>=0&&o<1?(c=a,u=i):o>=1&&o<2?(c=i,u=a):o>=2&&o<3?(u=a,s=i):o>=3&&o<4?(u=i,s=a):o>=4&&o<5?(c=i,s=a):(c=a,s=i);var l=e-a/2;return c+=l,u+=l,s+=l,c*=255,u*=255,s*=255,[Math.round(c),Math.round(u),Math.round(s)]}(t);return o(r)},s={},l=function(t){try{if(!s[t]){var r=t.match(/.{1,2}/g).map((function(t){return parseInt(t,16)}));s[t]=r}return s[t]}catch(t){return[]}}},toAj:function(t,r,n){"use strict";var e=n("I+eb"),a=n("ppGB"),o=n("QIpd"),i=n("EUja"),c=n("0Dky"),u=1..toFixed,s=Math.floor,l=function(t,r,n){return 0===r?n:r%2==1?l(t,r-1,n*t):l(t*t,r/2,n)};e({target:"Number",proto:!0,forced:u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){u.call({})}))},{toFixed:function(t){var r,n,e,c,u=o(this),f=a(t),d=[0,0,0,0,0,0],v="",p="0",b=function(t,r){for(var n=-1,e=r;++n<6;)e+=t*d[n],d[n]=e%1e7,e=s(e/1e7)},h=function(t){for(var r=6,n=0;--r>=0;)n+=d[r],d[r]=s(n/t),n=n%t*1e7},m=function(){for(var t=6,r="";--t>=0;)if(""!==r||0===t||0!==d[t]){var n=String(d[t]);r=""===r?n:r+i.call("0",7-n.length)+n}return r};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(v="-",u=-u),u>1e-21)if(n=(r=function(t){for(var r=0,n=t;n>=4096;)r+=12,n/=4096;for(;n>=2;)r+=1,n/=2;return r}(u*l(2,69,1))-69)<0?u*l(2,-r,1):u/l(2,r,1),n*=4503599627370496,(r=52-r)>0){for(b(0,n),e=f;e>=7;)b(1e7,0),e-=7;for(b(l(10,e,1),0),e=r-1;e>=23;)h(1<<23),e-=23;h(1<<e),b(1,1),h(2),p=m()}else b(0,n),b(1<<-r,0),p=m()+i.call("0",f);return p=f>0?v+((c=p.length)<=f?"0."+i.call("0",f-c)+p:p.slice(0,c-f)+"."+p.slice(c-f)):v+p}})},wg0c:function(t,r,n){var e=n("2oRo"),a=n("WKiH").trim,o=n("WJkJ"),i=e.parseInt,c=/^[+-]?0[Xx]/,u=8!==i(o+"08")||22!==i(o+"0x16");t.exports=u?function(t,r){var n=a(String(t));return i(n,r>>>0||(c.test(n)?16:10))}:i},yBEj:function(t,r,n){},zJCt:function(t,r){t.exports={functional:!0,render(t,r){const{_c:n,_v:e,data:a,children:o=[]}=r,{class:i,staticClass:c,style:u,staticStyle:s,attrs:l={},...f}=a;return n("svg",{class:[i,c],style:[u,s],attrs:Object.assign({viewBox:"0 0 511.991 511"},l),...f},o.concat([n("path",{attrs:{d:"M510.652 185.883a27.177 27.177 0 00-23.402-18.688l-147.797-13.418-58.41-136.75C276.73 6.98 266.918.497 255.996.497s-20.738 6.483-25.023 16.53l-58.41 136.75-147.82 13.418c-10.837 1-20.013 8.34-23.403 18.688a27.25 27.25 0 007.937 28.926L121 312.773 88.059 457.86c-2.41 10.668 1.73 21.7 10.582 28.098a27.087 27.087 0 0015.957 5.184 27.14 27.14 0 0013.953-3.86l127.445-76.203 127.422 76.203a27.197 27.197 0 0029.934-1.324c8.851-6.398 12.992-17.43 10.582-28.098l-32.942-145.086 111.723-97.964a27.246 27.246 0 007.937-28.926zM258.45 409.605"}})]))}}}}]);