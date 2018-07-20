// pages/shaking/shaking.js
var util = require('../../utils/util.js')
var shiyan = 6
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shakeInfo: {
      num: 0,
      enabled: true
    },
    shakeData: {
      x: 0,
      y: 0,
      z: 0
    },
    // 下拉菜单
    first: '筛选',
    _num: 0,
    _res: 0,

    // 筛选
    array: [{ name: '全选' }, { name: '新食堂' }, { name: '老食堂' }, { name: '风味餐厅' }],
    level: [{ name: '全选' }, { name: '一楼' }, { name: '二楼' }, { name: '三楼' }, { name: '四楼' }],
    one: 0,
    two: 0,
    third: 0,
    four: 0,
  },
  isShow: true,
  currentTab: 0,


  // 下拉切换
  hideNav: function () {
    this.setData({
      displays: "none"
    })
  },
  // 区域
  tabNav: function (e) {
    this.setData({
      displays: "block"
    })
    this.setData({
      selected1: false,
      selected2: false,
      selected: true
    })
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {

      var showMode = e.target.dataset.current == 0;

      this.setData({
        currentTab: e.target.dataset.current,
        isShow: showMode
      })
    }
  },
  // 下拉切换中的切换
  // 区域
  selected: function (e) {
    this.setData({
      selected: true,
      selected1: false,
      selected2: false
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true,
      selected2: false
    })
  },
  selected2: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true
    })
  },
  // 下拉菜单1 2 3 4
  // 区域
  clickSum: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _sum: e.target.dataset.num
    })
    this.setData({
      first: e.target.dataset.name
    })
    this.setData({
      displays: "none"
    })
    var text = this.data.name
    console.log(text)
  },
  onLoad: function (options) {

  },
  clickMum: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _mum: e.target.dataset.num
    })
    this.setData({
      displays: "none"
    })
    var text = this.data.name
    console.log(text)
  },
  onLoad: function (options) {

  },
  clickCum: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _cum: e.target.dataset.num
    })
    this.setData({
      displays: "none"
    })
    var text = this.data.name
    console.log(text)
  },
 
  // 筛选
  choseTxtColor: function (e) {
    var that = this
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    console.log(e.currentTarget.dataset.id)
    this.setData({
      one: id,
    })

    
  },
  level: function (e) {
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    console.log(e.currentTarget.dataset.id)
    this.setData({
      two: id
    })
  },
  louceng: function (e) {
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    console.log(e.currentTarget.dataset.id)
    this.setData({
      third: id
    })
  },
  zhuangxiu: function (e) {
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    console.log(e.currentTarget.dataset.id)
    this.setData({
      four: id
    })
  },

  onShow: function () {
    var that = this;
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
    });
  },

  //计算摇一摇的偏移量
  getDelFlag: function (val1, val2) {
    return (Math.abs(val1 - val2) >= 1);
  },

  // 摇一摇成功后播放声音并累加摇一摇次数
  playShakeAudio: function () {
    var that = this;
    wx.playBackgroundAudio({
      dataUrl: 'http://7xqnxu.com1.z0.glb.clouddn.com/wx_app_shake.mp3',
      title: '',
      coverImgUrl: ''
    });
    wx.stopAccelerometer({

    })
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
