!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){var n=r(2);t.exports=class extends n{constructor(t="",e=Date.now(),r="",n=""){super(t,e),this._url=r,this._thumbnail=n}toString(){return`Photo : ${super.toString()}\nUrl: ${this._url}\nThumbnail: ${this._thumbnail}\n********************************************************************************`}}},function(t,e,r){"use strict";r.r(e);var n=r(0);const o=new(r.n(n).a);console.log("not empty"),console.dir(o)},function(t,e){class r{constructor(t="",e=Date.now()){this.text=t,this._created=e}get created(){return this.created}set created(t){if(!t||isNaN(t))throw new Error("Invalid Create Date");if(r.prototype.call(this,"_created"))throw new Error("Created already exists");this._created=t}toString(){return`Message created at ${this._created} - text: ${this.text}`}}t.exports=r}]);
//# sourceMappingURL=main.js.map