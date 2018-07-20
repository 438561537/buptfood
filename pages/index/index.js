var util = require('../../utils/util.js')
var len = 20
Page({
  onLoad: function (options) {
      var that=this;
      switch (options.answer1) {
        case '0':
          switch (options.answer2) {
            case '0':
              this.setData({
                array: util.postList
              });
              break;
            case '1':
              var biaoji01 = 0
              for (let i = 0; i < len; i++) {
                if (util.postList[i].floors == "一楼") {
                  this.data.array[biaoji01++] = util.postList[i];
                }
              }
              break;
            case '2':
              var biaoji02 = 0
              for (let i = 0; i < len; i++) {
                if (util.postList[i].floors == "二楼") {
                  this.data.array[biaoji02++] = util.postList[i];
                }
              }
              break;
            case '3':
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
        case '1':
          switch (options.answer2) {
            case '0':
              var biaoji10= 0
              for (let i = 0; i < len; i++) {
                if (util.postList[i].location == "新食堂") {
                  this.data.array[biaoji10++] = util.postList[i];
                }
              }
              break;
            case '1':
              var biaoji11 = 0
              for (let i = 0; i < len; i++) {
                if (util.postList[i].location == "新食堂"&&util.postList[i].floors == "一楼") {
                  this.data.array[biaoji11++] = util.postList[i];
                }
              }
              break;
            case '2':
              var biaoji12 = 0
              for (let i = 0; i < len; i++) {
                if (util.postList[i].location == "新食堂"&&util.postList[i].floors == "二楼") {
                  this.data.array[biaoji12++] = util.postList[i];
                }
              }
              break;
            case '3':
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
        case '2':
          switch (options.answer2) {
            case '0':
              var biaoji20 = 0
              for (let i = 0; i < len; i++) {
                if (util.postList[i].location == "老食堂") {
                  this.data.array[biaoji20++] = util.postList[i];
                }
              }
              break;
            case '1':
              var biaoji21 = 0
              for (let i = 0; i < len; i++) {
                if (util.postList[i].location == "老食堂" && util.postList[i].floors == "一楼") {
                  this.data.array[biaoji21++] = util.postList[i];
                }
              }
              break;
            case '2':
              var biaoji22 = 0
              for (let i = 0; i < len; i++) {
                if (util.postList[i].location == "老食堂" && util.postList[i].floors == "二楼") {
                  this.data.array[biaoji22++] = util.postList[i];
                }
              }
              break;
            case '3':
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
            case '0':
              var biaoji30 = 0
              for (let i = 0; i < len; i++) {
                if (util.postList[i].location == "学苑餐厅") {
                  this.data.array[biaoji30++] = util.postList[i];
                }
              }
              break;
            case '1':
              var biaoji31 = 0
              for (let i = 0; i < len; i++) {
                if (util.postList[i].location == "学苑餐厅" && util.postList[i].floors == "一楼") {
                  this.data.array[biaoji31++] = util.postList[i];
                }
              }
              break;
            case '2':
              var biaoji32 = 0
              for (let i = 0; i < len; i++) {
                if (util.postList[i].location == "学苑餐厅" && util.postList[i].floors == "二楼") {
                  this.data.array[biaoji32++] = util.postList[i];
                }
              }
              break;
            case '3':
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
      this.returnRandom(this.data.array)
  },
  data: {
    z: util.postList[0].img,
    p: util.postList[0].menu,
    q: util.postList[0].point,
    m: util.postList[0].price,
    n: util.postList[0].location,
    l: util.postList[0].contains,
    y: util.postList[0].summary,
    x: util.postList[0].floors,
    array: [],
  },
  returnRandom: function (res) { 
      var determination = false
      var that = this
      var length = res.length
      if(length==0)
      {
        determination = that.g()
      }
      else{
      var list = Math.floor(Math.random() * (length))
      determination = that.f(res[list])
      }
  },
f: function (postList) {
    this.setData({
      z: postList.img,
      p: postList.menu,
      q: postList.point,
      m: postList.price,
      n: postList.location,
      l: postList.contains,
      y: postList.summary,
      x: postList.floors,
    })
  },
g: function (postList) {
  this.setData({
    z: "/image/404.jpg",
    p: "",
    q: "",
    m: "",
    n: "",
    l: "",
    y: "",
    x: "",
  })
},
onReady(){
  onLoad()
}
 
})

