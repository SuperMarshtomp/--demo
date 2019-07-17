import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button} from '@tarojs/components'
import './index.scss'

export default class Tip extends Component {
    render () {
        return (
            <View className='tip'>
                <View className='text'>
                    <Text>
                        温馨提示：您选择的办卡城市需与工作或住宅所在地相同，否则可能导致申请不成功。
                    </Text>
                </View>
                <View className='button' onClick={ this.props.onClick }>
                    <Text>
                        我知道了
                    </Text>
                </View>
            </View>
        )
    }
}