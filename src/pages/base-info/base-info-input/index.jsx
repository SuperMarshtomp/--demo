import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './index.scss'

import MyInput from '@components/my-input'

export default class BaseInfoInput extends Component {
    render () {
        return (
            <View className='base-info-input-view'>
                <View className='base-info-input'>
                    <MyInput inputName='姓名' type='text' />
                    <MyInput inputName='身份证号' type='idcard' />
                    <MyInput inputName='手机号' type='number' />
                    <View className='base-info-input-verify'>
                        {/* <MyInput inputName='短信验证码' type='number' /> */}
                        <View className='verify-text-input'>
                            <View className='verify-text-input-name'>
                                <Text>
                                    短信验证码
                                </Text>
                            </View>
                            <View className='verify-text-input-item-view'>
                                <Input className='verify-text-input-item' type='number' placeholder='请输入短信验证码' />
                            </View>
                        </View>
                        
                        <View className='base-info-input-verify-btn-view'>
                            <View className='base-info-input-verify-btn' onClick={this.props.onClick}>
                                <Text>
                                    获取验证码
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}