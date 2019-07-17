import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

export default class Title extends Component {
    render () {
        return (
            <View className='title'>
                <Text>
                    申请办卡
                </Text>
            </View>
        )
    }
}

