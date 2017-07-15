// search.js
Page({
  data: {
    content: [],
    qita: [],
    nzopen: ''
  },
  onLoad: function () {
    this.setData({
      qita: ['云商会', '我的云谱', '微微', '我的云'],
    })
  },
  // 其他
  list: function (e) {
    if (this.data.nzopen) {
      this.setData({
        nzopen: false
      })
    } else {
      this.setData({
        content: this.data.qita,
        nzopen: true
      })
    }
  },

})