(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24615cfd"],{"80ca":function(e,t,n){},9195:function(e,t,n){"use strict";var a=n("80ca"),r=n.n(a);r.a},ed5d:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-crud-table",{attrs:{sourceColumns:e.sourceColumns,dataSource:e.data,totalCount:e.totalCount,loading:e.loading,query:e.query,initRow:{status:1}},on:{"update:query":function(t){e.query=t},"handle-submit":e.handleSubmit,"handle-update":e.handleUpdate,"handle-create":e.handleCreate,"handle-retrieve":e.handleRetrieve}})],1)},r=[],i=(n("96cf"),n("1da1")),u=(n("cadf"),n("551c"),n("097d"),[{title:"menuId",dataIndex:"menuId",formOptions:{schema:{model:"input",disabled:!0}}},{title:"parentName",dataIndex:"parentName",formOptions:{schema:{model:"input"},rules:[{required:!0,message:"Please input username!"}]}},{title:"name",dataIndex:"name",hidden:!0,formOptions:{visible:{edit:!1},schema:{model:"input"},rules:[{required:!0,message:"Please input username!"}]}},{title:"url",dataIndex:"url",formOptions:{schema:{model:"datepicker"},visible:{add:!1,edit:!1},rules:[{required:!0,message:"Please input username!"}]}},{title:"perms",dataIndex:"perms",formOptions:{schema:{model:"input"},rules:[{required:!0,message:"Please input username!"}]}},{title:"type",dataIndex:"type",formOptions:{schema:{model:"input"},rules:[{required:!0,message:"Please input username!"}]}},{title:"icon",dataIndex:"icon",formOptions:{schema:{model:"input"},rules:[{required:!0,message:"Please input username!"}]}}]),s={data:function(){return{sourceColumns:u,data:[],loading:!1,query:{page:1,limit:10},totalCount:0}},watch:{query:{handler:function(){this.getData()},deep:!0}},created:function(){this.getData()},methods:{getData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.$api.MENU_LIST(this.query);case 3:t=e.sent,this.loading=!1,t&&(this.data=t,this.query.limit=t.length,this.totalCount=t.length);case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),save:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.MENU_SAVE(t);case 2:n=e.sent,0===n.code&&(alert("成功"),this.getData());case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),update:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.MENU_UPDATE(t);case 2:n=e.sent,0===n.code&&(alert("更新成功"),this.getData());case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handleSubmit:function(e){alert(JSON.stringify(e))},handleCreate:function(e){this.save(e)},handleUpdate:function(e){this.update(e)},handleRetrieve:function(){}}},o=s,d=(n("9195"),n("2877")),l=Object(d["a"])(o,a,r,!1,null,"27311465",null);l.options.__file="menu-list.vue";t["default"]=l.exports}}]);