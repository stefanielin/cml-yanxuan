var __CML__GLOBAL=require("../../manifest.js");__CML__GLOBAL.webpackJsonp([13],{103:function(e,t,n){n(104),n(105)},104:function(e,t){},105:function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),u=o(r),i=n(2),l=o(i),c=n(4),f=o(c),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=n(0),h=o(d),g=function(){function e(){a(this,e),this.data={rightbtn:{name:"编辑"},goods:[],goodslist:[],scrollerHeight:0},this.methods={godetail:function(){(0,f.default)({path:"/pages/detail/detail"})}}}return s(e,[{key:"created",value:function(){var e=this;(0,l.default)({url:"/cml-yanxuan/mock/yanxuan.json"}).then(function(t){try{t=JSON.parse(t)}catch(e){}if(0==t.errno){var n=t.data.result;e.goods=n.goods,console.log(e.goods)}})}},{key:"mounted",value:function(){var e=this;(0,u.default)().then(function(t){e.scrollerHeight=Number(t.viewportHeight)-114-90-66})}}]),e}();t.default=new g,t.default=h.default.createComponent(t.default).getOptions()}},[103]);