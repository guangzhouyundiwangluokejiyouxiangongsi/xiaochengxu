// goodsclass/index/list.js
var app = getApp()
 Page({

  /**
   * 页面的初始数据
   */
  data: {
  p:0,
  id:1,
  level:1,
  goodslist:[],
  msg:'暂无数据',
  status:false,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var level = options.level;
    var p = options.p;
    var mythis = this;
    console.log('http://www.yundi.com:8080/index.php/Mobile/Index/goodslists.html?id=' + id + '&level=' + level + '&p=' + p)
    wx.request({
      url: 'http://www.yundi.com:8080/index.php/Mobile/Index/goodslists.html?id=' + id + '&level=' + level + '&p=' + p, //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {

        if(res.data.length > 0){

                var list = mythis.data.goodslist;
                for (var i = 0; i < res.data.length; i++) {
                  list.push(res.data[i]);
                }
                mythis.setData(
                  {
                    goodslist: list,
                    id:id,
                    level:level,
                    p:++p
                  }
                )
        }else{
              mythis.setData({
                msg:p>0?'没有了！':'暂无数据!',
                status:true,
              })
        }        
        // console.log(res.data)
      }
    })
    // goodslists
    // this.setData({
    //   id:id,
    // })
  
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
      console.log('sssss')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var id_ = this.data.id;
    var level_ = this.data.level;
    var p_ = this.data.p;
    var arr = ({ id: id_, level: level_, p: p_})
    this.onLoad(arr)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})