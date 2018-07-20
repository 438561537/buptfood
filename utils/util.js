  const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
var postList = [
  {
    img: "/image/timg.jpg",
    menu: "番茄牛肉",
    location: "新食堂",
    floors: "一楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 9.1,
    price: 12,
    numbers: 1
  },
  {
    img: "/image/1.jpg",
    menu: "武汉热干面",
    location: "老食堂",
    floors:"二楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 9.2,
    price: 8,
    numbers: 2
  },
  {
    img: "/image/2.jpg",
    menu: "手擀面",
    location: "老食堂",
    floors:"二楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 9.7,
    price: 8,
    numbers: 3
  },
  {
    img: "/image/3.jpg",
    menu: "扬州炒饭",
    location: "老食堂",
    floors:"二楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 8.8,
    price: 10,
    numbers: 4
  },
  {
    img: "/image/4.jpg",
    menu: "韩式肥牛拌饭",
    location: "老食堂",
    floors:"二楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 8.6,
    price: 14,
    numbers: 5
  },
  {
    img: "/image/5.jpg",
    menu: "香辣肥牛面",
    location: "老食堂",
    floors:"一楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 8.4,
    price: 7,
    numbers: 6
  },
  {
    img: "/image/6.jpg",
    menu: "担担面",
    location: "老食堂",
    floors:"一楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 8.6,
    price: 6,
    numbers: 7
  },
  {
    img: "/image/7.jpg",
    menu: "河南羊肉烩面",
    location: "老食堂",
    floors:"一楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 8.9,
    price: 10,
    numbers: 8
  },
  {
    img: "/image/8.jpg",
    menu: "正宗万川烤鱼",
    location: "学苑餐厅",
    floors:"一楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 8.4,
    price: 48,
    numbers: 9
  },
  {
    img: "/image/9.jpg",
    menu: "炸鸡套餐",
    location: "新食堂",
    floors:"一楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 8.1,
    price: 13,
    numbers: 10
  },
  {
    img: "/image/10.jpg",
    menu: "油泼面",
    location: "新食堂",
    floors:"一楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 8.3,
    price: 7,
    numbers: 11
  },
  {
    img: "/image/11.jpg",
    menu: "臊子拌面手工面",
    location: "新食堂",
    floors:"一楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 8.5,
    price: 9,
    numbers: 12
  },
  {

    img: "/image/12.jpg",
    menu: "清汤米线",
    location: "新食堂",
    floors:"二楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 8.6,
    price: 7,
    numbers: 13
  },
  {
    img: "/image/13.jpg",
    menu: "牛肉酸辣粉",
    location: "新食堂",
    floors:"三楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 8.4,
    price: 12,
    numbers: 14
  },
  {
    img: "/image/14.jpg",
    menu: "重庆麻辣小面",
    location: "新食堂",
    floors:"三楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 8.9,
    price: 6,
    numbers: 15
  },
  {
    img: "/image/15.jpg",
    menu: "宜宾燃面",
    location: "新食堂",
    floors:"三楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 8.9,
    price: 8,
    numbers: 16
  },
  {
    img: "/image/16.jpg",
    menu: "手抓羊排",
    location: "新食堂", 
    floors:"四楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 9.5,
    price: 39,
    numbers: 17
  },
  {
    img: "/image/17.jpg",
    menu: "烤巴沙鱼",
    location: "新食堂",
    floors:"四楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 9.6,
    price: 30,
    numbers: 18
  },
  {
    img: "/image/18.jpg",
    menu: "碎肉拌面",
    location: "老食堂",
    floors:"三楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 9.3,
    price: 17,
    numbers: 19
  },
  {
    img: "/image/19.jpg",
    menu: "丁丁炒面",
    price: "价格：16",
    location: "老食堂",
    floors: "三楼",
    contains: "葱姜等",
    summary: "美味可口",
    point: 9.6,
    price: 16,
    numbers: 20
  },
  
]

module.exports = {
  postList: postList
}