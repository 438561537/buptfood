var util = require('../../utils/util.js')
var objectArraySort = function (keyName) {
  return function (objectN, objectM) {
    var valueN = objectN[keyName]
    var valueM = objectM[keyName]
    if (valueN < valueM) return 1
    else if (valueN > valueM) return -1
    else return 0
  }
}
Page({
  data: {
    res: [] = util.postList.sort(objectArraySort('point')),
    New: [],
    currentTab: 0,
  },
  swipeContent: function (e) {
    var _this = this;
    this.setData({
     
    })
    if (this.data.currentTab != e.target.dataset.current) {
      _this.setData({
        currentTab: e.target.dataset.current,
        
      });
    }
  },
   swiperChange: function (e) {
    var _this = this;
    _this.setData({
      currentTab: e.detail.current,
      New: [] = util.postList.sort(objectArraySort('numbers')),
    });
  },
})
