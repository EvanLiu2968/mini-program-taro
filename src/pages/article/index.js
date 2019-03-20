import Taro, { Component } from '@tarojs/taro'
import { View,ScrollView,Input,Image} from '@tarojs/components'
import './index.scss'
import { getArticles } from '../../service/api'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super(...arguments)
    this.state = {
      category: [],
      currentIndex: 0,
      currentList: []
    }
  }
  componentDidMount () {
    // 获取远程数据
    getArticles().then((res) => {
      console.log(res)
      this.setState({
        currentList: res.data.category[0].children
      })
    })
  }
  render () {
    return (
      <View className="content">
        <View className="md-list">
          {this.state.currentList.map((item,i)=>{
            return (
              <View className="md-li" key={i}>
                <View className="md-item">
                  <View className="md-title">{item.title}</View>
                  <View className="md-desc">
                    <View className="md-time">{item.createTime}</View>
                    {item.keywords.map((keyword,k)=>{
                      return <View key={k} className="md-tag">{keyword}</View>
                    })}
                  </View>
                </View>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

