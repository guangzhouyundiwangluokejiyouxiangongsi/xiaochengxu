//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    datas: null,
    test: "",
    scrollTop: {
      scroll_top: 0,
      goTop_show: false
    }  
  },
  // 返回顶部
  scrollTopFun: function (e) {
    // console.log(e.detail);
    if (e.detail.scrollTop > 300) {//触发gotop的显示条件  
      this.setData({
        'scrollTop.goTop_show': true
      });
      // console.log(this.data.scrollTop)
    } else {
      this.setData({
        'scrollTop.goTop_show': false
      });
    }
  },
  goTopFun: function (e) {
    var _top = this.data.scrollTop.scroll_top;//发现设置scroll-top值不能和上一次的值一样，否则无效，所以这里加了个判断  
    if (_top == 1) {
      _top = 0;
    } else {
      _top = 1;
    }
    this.setData({
      'scrollTop.scroll_top': _top
    });
    // console.log("----");
    // console.log(this.data.scrollTop)
  },  
  
  
})