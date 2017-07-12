//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
   datas:null,
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
        // this.setData({datas:'111'})
        var mythis = this;

    wx.request({
      url: 'http://localhost:8080/xiaochengxu/', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        mythis.setData({datas:res.data})
      }
    })
   
  }
})

