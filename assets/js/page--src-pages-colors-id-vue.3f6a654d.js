(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2MGZ":function(t,o){t.exports={functional:!0,render(t,o){const{_c:e,_v:n,data:r,children:s=[]}=o,{class:a,staticClass:c,style:l,staticStyle:i,attrs:d={},...u}=r;return e("svg",{class:[a,c],style:[l,i],attrs:Object.assign({viewBox:"0 0 421.285 421.285"},d),...u},s.concat([e("path",{attrs:{d:"M418.742 203.942c-.3-.2-.5-.5-.8-.8l-50.6-44.8c-4.1-3.6-10.5-3.2-14.1.9-3.6 4.1-3.2 10.4.8 14l30.9 27.4h-164.3v-164.3l27.3 30.8c3.7 4.1 10 4.5 14.1.8s4.5-10 .8-14.1l-44.8-50.5c-3.7-4.1-10-4.5-14.1-.8-.3.3-.6.5-.8.8l-44.8 50.5c-3.6 4.1-3.2 10.5.9 14.1 4.1 3.6 10.4 3.2 14-.8l27.3-30.8v164.3h-164.2l30.8-27.3c4.1-3.7 4.5-10 .8-14.1s-10-4.5-14.1-.8l-50.5 44.8c-4.1 3.7-4.5 10-.8 14.1.3.3.5.6.8.8l50.5 44.8c4.1 3.6 10.5 3.2 14.1-.9 3.6-4.1 3.2-10.4-.8-14l-30.8-27.4h164.3v164.3l-27.3-30.8c-3.7-4.1-10-4.5-14.1-.8s-4.5 10-.8 14.1l44.8 50.5c3.7 4.1 10 4.5 14.1.8.3-.3.6-.5.8-.8l44.8-50.5c3.6-4.1 3.2-10.5-.9-14.1-4.1-3.6-10.4-3.2-14 .8l-27.4 30.8v-164.3h164.3l-30.8 27.3c-4.1 3.7-4.5 10-.8 14.1s10 4.5 14.1.8l50.5-44.8c4.1-3.7 4.5-10 .8-14.1z"}})]))}}},"5ygx":function(t,o,e){"use strict";o.a={methods:{copyColorToClipboard:function(t){this.copyToClipboard("#".concat(t.toUpperCase()))},copyToClipboard:function(t){var o=this;navigator.clipboard.writeText(t).then((function(){o.$toasted.show("کپی شد!")}),(function(t){console.error("Could not copy text: ",t)}))}}}},"6/fW":function(t,o){t.exports={functional:!0,render(t,o){const{_c:e,_v:n,data:r,children:s=[]}=o,{class:a,staticClass:c,style:l,staticStyle:i,attrs:d={},...u}=r;return e("svg",{class:[a,c],style:[l,i],attrs:Object.assign({viewBox:"0 0 412.73 412.73"},d),...u},s.concat([e("path",{attrs:{d:"M295.706 35.522a115.985 115.985 0 00-89.339 41.273 114.413 114.413 0 00-89.339-41.273C52.395 35.522 0 87.917 0 152.55c0 110.76 193.306 218.906 201.143 223.086a9.404 9.404 0 0010.449 0c7.837-4.18 201.143-110.759 201.143-223.086 0-64.633-52.396-117.028-117.029-117.028zm-89.339 319.216C176.065 336.975 20.898 242.412 20.898 152.55c0-53.091 43.039-96.131 96.131-96.131a94.041 94.041 0 0180.457 43.363c3.557 4.905 10.418 5.998 15.323 2.44a10.968 10.968 0 002.44-2.44c29.055-44.435 88.631-56.903 133.066-27.848a96.129 96.129 0 0143.521 80.615c.001 90.907-155.167 184.948-185.469 202.189z"}})]))}}},"90hW":function(t,o){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},B51U:function(t,o){t.exports={functional:!0,render(t,o){const{_c:e,_v:n,data:r,children:s=[]}=o,{class:a,staticClass:c,style:l,staticStyle:i,attrs:d={},...u}=r;return e("svg",{class:[a,c],style:[l,i],attrs:Object.assign({viewBox:"0 0 512.002 512.002"},d),...u},s.concat([e("path",{attrs:{d:"M388.425 241.951L151.609 5.79c-7.759-7.733-20.321-7.72-28.067.04-7.74 7.759-7.72 20.328.04 28.067l222.72 222.105-222.728 222.104c-7.759 7.74-7.779 20.301-.04 28.061a19.8 19.8 0 0014.057 5.835 19.79 19.79 0 0014.017-5.795l236.817-236.155c3.737-3.718 5.834-8.778 5.834-14.05s-2.103-10.326-5.834-14.051z"}})]))}}},BMQl:function(t,o,e){"use strict";e.r(o);e("TeQF"),e("yXV3"),e("oVuX"),e("rB9j"),e("UxlC"),e("EnZy");var n=e("nBRN"),r=e("cQwu"),s={components:{ColorBanner:n.a},computed:{colors:function(){try{return this.$route.params.id.split("-").filter((function(t,o,e){return Object(r.a)(t)&&e.indexOf(t)===o}))}catch(t){return[]}}},methods:{updateQuery:function(t){t.join("-")!==this.$route.params.id&&this.$router.replace({name:"__colors_id",params:{id:t.join("-")}})}}},a=e("KHd+"),c=Object(a.a)(s,(function(){var t=this.$createElement,o=this._self._c||t;return o("Layout",[o("div",{staticClass:"h-screen -mt-20 pt-16"},[o("color-banner",{attrs:{colors:this.colors},on:{update:this.updateQuery}})],1)])}),[],!1,null,null,null);o.default=c.exports},ICWk:function(t,o){t.exports={functional:!0,render(t,o){const{_c:e,_v:n,data:r,children:s=[]}=o,{class:a,staticClass:c,style:l,staticStyle:i,attrs:d={},...u}=r;return e("svg",{class:[a,c],style:[l,i],attrs:Object.assign({viewBox:"0 0 412.73 412.73"},d),...u},s.concat([e("path",{attrs:{d:"M295.706 35.522a115.985 115.985 0 00-89.339 41.273 114.413 114.413 0 00-89.339-41.273C52.395 35.522 0 87.917 0 152.55c0 110.76 193.306 218.906 201.143 223.086a9.404 9.404 0 0010.449 0c7.837-4.18 201.143-110.759 201.143-223.086 0-64.633-52.396-117.028-117.029-117.028z"}})]))}}},KvGi:function(t,o,e){e("I+eb")({target:"Math",stat:!0},{sign:e("90hW")})},SqEx:function(t,o,e){},T4Yb:function(t,o,e){"use strict";e("SqEx")},"Uf/a":function(t,o,e){},dqS3:function(t,o){t.exports={functional:!0,render(t,o){const{_c:e,_v:n,data:r,children:s=[]}=o,{class:a,staticClass:c,style:l,staticStyle:i,attrs:d={},...u}=r;return e("svg",{class:[a,c],style:[l,i],attrs:Object.assign({viewBox:"0 0 512 512"},d),...u},s.concat([e("path",{attrs:{d:"M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 475.429c-120.997 0-219.429-98.432-219.429-219.429S135.003 36.571 256 36.571 475.429 135.003 475.429 256 376.997 475.429 256 475.429z"}}),e("path",{attrs:{d:"M256 134.095c-10.1 0-18.286 8.186-18.286 18.286v207.238c0 10.1 8.186 18.286 18.286 18.286 10.1 0 18.286-8.186 18.286-18.286V152.381c0-10.1-8.186-18.286-18.286-18.286z"}}),e("path",{attrs:{d:"M359.619 237.714H152.381c-10.1 0-18.286 8.186-18.286 18.286 0 10.1 8.186 18.286 18.286 18.286h207.238c10.1 0 18.286-8.186 18.286-18.286 0-10.1-8.186-18.286-18.286-18.286z"}})]))}}},iqwK:function(t,o){t.exports={functional:!0,render(t,o){const{_c:e,_v:n,data:r,children:s=[]}=o,{class:a,staticClass:c,style:l,staticStyle:i,attrs:d={},...u}=r;return e("svg",{class:[a,c],style:[l,i],attrs:Object.assign({viewBox:"-70 -10 550 550"},d),...u},s.concat([e("path",{attrs:{d:"M324.809 2.668A9.997 9.997 0 00318.008 0H152.52c-27.602.031-49.97 22.398-50 50v23.93H50.156c-27.601.03-49.968 22.398-50 50v312.382c.032 27.602 22.399 49.97 50 50H271.56c27.601-.03 49.968-22.398 50-50v-23.925h58.046c27.602-.032 49.97-22.399 50-50V104.262a9.995 9.995 0 00-3.199-7.328zm2.433 29.543l63.352 58.777h-43.352c-11.043-.011-19.988-8.96-20-20zm-55.687 434.098H50.156c-16.558-.02-29.98-13.438-30-30V123.926c.02-16.559 13.442-29.98 30-30h149.035v56.676c.028 22.082 17.922 39.976 40 40h62.364v245.71c-.02 16.563-13.438 29.981-30 30zM219.19 104.64l69.778 65.96H239.19c-11.039-.011-19.984-8.96-20-20zm160.41 287.746h-58.046V178.19a10 10 0 00-3.13-7.265l-99.714-94.27a10.016 10.016 0 00-6.871-2.734h-89.32V50c.02-16.563 13.437-29.98 30-30h154.722v50.988c.024 22.078 17.918 39.973 40 40h62.36v251.399c-.02 16.558-13.438 29.98-30 30zm0 0"}})]))}}},nBRN:function(t,o,e){"use strict";e("x0AG"),e("QWBl"),e("2B1R"),e("pDQq"),e("KvGi"),e("FZtP");var n=e("VTBJ"),r=e("DUUS"),s=e.n(r),a=e("iqwK"),c=e.n(a),l=e("2MGZ"),i=e.n(l),d=e("dqS3"),u=e.n(d),h=e("6/fW"),f=e.n(h),p=e("ICWk"),v=e.n(p),C=(e("ma9I"),e("E9XD"),e("B51U")),g={components:{IconChevron:e.n(C).a},props:{colors:{type:Array,default:function(){return[]}}},data:function(){return{gradDirection:"left",directions:[{name:"right",degree:0},{name:"right top",degree:315},{name:"top",degree:270},{name:"left top",degree:225},{name:"left",degree:180},{name:"left bottom",degree:135},{name:"bottom",degree:90},{name:"right bottom",degree:45}]}},computed:{gradient:function(){var t=this.colors.reduce((function(t,o,e){return"".concat(t,", #").concat(o.hex.toUpperCase())}),this.gradDirection);return"linear-gradient(to ".concat(t,")")}}},m=(e("oc50"),e("KHd+")),x=Object(m.a)(g,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"gradient flex-center",style:{background:t.gradient}},[e("div",{staticClass:"gradient__code smooth-transition",attrs:{dir:"ltr"},on:{click:function(o){return t.$emit("copy","background: "+t.gradient+";")}}},[e("code",[t._v("background: "+t._s(t.gradient)+";")])]),e("ul",{staticClass:"gradient__dir flex-center smooth-transition"},t._l(t.directions,(function(o,n){return e("li",{key:n,staticClass:"p-1",style:"transform: rotate("+o.degree+"deg)",on:{click:function(e){t.gradDirection=o.name}}},[e("icon-chevron",{class:["gradient__icon smooth-transition",{"border border-white":o.name===t.gradDirection}]})],1)})),0)])}),[],!1,null,"7e9a2d90",null).exports,b={props:{value:{type:Boolean,default:!1}}},_=Object(m.a)(b,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"bg-rb-violet-100"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"flex-center h-12"},[e("div",{staticClass:"flex-grow text-left text-black text-opacity-60"},[e("span",{staticClass:"p-2 inline-block link select-none",on:{click:function(o){return t.$emit("input",!t.value)}}},[t.value?[t._v("\n                        مخفی کردن\n                    ")]:[t._v("\n                        نمایش به صورت\n                    ")],t._v("\n                    گرادیانت\n                ")],2)])])])])}),[],!1,null,null,null).exports,y=e("L2JU"),w=e("1QNJ"),I=e("eUpm"),k=e("5ygx"),j={components:{IconDelete:s.a,IconCopy:c.a,IconMove:i.a,IconAdd:u.a,IconHeartEmpty:f.a,IconHeartFilled:v.a,BannerGradient:x,BannerFooter:_},mixins:[k.a],props:{colors:{type:Array,default:function(){return[]}}},data:function(){return{localColors:[],activeColor:null,gradIsVisible:!1}},computed:Object(n.a)(Object(n.a)({},Object(y.c)(["device","favoriteColors"])),{},{colorWidth:function(){return this.windowWidth/this.localColors.length},colorWidthPercents:function(){return 100/this.localColors.length},windowWidth:function(){try{return window.outerWidth}catch(t){return 0}}}),watch:{localColors:function(t){this.$emit("update",t.map((function(t){return t.hex})))},colors:{handler:function(t){this.localColors=t.map((function(t){return{hex:t,translate:0}}))},immediate:!0}},methods:Object(n.a)(Object(n.a)({},Object(y.b)(["toggleFavoriteColor"])),{},{isLight:w.a,deleteColor:function(t){this.localColors.splice(t,1)},addColor:function(t){var o=Object(I.b)(this.localColors[t-1].hex),e=Object(I.b)(this.localColors[t].hex),n=o.map((function(t,o){return Math.round((t+e[o])/2)}));this.localColors.splice(t,0,{hex:Object(I.c)(n),translate:0})},translateColor:function(t){var o=this;if(null!==this.activeColor){var e=this.localColors.findIndex((function(t){return t.hex===o.activeColor})),n=Math.round(this.localColors[e].translate/this.colorWidth);this.localColors[e].translate=t.x+this.colorWidth/2-this.colorWidth*(this.localColors.length-e),0!==n&&this.localColors[e-n]?this.localColors[e-n].translate=this.colorWidth*Math.sign(n)*-1:this.localColors.forEach((function(t){t.hex!==o.localColors[e].hex&&(t.translate=0)}))}},moveColor:function(t,o){var e=Object(n.a)({},this.localColors[t]);this.localColors.splice(t,1),this.localColors.splice(o,0,e)},captureOn:function(t,o){this.activeColor=o,this.translateColor(t)},captureOff:function(){var t=this;if(this.activeColor){var o=this.localColors.findIndex((function(o){return o.hex===t.activeColor})),e=Math.round(this.localColors[o].translate/this.colorWidth);0!==Math.abs(e)&&this.moveColor(o,o-e),this.localColors.forEach((function(t){t.translate=0})),this.activeColor=null}}})},O=(e("T4Yb"),Object(m.a)(j,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"h-full flex flex-col relative"},[e("ul",{staticClass:"flex flex-grow justify-center relative overflow-hidden",on:{mousemove:t.translateColor,mouseup:t.captureOff}},t._l(t.localColors,(function(o,n){return e("li",{key:o.hex,class:["absolute h-full",{"z-50":t.activeColor===o.hex,"smooth-transition":t.activeColor!==o.hex}],style:{transform:"translateX("+o.translate+"px)",right:t.colorWidthPercents*n+"%",width:t.colorWidthPercents+"%"}},[e("div",{class:["color",t.isLight(o.hex)?"color--light":"color--dark"],style:{backgroundColor:"#"+o.hex}},[e("div",{staticClass:"color__actions flex-center smooth-transition"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.localColors.length>2,expression:"localColors.length > 2"}],staticClass:"color__actions__icon smooth-transition"},[e("icon-delete",{staticClass:"p-3 fill-current w-12 block",on:{click:function(o){return t.deleteColor(n)}}})],1),t.device.isDesktop?e("span",{directives:[{name:"show",rawName:"v-show",value:t.localColors.length>1,expression:"localColors.length > 1"}],staticClass:"color__actions__icon smooth-transition"},[e("icon-move",{staticClass:"p-3 fill-current w-12 block",on:{mousedown:function(e){return t.captureOn(e,o.hex)}}})],1):t._e(),e("span",{staticClass:"color__actions__icon smooth-transition"},[e("icon-copy",{staticClass:"p-3 fill-current w-12 block",on:{click:function(e){return t.copyColorToClipboard(o.hex)}}})],1),e("span",{staticClass:"color__actions__icon smooth-transition"},[e(-1===t.favoriteColors.indexOf(o.hex)?"IconHeartEmpty":"IconHeartFilled",{tag:"component",staticClass:"p-3 fill-current w-12 block",on:{click:function(e){return t.toggleFavoriteColor(o.hex)}}})],1)]),e("code",{staticClass:"color__code smooth-transition",attrs:{dir:"ltr"}},[t._v("\n                    "+t._s(o.hex)+"\n                ")]),e("div",{staticClass:"color__add smooth-transition"},[e("div",{staticClass:"flex-center h-full"},[e("span",{staticClass:"button",on:{click:function(o){return t.addColor(n)}}},[e("icon-add",{staticClass:"w-8 fill-current"})],1)])])])])})),0),e("transition",{attrs:{name:"fade"}},[e("banner-gradient",{directives:[{name:"show",rawName:"v-show",value:t.gradIsVisible,expression:"gradIsVisible"}],attrs:{colors:t.localColors},on:{copy:t.copyToClipboard}})],1),e("banner-footer",{model:{value:t.gradIsVisible,callback:function(o){t.gradIsVisible=o},expression:"gradIsVisible"}})],1)}),[],!1,null,"d20d624c",null));o.a=O.exports},oc50:function(t,o,e){"use strict";e("Uf/a")},pDQq:function(t,o,e){"use strict";var n=e("I+eb"),r=e("I8vh"),s=e("ppGB"),a=e("UMSQ"),c=e("ewvW"),l=e("ZfDv"),i=e("hBjN"),d=e("Hd5f"),u=e("rkAj"),h=d("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min;n({target:"Array",proto:!0,forced:!h||!f},{splice:function(t,o){var e,n,d,u,h,f,C=c(this),g=a(C.length),m=r(t,g),x=arguments.length;if(0===x?e=n=0:1===x?(e=0,n=g-m):(e=x-2,n=v(p(s(o),0),g-m)),g+e-n>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(d=l(C,n),u=0;u<n;u++)(h=m+u)in C&&i(d,u,C[h]);if(d.length=n,e<n){for(u=m;u<g-n;u++)f=u+e,(h=u+n)in C?C[f]=C[h]:delete C[f];for(u=g;u>g-n+e;u--)delete C[u-1]}else if(e>n)for(u=g-n;u>m;u--)f=u+e-1,(h=u+n-1)in C?C[f]=C[h]:delete C[f];for(u=0;u<e;u++)C[u+m]=arguments[u+2];return C.length=g-n+e,d}})},x0AG:function(t,o,e){"use strict";var n=e("I+eb"),r=e("tycR").findIndex,s=e("RNIs"),a=e("rkAj"),c=!0,l=a("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!l},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("findIndex")}}]);