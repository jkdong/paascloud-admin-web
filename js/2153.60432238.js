(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2153"],{2153:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("d2-container",[s("el-tabs",[s("el-tab-pane",{attrs:{label:"顶栏菜单"}},[s("el-button-group",{staticClass:"d2-mb"},[s("el-button",{on:{click:e.handleHeaderSet}},[e._v("设置顶栏空菜单")]),s("el-button",{on:{click:e.headerReset}},[e._v("恢复顶栏菜单")])],1),s("d2-highlight",{attrs:{code:JSON.stringify(e.header,null,2)}})],1),s("el-tab-pane",{attrs:{label:"侧栏菜单"}},[s("el-button-group",{staticClass:"d2-mb"},[s("el-button",{on:{click:e.handleAsideSet}},[e._v("设置侧栏空菜单")]),s("el-button",{on:{click:e.asideReset}},[e._v("恢复侧栏菜单")])],1),s("d2-highlight",{attrs:{code:JSON.stringify(e.aside,null,2)}})],1)],1)],1)},a=[],d=s("c93e"),n=(s("cadf"),s("551c"),s("097d"),s("2ef0")),h=s("2f62"),c={data:function(){return{menuEmpty:[{title:"空菜单演示",icon:"folder-o",children:[{title:"空菜单 1",children:[{title:"空菜单 1-1"},{title:"空菜单 1-2"}]},{title:"空菜单 2"},{title:"空菜单 3"}]}],headerChanged:!1,asideChanged:!1,headerBak:[],asideBak:[]}},computed:Object(d["a"])({},Object(h["e"])("d2admin/menu",["header","aside"])),created:function(){this.headerBak=Object(n["cloneDeep"])(this.header),this.asideBak=Object(n["cloneDeep"])(this.aside)},beforeDestroy:function(){return this.headerChanged&&this.asideChanged?(this.headerSet(this.headerBak),this.asideSet(this.asideBak),void this.$notify({title:"菜单恢复",message:"对侧边栏和顶栏菜单的修改已经复原",type:"success"})):this.headerChanged?(this.headerSet(this.headerBak),void this.$notify({title:"菜单恢复",message:"对顶栏菜单的修改已经复原",type:"success"})):void(this.asideChanged&&(this.asideSet(this.asideBak),this.$notify({title:"菜单恢复",message:"对侧边栏菜单的修改已经复原",type:"success"})))},methods:Object(d["a"])({},Object(h["d"])("d2admin/menu",["headerSet","asideSet"]),{handleHeaderSet:function(){this.headerChanged=!0,this.headerSet(this.menuEmpty),this.$notify({title:"菜单修改",message:"对顶栏菜单的修改已经生效",type:"success"})},handleAsideSet:function(){this.asideChanged=!0,this.asideSet(this.menuEmpty),this.$notify({title:"菜单修改",message:"对侧边栏菜单的修改已经生效",type:"success"})},headerReset:function(){this.headerSet(this.headerBak),this.$notify({title:"菜单恢复",message:"对顶栏菜单的修改已经复原",type:"success"})},asideReset:function(){this.asideSet(this.asideBak),this.$notify({title:"菜单恢复",message:"对侧边栏菜单的修改已经复原",type:"success"})}})},l=c,o=s("2877"),r=Object(o["a"])(l,i,a,!1,null,null,null);r.options.__file="index.vue";t["default"]=r.exports}}]);
//# sourceMappingURL=2153.60432238.js.map