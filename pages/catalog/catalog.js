var util = require('../../utils/util.js')
var RES = require('../menu/menu.js')
Page({
  onLoad: function (params) {
    this.setData({
      menu: params.menu,
      point: params.point,
      price: params.price,
      location: params.location,
      contains: params.contains,
      summary: params.summary,
      img:params.img,
      floors:params.floors,
    })
    
  },
    data: {
      menu: util.postList[0].menu,
      point: util.postList[0].point,
      price: util.postList[0].price,
      location: util.postList[0].location,
      contains: util.postList[0].contains,
      summary: util.postList[0].summary,
      img: util.postList[0].img,
      floors: util.postList[0].floors
    },
    onShow: function () {
      var that = this
      function b() {
        onLoad()
      }
      b();
    }
})
