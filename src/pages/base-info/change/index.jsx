import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Change extends Component {
    render () {
        return (
            <View className='change'>
                <View className='change-name'>
                    <Text>
                        您申请的信用卡为：{ this.props.cardName }
                    </Text>
                </View>
                <View className='change-btn-view'>
                    <Text className='change-btn' onClick={this.props.onClick}>
                        重新选卡
                    </Text>
                </View>
            </View>
        )
    }
}