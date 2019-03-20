import Taro, { Component } from '@tarojs/taro'
import { View,ScrollView,Input,Image} from '@tarojs/components'
import './index.scss'
import { getPhotos } from '../../service/api'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super(...arguments)
    this.state = {
      photos:[]
    }
  }
  componentDidMount () {
    // 获取远程数据
    getPhotos().then((res) => {
      console.log(res)
      this.setState({
        photos: res.data.photoList
      })
    })
  }
  render () {
    return (
      <View className="waterfall">
        {this.state.photos.map((item,i)=>{
          return (
            <View key={i} className="waterfall-item">
              <View className="img-box">
                <Image src={item.img} mode="widthFix" />
              </View>
              <View className="description">{item.desc}</View>
            </View>
          )
        })}
      </View>
    )
  }
}

