(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/caipin/detail"],{"097b":function(t,e,n){"use strict";(function(t){n("48cf");i(n("66fd"));var e=i(n("338a"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"100b":function(t,e,n){},"2f3f":function(t,e,n){"use strict";n.r(e);var i=n("bfa2"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"338a":function(t,e,n){"use strict";n.r(e);var i=n("bb7a"),a=n("2f3f");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("ed9c");var c,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);e["default"]=u.exports},bb7a:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"daae"))}},a=function(){var t=this,e=t.$createElement;t._self._c},r=[]},bfa2:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,i,a,r,c){try{var o=t[r](c),u=o.value}catch(s){return void n(s)}o.done?e(u):Promise.resolve(u).then(i,a)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var c=t.apply(e,n);function o(t){r(c,i,a,o,u,"next",t)}function u(t){r(c,i,a,o,u,"throw",t)}o(void 0)}))}}var o={data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},collectionFlag:0}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var e=this;return c(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.id=t.id;case 1:case"end":return n.stop()}}),n)})))()},onShow:function(e){var n=this;return c(i.default.mark((function e(){var a,r,c;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.init(),n.getcaipinCollection(),a=t.getStorageSync("nowTable"),e.next=5,n.$api.session(a);case 5:r=e.sent,n.user=r.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),c=t.getStorageSync("pingluenStateState"),c&&(t.removeStorageSync("pingluenStateState"),n.mescroll.num=1,n.upCallback(n.mescroll));case 10:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{download:function(e){var n=this;t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},init:function(){var t=this;return c(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.info("caipin",t.id);case 2:n=e.sent,t.detail=n.data,t.swiperList=t.detail.caipinPhoto?t.detail.caipinPhoto.split(","):[];case 5:case"end":return e.stop()}}),e)})))()},onCartTap:function(){var t=this;return c(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.page("cart",{page:1,limit:9999,caipinId:t.id});case 2:if(n=e.sent,!(n.data.list.length>0)){e.next=6;break}return t.$utils.msg("商品已添加到购物车"),e.abrupt("return");case 6:return e.next=8,t.$api.save("cart",{caipinId:t.detail.id,buyNumber:1,yonghuId:t.user.id});case 8:t.$utils.msg("添加到购物车成功");case 9:case"end":return e.stop()}}),e)})))()},onSubmit:function(){t.setStorageSync("orderGoods",[{caipinId:this.detail.id,caipinName:this.detail.caipinName,caipinPhoto:this.swiperList[0],buyNumber:1,caipinNewMoney:this.detail.caipinNewMoney}]),this.$utils.jump("../caipinOrder/confirm")},getcaipinCollection:function(){var t=this;return c(i.default.mark((function e(){var n,a;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={page:1,limit:1,caipinId:t.id,caipinCollectionTypes:"1"},e.next=3,t.$api.page("caipinCollection",n);case 3:a=e.sent,a.data.list.length>0?t.collectionFlag=a.data.list.length:t.collectionFlag=0;case 5:case"end":return e.stop()}}),e)})))()},shoucang:function(){var e=this;return c(i.default.mark((function n(){var a,r,o,u;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e,r={page:1,limit:1,caipinId:a.detail.id,yonghuId:a.user.id,caipinCollectionTypes:"1"},n.next=4,a.$api.list("caipinCollection",r);case 4:if(o=n.sent,1!=o.data.list.length){n.next=9;break}return u=o.data.list[0].id,t.showModal({title:"提示",content:"是否取消",success:function(){var t=c(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return t.next=3,a.$api.del("caipinCollection",JSON.stringify([u]));case 3:a.$utils.msg("取消成功"),a.getcaipinCollection();case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}),n.abrupt("return");case 9:t.showModal({title:"提示",content:"是否收藏",success:function(){var t=c(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return t.next=3,a.$api.add("caipinCollection",{yonghuId:a.user.id,caipinId:a.detail.id,caipinCollectionTypes:1});case 3:a.$utils.msg("收藏成功"),a.getcaipinCollection();case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 10:case"end":return n.stop()}}),n)})))()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var e=this;return c(i.default.mark((function n(){var a;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api.list("caipinCommentback",{page:t.num,limit:t.size,caipinId:e.id});case 2:a=n.sent,1==t.num&&(e.commentList=[]),e.commentList=e.commentList.concat(a.data.list),0==a.data.list.length&&(e.hasNext=!1),t.endSuccess(t.size,e.hasNext);case 7:case"end":return n.stop()}}),n)})))()},onCommentTap:function(){var t=this;return c(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$utils.jump("../caipinCommentback/add-or-update?caipinId=".concat(t.id));case 1:case"end":return e.stop()}}),e)})))()}}};e.default=o}).call(this,n("543d")["default"])},ed9c:function(t,e,n){"use strict";var i=n("100b"),a=n.n(i);a.a}},[["097b","common/runtime","common/vendor"]]]);