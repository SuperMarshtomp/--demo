import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input} from '@tarojs/components'
import './index.scss'

export default class MyInput extends Component {
    render () {
        return (
            <View className='text-input'>
                <View className='text-input-name'>
                    <Text>
                        {this.props.inputName}
                    </Text>
                </View>
                <View className='text-input-item-view'>
                    <Input className='text-input-item' type={this.props.type} placeholder={'请输入' + this.props.inputName} />
                </View>
            </View>
        )
    }
}