import Taro, { Component } from '@tarojs/taro'
import { View,ScrollView,Input,Image} from '@tarojs/components'
import './detail.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super(...arguments)
    this.state = {
      content: ''
    }
  }
  componentDidMount () {
  }
  render () {
    return (
        <View>test</View>
    )
  }
}

