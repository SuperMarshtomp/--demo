import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './base-info.scss'

import Title from '@components/title'
import Change from './change'

export default class BaseInfo extends Component {

    handleChangeClick = () => {
        console.log('handleChangeClick');
    }

    render () {
        return (
            <View>
                <Title />
                <Change cardName='故宫-九有一心红白金卡' onClick={this.handleChangeClick} />
            </View>
        )
    }
}