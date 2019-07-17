import Taro, { Component } from '@tarojs/taro'
import { View, CheckBox, Text, Checkbox } from '@tarojs/components'
import './index.scss'

export default class Confirm extends Component {
    render () {
        return (
            <View>
                <View className='confirm-intro'>
                    <Checkbox className='confirm-intro-check' checked={this.props.checked}></Checkbox>
                    <Text>
                        本人已阅读并同意<Text className='confirm-intro-key'>《申请人说明》</Text>；首次办卡客户在收到卡片后须本人携带该卡、身份证原件至办卡城市任一工行网点完成卡片启用
                    </Text>
                </View>
                <View className='confirm-btn-view'>
                    <View className='confirm-btn' onClick={this.props.onClick}>
                        <Text>
                            下一步
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}