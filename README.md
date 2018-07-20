# buptfood
需求分析
业务分析

能够帮助用户快速解决“今天吃什么？”、“怎么快速选餐？”、“食堂饭菜什么好吃？”、“食堂推出哪些新菜？”等问题。



用户分析

1) 许多大学生对食堂饭菜存在选择困难问题，需要一款小程序帮助他们快速做出优良的选择。
2) 初来乍到的新生及外校人员对食堂不是很了解，需要一款小程序向他们推荐食堂口碑菜肴及新品菜肴的。



功能分析1）小程序需要快速高效地帮助用户进行菜肴匹配，解决用户选择困难问题。
2）小程序可以提供食堂口碑菜肴推荐，向用户推荐口碑菜、新品菜。
3）用户可以随时对菜肴进行评分，评分将会反馈到菜肴评分榜上，同时也方便我们向用户优先推荐受欢迎的菜肴。
性能分析

上述功能的实现并不需要一个很大的APP去完成，通过一个便捷的微信小程序就可以完成上述功能。



目标
基本要求：

1） 通过摇一摇的方式向用户提供优良的选择，快速解决选择困难的问题。
2）实现一个用户评分反馈机制，用户对菜肴评分，后台人员定期更新评分榜，优化摇一摇推荐方式。

开发目标：预期的展现形式

 我们小组最初设计了六个界面完成上述功能：

                    

             

应用目标：计划的应用效果

能够帮助北邮学生或学校外来人群快速选择食堂菜肴，帮助用户解决选择困难问题，解决用户“选择吃什么？”、“什么菜好吃？”、“该去哪里吃？”等问题。

总体设计
系统业务流程及描述（可以流程图的方式呈现）

按照用户行为分析微信小程序使用流程：



详细设计
  小程序初始化界面

   摇一摇选餐互动界面

  摇一摇条件筛选界面

菜肴详细信息界面

    食堂菜品评分排行榜

         食堂新菜推荐榜



功能实现
具体文件结构
如图所示，image为我们小程序后台菜品图片，images为我们项目的小程序界面用图 。pages文件中welcome、shaking、menu、index、catalog分别为我们项目的欢迎界面文件，摇一摇界面文件，列表界面文件，及两种菜品详情界面文件。
解读每个功能模块的实现过程，并讲解一下重要部分的代码。
摇一摇界面核心模块：
1、 判断是否进行摇一摇操作：
wx.onAccelerometerChange(function (res) {
//摇一摇核心代码，判断手机晃动幅度
var x = res.x.toFixed(4),
y = res.y.toFixed(4),
z = res.z.toFixed(4);
var flagX = that.getDelFlag(x, that.data.shakeData.x),
flagY = that.getDelFlag(y, that.data.shakeData.y),
flagZ = that.getDelFlag(z, that.data.shakeData.z);
that.data.shakeData = {
x: res.x.toFixed(4),
y: res.y.toFixed(4),
z: res.z.toFixed(4)
};
if (flagX && flagY || flagX && flagZ || flagY && flagZ) {
// 如果摇一摇幅度足够大，则认为摇一摇成功
// 摇一摇成功后播放声音并累加摇一摇次数
if (that.data.shakeInfo.enabled) {
that.data.shakeInfo.enabled = false;
that.playShakeAudio();
}
}
}
//计算摇一摇的偏移量
getDelFlag: function (val1, val2) {
return (Math.abs(val1 - val2) >= 1);
},
摇一摇播放音乐并跳转
// 摇一摇成功后播放声音并累加摇一摇次数
playShakeAudio: function () {
var that = this;
wx.playBackgroundAudio({
dataUrl: 'http://7xqnxu.com1.z0.glb.clouddn.com/wx_app_shake.mp3',
title: '',
coverImgUrl: ''
});
//停止摇一摇加速度监测
wx.stopAccelerometer({
})
//摇一摇后播放音乐跳转，并传递筛选参数
wx.navigateTo({
url: '../index/index?answer1=' + that.data.one+ '&answer2='+that.data.two,
})
wx.onBackgroundAudioStop(function () {
that.data.shakeInfo.num++;
that.setData({
shakeInfo: {
num: that.data.shakeInfo.num,
enabled: true,
}
});
})
}
})
2、 摇一摇后接受传递的参数并对原始数据进行筛选，index.js文件中使用onLoad函数加载
onLoad: function (options) {
var that=this;
//options.answer1和options.answer2位传递的筛选后的食堂、楼层参数
switch (options.answer1) {
case'0':
switch (options.answer2) {
case'0':
this.setData({
array: util.postList
});
break;
case'1':
var biaoji01 = 0
for (let i = 0; i < len; i++) {
if (util.postList[i].floors == "一楼") {
this.data.array[biaoji01++] = util.postList[i];
}
}
break;
case'2':
var biaoji02 = 0
for (let i = 0; i < len; i++) {
if (util.postList[i].floors == "二楼") {
this.data.array[biaoji02++] = util.postList[i];
}
}
break;
case'3':
var biaoji03= 0
for (let i = 0; i < len; i++) {
if (util.postList[i].floors == "三楼") {
this.data.array[biaoji03++] = util.postList[i];
}
}
break;
default:
var biaoji04 = 0
for (let i = 0; i < len; i++) {
if (util.postList[i].floors == "四楼") {
this.data.array[biaoji04++] = util.postList[i];
}
}
break;
}
break;
case'1':
switch (options.answer2) {
case'0':
var biaoji10= 0
for (let i = 0; i < len; i++) {
if (util.postList[i].location == "新食堂") {
this.data.array[biaoji10++] = util.postList[i];
}
}
break;
case'1':
var biaoji11 = 0
for (let i = 0; i < len; i++) {
if (util.postList[i].location == "新食堂"&&util.postList[i].floors == "一楼") {
this.data.array[biaoji11++] = util.postList[i];
}
}
break;
case'2':
var biaoji12 = 0
for (let i = 0; i < len; i++) {
if (util.postList[i].location == "新食堂"&&util.postList[i].floors == "二楼") {
this.data.array[biaoji12++] = util.postList[i];
}
}
break;
case'3':
var biaoji13 = 0
for (let i = 0; i < len; i++) {
if (util.postList[i].location == "新食堂"&&util.postList[i].floors == "三楼") {
this.data.array[biaoji13++] = util.postList[i];
}
}
break;
default:
var biaoji14 = 0
for (let i = 0; i < len; i++) {
if (util.postList[i].location == "新食堂"&&util.postList[i].floors == "四楼") {
this.data.array[biaoji14++] = util.postList[i];
}
}
break;
}
break;
case'2':
switch (options.answer2) {
case'0':
var biaoji20 = 0
for (let i = 0; i < len; i++) {
if (util.postList[i].location == "老食堂") {
this.data.array[biaoji20++] = util.postList[i];
}
}
break;
case'1':
var biaoji21 = 0
for (let i = 0; i < len; i++) {
if (util.postList[i].location == "老食堂" && util.postList[i].floors == "一楼") {
this.data.array[biaoji21++] = util.postList[i];
}
}
break;
case'2':
var biaoji22 = 0
for (let i = 0; i < len; i++) {
if (util.postList[i].location == "老食堂" && util.postList[i].floors == "二楼") {
this.data.array[biaoji22++] = util.postList[i];
}
}
break;
case'3':
var biaoji23 = 0
for (let i = 0; i < len; i++) {
if (util.postList[i].location == "老食堂" && util.postList[i].floors == "三楼") {
this.data.array[biaoji23++] = util.postList[i];
}
}
break;
default:
var biaoji14 = 0
for (let i = 0; i < len; i++) {
if (util.postList[i].location == "老食堂" && util.postList[i].floors == "四楼") {
this.data.array[biaoji14++] = util.postList[i];
}
}
break;
}
break;
default:
switch (options.answer2) {
case'0':
var biaoji30 = 0
for (let i = 0; i < len; i++) {
if (util.postList[i].location == "学苑餐厅") {
this.data.array[biaoji30++] = util.postList[i];
}
}
break;
case'1':
var biaoji31 = 0
for (let i = 0; i < len; i++) {
if (util.postList[i].location == "学苑餐厅" && util.postList[i].floors == "一楼") {
this.data.array[biaoji31++] = util.postList[i];
}
}
break;
case'2':
var biaoji32 = 0
for (let i = 0; i < len; i++) {
if (util.postList[i].location == "学苑餐厅" && util.postList[i].floors == "二楼") {
this.data.array[biaoji32++] = util.postList[i];
}
}
break;
case'3':
var biaoji33 = 0
for (let i = 0; i < len; i++) {
if (util.postList[i].location == "学苑餐厅" && util.postList[i].floors == "三楼") {
this.data.array[biaoji33++] = util.postList[i];
}
}
break;
default:
var biaoji34 = 0
for (let i = 0; i < len; i++) {
if (util.postList[i].location == "学苑餐厅" && util.postList[i].floors == "四楼") {
this.data.array[biaoji34++] = util.postList[i];
}
}
break;
}
break;
}
//随机选菜推荐函数
this.returnRandom(this.data.array)
},
3、 评分及上新新品排序函数
//排序函数
var objectArraySort = function (keyName) {
returnfunction (objectN, objectM) {
var valueN = objectN[keyName]
var valueM = objectM[keyName]
if (valueN < valueM) return1
elseif (valueN > valueM) return -1
elsereturn0
}
}
 
源码链接。
项目演示
项目演示可放视频链接或二维码，推荐腾讯视频哦，适合在微信里传播。
web类项目，可以利用github的项目演示功能，创建在线链接，方法参照：如何在github上创建个人项目的在线演示demo
团队故事
姓名	职责
顾晓阳	 小程序功能设计、菜品列表化显示、合作实现摇一摇及筛选功能
田克刚	 提出用户需求、后台数据库设计及实现、合作实现筛选功能
马祁	 界面优化与美化、菜品数据采集与编辑、合作实现摇一摇选菜功能
团队联系方式：

邮箱:  438561537@qq.com    maqi@bupt.edu.cn、

QQ: 377145480、38561537

团队合作过程中发生的趣事、攻克的难关。
