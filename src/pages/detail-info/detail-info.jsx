import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import './detail-info.scss'

import Title from '@components/title'
import InfoSave from './info-save'
import { getWindowHeight } from '@utils/style'

export default class DetailInfo extends Component {
    handleSaveClick = () => {
        console.log('handleSaveClick');
    }

    render () {
        const scrollHeight = parseInt(getWindowHeight()) - 145
        console.log(scrollHeight);

        const vStyleA = {
            height: '150px',
            'background-color': 'red'
        }
        const vStyleB = {
            height: '150px',
            'background-color': 'green'
        }
        const vStyleC = {
            height: '150px',
            'background-color': 'blue',
            color: '#333'
        }
        return (
            <View className='detail-info'>
                <Title className='detail-info-title' />
                <InfoSave className='detail-info-save' onClick={this.handleSaveClick} />
                <ScrollView scrollY style={{ height: scrollHeight }}>
                    <View style={vStyleA}>A</View>
                    <View style={vStyleB}>B</View>
                    <View style={vStyleC}>C</View>
                    <View style={vStyleA}>A</View>
                    <View style={vStyleB}>B</View>
                    <View style={vStyleC}>C</View>
                    <View style={vStyleA}>A</View>
                    <View style={vStyleB}>B</View>
                    <View style={vStyleC}>C</View>
                </ScrollView>
            </View>
        )
    }
}