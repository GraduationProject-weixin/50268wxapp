(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/list"],{"0095":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,r,a,u,s){try{var i=t[u](s),c=i.value}catch(o){return void n(o)}i.done?e(c):Promise.resolve(c).then(r,a)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var s=t.apply(e,n);function i(t){u(s,r,a,i,c,"next",t)}function c(t){u(s,r,a,i,c,"throw",t)}i(void 0)}))}}var i={data:function(){return{source:0,list:[],user:{}}},onLoad:function(e){var n=this;return s(r.default.mark((function e(){var a,u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.getStorageSync("nowTable"),e.next=3,n.$api.session(a);case 3:return u=e.sent,n.user=u.data,e.next=7,n.$api.page("address",{yonghuId:n.user.id});case 7:u=e.sent,n.list=u.data.list;case 9:case"end":return e.stop()}}),e)})))()},onShow:function(){var e=this;return s(r.default.mark((function n(){var a,u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.getStorageSync("nowTable"),n.next=3,e.$api.session(a);case 3:return u=n.sent,e.user=u.data,n.next=7,e.$api.page("address",{yonghuId:e.user.id});case 7:u=n.sent,e.list=u.data.list;case 9:case"end":return n.stop()}}),n)})))()},methods:{onSelectTap:function(e){t.setStorageSync("address",e),t.navigateBack({delta:1})},onAddressDtailTap:function(t){var e="";e=t?"../address/detail?id="+t:"../address/detail?id=",this.$utils.jump(e)},onDeleteTap:function(e){var n=this;return s(r.default.mark((function a(){var u;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:u=n,t.showModal({title:"提示",content:"是否确认删除",success:function(){var t=s(r.default.mark((function t(n){var a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.confirm){t.next=9;break}return t.next=3,u.$api.del("address",JSON.stringify([e]));case 3:return a=t.sent,t.next=6,u.$api.page("address",{yonghuId:u.user.id});case 6:a=t.sent,u.list=a.data.list,u.$utils.msg("删除成功");case 9:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}()});case 2:case"end":return a.stop()}}),a)})))()}}};e.default=i}).call(this,n("543d")["default"])},"126c":function(t,e,n){"use strict";(function(t){n("48cf");r(n("66fd"));var e=r(n("6d31"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"36df":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},"6d31":function(t,e,n){"use strict";n.r(e);var r=n("36df"),a=n("d733");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("8cd2");var s,i=n("f0c5"),c=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],s);e["default"]=c.exports},"8cd2":function(t,e,n){"use strict";var r=n("e288"),a=n.n(r);a.a},d733:function(t,e,n){"use strict";n.r(e);var r=n("0095"),a=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=a.a},e288:function(t,e,n){}},[["126c","common/runtime","common/vendor"]]]);