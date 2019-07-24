import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon, Image } from '@tarojs/components'
import './success-info.scss'

import Title from '@components/title'
import appIcon from './assets/appIcon.png'

import { getWindowHeight } from '@utils/style'

export default class SuccessInfo extends Component {
    render () {
        return (
            <View className='success-submit' style={{ height: getWindowHeight() }}>
                {/* h5需Title组件 */}
                <Title />

                <View className='success-submit-tip'>
                    <View className='success-submit-tip-icon'>
                        <Icon type='success' size='36'></Icon>
                    </View>
                    <View className='success-submit-tip-text'>
                        <Text>提交成功</Text>
                    </View>
                </View>

                <View className='success-submit-image-view'>
                    <View>
                        <Text>工银信用卡官方App—</Text>
                    </View>
                    <View>
                        <Image src={appIcon} className='success-submit-image' style='width: 100px; height: 25px;' />
                    </View>
                </View>

                <View>
                    <View className='success-submit-number'>
                        <View className='success-submit-left'>
                            <Text>申请单编号：</Text>
                        </View>
                        <View className='success-submit-center'>
                            <Text>36022019190400961</Text>
                        </View>
                        <View className='success-submit-right'>
                        </View>
                    </View>

                    <View className='success-submit-describe-view'>
                        <View className='success-submit-describe'>
                            <View className='success-submit-left'>
                                <Text>信用卡产品：</Text>
                            </View>
                            <View className='success-submit-center'>
                                <Text>故宫·九有一心红白金</Text>
                            </View>
                            <View className='success-submit-right'>
                                <Icon type='success_no_circle' size='26'></Icon>
                            </View>
                        </View>

                        <View className='success-submit-describe'>
                            <View className='success-submit-left'>
                                <Text>卡片邮寄地址：</Text>
                            </View>
                            <View className='success-submit-center'>
                                <Text>广东省广州市**</Text>
                            </View>
                            <View className='success-submit-right'>
                                <Icon type='success_no_circle' size='26'></Icon>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}