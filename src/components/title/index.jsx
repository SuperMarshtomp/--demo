import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Title extends Component {
    render () {
        const backIcon = '<';
        return (
            <View className='title-view'>
                <View className='title-icon' onClick={this.props.onClick}>
                    <Text>
                        {backIcon}
                    </Text>
                </View>
                <View className='title'>
                    <Text>
                        申请办卡
                    </Text>
                </View>
            </View>
        )
    }
}

