!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n(2);var i=n(6),o=r(i),a=(0,o["default"])(1e3).format("$0,0.00");console.log("I would pay "+a+" for this awesome course!")},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.id,r,""]]);n(5)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"body{font-family:Sans-Serif}table th{padding:5px}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=d[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(s(r.parts[o],t))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(s(r.parts[o],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],a=i[1],u=i[2],l=i[3],s={css:a,media:u,sourceMap:l};n[o]?n[o].parts.push(s):t.push(n[o]={id:o,parts:[s]})}return t}function o(e,t){var n=b(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function s(e,t){var n,r,i;if(t.singleton){var o=y++;n=m||(m=u(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=p.bind(null,n),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=c.bind(null,n),i=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function f(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function c(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,y=0,g=[];e.exports=function(e,t){if("object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var u=n[a],l=d[u.id];l.refs--,o.push(l)}if(e){var s=i(e);r(s,t)}for(var a=0;a<o.length;a++){var l=o[a];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete d[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r,i;/*!
	 * numeral.js
	 * version : 1.5.3
	 * author : Adam Draper
	 * license : MIT
	 * http://adamwdraper.github.com/Numeral-js/
	 */
(function(){function n(e){this._value=e}function o(e,t,n,r){var i,o,a=Math.pow(10,t);return o=(n(e*a)/a).toFixed(t),r&&(i=new RegExp("0{1,"+r+"}$"),o=o.replace(i,"")),o}function a(e,t,n){var r;return r=t.indexOf("$")>-1?l(e,t,n):t.indexOf("%")>-1?s(e,t,n):t.indexOf(":")>-1?f(e,t):p(e._value,t,n)}function u(e,t){var n,r,i,o,a,u=t,l=["KB","MB","GB","TB","PB","EB","ZB","YB"],s=!1;if(t.indexOf(":")>-1)e._value=c(t);else if(t===x)e._value=0;else{for("."!==y[g].delimiters.decimal&&(t=t.replace(/\./g,"").replace(y[g].delimiters.decimal,".")),n=new RegExp("[^a-zA-Z]"+y[g].abbreviations.thousand+"(?:\\)|(\\"+y[g].currency.symbol+")?(?:\\))?)?$"),r=new RegExp("[^a-zA-Z]"+y[g].abbreviations.million+"(?:\\)|(\\"+y[g].currency.symbol+")?(?:\\))?)?$"),i=new RegExp("[^a-zA-Z]"+y[g].abbreviations.billion+"(?:\\)|(\\"+y[g].currency.symbol+")?(?:\\))?)?$"),o=new RegExp("[^a-zA-Z]"+y[g].abbreviations.trillion+"(?:\\)|(\\"+y[g].currency.symbol+")?(?:\\))?)?$"),a=0;a<=l.length&&!(s=t.indexOf(l[a])>-1&&Math.pow(1024,a+1));a++);e._value=(s?s:1)*(u.match(n)?Math.pow(10,3):1)*(u.match(r)?Math.pow(10,6):1)*(u.match(i)?Math.pow(10,9):1)*(u.match(o)?Math.pow(10,12):1)*(t.indexOf("%")>-1?.01:1)*((t.split("-").length+Math.min(t.split("(").length-1,t.split(")").length-1))%2?1:-1)*Number(t.replace(/[^0-9\.]+/g,"")),e._value=s?Math.ceil(e._value):e._value}return e._value}function l(e,t,n){var r,i,o=t.indexOf("$"),a=t.indexOf("("),u=t.indexOf("-"),l="";return t.indexOf(" $")>-1?(l=" ",t=t.replace(" $","")):t.indexOf("$ ")>-1?(l=" ",t=t.replace("$ ","")):t=t.replace("$",""),i=p(e._value,t,n),o<=1?i.indexOf("(")>-1||i.indexOf("-")>-1?(i=i.split(""),r=1,(o<a||o<u)&&(r=0),i.splice(r,0,y[g].currency.symbol+l),i=i.join("")):i=y[g].currency.symbol+l+i:i.indexOf(")")>-1?(i=i.split(""),i.splice(-1,0,l+y[g].currency.symbol),i=i.join("")):i=i+l+y[g].currency.symbol,i}function s(e,t,n){var r,i="",o=100*e._value;return t.indexOf(" %")>-1?(i=" ",t=t.replace(" %","")):t=t.replace("%",""),r=p(o,t,n),r.indexOf(")")>-1?(r=r.split(""),r.splice(-1,0,i+"%"),r=r.join("")):r=r+i+"%",r}function f(e){var t=Math.floor(e._value/60/60),n=Math.floor((e._value-60*t*60)/60),r=Math.round(e._value-60*t*60-60*n);return t+":"+(n<10?"0"+n:n)+":"+(r<10?"0"+r:r)}function c(e){var t=e.split(":"),n=0;return 3===t.length?(n+=60*Number(t[0])*60,n+=60*Number(t[1]),n+=Number(t[2])):2===t.length&&(n+=60*Number(t[0]),n+=Number(t[1])),Number(n)}function p(e,t,n){var r,i,a,u,l,s,f=!1,c=!1,p=!1,d="",h=!1,v=!1,b=!1,m=!1,w=!1,O="",M="",_=Math.abs(e),B=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],N="",R=!1;if(0===e&&null!==x)return x;if(t.indexOf("(")>-1?(f=!0,t=t.slice(1,-1)):t.indexOf("+")>-1&&(c=!0,t=t.replace(/\+/g,"")),t.indexOf("a")>-1&&(h=t.indexOf("aK")>=0,v=t.indexOf("aM")>=0,b=t.indexOf("aB")>=0,m=t.indexOf("aT")>=0,w=h||v||b||m,t.indexOf(" a")>-1?(d=" ",t=t.replace(" a","")):t=t.replace("a",""),_>=Math.pow(10,12)&&!w||m?(d+=y[g].abbreviations.trillion,e/=Math.pow(10,12)):_<Math.pow(10,12)&&_>=Math.pow(10,9)&&!w||b?(d+=y[g].abbreviations.billion,e/=Math.pow(10,9)):_<Math.pow(10,9)&&_>=Math.pow(10,6)&&!w||v?(d+=y[g].abbreviations.million,e/=Math.pow(10,6)):(_<Math.pow(10,6)&&_>=Math.pow(10,3)&&!w||h)&&(d+=y[g].abbreviations.thousand,e/=Math.pow(10,3))),t.indexOf("b")>-1)for(t.indexOf(" b")>-1?(O=" ",t=t.replace(" b","")):t=t.replace("b",""),a=0;a<=B.length;a++)if(r=Math.pow(1024,a),i=Math.pow(1024,a+1),e>=r&&e<i){O+=B[a],r>0&&(e/=r);break}return t.indexOf("o")>-1&&(t.indexOf(" o")>-1?(M=" ",t=t.replace(" o","")):t=t.replace("o",""),M+=y[g].ordinal(e)),t.indexOf("[.]")>-1&&(p=!0,t=t.replace("[.]",".")),u=e.toString().split(".")[0],l=t.split(".")[1],s=t.indexOf(","),l?(l.indexOf("[")>-1?(l=l.replace("]",""),l=l.split("["),N=o(e,l[0].length+l[1].length,n,l[1].length)):N=o(e,l.length,n),u=N.split(".")[0],N=N.split(".")[1].length?y[g].delimiters.decimal+N.split(".")[1]:"",p&&0===Number(N.slice(1))&&(N="")):u=o(e,null,n),u.indexOf("-")>-1&&(u=u.slice(1),R=!0),s>-1&&(u=u.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+y[g].delimiters.thousands)),0===t.indexOf(".")&&(u=""),(f&&R?"(":"")+(!f&&R?"-":"")+(!R&&c?"+":"")+u+N+(M?M:"")+(d?d:"")+(O?O:"")+(f&&R?")":"")}function d(e,t){y[e]=t}function h(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)}function v(){var e=Array.prototype.slice.call(arguments);return e.reduce(function(e,t){var n=h(e),r=h(t);return n>r?n:r},-(1/0))}var b,m="1.5.3",y={},g="en",x=null,w="0,0",O="undefined"!=typeof e&&e.exports;b=function(e){return b.isNumeral(e)?e=e.value():0===e||"undefined"==typeof e?e=0:Number(e)||(e=b.fn.unformat(e)),new n(Number(e))},b.version=m,b.isNumeral=function(e){return e instanceof n},b.language=function(e,t){if(!e)return g;if(e&&!t){if(!y[e])throw new Error("Unknown language : "+e);g=e}return!t&&y[e]||d(e,t),b},b.languageData=function(e){if(!e)return y[g];if(!y[e])throw new Error("Unknown language : "+e);return y[e]},b.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),b.zeroFormat=function(e){x="string"==typeof e?e:null},b.defaultFormat=function(e){w="string"==typeof e?e:"0.0"},"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(e,t){"use strict";if(null===this||"undefined"==typeof this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof e)throw new TypeError(e+" is not a function");var n,r,i=this.length>>>0,o=!1;for(1<arguments.length&&(r=t,o=!0),n=0;i>n;++n)this.hasOwnProperty(n)&&(o?r=e(r,this[n],n,this):(r=this[n],o=!0));if(!o)throw new TypeError("Reduce of empty array with no initial value");return r}),b.fn=n.prototype={clone:function(){return b(this)},format:function(e,t){return a(this,e?e:w,void 0!==t?t:Math.round)},unformat:function(e){return"[object Number]"===Object.prototype.toString.call(e)?e:u(this,e?e:w)},value:function(){return this._value},valueOf:function(){return this._value},set:function(e){return this._value=Number(e),this},add:function(e){function t(e,t,r,i){return e+n*t}var n=v.call(null,this._value,e);return this._value=[this._value,e].reduce(t,0)/n,this},subtract:function(e){function t(e,t,r,i){return e-n*t}var n=v.call(null,this._value,e);return this._value=[e].reduce(t,this._value*n)/n,this},multiply:function(e){function t(e,t,n,r){var i=v(e,t);return e*i*(t*i)/(i*i)}return this._value=[this._value,e].reduce(t,1),this},divide:function(e){function t(e,t,n,r){var i=v(e,t);return e*i/(t*i)}return this._value=[this._value,e].reduce(t),this},difference:function(e){return Math.abs(b(this._value).subtract(e).value())}},O&&(e.exports=b),"undefined"==typeof ender&&(this.numeral=b),r=[],i=function(){return b}.apply(t,r),!(void 0!==i&&(e.exports=i))}).call(this)}]);
//# sourceMappingURL=bundle.js.map