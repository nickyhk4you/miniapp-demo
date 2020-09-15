/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// page/component/list/list.js
import AdobeSDK from '../../.././lib/adobe/AdobeSDK.js'
var app = getApp()
Page({
  data:{
    itemList: app.globalData.itemList,
    picture: ''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('hello onLoad')
    wx.request({
      url: 'http://120.24.186.85:8888/rest/mboxTargetOnlyWithOpenId?openid=abcdefghijklmn',
      success: res => {
        console.log('picture from AT is:' +res.data.response.execute.mboxes[0].options[0].content.picture)
        this.setData({
          picture : res.data.response.execute.mboxes[0].options[0].content.picture
        })
      }
      
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    AdobeSDK.trackState('ListPage', {"cdata.wechatopenid":"o1UnSwpjUUVIz3vgrSaHH0sHlYHQ"});
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})