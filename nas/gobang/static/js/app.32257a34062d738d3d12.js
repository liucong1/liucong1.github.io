webpackJsonp([1],{"0NTq":function(t,s){t.exports="https://liucong1.github.io/nas/gobang/static/img/4.03bd47f.png"},"3CuN":function(t,s){},"3isq":function(t,s){t.exports="https://liucong1.github.io/nas/gobang/static/img/2.1b7be3d.png"},"55+g":function(t,s){t.exports="https://liucong1.github.io/nas/gobang/static/img/3.e2ba6c2.png"},"65vp":function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={};e.d(i,"simulateCall",function(){return _}),e.d(i,"call",function(){return T});var a=e("7+uW"),n=e("zL8q"),o=e.n(n),r=(e("tvR6"),{name:"App",created(){"undefined"==typeof webExtensionWallet&&alert("请安装并且登录钱包")},methods:{jumpIndex(){this.$router.push({name:"RankList"})}}}),l={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"title-box"},[s("img",{attrs:{src:e("dLd/"),alt:"星云五子棋争霸赛"},on:{click:this.jumpIndex}})]),this._v(" "),s("router-view")],1)},staticRenderFns:[]};var c=e("VU/8")(r,l,!1,function(t){e("fvPp")},null,null).exports,h=e("/ocq"),m={name:"nas-rank-list",data:()=>({isLoad:!0,list:[]}),created(){this.fetchRankList()},methods:{fetchRankList(){this.isLoad=!0,this.$api.simulateCall({funcName:"listRank",args:[]}).then(t=>{t=JSON.parse(t),this.isLoad=!1;let s=[];t.map(t=>{2==t.winner&&(t.steps=JSON.parse(t.steps),s.push(t))}),s.sort((t,s)=>t.steps.length-s.steps.length),this.list=s,this.$message({message:"刷新英雄榜完成",type:"success"})}).catch(t=>{this.isLoad=!1,this.list=[],this.$message.error("获取英雄榜异常，请稍后再试"),console.error(t)})},replayGame(t){this.$router.push({name:"Replay",params:{id:t}})}}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sec-rank-list "},[e("j-play-btn",{attrs:{showMyListBtn:!0}}),t._v(" "),e("div",{staticClass:"data-box"},[e("h2",[t._v("赛事排行榜")]),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoad,expression:"isLoad"}],staticClass:"rank-list-con"},[t.isLoad?t._e():e("div",[t.list.length<1?e("div",{staticClass:"empty-holder"},[t._v("\n                    还木有英雄榜，去挑战一下吧:)\n                ")]):e("div",{staticClass:"rank-list"},[t._m(0),t._v(" "),t._l(t.list,function(s,i){return e("div",{key:s.id,staticClass:"list-item row clearfix"},[e("div",{staticClass:"col-1"},[t._v(t._s(i+1))]),t._v(" "),e("div",{staticClass:"col-2"},[t._v(t._s(s.from))]),t._v(" "),e("div",{staticClass:"col-3"},[t._v(t._s(s.steps.length))]),t._v(" "),e("div",{staticClass:"col-4"},[e("el-button",{on:{click:function(e){t.replayGame(s.id)}}},[t._v("回顾赛程")])],1),t._v(" "),e("div",{staticClass:"col-5"},[t._v(t._s(new Date(1e3*s.timestamp).toLocaleString()))])])})],2)])])]),t._v(" "),e("com-page-rule")],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"list-header row clearfix"},[e("div",{staticClass:"col-1"},[t._v("排名")]),t._v(" "),e("div",{staticClass:"col-2"},[t._v("用户")]),t._v(" "),e("div",{staticClass:"col-3"},[t._v("获胜步数")]),t._v(" "),e("div",{staticClass:"col-4"},[t._v("操作")]),t._v(" "),e("div",{staticClass:"col-5"},[t._v("上传时间")])])}]};var p=e("VU/8")(m,u,!1,function(t){e("crkL")},"data-v-a4a65820",null).exports,d={name:"page-my-list",data:()=>({isLoad:!0,list:[]}),created(){this.refreshData()},methods:{refreshData(){this.isLoad=!0,this.$api.simulateCall({funcName:"findMyScore",args:[]}).then(t=>{this.isLoad=!1,(t=JSON.parse(t)||[]).sort((t,s)=>t.timestamp-s.timestamp),this.list=t,this.$message({message:"刷新我的战绩完成",type:"success"})}).catch(t=>{this.isLoad=!1,this.list=[],this.$message.error("获取我的战绩异常，请稍后再试"),console.error(t)})},goPlayPage(){this.$router.push({name:"Gobang"})},replay(t){this.$router.push({name:"Replay",params:{id:t}})},gameResult:t=>1===t.winner?"电脑胜":2===t.winner?"我赢啦":"--",firstPlayer:t=>1===t.firstPlayer?"电脑先手":2===t.firstPlayer?"我先手":"--"}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page-my-list"},[e("j-play-btn",{attrs:{showRankBtn:!0}}),t._v(" "),e("div",{staticClass:"data-box"},[e("h2",[t._v("我的战绩")]),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoad,expression:"isLoad"}],staticClass:"my-list-con main-section"},[t.isLoad?t._e():e("div",[t.list.length<1?e("div",{staticClass:"empty-holder"},[t._v("\n          还没有您的战绩哟~\n        ")]):e("div",[e("div",{staticClass:"my-list"},[e("el-table",{staticStyle:{width:"100%",margin:"0 auto"},attrs:{data:t.list}},[e("el-table-column",{attrs:{label:"时间",width:"500"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("div",{staticClass:"date-time"},[t._v(t._s(new Date(1e3*s.row.timestamp).toLocaleString()))])]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"left",label:"结果",width:"200"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("div",{staticClass:"game-result"},[t._v(t._s(t.gameResult(s.row)))])]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"left",label:"先手",width:"100"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("div",{staticClass:"game-first-player"},[t._v(t._s(t.firstPlayer(s.row)))])]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"center",label:"复盘",width:"280"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("el-button",{on:{click:function(e){t.replay(s.row.id)}}},[t._v("对战回顾")])]}}])})],1)],1)])])])])],1)},staticRenderFns:[]};var v=e("VU/8")(d,f,!1,function(t){e("TFL6")},"data-v-fd4254ea",null).exports,g={name:"nas-page-replay",data:()=>({isLoad:!0,nickname:"",allSteps:[],board:[],chessClass:[],steps:[],step:29.25,offset:450*.044,started:!1,lock:!1,wins:[],count:0,myWin:[],computerWin:[],isOver:!1,firstPlayer:0,winner:0,R:{com:1,hum:2,empty:0},reviewStep:0,replayEndDialog:!1}),created(){this.fetchGameData()},methods:{fetchGameData(){const t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});let s=Number(this.$route.params.id);this.isLoad=!0,this.$api.simulateCall({funcName:"replay",args:[s]}).then(s=>{this.isLoad=!1,s=JSON.parse(s),this.nickname=s.from,this.$message({message:"取得对战数据，可以开始观看大神"+this.nickname+"的表演了",type:"success"}),this.allSteps=JSON.parse(s.steps),this.firstPlayer=s.firstPlayer,this.winner=s.winner,this.initBoard(),t.close()}).catch(s=>{t.close(),this.isLoad=!1,this.$message.error("获取对战数据异常，请稍后再试"),console.error(s)})},initBoard(){this.board=[];for(let t=0;t<15;t++){let s=[],e=[];this.wins[t]=[];for(let i=0;i<15;i++)s.push(0),e.push({class:"chessman-common"}),this.wins[t][i]=[];this.chessClass.push(e),this.board.push(s)}for(let t=0;t<15;t++)for(let s=0;s<11;s++){for(let e=0;e<5;e++)this.wins[t][s+e][this.count]=!0;this.count++}for(let t=0;t<11;t++)for(let s=0;s<15;s++){for(let e=0;e<5;e++)this.wins[t+e][s][this.count]=!0;this.count++}for(let t=0;t<11;t++)for(let s=0;s<11;s++){for(let e=0;e<5;e++)this.wins[t+e][s+e][this.count]=!0;this.count++}for(let t=0;t<11;t++)for(let s=14;s>3;s--){for(let e=0;e<5;e++)this.wins[t+e][s-e][this.count]=!0;this.count++}for(let t=0;t<this.count;t++)this.myWin[t]=0,this.computerWin[t]=0},autoPlay(){let t=this.allSteps;this.isReview=!0,this.isOver=!1,this.numSafe=0,this.reviewStep=0,0!==t.length&&(this.reviewInterval=setInterval(()=>{let t=this.allSteps;if(this.reviewStep>=t.length)return clearInterval(this.reviewInterval),void(this.replayEndDialog=!0);const s=t[this.reviewStep];this.set(s.x,s.y,s.role),this.reviewStep++},1e3))},computeChessCoordinate(t,s){return{left:this.offset+this.step*t+"px",top:this.offset+this.step*s+"px"}},set(t,s,e){this.board[t][s]=e,this.chessClass[t][s].class=e==this.R.hum?"chessman-common chessman-white":"chessman-common chessman-black",this.steps.push({x:t,y:s,role:e})},reloadPage(){location.reload()},toPlay(){this.$router.push({name:"Gobang"})}}},y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page-replay"},[e("div",{staticClass:"data-box"},[e("h2",[t._v("赛程回顾")]),t._v(" "),e("p",{staticClass:"user-name"},[t._v("玩家："),e("span",{staticClass:"name"},[t._v(t._s(t.nickname))])]),t._v(" "),e("el-button",{attrs:{type:"primary",plain:""},on:{click:function(s){t.autoPlay()}}},[t._v("自动播放")]),t._v(" "),e("el-button",{on:{click:function(s){t.toPlay()}}},[t._v("我也玩一局")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"chess-box"},[t._l(t.board,function(s,i){return[t._l(s,function(s,a){return[e("i",{class:t.chessClass[i][a].class,style:t.computeChessCoordinate(i,a)})]})]})],2)],1),t._v(" "),e("el-dialog",{attrs:{title:"提示",visible:t.replayEndDialog,width:"30%",center:""},on:{"update:visible":function(s){t.replayEndDialog=s}}},[e("p",{staticClass:"dialog-tip dialog-status"},[t._v("演示结束啦！")]),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(s){t.replayEndDialog=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(s){t.reloadPage()}}},[t._v("重新观看")])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"chessman-intro"},[s("span",[this._v("白子：玩家")]),s("span",[this._v("黑子：电脑")])])}]};var k=e("VU/8")(g,y,!1,function(t){e("PjVf")},"data-v-cc3be19c",null).exports,w={name:"gobang",data:()=>({board:[],chessClass:[],steps:[],step:29.25,offset:450*.044,c:!1,lock:!1,wins:[],count:0,myWin:[],computerWin:[],isOver:!1,firstPlayer:0,winner:0,R:{com:1,hum:2,empty:0}}),created(){this.init()},mounted(){},methods:{init(){this.initBoard()},initBoard(){this.board=[];for(let t=0;t<15;t++){let s=[],e=[];this.wins[t]=[];for(let i=0;i<15;i++)s.push(0),e.push({class:"chessman-common"}),this.wins[t][i]=[];this.chessClass.push(e),this.board.push(s)}for(let t=0;t<15;t++)for(let s=0;s<11;s++){for(let e=0;e<5;e++)this.wins[t][s+e][this.count]=!0;this.count++}for(let t=0;t<15;t++)for(let s=0;s<11;s++){for(let e=0;e<5;e++)this.wins[s+e][t][this.count]=!0;this.count++}for(let t=0;t<11;t++)for(let s=0;s<11;s++){for(let e=0;e<5;e++)this.wins[t+e][s+e][this.count]=!0;this.count++}for(let t=0;t<11;t++)for(let s=14;s>3;s--){for(let e=0;e<5;e++)this.wins[t+e][s-e][this.count]=!0;this.count++}for(let t=0;t<this.count;t++)this.myWin[t]=0,this.computerWin[t]=0},start(){this.started||(this.started=!0)},stop(){this.started=!1},computeChessCoordinate(t,s){return{left:this.offset+this.step*t+"px",top:this.offset+this.step*s+"px"}},computerAI(){this.lock=!0;let t=0,s=0,e=0,i=[],a=[];for(let t=0;t<15;t++){i[t]=[],a[t]=[];for(let s=0;s<15;s++)i[t][s]=0,a[t][s]=0}for(let n=0;n<15;n++)for(let o=0;o<15;o++){if(0===this.board[n][o])for(let t=0;t<this.count;t++)this.wins[n][o][t]&&(1===this.myWin[t]?i[n][o]+=200:2===this.myWin[t]?i[n][o]+=400:3===this.myWin[t]?i[n][o]+=1e3:4===this.myWin[t]&&(i[n][o]+=1e4),1===this.computerWin[t]?a[n][o]+=220:2===this.computerWin[t]?a[n][o]+=420:3===this.computerWin[t]?a[n][o]+=1200:4===this.computerWin[t]&&(a[n][o]+=2e4));i[n][o]>t?(t=i[n][o],s=n,e=o):i[n][o]==t&&a[n][o]>a[s][e]&&(s=n,e=o),a[n][o]>t?(t=a[n][o],s=n,e=o):a[n][o]==t&&i[n][o]>i[s][e]&&(s=n,e=o)}this.set(s,e,this.R.com);for(let t=0;t<this.count;t++)this.wins[s][e][t]&&(this.computerWin[t]++,this.myWin[t]=10,5===this.computerWin[t]&&this.gameOver(this.R.com));this.isOver||(this.lock=!1)},setChess(t){if(!this.started)return void this.$message({message:"请先开始游戏",type:"error"});if(this.lock)return;let s=t.offsetX,e=t.offsetY;if(s=Math.floor((s+this.offset)/this.step)-1,e=Math.floor((e+this.offset)/this.step)-1,!(s<0||e<0||this.chessClass[s][e].role)){this.set(s,e,this.R.hum);for(let t=0;t<this.count;t++)this.wins[s][e][t]&&(this.myWin[t]++,this.computerWin[t]=10,5===this.myWin[t]&&this.gameOver(this.R.hum));this.isOver||this.computerAI()}},set(t,s,e){if(this.board[t][s]=e,this.steps.length>0){let{x:t,y:s,role:e}=this.steps[this.steps.length-1];this.chessClass[t][s].class=e==this.R.hum?"chessman-common chessman-white":"chessman-common chessman-black"}this.chessClass[t][s].class=e==this.R.hum?"chessman-common chessman-white chessman-last":"chessman-common chessman-black chessman-last",this.chessClass[t][s].role=e,this.steps.push({x:t,y:s,role:e})},reset:function(){this.started=!1,this.lock=!1,this.board=[],this.steps=[],this.myWin=[],this.chessClass=[],this.computerWin=[],this.isOver=!1,this.winner=this.R.empty,this.initBoard()},restart:function(){this.reset(),this.$confirm("请选择电脑先手，还是您先手？","选择先手",{confirmButtonText:"我先来",cancelButtonText:"让电脑先",type:"warning"}).then(()=>{this.$message({type:"success",message:"请您先开第一枪:)"}),this.firstPlayer=this.R.hum}).catch(()=>{this.$message({type:"success",message:"电脑先手，要当心啦:)"}),this.firstPlayer=this.R.com}).then(()=>{this.firstPlayer===this.R.com&&this.set(7,7,this.R.com),this.started=!0})},gameOver:function(t){this.stop(),this.isOver=!0,this.winner=t;let s=t===this.R.hum?"恭喜，获胜啦！是否参与全球排行？":"很遗憾，您输了。是否上传成绩，随时回顾战况？";this.$confirm(s,"游戏结束",{confirmButtonText:"上传成绩",cancelButtonText:"不上传啦",type:"warning"}).then(()=>{this.saveScore()}).catch(()=>{})},saveScore:function(){this.$api.call({funcName:"saveScore",args:[JSON.stringify(this.steps),this.firstPlayer,this.winner]}).then(t=>{this.$message({message:"上传战绩成功，请稍后到【我的战绩】查看",type:"success"})}).catch(t=>{this.$message.error("数据上传失败，十分抱歉"),console.error(t)})},jumpMyList(){this.$router.push({name:"MyList"})}}},b={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page-go-bang-play"},[e("div",{staticClass:"data-box"},[e("h2",[t._v("发起挑战")]),t._v(" "),e("el-button",{staticClass:"btn-start-game",attrs:{type:"primary"},on:{click:function(s){t.restart()}}},[t._v(t._s(t.isOver?"再来一局":"开始游戏"))]),t._v(" "),e("el-button",{on:{click:t.jumpMyList}},[t._v("我的战绩")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"chess-box",on:{click:function(s){t.setChess(s)}}},[t._l(t.board,function(s,i){return[t._l(s,function(s,a){return[e("i",{class:t.chessClass[i][a].class,style:t.computeChessCoordinate(i,a)})]})]})],2)],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"chessman-intro"},[s("span",[this._v("白子：玩家")]),s("span",[this._v("黑子：电脑")])])}]};var C=e("VU/8")(w,b,!1,function(t){e("65vp")},"data-v-5efec8f6",null).exports;a.default.use(h.a);var A=new h.a({routes:[{path:"/",name:"RankList",component:p},{path:"/myList",name:"MyList",component:v},{path:"/replay/:id",name:"Replay",component:k},{path:"/gobang",name:"Gobang",component:C}]}),R=e("NYxO"),S=e("6fn7"),L=e.n(S);let E="n1zG1YgjaYV7uEH5AyF6vdE1D4akfnFhZpP";console.log(`contract addr: ${E}`);const J=new L.a;function _(t){const s=t.funcName,e=JSON.stringify(t.args||[]);return new Promise((t,i)=>{J.simulateCall(E,"0",s,e,{listener:function(e){if(console.log(`simulateCall [${s}] 返回结果：`,e),e.result&&!e.execute_err){let s=e.result;t(s)}else"insufficient balance"===e.execute_err&&n.Notification.warning({title:"钱包报错",message:"您的账户余额不足，请充值后再进行操作",duration:0}),i(e)}})})}function T(t){const s=t.funcName,e=JSON.stringify(t.args||[]);return new Promise((t,i)=>{J.call(E,"0",s,e,{listener:function(e){console.log(`call [${s}] 返回结果：`,e),"string"==typeof e&&0===e.indexOf("Error:")?i(new Error(e)):t(e)}})})}a.default.use(R.a);var N=new R.a.Store({state:{isLoading:!1,lostList:[],rewardList:[],myLostList:[],myRewardList:[]},mutations:{setLostList(t,s){t.lostList=s||[]},updateLoadStatus(t,s){t.isLoading=s},setRewardList(t,s){t.rewardList=s||[]},setMyLostList(t,s){t.myLostList=s||[]},setMyRewardList(t,s){t.myRewardList=s||[]}},actions:{publishLost:({commit:t,state:s},e)=>T({funcName:"onPost",args:[e.title,e.desc,e.time,e.location,e.contact]}),fetchLostList:({commit:t,state:s},e)=>_({funcName:"listPost",args:[]}).then(e=>{t("setLostList",s.lostList.concat(e.online))}),publishReward:({commit:t,state:s},e)=>T({funcName:"onReward",args:[e.title,e.desc,e.time,e.location,e.contact,e.money]}),fetchRewardList:({commit:t,state:s},e)=>_({funcName:"listReward",args:[]}).then(e=>{t("setRewardList",s.rewardList.concat(e.online))}),fetchMyList:({commit:t,state:s},e)=>_({funcName:"findMyPost",args:[]}).then(e=>{t("setMyRewardList",s.myRewardList.concat(e.reward||[])),t("setMyLostList",s.myLostList.concat(e.post||[]))}),offLost:({commit:t,state:s},e)=>T({funcName:"offPost",args:[e.id]}).then(t=>(s.myLostList.forEach(t=>{t.id===e.id&&(t.status=2)}),t)),offReward:({commit:t,state:s},e)=>T({funcName:"offReward",args:[e.id]}).then(t=>(s.myRewardList.forEach(t=>{t.id===e.id&&(t.status=2)}),t))}}),x={name:"com-page-rule",data:()=>({})},M={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("dl",{staticClass:"com-page-rule-box"},[e("dt",[t._v("使用说明")]),t._v(" "),e("dd",[t._v("1、只要你有星云钱包即可参与星云五子棋争霸赛，所有数据与您的钱包绑定，不可篡改。钱包安装地址："),e("a",{attrs:{href:"https://github.com/ChengOrangeJu/WebExtensionWallet"}},[t._v("WebExtensionWallet")]),t._v("、"),e("a",{attrs:{href:"https://nano.nebulas.io/index_cn.html"}},[t._v("Android")]),t._v("、"),e("a",{attrs:{href:"https://itunes.apple.com/hk/app/nas-nano/id1281191905?l=zh&ls=1&mt=8"}},[t._v("iOS")]),t._v("；")]),t._v(" "),e("dd",[t._v("2、使用过程中，如果遇到问题，请"),e("a",{attrs:{href:"https://github.com/liucong1/liucong1.github.io/issues",title:"点击联系工作人员"}},[t._v("联系我们的工作人员")]),t._v("。")]),t._v(" "),e("dd",{staticClass:"copy-right"},[e("a",{attrs:{href:"https://nebulas.io/"}},[t._v("本产品由星云链驱动")]),t._v(" | "),e("a",{attrs:{href:"https://github.com/liucong1/liucong1.github.io/issues"}},[t._v("联系作者")]),t._v(" | "),e("a",{attrs:{href:"https://incentive.nebulas.io/cn/signup.html?invite=KpJAr"}},[t._v("提交DAPP获得100NAS币")])])])}]};var U=e("VU/8")(x,M,!1,function(t){e("3CuN")},"data-v-33b775c6",null).exports,P={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"help-box"},[i("p",{staticClass:"desc"},[t._v('在"星云五子棋争霸赛"的首页，我们可以查看全球玩家的排名，可以对任意比赛过程进行回顾。')]),t._v(" "),i("img",{attrs:{src:e("QwOg"),alt:"排行榜"}}),t._v(" "),i("p",{staticClass:"img-desc"},[t._v("全球玩家排行榜")]),t._v(" "),i("p",{staticClass:"desc"},[t._v('在"发起挑战"的页面，我们可以和AI电脑进行对战，并将挑战结果上传。如果挑战AI电脑成功，战绩将参与全球玩家的排名，全球玩家可回顾您的挑战过程。')]),t._v(" "),i("img",{attrs:{src:e("3isq"),alt:"参与挑战"}}),t._v(" "),i("p",{staticClass:"img-desc"},[t._v("参与挑战截图")]),t._v(" "),i("img",{attrs:{src:e("55+g"),alt:"先手"}}),t._v(" "),i("p",{staticClass:"img-desc"},[t._v("选择先手截图")]),t._v(" "),i("img",{attrs:{src:e("0NTq"),alt:"游戏结束"}}),t._v(" "),i("p",{staticClass:"img-desc"},[t._v("游戏结束截图")]),t._v(" "),i("p",{staticClass:"desc"},[t._v('"我的战绩"页面下，可以查看本人所有上传战绩，并进行赛程回顾。')]),t._v(" "),i("img",{attrs:{src:e("rd4Z"),alt:"我的战绩"}}),t._v(" "),i("p",{staticClass:"img-desc"},[t._v("我的战绩截图")]),t._v(" "),i("p",{staticClass:"desc"},[t._v('"赛程回顾"页面下，可以自动播放某个赛程。')]),t._v(" "),i("img",{attrs:{src:e("Rs5G"),alt:"支出"}}),t._v(" "),i("p",{staticClass:"img-desc"},[t._v("赛程回顾截图")])])}]};var W=e("VU/8")({name:"com-page-help"},P,!1,function(t){e("tPUr")},"data-v-eb3945f6",null).exports,Z={name:"j-play-btn",props:{showRankBtn:{type:Boolean,default:!1},showPlayBtn:{type:Boolean,default:!0},showMyListBtn:{type:Boolean,default:!1}},data:()=>({showHelpDialog:!1}),methods:{goPlayPage(){this.$router.push({name:"Gobang"})},goRankListPage(){this.$router.push({name:"RankList"})},goMyListPage(){this.$router.push({name:"MyList"})}}},O={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"j-play-btn"},[e("p",{staticClass:"use-tip"},[t.showPlayBtn?e("el-button",{staticClass:"btn-jump",attrs:{type:"primary"},on:{click:t.goPlayPage}},[t._v("立即挑战")]):t._e(),t._v(" "),t.showRankBtn?e("el-button",{staticClass:"btn-jump",attrs:{type:"primary",plain:""},on:{click:t.goRankListPage}},[t._v("英雄榜")]):t._e(),t._v(" "),t.showMyListBtn?e("el-button",{staticClass:"btn-jump",on:{click:t.goMyListPage}},[t._v("我的战绩")]):t._e(),t._v(" "),e("el-button",{staticClass:"btn-jump",on:{click:function(s){t.showHelpDialog=!0}}},[t._v("使用帮助")]),t._v("\n    欢迎参与星云五子棋争霸赛\n    ")],1),t._v(" "),e("el-dialog",{attrs:{title:"使用帮助",width:"80%",visible:t.showHelpDialog,center:""},on:{"update:visible":function(s){t.showHelpDialog=s}}},[e("com-page-help"),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary",plain:""},on:{click:function(s){t.showHelpDialog=!1}}},[t._v("关 闭")])],1)],1)],1)},staticRenderFns:[]};var B=e("VU/8")(Z,O,!1,function(t){e("llu0")},"data-v-24c7ea90",null).exports;a.default.component(U.name,U),a.default.component(W.name,W),a.default.config.productionTip=!1,a.default.use(o.a),a.default.component(B.name,B),a.default.prototype.$api=i,new a.default({el:"#app",router:A,store:N,components:{App:c},template:"<App/>"})},PjVf:function(t,s){},QwOg:function(t,s){t.exports="https://liucong1.github.io/nas/gobang/static/img/1.63467d2.png"},Rs5G:function(t,s){t.exports="https://liucong1.github.io/nas/gobang/static/img/6.85b5f1c.png"},TFL6:function(t,s){},crkL:function(t,s){},"dLd/":function(t,s){t.exports="data:image/png;base64,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"},fvPp:function(t,s){},llu0:function(t,s){},rd4Z:function(t,s){t.exports="https://liucong1.github.io/nas/gobang/static/img/5.a128b25.png"},tPUr:function(t,s){},tvR6:function(t,s){}},["NHnr"]);