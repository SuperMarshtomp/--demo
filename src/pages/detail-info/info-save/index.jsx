import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class InfoSave extends Component {
    render () {
        return (
            <View className='info-save'>
                <View className='info-save-intro'>
                    <Text>
                        您的信息将存入草稿箱
                    </Text>
                </View>
                <View className='info-save-btn-view'>
                    <View className='info-save-btn' onClick={this.props.onClick}>
                        <Text>
                            保存信息
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}