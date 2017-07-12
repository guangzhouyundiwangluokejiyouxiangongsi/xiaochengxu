// goodsclass/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  nav1:'cur',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var mythis = this;
    wx.request({
      url: 'http://www.yundi.com:8080/index.php/Mobile/Index/classss.html', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        mythis.setData(
          {
            class1: res.data
          }
        )
        // console.log(res.data)
      }
    })

    wx.request({
      url: 'http://www.yundi.com:8080/index.php/Mobile/Index/classss.html?id=1', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        mythis.setData(
          {
            class: res.data,
            num:1
          }
        )
        // console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  mylick:function(e){
    this.setData({ color: '#f00' });
    // console.log(e.target.id)
    var id = e.target.id;

      var mythis=this;
        wx.request({
          url: 'http://www.yundi.com:8080/index.php/Mobile/Index/classss.html?id='+id, //仅为示例，并非真实的接口地址
          data: {
            id: id,
            y: ''
          },
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            mythis.setData(
              {
                class:res.data,
                num:id
              }
            )
            // console.log(res.data)
          }
        })
  }
  
})



