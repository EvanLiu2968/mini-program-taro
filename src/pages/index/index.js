import Taro, { Component } from '@tarojs/taro'
import { View,ScrollView,Input,Image} from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super(...arguments)
    this.state = {
      loading:true,
      list:[]
    }
  }
  componentDidMount () {
    //
  }
  render () {
    return (
      <View className="wrapper-full">
        <View className="box-image">
          <Image src="https://www.evanliu2968.com.cn/public/images/horse.png" mode="widthFix"/>
        </View>
        <View className="box-intro">
          <View className="title">Evan Liu</View>
          <View className="subtitle">慎行，独思</View>
        </View>
      </View>
    )
  }
}

