import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'


class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/photo/index',
      'pages/article/index',
      'pages/article/detail'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0068C4',
      navigationBarTitleText: '捕风捉影',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./asset/images/index.png",
        selectedIconPath: "./asset/images/index_focus.png"
      },{
        pagePath: "pages/photo/index",
        text: "照片",
        iconPath: "./asset/images/discovery.png",
        selectedIconPath: "./asset/images/discovery_focus.png"
      }, 
      {
        pagePath: "pages/article/index",
        text: "文章",
        iconPath: "./asset/images/burger.png",
        selectedIconPath: "./asset/images/burger_focus.png"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
