webpackJsonp([6],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=n(395),o=a(r),i=n(934),s=a(i),u=n(936),l=a(u),c=n(938),d=a(c),f=n(945),m=a(f),p=n(952),h=a(p),v=new o["default"].Application,y=function(e){this.layout=new s["default"]({el:e.el}),this.layout.render(),this.customMeasures=new l["default"]({projectId:e.component.id}),this.headerView=new d["default"]({collection:this.customMeasures,projectId:e.component.id}),this.layout.headerRegion.show(this.headerView),this.listView=new m["default"]({collection:this.customMeasures}),this.layout.listRegion.show(this.listView),this.listFooterView=new h["default"]({collection:this.customMeasures}),this.layout.listFooterRegion.show(this.listFooterView),this.customMeasures.fetch()};v.on("start",function(e){y.call(v,e)}),window.sonarqube.appStarted.then(function(e){return v.start(e)})},257:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t.join(".");return g[a]||a}function o(e){for(var t=g[e],n=arguments.length,a=Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return t?a.reduce(function(e,t,n){return e.replace("{"+n+"}",t)},t):e+"."+a.join(".")}function i(){return window.navigator.languages?window.navigator.languages[0]:window.navigator.language}function s(e){var t=window.baseUrl+"/api/l10n/index?"+(0,v.stringify)(e);return fetch(t,{credentials:"same-origin"}).then(function(e){switch(e.status){case 200:return e.json();case 304:return JSON.parse(localStorage.getItem("l10n.bundle"));case 401:return window.location=window.baseUrl+"/sessions/new?return_to="+encodeURIComponent(window.location.pathname+window.location.search+window.location.hash),{};default:throw new Error("Unexpected status code: "+e.status)}})}function u(){var e=localStorage.getItem("l10n.bundle");if(!e)return!1;try{var t=JSON.parse(e);return null!=t&&"object"===("undefined"==typeof t?"undefined":h(t))}catch(n){return!1}}function l(){var e=i(),t=localStorage.getItem("l10n.locale");t!==e&&localStorage.removeItem("l10n.timestamp");var n=localStorage.getItem("l10n.timestamp"),a={locale:e};return null!==n&&u()&&(a.ts=n),s(a).then(function(t){try{var n=(0,b["default"])().format("YYYY-MM-DDTHH:mm:ssZZ");localStorage.setItem("l10n.timestamp",n),localStorage.setItem("l10n.locale",e),localStorage.setItem("l10n.bundle",JSON.stringify(t))}catch(a){}g=t})}function c(e){g=e}function d(){window.t=r,window.tp=o,window.requestMessages=l}function f(e){var t="dashboard."+e+".name",n=r(t);return n!==t?n:e}function m(e){var t="metric."+e.key+".name",n=r(t);return n!==t?n:e.name}function p(e){var t="metric_domain."+e,n=r(t);return n!==t?n:e}Object.defineProperty(t,"__esModule",{value:!0});var h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.translate=r,t.translateWithParameters=o,t.requestMessages=l,t.resetBundle=c,t.installGlobal=d,t.getLocalizedDashboardName=f,t.getLocalizedMetricName=m,t.getLocalizedMetricDomain=p;var v=n(258),y=n(261),b=a(y),g={}},258:function(e,t,n){"use strict";t.decode=t.parse=n(259),t.encode=t.stringify=n(260)},259:function(e,t){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,a,r){t=t||"&",a=a||"=";var o={};if("string"!=typeof e||0===e.length)return o;var i=/\+/g;e=e.split(t);var s=1e3;r&&"number"==typeof r.maxKeys&&(s=r.maxKeys);var u=e.length;s>0&&u>s&&(u=s);for(var l=0;l<u;++l){var c,d,f,m,p=e[l].replace(i,"%20"),h=p.indexOf(a);h>=0?(c=p.substr(0,h),d=p.substr(h+1)):(c=p,d=""),f=decodeURIComponent(c),m=decodeURIComponent(d),n(o,f)?Array.isArray(o[f])?o[f].push(m):o[f]=[o[f],m]:o[f]=m}return o}},260:function(e,t){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,a,r){return t=t||"&",a=a||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map(function(r){var o=encodeURIComponent(n(r))+a;return Array.isArray(e[r])?e[r].map(function(e){return o+encodeURIComponent(n(e))}).join(t):o+encodeURIComponent(n(e[r]))}).join(t):r?encodeURIComponent(n(r))+a+encodeURIComponent(n(e)):""}},371:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n=m(t);return f(e,n)}function o(e,t){var n=p(t);return f(e,n)}function i(e){return(0,W.translate)("metric",e,"name")}function s(e){var t=J["default"].groupBy(e,"domain"),n=J["default"].map(t,function(e,t){return{domain:t,metrics:J["default"].sortBy(e,"name")}});return J["default"].sortBy(n,"domain")}function u(e){return"INT"===e?"SHORT_INT":"WORK_DUR"===e?"SHORT_WORK_DUR":e}function l(e,t){return e.map(function(e){var n=t.find(function(t){return t.key===e.metric});return B({},e,{metric:n})})}function c(e,t){var n=e.periods,a=n.find(function(e){return e.index===t});return a?a.value:null}function d(e){return 0===e.indexOf("new_")}function f(e,t){return null!=e&&""!==e&&null!=t?t(e):null}function m(e){var t={INT:y,SHORT_INT:g,FLOAT:_,PERCENT:x,WORK_DUR:$,SHORT_WORK_DUR:F,RATING:C,LEVEL:S,MILLISEC:R};return t[e]||h}function p(e){var t={INT:b,SHORT_INT:w,FLOAT:M,PERCENT:O,WORK_DUR:U,SHORT_WORK_DUR:q,RATING:v,LEVEL:v,MILLISEC:j};return t[e]||h}function h(e){return e}function v(){return null}function y(e){return(0,z["default"])(e).format("0,0")}function b(e){return(0,z["default"])(e).format("+0,0")}function g(e){var t="0,0";return e>=1e3&&(t="0.[0]a"),e>=1e4&&(t="0a"),(0,z["default"])(e).format(t)}function w(e){var t=g(Math.abs(e));return e<0?"-"+t:"+"+t}function _(e){return(0,z["default"])(e).format("0,0.0[0000]")}function M(e){return 0===e?"+0.0":(0,z["default"])(e).format("+0,0.0[0000]")}function x(e){return e=parseFloat(e),(0,z["default"])(e/100).format("0,0.0%")}function O(e){return e=parseFloat(e),0===e?"+0.0%":(0,z["default"])(e/100).format("+0,0.0%")}function C(e){return e=parseInt(e,10),String.fromCharCode(97+e-1).toUpperCase()}function S(e){var t="metric.level."+e,n=(0,W.translate)(t);return t!==n?n:e}function R(e){var t=1e3,n=60*t;if(e>=n){var a=Math.round(e/n);return a+"min"}if(e>=t){var r=Math.round(e/t);return r+"s"}return e+"ms"}function j(e){var t=Math.abs(e),n=R(t);return e<0?"-"+n:"+"+n}function I(e){return e>0}function N(e){return e>.9}function k(e,t){return t>0&&e<10}function T(e){return e>.9}function D(e,t,n){return n>0&&t<10&&0===e}function E(e){return e.length>0?e+" ":e}function P(e,t,n,a){var r="";return I(t)&&(r+=(0,W.translateWithParameters)("work_duration.x_days",e?-1*t:t)),k(t,n)&&(r=E(r),r+=(0,W.translateWithParameters)("work_duration.x_hours",e&&0===r.length?-1*n:n)),D(t,n,a)&&(r=E(r),r+=(0,W.translateWithParameters)("work_duration.x_minutes",e&&0===r.length?-1*a:a)),r}function A(e,t,n,a){if(N(t)){var o=Math.round(t),i=r(e?-1*o:o,"SHORT_INT");return(0,W.translateWithParameters)("work_duration.x_days",i)}if(T(n)){var s=Math.round(n),u=r(e?-1*s:s,"SHORT_INT");return(0,W.translateWithParameters)("work_duration.x_hours",u)}var l=r(e?-1*a:a,"SHORT_INT");return(0,W.translateWithParameters)("work_duration.x_minutes",l)}function $(e){if(0===e||"0"===e)return"0";var t=window.SS.hoursInDay,n=e<0,a=Math.abs(e),r=Math.floor(a/t/60),o=a-r*t*60,i=Math.floor(o/60);return o-=60*i,P(n,r,i,o)}function F(e){if(e=parseInt(e,10),0===e||"0"===e)return"0";var t=window.SS.hoursInDay,n=e<0,a=Math.abs(e),r=a/t/60,o=a-Math.floor(r)*t*60,i=o/60;return o-=60*Math.floor(i),A(n,r,i,o)}function U(e){if(0===e||"0"===e)return"+0";var t=$(e);return"-"!==t[0]?"+"+t:t}function q(e){if(0===e||"0"===e)return"+0";var t=F(e);return"-"!==t[0]?"+"+t:t}Object.defineProperty(t,"__esModule",{value:!0});var B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.formatMeasure=r,t.formatMeasureVariation=o,t.localizeMetric=i,t.groupByDomain=s,t.getShortType=u,t.enhanceMeasuresWithMetrics=l,t.getPeriodValue=c,t.isDiffMetric=d;var V=n(372),z=a(V),L=n(249),J=a(L),W=n(257)},372:function(e,t){var n=!1;/*!
	 * numeral.js
	 * version : 1.5.3
	 * author : Adam Draper
	 * license : MIT
	 * http://adamwdraper.github.com/Numeral-js/
	 */
(function(){function t(e){this._value=e}function a(e,t,n,a){var r,o,i=Math.pow(10,t);return o=(n(e*i)/i).toFixed(t),a&&(r=new RegExp("0{1,"+a+"}$"),o=o.replace(r,"")),o}function r(e,t,n){var a;return a=t.indexOf("$")>-1?i(e,t,n):t.indexOf("%")>-1?s(e,t,n):t.indexOf(":")>-1?u(e,t):c(e._value,t,n)}function o(e,t){var n,a,r,o,i,s=t,u=["KB","MB","GB","TB","PB","EB","ZB","YB"],c=!1;if(t.indexOf(":")>-1)e._value=l(t);else if(t===b)e._value=0;else{for("."!==v[y].delimiters.decimal&&(t=t.replace(/\./g,"").replace(v[y].delimiters.decimal,".")),n=new RegExp("[^a-zA-Z]"+v[y].abbreviations.thousand+"(?:\\)|(\\"+v[y].currency.symbol+")?(?:\\))?)?$"),a=new RegExp("[^a-zA-Z]"+v[y].abbreviations.million+"(?:\\)|(\\"+v[y].currency.symbol+")?(?:\\))?)?$"),r=new RegExp("[^a-zA-Z]"+v[y].abbreviations.billion+"(?:\\)|(\\"+v[y].currency.symbol+")?(?:\\))?)?$"),o=new RegExp("[^a-zA-Z]"+v[y].abbreviations.trillion+"(?:\\)|(\\"+v[y].currency.symbol+")?(?:\\))?)?$"),i=0;i<=u.length&&!(c=t.indexOf(u[i])>-1&&Math.pow(1024,i+1));i++);e._value=(c?c:1)*(s.match(n)?Math.pow(10,3):1)*(s.match(a)?Math.pow(10,6):1)*(s.match(r)?Math.pow(10,9):1)*(s.match(o)?Math.pow(10,12):1)*(t.indexOf("%")>-1?.01:1)*((t.split("-").length+Math.min(t.split("(").length-1,t.split(")").length-1))%2?1:-1)*Number(t.replace(/[^0-9\.]+/g,"")),e._value=c?Math.ceil(e._value):e._value}return e._value}function i(e,t,n){var a,r,o=t.indexOf("$"),i=t.indexOf("("),s=t.indexOf("-"),u="";return t.indexOf(" $")>-1?(u=" ",t=t.replace(" $","")):t.indexOf("$ ")>-1?(u=" ",t=t.replace("$ ","")):t=t.replace("$",""),r=c(e._value,t,n),o<=1?r.indexOf("(")>-1||r.indexOf("-")>-1?(r=r.split(""),a=1,(o<i||o<s)&&(a=0),r.splice(a,0,v[y].currency.symbol+u),r=r.join("")):r=v[y].currency.symbol+u+r:r.indexOf(")")>-1?(r=r.split(""),r.splice(-1,0,u+v[y].currency.symbol),r=r.join("")):r=r+u+v[y].currency.symbol,r}function s(e,t,n){var a,r="",o=100*e._value;return t.indexOf(" %")>-1?(r=" ",t=t.replace(" %","")):t=t.replace("%",""),a=c(o,t,n),a.indexOf(")")>-1?(a=a.split(""),a.splice(-1,0,r+"%"),a=a.join("")):a=a+r+"%",a}function u(e){var t=Math.floor(e._value/60/60),n=Math.floor((e._value-60*t*60)/60),a=Math.round(e._value-60*t*60-60*n);return t+":"+(n<10?"0"+n:n)+":"+(a<10?"0"+a:a)}function l(e){var t=e.split(":"),n=0;return 3===t.length?(n+=60*Number(t[0])*60,n+=60*Number(t[1]),n+=Number(t[2])):2===t.length&&(n+=60*Number(t[0]),n+=Number(t[1])),Number(n)}function c(e,t,n){var r,o,i,s,u,l,c=!1,d=!1,f=!1,m="",p=!1,h=!1,g=!1,w=!1,_=!1,M="",x="",O=Math.abs(e),C=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],S="",R=!1;if(0===e&&null!==b)return b;if(t.indexOf("(")>-1?(c=!0,t=t.slice(1,-1)):t.indexOf("+")>-1&&(d=!0,t=t.replace(/\+/g,"")),t.indexOf("a")>-1&&(p=t.indexOf("aK")>=0,h=t.indexOf("aM")>=0,g=t.indexOf("aB")>=0,w=t.indexOf("aT")>=0,_=p||h||g||w,t.indexOf(" a")>-1?(m=" ",t=t.replace(" a","")):t=t.replace("a",""),O>=Math.pow(10,12)&&!_||w?(m+=v[y].abbreviations.trillion,e/=Math.pow(10,12)):O<Math.pow(10,12)&&O>=Math.pow(10,9)&&!_||g?(m+=v[y].abbreviations.billion,e/=Math.pow(10,9)):O<Math.pow(10,9)&&O>=Math.pow(10,6)&&!_||h?(m+=v[y].abbreviations.million,e/=Math.pow(10,6)):(O<Math.pow(10,6)&&O>=Math.pow(10,3)&&!_||p)&&(m+=v[y].abbreviations.thousand,e/=Math.pow(10,3))),t.indexOf("b")>-1)for(t.indexOf(" b")>-1?(M=" ",t=t.replace(" b","")):t=t.replace("b",""),i=0;i<=C.length;i++)if(r=Math.pow(1024,i),o=Math.pow(1024,i+1),e>=r&&e<o){M+=C[i],r>0&&(e/=r);break}return t.indexOf("o")>-1&&(t.indexOf(" o")>-1?(x=" ",t=t.replace(" o","")):t=t.replace("o",""),x+=v[y].ordinal(e)),t.indexOf("[.]")>-1&&(f=!0,t=t.replace("[.]",".")),s=e.toString().split(".")[0],u=t.split(".")[1],l=t.indexOf(","),u?(u.indexOf("[")>-1?(u=u.replace("]",""),u=u.split("["),S=a(e,u[0].length+u[1].length,n,u[1].length)):S=a(e,u.length,n),s=S.split(".")[0],S=S.split(".")[1].length?v[y].delimiters.decimal+S.split(".")[1]:"",f&&0===Number(S.slice(1))&&(S="")):s=a(e,null,n),s.indexOf("-")>-1&&(s=s.slice(1),R=!0),l>-1&&(s=s.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+v[y].delimiters.thousands)),0===t.indexOf(".")&&(s=""),(c&&R?"(":"")+(!c&&R?"-":"")+(!R&&d?"+":"")+s+S+(x?x:"")+(m?m:"")+(M?M:"")+(c&&R?")":"")}function d(e,t){v[e]=t}function f(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)}function m(){var e=Array.prototype.slice.call(arguments);return e.reduce(function(e,t){var n=f(e),a=f(t);return n>a?n:a},-(1/0))}var p,h="1.5.3",v={},y="en",b=null,g="0,0",w="undefined"!=typeof e&&e.exports;p=function(e){return p.isNumeral(e)?e=e.value():0===e||"undefined"==typeof e?e=0:Number(e)||(e=p.fn.unformat(e)),new t(Number(e))},p.version=h,p.isNumeral=function(e){return e instanceof t},p.language=function(e,t){if(!e)return y;if(e&&!t){if(!v[e])throw new Error("Unknown language : "+e);y=e}return!t&&v[e]||d(e,t),p},p.languageData=function(e){if(!e)return v[y];if(!v[e])throw new Error("Unknown language : "+e);return v[e]},p.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),p.zeroFormat=function(e){b="string"==typeof e?e:null},p.defaultFormat=function(e){g="string"==typeof e?e:"0.0"},"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(e,t){"use strict";if(null===this||"undefined"==typeof this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof e)throw new TypeError(e+" is not a function");var n,a,r=this.length>>>0,o=!1;for(1<arguments.length&&(a=t,o=!0),n=0;r>n;++n)this.hasOwnProperty(n)&&(o?a=e(a,this[n],n,this):(a=this[n],o=!0));if(!o)throw new TypeError("Reduce of empty array with no initial value");return a}),p.fn=t.prototype={clone:function(){return p(this)},format:function(e,t){return r(this,e?e:g,void 0!==t?t:Math.round)},unformat:function(e){return"[object Number]"===Object.prototype.toString.call(e)?e:o(this,e?e:g)},value:function(){return this._value},valueOf:function(){return this._value},set:function(e){return this._value=Number(e),this},add:function(e){function t(e,t,a,r){return e+n*t}var n=m.call(null,this._value,e);return this._value=[this._value,e].reduce(t,0)/n,this},subtract:function(e){function t(e,t,a,r){return e-n*t}var n=m.call(null,this._value,e);return this._value=[e].reduce(t,this._value*n)/n,this},multiply:function(e){function t(e,t,n,a){var r=m(e,t);return e*r*(t*r)/(r*r)}return this._value=[this._value,e].reduce(t,1),this},divide:function(e){function t(e,t,n,a){var r=m(e,t);return e*r/(t*r)}return this._value=[this._value,e].reduce(t),this},difference:function(e){return Math.abs(p(this._value).subtract(e).value())}},w&&(e.exports=p),"undefined"==typeof ender&&(this.numeral=p),"function"==typeof n&&n.amd&&n([],function(){return p})}).call(this)},418:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=n(261),o=a(r);e.exports=function(e){return(0,o["default"])(e).format("LL")}},419:function(e,t){"use strict";e.exports=function(){var e=Array.prototype.slice.call(arguments,0,-1);return window.t.apply(this,e)}},476:function(e,t){"use strict";e.exports=function(e,t,n){return e==t?n.fn(this):n.inverse(this)}},499:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(353),o=a(r),i=n(395),s=a(i),u="modal";t["default"]=s["default"].ItemView.extend({className:"modal",overlayClassName:"modal-overlay",htmlClassName:"modal-open",events:function(){return{"click .js-modal-close":"onCloseClick"}},onRender:function(){var e=this;this.$el.detach().appendTo((0,o["default"])("body")),(0,o["default"])("html").addClass(this.htmlClassName),this.renderOverlay(),this.keyScope=key.getScope(),key.setScope("modal"),key("escape","modal",function(){return e.destroy(),!1}),this.show(),this.options.large&&this.$el.addClass("modal-large")},show:function(){var e=this;setTimeout(function(){e.$el.addClass("in"),(0,o["default"])("."+e.overlayClassName).addClass("in")},0)},onDestroy:function(){(0,o["default"])("html").removeClass(this.htmlClassName),this.removeOverlay(),key.deleteScope("modal"),key.setScope(this.keyScope)},onCloseClick:function(e){e.preventDefault(),this.destroy()},renderOverlay:function(){var e=(0,o["default"])("."+this.overlayClassName);0===e.length&&(0,o["default"])('<div class="'+this.overlayClassName+'"></div>').appendTo((0,o["default"])("body"))},removeOverlay:function(){(0,o["default"])("."+this.overlayClassName).remove()},attachCloseEvents:function(){var e=this;(0,o["default"])("body").on("click."+u,function(){(0,o["default"])("body").off("click."+u),e.destroy()})}})},505:function(e,t,n){"use strict";var a=n(371);e.exports=function(e,t){return(0,a.formatMeasure)(e,t)}},691:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(249),o=a(r),i=n(499),s=a(i);t["default"]=s["default"].extend({ui:function(){return{messagesContainer:".js-modal-messages"}},events:function(){return o["default"].extend(s["default"].prototype.events.apply(this,arguments),{"keydown input,textarea,select":"onInputKeydown","submit form":"onFormSubmit"})},onRender:function(){s["default"].prototype.onRender.apply(this,arguments);var e=this;setTimeout(function(){e.$(":tabbable").first().focus()},0)},onInputKeydown:function(e){27===e.keyCode&&this.destroy()},onFormSubmit:function(e){e.preventDefault()},showErrors:function(e,t){var n=this.ui.messagesContainer.empty();o["default"].isArray(e)&&e.forEach(function(e){var t='<div class="alert alert-danger">'+e.msg+"</div>";n.append(t)}),o["default"].isArray(t)&&t.forEach(function(e){var t='<div class="alert alert-warning">'+e.msg+"</div>";n.append(t)}),this.ui.messagesContainer.scrollParent().scrollTop(0)},disableForm:function(){var e=this.$("form");this.disabledFields=e.find(":input:not(:disabled)"),this.disabledFields.prop("disabled",!0)},enableForm:function(){null!=this.disabledFields&&this.disabledFields.prop("disabled",!1)}})},934:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(395),o=a(r),i=n(935),s=a(i);t["default"]=o["default"].LayoutView.extend({template:s["default"],regions:{headerRegion:"#custom-measures-header",listRegion:"#custom-measures-list",listFooterRegion:"#custom-measures-list-footer"}})},935:function(e,t,n){var a=n(410);e.exports=(a["default"]||a).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,a){return'<div class="page">\n  <div id="custom-measures-header"></div>\n  <div id="custom-measures-list"></div>\n  <div id="custom-measures-list-footer"></div>\n</div>\n'},useData:!0})},936:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(249),o=a(r),i=n(392),s=a(i),u=n(937),l=a(u);t["default"]=s["default"].Collection.extend({model:l["default"],initialize:function(e){this.projectId=e.projectId},url:function(){return window.baseUrl+"/api/custom_measures/search"},parse:function(e){return this.total=e.total,this.p=e.p,this.ps=e.ps,e.customMeasures},fetch:function(e){var t=o["default"].defaults(e||{},{data:{}});return this.q=t.data.q,t.data.projectId=this.projectId,s["default"].Collection.prototype.fetch.call(this,t)},fetchMore:function(){var e=this.p+1;return this.fetch({add:!0,remove:!1,data:{p:e,ps:this.ps,q:this.q}})},refresh:function(){return this.fetch({reset:!0,data:{q:this.q}})},hasMore:function(){return this.total>this.p*this.ps},getTakenMetrics:function(){var e=this.map(function(e){return e.get("metric").id});return o["default"].uniq(e)}})},937:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(249),o=a(r),i=n(392),s=a(i);t["default"]=s["default"].Model.extend({idAttribute:"id",urlRoot:function(){return window.baseUrl+"/api/custom_measures"},sync:function(e,t,n){var a=n||{};return"create"===e&&o["default"].defaults(a,{url:this.urlRoot()+"/create",type:"POST",data:o["default"].pick(t.toJSON(),"metricId","value","description","projectId")}),"update"===e&&o["default"].defaults(a,{url:this.urlRoot()+"/update",type:"POST",data:o["default"].pick(t.toJSON(),"id","value","description")}),"delete"===e&&o["default"].defaults(a,{url:this.urlRoot()+"/delete",type:"POST",data:{id:this.id}}),s["default"].ajax(a)}})},938:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(395),o=a(r),i=n(939),s=a(i),u=n(944),l=a(u);t["default"]=o["default"].ItemView.extend({template:l["default"],events:{"click #custom-measures-create":"onCreateClick"},onCreateClick:function(e){e.preventDefault(),this.createCustomMeasure()},createCustomMeasure:function(){new s["default"]({collection:this.collection,projectId:this.options.projectId}).render()}})},939:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(937),o=a(r),i=n(940),s=a(i);t["default"]=s["default"].extend({sendRequest:function(){var e=this,t=new o["default"]({metricId:this.$("#create-custom-measure-metric").val(),value:this.$("#create-custom-measure-value").val(),description:this.$("#create-custom-measure-description").val(),projectId:this.options.projectId});return this.disableForm(),t.save(null,{statusCode:{400:null}}).done(function(){e.collection.refresh(),e.destroy()}).fail(function(t){e.enableForm(),e.showErrors(t.responseJSON.errors,t.responseJSON.warnings)})}})},940:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(249),o=a(r),i=n(691),s=a(i),u=n(941),l=a(u),c=n(943),d=a(c);t["default"]=s["default"].extend({template:d["default"],initialize:function(){this.metrics=new l["default"],this.listenTo(this.metrics,"reset",this.render),this.metrics.fetch({reset:!0})},onRender:function(){s["default"].prototype.onRender.apply(this,arguments),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"}),this.$("#create-custom-measure-metric").select2({width:"250px",minimumResultsForSearch:20})},onDestroy:function(){s["default"].prototype.onDestroy.apply(this,arguments),this.$('[data-toggle="tooltip"]').tooltip("destroy")},onFormSubmit:function(){s["default"].prototype.onFormSubmit.apply(this,arguments),this.sendRequest()},getAvailableMetrics:function(){var e=this.collection.getTakenMetrics();return this.metrics.toJSON().filter(function(t){return e.indexOf(t.id)===-1})},serializeData:function(){var e=this.getAvailableMetrics(),t=!this.model;return o["default"].extend(s["default"].prototype.serializeData.apply(this,arguments),{metrics:e,canCreateMetric:!t||e.length>0})}})},941:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(249),o=a(r),i=n(392),s=a(i),u=n(942),l=a(u);t["default"]=s["default"].Collection.extend({model:l["default"],url:function(){return window.baseUrl+"/api/metrics/search"},parse:function(e){return this.total=e.total,this.p=e.p,this.ps=e.ps,e.metrics},fetch:function(e){var t=o["default"].defaults(e||{},{data:{}});return this.q=t.data.q,t.data.isCustom=!0,s["default"].Collection.prototype.fetch.call(this,t)},fetchMore:function(){var e=this.p+1;return this.fetch({add:!0,remove:!1,data:{p:e,ps:this.ps,q:this.q}})},refresh:function(){return this.fetch({reset:!0,data:{q:this.q}})},hasMore:function(){return this.total>this.p*this.ps}})},942:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(249),o=a(r),i=n(392),s=a(i);t["default"]=s["default"].Model.extend({idAttribute:"id",urlRoot:function(){return window.baseUrl+"/api/metrics"},sync:function(e,t,n){var a=n||{};return"create"===e&&o["default"].defaults(a,{url:this.urlRoot()+"/create",type:"POST",data:o["default"].pick(t.toJSON(),"key","name","description","domain","type")}),"update"===e&&o["default"].defaults(a,{url:this.urlRoot()+"/update",type:"POST",data:o["default"].pick(t.toJSON(),"id","key","name","description","domain","type")}),"delete"===e&&o["default"].defaults(a,{url:this.urlRoot()+"/delete",type:"POST",data:{ids:this.id}}),s["default"].ajax(a)}})},943:function(e,t,n){var a=n(410);e.exports=(a["default"]||a).template({1:function(e,t,n,a){return"Update"},3:function(e,t,n,a){return"Create"},5:function(e,t,n,a,r){var o,i="";return o=t["if"].call(e,null!=e?e.canCreateMetric:e,{name:"if",hash:{},fn:this.program(6,a,r),inverse:this.program(10,a,r),data:a}),null!=o&&(i+=o),i},6:function(e,t,n,a,r){var o,i='        <div class="modal-field">\n          <label for="create-custom-measure-metric">Metric<em class="mandatory">*</em></label>\n          <select id="create-custom-measure-metric" name="metric" required>\n';return o=t.each.call(e,null!=e?e.metrics:e,{name:"each",hash:{},fn:this.program(7,a,r),inverse:this.noop,data:a}),null!=o&&(i+=o),i+"          </select>\n        </div>\n"},7:function(e,t,a,r,o){var i,s=this.lambda,u=this.escapeExpression,l='              <option value="'+u(s(null!=e?e.id:e,e))+'" ';return i=n(476).call(e,null!=e?e.id:e,null!=(i=null!=o[1]?o[1].metric:o[1])?i.id:i,{name:"eq",hash:{},fn:this.program(8,r,o),inverse:this.noop,data:r}),null!=i&&(l+=i),l+">"+u(s(null!=e?e.name:e,e))+"</option>\n"},8:function(e,t,n,a){return"selected"},10:function(e,t,a,r){var o=this.escapeExpression;return'        <div class="alert alert-warning">'+o(n(419).call(e,"custom_measures.all_metrics_taken",{name:"t",hash:{},data:r}))+"</div>\n"},12:function(e,t,n,a){return"disabled"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,a,r){var o,i=this.lambda,s=this.escapeExpression,u='<form id="create-custom-measure-form" autocomplete="off">\n  <div class="modal-head">\n    <h2>';return o=t["if"].call(e,null!=e?e.id:e,{name:"if",hash:{},fn:this.program(1,a,r),inverse:this.program(3,a,r),data:a}),null!=o&&(u+=o),u+=' Custom Measure</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n\n',o=t.unless.call(e,null!=e?e.id:e,{name:"unless",hash:{},fn:this.program(5,a,r),inverse:this.noop,data:a}),null!=o&&(u+=o),u+='\n    <div class="modal-field">\n      <label for="create-custom-measure-value">Value<em class="mandatory">*</em></label>\n      <input id="create-custom-measure-value" name="value" type="text" maxlength="200" required value="'+s(i(null!=e?e.value:e,e))+'">\n    </div>\n\n    <div class="modal-field">\n      <label for="create-custom-measure-description">Description</label>\n      <textarea id="create-custom-measure-description" name="description">'+s(i(null!=e?e.description:e,e))+'</textarea>\n    </div>\n  </div>\n  <div class="modal-foot">\n    <button id="create-custom-measure-submit" ',o=t.unless.call(e,null!=e?e.canCreateMetric:e,{name:"unless",hash:{},fn:this.program(12,a,r),inverse:this.noop,data:a}),null!=o&&(u+=o),u+=">\n      ",o=t["if"].call(e,null!=e?e.id:e,{name:"if",hash:{},fn:this.program(1,a,r),inverse:this.program(3,a,r),data:a}),null!=o&&(u+=o),u+'\n    </button>\n    <a href="#" class="js-modal-close" id="create-custom-measure-cancel">Cancel</a>\n  </div>\n</form>\n'},useData:!0,useDepths:!0})},944:function(e,t,n){var a=n(410);e.exports=(a["default"]||a).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,a,r){var o=this.escapeExpression;return'<header class="page-header">\n  <h1 class="page-title">'+o(n(419).call(e,"custom_measures.page",{name:"t",hash:{},data:r}))+'</h1>\n  <div class="page-actions">\n    <div class="button-group">\n      <button id="custom-measures-create">'+o(n(419).call(e,"create",{name:"t",hash:{},data:r}))+'</button>\n    </div>\n  </div>\n  <p class="page-description">'+o(n(419).call(e,"custom_measures.page.description",{name:"t",hash:{},data:r}))+"</p>\n</header>\n"},useData:!0})},945:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(395),o=a(r),i=n(946),s=a(i),u=n(951),l=a(u);t["default"]=o["default"].CompositeView.extend({template:l["default"],childView:s["default"],childViewContainer:"tbody"})},946:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(395),o=a(r),i=n(947),s=a(i),u=n(948),l=a(u),c=n(950),d=a(c);t["default"]=o["default"].ItemView.extend({tagName:"tr",template:d["default"],events:{"click .js-custom-measure-update":"onUpdateClick","click .js-custom-measure-delete":"onDeleteClick"},onRender:function(){this.$el.attr("data-id",this.model.id),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"})},onDestroy:function(){this.$('[data-toggle="tooltip"]').tooltip("destroy")},onUpdateClick:function(e){e.preventDefault(),this.updateCustomMeasure()},onDeleteClick:function(e){e.preventDefault(),this.deleteCustomMeasure()},updateCustomMeasure:function(){new s["default"]({model:this.model,collection:this.model.collection}).render()},deleteCustomMeasure:function(){new l["default"]({model:this.model}).render()}})},947:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(940),o=a(r);t["default"]=o["default"].extend({sendRequest:function(){var e=this;return this.model.set({value:this.$("#create-custom-measure-value").val(),description:this.$("#create-custom-measure-description").val()}),this.disableForm(),this.model.save(null,{statusCode:{400:null}}).done(function(){e.collection.refresh(),e.destroy()}).fail(function(t){e.enableForm(),e.showErrors(t.responseJSON.errors,t.responseJSON.warnings)})}})},948:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(691),o=a(r),i=n(949),s=a(i);t["default"]=o["default"].extend({template:s["default"],onFormSubmit:function(){o["default"].prototype.onFormSubmit.apply(this,arguments),this.sendRequest()},sendRequest:function(){var e=this,t=this.model.collection;return this.model.destroy({wait:!0,statusCode:{400:null}}).done(function(){t.refresh(),e.destroy()}).fail(function(t){e.showErrors(t.responseJSON.errors,t.responseJSON.warnings)})}})},949:function(e,t,n){var a=n(410);e.exports=(a["default"]||a).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,a){var r,o=this.lambda,i=this.escapeExpression;return'<form id="delete-custom-measure-form">\n  <div class="modal-head">\n    <h2>Delete Custom Measure</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    Are you sure you want to delete custom measure "'+i(o(null!=(r=null!=e?e.metric:e)?r.name:r,e))+'"?\n  </div>\n  <div class="modal-foot">\n    <button id="delete-custom-measure-submit" class="button-red">Delete</button>\n    <a href="#" class="js-modal-close" id="delete-custom-measure-cancel">Cancel</a>\n  </div>\n</form>\n'},useData:!0})},950:function(e,t,n){var a=n(410);e.exports=(a["default"]||a).template({1:function(e,t,a,r){var o=this.escapeExpression;return'      <span class="js-custom-measure-pending badge badge-warning spacer-left"\n            title="'+o(n(419).call(e,"custom_measures.pending_tooltip",{name:"t",hash:{},data:r}))+'"\n            data-toggle="tooltip" data-placement="bottom">'+o(n(419).call(e,"custom_measures.pending",{name:"t",hash:{},data:r}))+"</span>\n"},3:function(e,t,a,r){var o=this.escapeExpression;return'    Updated on <span class="js-custom-measure-created-at">'+o(n(418).call(e,null!=e?e.updatedAt:e,{name:"d",hash:{},data:r}))+"</span>\n"},5:function(e,t,a,r){var o=this.escapeExpression;return'    Created on <span class="js-custom-measure-created-at">'+o(n(418).call(e,null!=e?e.createdAt:e,{name:"d",hash:{},data:r}))+"</span>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,a,r){var o,i=this.lambda,s=this.escapeExpression,u='<td class="nowrap">\n  <div>\n    <span class="js-custom-measure-metric-name">'+s(i(null!=(o=null!=e?e.metric:e)?o.name:o,e))+"</span>\n";return o=t["if"].call(e,null!=e?e.pending:e,{name:"if",hash:{},fn:this.program(1,r),inverse:this.noop,data:r}),null!=o&&(u+=o),u+='  </div>\n  <span class="js-custom-measure-domain note">'+s(i(null!=(o=null!=e?e.metric:e)?o.domain:o,e))+'</span>\n</td>\n\n<td class="nowrap">\n  <strong class="js-custom-measure-value">'+s(n(505).call(e,null!=e?e.value:e,null!=(o=null!=e?e.metric:e)?o.type:o,{name:"formatMeasure",hash:{},data:r}))+'</strong>\n</td>\n\n<td class="">\n  <span class="js-custom-measure-description">'+s(i(null!=e?e.description:e,e))+'</span>\n</td>\n\n<td class="">\n',o=t["if"].call(e,null!=e?e.updatedAt:e,{name:"if",hash:{},fn:this.program(3,r),inverse:this.program(5,r),data:r}),null!=o&&(u+=o),u+'  by <span class="js-custom-measure-user">'+s(i(null!=(o=null!=e?e.user:e)?o.name:o,e))+'</span>\n</td>\n\n<td class="thin nowrap">\n  <a class="js-custom-measure-update icon-edit" title="Update" data-toggle="tooltip" href="#"></a>\n  <a class="js-custom-measure-delete icon-delete" title="Delete" data-toggle="tooltip" href="#"></a>\n</td>\n'},useData:!0})},951:function(e,t,n){var a=n(410);e.exports=(a["default"]||a).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,a){return'<table class="data zebra">\n  <thead>\n  <tr>\n    <th>Metric</th>\n    <th>Value</th>\n    <th>Description</th>\n    <th>Date</th>\n    <th>&nbsp;</th>\n  </tr>\n  </thead>\n  <tbody></tbody>\n</table>\n'},useData:!0})},952:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(249),o=a(r),i=n(395),s=a(i),u=n(953),l=a(u);t["default"]=s["default"].ItemView.extend({template:l["default"],collectionEvents:{all:"render"},events:{"click #custom-measures-fetch-more":"onMoreClick"},onMoreClick:function(e){e.preventDefault(),this.fetchMore()},fetchMore:function(){this.collection.fetchMore()},serializeData:function(){return o["default"].extend(s["default"].ItemView.prototype.serializeData.apply(this,arguments),{total:this.collection.total,count:this.collection.length,more:this.collection.hasMore()})}})},953:function(e,t,n){var a=n(410);e.exports=(a["default"]||a).template({1:function(e,t,n,a){return'    <a id="custom-measures-fetch-more" class="spacer-left" href="#">show more</a>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,a){var r,o,i="function",s=t.helperMissing,u=this.escapeExpression,l='<footer class="spacer-top note text-center">\n  '+u((o=null!=(o=t.count||(null!=e?e.count:e))?o:s,typeof o===i?o.call(e,{name:"count",hash:{},data:a}):o))+"/"+u((o=null!=(o=t.total||(null!=e?e.total:e))?o:s,typeof o===i?o.call(e,{name:"total",hash:{},data:a}):o))+" shown\n";return r=t["if"].call(e,null!=e?e.more:e,{name:"if",hash:{},fn:this.program(1,a),inverse:this.noop,data:a}),null!=r&&(l+=r),l+"</footer>\n"},useData:!0})}});