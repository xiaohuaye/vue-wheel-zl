(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},233:function(e,t,n){"use strict";var i=n(115);n.n(i).a},234:function(e,t,n){"use strict";var i=n(116);n.n(i).a},235:function(e,t,n){"use strict";var i=n(117);n.n(i).a},266:function(e,t,n){"use strict";n.r(t);var i=n(0),s={name:"collapse",props:{defaultopen:{type:Array},single:{}},data:function(){return{eventBus:new i.a,open:this.defaultopen,singleMode:void 0!==this.single}},provide:function(){return{eventBus:this.eventBus}},mounted:function(){var e=this;if(this.singleMode&&this.open.length>1)try{console.warn("单个item显示开启时不要默认开启多个item")}catch(e){console.log("单个item显示开启时不要默认开启多个item")}this.eventBus.$emit("update:open",{openArray:this.open,singleMode:this.singleMode}),this.eventBus.$on("update:open",function(t){e.open=t.openArray,e.$emit("update:defaultopen",e.open)})}},l=(n(233),n(1)),a=Object(l.a)(s,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"collapse-wrapper"},[this._t("default")],2)},[],!1,null,"32ad53a9",null).exports,o={name:"collapse-item",inject:["eventBus"],props:{title:{type:String,require:!0}},data:function(){return{open:[],isShow:!1,singleMode:!1}},mounted:function(){var e=this;this.eventBus.$on("update:open",function(t){e.open=t.openArray,e.singleMode=t.singleMode,e.isShow=e.open.indexOf(e.title)>=0})},methods:{showHandle:function(){var e=this.open.indexOf(this.title),t=JSON.parse(JSON.stringify(this.open));e<0?(this.singleMode&&(t=[]),t.push(this.title)):t.splice(e,1),this.eventBus.$emit("update:open",{openArray:t,singleMode:this.singleMode})}}},p=(n(234),{name:"collapse-demos",components:{"g-collapse":a,"g-collapse-item":Object(l.a)(o,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"collapse-item"},[t("div",{staticClass:"title",on:{click:this.showHandle}},[this._v("\n    "+this._s(this.title)+"\n  ")]),this._v(" "),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"isShow"}],staticClass:"content"},[this._t("default")],2)])],1)},[],!1,null,"11a2fa84",null).exports},data:function(){return{content:'<g-collapse :defaultopen.sync=defaultopen single>\n    <g-collapse-item title="国内">\n      <div>有关机构</div>\n    </g-collapse-item>\n    <g-collapse-item title="国外">\n      <div>中美贸易</div>\n    </g-collapse-item>\n    <g-collapse-item title="地球外">\n      <div>三体入侵</div>\n    </g-collapse-item>\n  </g-collapse>',content1:'<g-collapse :defaultopen.sync=defaultopen>\n  <g-collapse-item title="国内">\n    <div>有关机构</div>\n  </g-collapse-item>\n  <g-collapse-item title="国外">\n    <div>中美贸易</div>\n  </g-collapse-item>\n  <g-collapse-item title="地球外">\n    <div>三体入侵</div>\n  </g-collapse-item>\n</g-collapse>\nexport default {\n......\ndefaultopen: [\'国内\',\'国外\']\n}',content2:"mounted(){\n    this.$on('update:defaultopen',(option)=>{\n      this.defaultopen = option.openArray    //this.defaultopen 换成你自己的数组\n    })\n  }",content3:"<g-collapse :defaultopen.sync=defaultopen single>",defaultopen:["国内","国外"],defaultopen1:["国内","国外"]}},mounted:function(){var e=this;this.$on("update:defaultopen",function(t){e.defaultopen=t.openArray,e.defaultopen1=t.openArray})},methods:{}}),c=(n(235),Object(l.a)(p,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("g-collapse",{attrs:{defaultopen:e.defaultopen,single:""},on:{"update:defaultopen":function(t){e.defaultopen=t}}},[n("g-collapse-item",{attrs:{title:"国内"}},[n("div",[e._v("有关机构")])]),e._v(" "),n("g-collapse-item",{attrs:{title:"国外"}},[n("div",[e._v("中美贸易")])]),e._v(" "),n("g-collapse-item",{attrs:{title:"地球外"}},[n("div",[e._v("三体入侵")])])],1),e._v(" "),n("pre",[e._v("    "),n("code",[e._v(e._s(e.content))]),e._v("\n  ")]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"items"},[n("g-collapse",{attrs:{defaultopen:e.defaultopen},on:{"update:defaultopen":function(t){e.defaultopen=t}}},[n("g-collapse-item",{attrs:{title:"国内"}},[n("div",[e._v("有关机构")])]),e._v(" "),n("g-collapse-item",{attrs:{title:"国外"}},[n("div",[e._v("中美贸易")])]),e._v(" "),n("g-collapse-item",{attrs:{title:"地球外"}},[n("div",[e._v("三体入侵")])])],1)],1),e._v(" "),e._m(1),e._v(" "),n("pre",[e._v("    "),n("code",[e._v(e._s(e.content1))]),e._v("\n  ")]),e._v(" "),e._m(2),e._v(" "),n("div",{staticClass:"items"},[n("g-collapse",{attrs:{defaultopen:e.defaultopen1},on:{"update:defaultopen":function(t){e.defaultopen1=t}}},[n("g-collapse-item",{attrs:{title:"国内"}},[n("div",[e._v("有关机构")])]),e._v(" "),n("g-collapse-item",{attrs:{title:"国外"}},[n("div",[e._v("中美贸易")])]),e._v(" "),n("g-collapse-item",{attrs:{title:"地球外"}},[n("div",[e._v("三体入侵")])])],1),e._v(" "),n("div",[e._v(e._s(e.defaultopen1))])],1),e._v(" "),n("div",{staticClass:"items"},[e._v("\n    需要获取实时的打开的item数据，如下监听即可\n  ")]),e._v(" "),n("pre",[e._v("    "),n("code",[e._v(e._s(e.content2))]),e._v("\n  ")]),e._v(" "),e._m(3),e._v(" "),n("div",{staticClass:"items"},[n("g-collapse",{attrs:{defaultopen:e.defaultopen1,single:""},on:{"update:defaultopen":function(t){e.defaultopen1=t}}},[n("g-collapse-item",{attrs:{title:"国内"}},[n("div",[e._v("有关机构")])]),e._v(" "),n("g-collapse-item",{attrs:{title:"国外"}},[n("div",[e._v("中美贸易")])]),e._v(" "),n("g-collapse-item",{attrs:{title:"地球外"}},[n("div",[e._v("三体入侵")])])],1)],1),e._v(" "),n("div",{staticClass:"items"},[e._v("\n    添加single属性在自定义标签上，即可。需要注意初始化打开多个item并不会报错，控制台会warn：“单个item显示开启时不要默认开启多个item”\n  ")]),e._v(" "),n("pre",[e._v("    "),n("code",[e._v(e._s(e.content3))]),e._v("\n  ")])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"items"},[t("header",[this._v("默认打开 defaultopen参数")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"items"},[this._v("\n    想初始化打开国内和国外item，需要在 "),t("code",[this._v("g-collapse")]),this._v("上添加参数 "),t("code",[this._v(":defaultopen.sync=defaultopen")]),this._v("\n    并且在data中定义 "),t("strong",[this._v("defaultopen")]),this._v("数组，其中成员是你想默认打开item的title\n  ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"items"},[t("header",[this._v("在当前页面获取动态获取已经被打开的item")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"items"},[t("header",[this._v("只打开一个item，其余的自动关闭")])])}],!1,null,"37f001e0",null));t.default=c.exports}}]);