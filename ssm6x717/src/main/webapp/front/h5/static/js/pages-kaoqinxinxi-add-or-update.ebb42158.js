(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-kaoqinxinxi-add-or-update"],{"0a72":function(r,a,i){var n=i("4a8c");"string"===typeof n&&(n=[[r.i,n,""]]),n.locals&&(r.exports=n.locals);var e=i("4f06").default;e("5de5d217",n,!0,{sourceMap:!1,shadowMode:!1})},"1d26":function(r,a,i){"use strict";i.r(a);var n=i("336e"),e=i.n(n);for(var t in n)"default"!==t&&function(r){i.d(a,r,(function(){return n[r]}))}(t);a["default"]=e.a},"336e":function(r,a,i){"use strict";var n=i("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("28a5"),i("96cf");var e=n(i("3b8d")),t=n(i("e2b1")),o={data:function(){return{cross:"",ruleForm:{kaoqinbianhao:this.getUUID(),kaoqinbiaoti:"",fengmian:"",kaoqinshijian:"",kaoqinzhuangtai:"",kaoqinxiangqing:"",yuangongzhanghao:"",yuangongxingming:""},kaoqinzhuangtaiOptions:[],kaoqinzhuangtaiIndex:0,yuangongzhanghaoOptions:[],yuangongzhanghaoIndex:0,user:{},ro:{kaoqinbianhao:!1,kaoqinbiaoti:!1,fengmian:!1,kaoqinshijian:!1,kaoqinzhuangtai:!1,kaoqinxiangqing:!1,yuangongzhanghao:!1,yuangongxingming:!1}}},components:{wPicker:t.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,e.default)(regeneratorRuntime.mark((function r(a){var i,n,e,t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(i);case 3:return n=r.sent,this.user=n.data,this.kaoqinzhuangtaiOptions="全勤,缺勤".split(","),r.next=8,this.$api.option("yuangong","yuangongzhanghao",{});case 8:if(n=r.sent,this.yuangongzhanghaoOptions=n.data,this.ruleForm.userid=uni.getStorageSync("userid"),a.refid&&(this.ruleForm.refid=a.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!a.id){r.next=18;break}return this.ruleForm.id=a.id,r.next=16,this.$api.info("kaoqinxinxi",this.ruleForm.id);case 16:n=r.sent,this.ruleForm=n.data;case 18:if(this.cross=a.cross,!a.cross){r.next=58;break}e=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(e);case 22:if((r.t1=r.t0()).done){r.next=58;break}if(t=r.t1.value,"kaoqinbianhao"!=t){r.next=28;break}return this.ruleForm.kaoqinbianhao=e[t],this.ro.kaoqinbianhao=!0,r.abrupt("continue",22);case 28:if("kaoqinbiaoti"!=t){r.next=32;break}return this.ruleForm.kaoqinbiaoti=e[t],this.ro.kaoqinbiaoti=!0,r.abrupt("continue",22);case 32:if("fengmian"!=t){r.next=36;break}return this.ruleForm.fengmian=e[t],this.ro.fengmian=!0,r.abrupt("continue",22);case 36:if("kaoqinshijian"!=t){r.next=40;break}return this.ruleForm.kaoqinshijian=e[t],this.ro.kaoqinshijian=!0,r.abrupt("continue",22);case 40:if("kaoqinzhuangtai"!=t){r.next=44;break}return this.ruleForm.kaoqinzhuangtai=e[t],this.ro.kaoqinzhuangtai=!0,r.abrupt("continue",22);case 44:if("kaoqinxiangqing"!=t){r.next=48;break}return this.ruleForm.kaoqinxiangqing=e[t],this.ro.kaoqinxiangqing=!0,r.abrupt("continue",22);case 48:if("yuangongzhanghao"!=t){r.next=52;break}return this.ruleForm.yuangongzhanghao=e[t],this.ro.yuangongzhanghao=!0,r.abrupt("continue",22);case 52:if("yuangongxingming"!=t){r.next=56;break}return this.ruleForm.yuangongxingming=e[t],this.ro.yuangongxingming=!0,r.abrupt("continue",22);case 56:r.next=22;break;case 58:this.styleChange();case 59:case"end":return r.stop()}}),r,this)})));function a(a){return r.apply(this,arguments)}return a}(),methods:{styleChange:function(){this.$nextTick((function(){}))},yuangongzhanghaoChange:function(){var r=(0,e.default)(regeneratorRuntime.mark((function r(a){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return this.yuangongzhanghaoIndex=a.target.value,this.ruleForm.yuangongzhanghao=this.yuangongzhanghaoOptions[this.yuangongzhanghaoIndex],r.next=4,this.$api.follow("yuangong","yuangongzhanghao",{columnValue:this.ruleForm.yuangongzhanghao});case 4:i=r.sent,i.data.yuangongxingming&&(this.ruleForm.yuangongxingming=i.data.yuangongxingming);case 6:case"end":return r.stop()}}),r,this)})));function a(a){return r.apply(this,arguments)}return a}(),kaoqinshijianChange:function(r){this.ruleForm.kaoqinshijian=r.target.value,this.$forceUpdate()},kaoqinzhuangtaiChange:function(r){this.kaoqinzhuangtaiIndex=r.target.value,this.ruleForm.kaoqinzhuangtai=this.kaoqinzhuangtaiOptions[this.kaoqinzhuangtaiIndex]},fengmianTap:function(){var r=this;this.$api.upload((function(a){r.ruleForm.fengmian="upload/"+a.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,e.default)(regeneratorRuntime.mark((function r(){var a,i,n,e,t,o,d,g,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!this.cross){r.next=16;break}if(e=uni.getStorageSync("statusColumnName"),t=uni.getStorageSync("statusColumnValue"),""==e){r.next=16;break}if(o=uni.getStorageSync("crossObj"),e.startsWith("[")){r.next=12;break}for(d in o)d==e&&(o[d]=t);return g=uni.getStorageSync("crossTable"),r.next=10,this.$api.update("".concat(g),o);case 10:r.next=16;break;case 12:a=Number(uni.getStorageSync("userid")),i=o["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 16:if(!i||!a){r.next=38;break}return this.ruleForm.crossuserid=a,this.ruleForm.crossrefid=i,s={page:1,limit:10,crossuserid:a,crossrefid:i},r.next=22,this.$api.list("kaoqinxinxi",s);case 22:if(u=r.sent,!(u.data.total>=n)){r.next=28;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 28:if(!this.ruleForm.id){r.next=33;break}return r.next=31,this.$api.update("kaoqinxinxi",this.ruleForm);case 31:r.next=35;break;case 33:return r.next=35,this.$api.add("kaoqinxinxi",this.ruleForm);case 35:this.$utils.msgBack("提交成功");case 36:r.next=46;break;case 38:if(!this.ruleForm.id){r.next=43;break}return r.next=41,this.$api.update("kaoqinxinxi",this.ruleForm);case 41:r.next=45;break;case 43:return r.next=45,this.$api.add("kaoqinxinxi",this.ruleForm);case 45:this.$utils.msgBack("提交成功");case 46:case"end":return r.stop()}}),r,this)})));function a(){return r.apply(this,arguments)}return a}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var a=new Date,i=a.getFullYear(),n=a.getMonth()+1,e=a.getDate();return"start"===r?i-=60:"end"===r&&(i+=2),n=n>9?n:"0"+n,e=e>9?e:"0"+e,"".concat(i,"-").concat(n,"-").concat(e)},toggleTab:function(r){this.$refs[r].show()}}};a.default=o},3940:function(r,a,i){"use strict";var n=i("0a72"),e=i.n(n);e.a},"4a8c":function(r,a,i){var n=i("24fb");a=n(!1),a.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-a4750cd8]{padding:%?20?%}.content[data-v-a4750cd8]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-a4750cd8]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-a4750cd8]{width:%?180?%}.avator[data-v-a4750cd8]{width:%?150?%;height:%?60?%}.right-input[data-v-a4750cd8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-a4750cd8]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-a4750cd8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-a4750cd8]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-a4750cd8]{border:0}.cu-form-group uni-input[data-v-a4750cd8]{padding:0 %?30?%}.uni-input[data-v-a4750cd8]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-a4750cd8]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-a4750cd8]::after{line-height:%?80?%}.select .uni-input[data-v-a4750cd8]{line-height:%?80?%}.input .right-input[data-v-a4750cd8]{line-height:%?88?%}',""]),r.exports=a},7322:function(r,a,i){"use strict";i.r(a);var n=i("f58c"),e=i("1d26");for(var t in e)"default"!==t&&function(r){i.d(a,r,(function(){return e[r]}))}(t);i("3940");var o,d=i("f0c5"),g=Object(d["a"])(e["default"],n["b"],n["c"],!1,null,"a4750cd8",null,!1,n["a"],o);a["default"]=g.exports},f58c:function(r,a,i){"use strict";var n,e=function(){var r=this,a=r.$createElement,i=r._self._c||a;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("考勤编号")]),i("v-uni-view",{staticClass:"right-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"}},[r._v(r._s(r.ruleForm.kaoqinbianhao))])],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("考勤标题")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.kaoqinbiaoti,placeholder:"考勤标题"},model:{value:r.ruleForm.kaoqinbiaoti,callback:function(a){r.$set(r.ruleForm,"kaoqinbiaoti",a)},expression:"ruleForm.kaoqinbiaoti"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(a){arguments[0]=a=r.$handleEvent(a),r.fengmianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("封面")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.fengmian?i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.fengmian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("考勤时间")]),i("v-uni-picker",{attrs:{mode:"date",value:r.ruleForm.kaoqinshijian},on:{change:function(a){arguments[0]=a=r.$handleEvent(a),r.kaoqinshijianChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(71, 177, 60, 1)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"dashed "}},[r._v(r._s(r.ruleForm.kaoqinshijian?r.ruleForm.kaoqinshijian:"请选择考勤时间"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("考勤状态")]),i("v-uni-picker",{attrs:{value:r.kaoqinzhuangtaiIndex,range:r.kaoqinzhuangtaiOptions},on:{change:function(a){arguments[0]=a=r.$handleEvent(a),r.kaoqinzhuangtaiChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(71, 177, 60, 1)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"dashed "}},[r._v(r._s(r.ruleForm.kaoqinzhuangtai?r.ruleForm.kaoqinzhuangtai:"请选择考勤状态"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("员工账号")]),i("v-uni-picker",{attrs:{value:r.yuangongzhanghaoIndex,range:r.yuangongzhanghaoOptions},on:{change:function(a){arguments[0]=a=r.$handleEvent(a),r.yuangongzhanghaoChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(71, 177, 60, 1)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"dashed "}},[r._v(r._s(r.yuangongzhanghaoOptions[r.yuangongzhanghaoIndex]))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("员工姓名")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.yuangongxingming,placeholder:"员工姓名"},model:{value:r.ruleForm.yuangongxingming,callback:function(a){r.$set(r.ruleForm,"yuangongxingming",a)},expression:"ruleForm.yuangongxingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"308rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("考勤详情")]),i("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(71, 177, 60, 1)",borderRadius:"16rpx",color:"rgba(161, 161, 161, 1)",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"280rpx"},attrs:{placeholder:"考勤详情"},model:{value:r.ruleForm.kaoqinxiangqing,callback:function(a){r.$set(r.ruleForm,"kaoqinxiangqing",a)},expression:"ruleForm.kaoqinxiangqing"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0 auto",backgroundColor:"rgba(71, 177, 60, 1)",borderColor:"rgba(71, 177, 60, 1)",borderRadius:"80rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(a){arguments[0]=a=r.$handleEvent(a),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},t=[];i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return t})),i.d(a,"a",(function(){return n}))}}]);