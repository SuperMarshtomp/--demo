import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './base-info.scss'

import Title from '@components/title'
import Change from './change'
import CardIntro from './card-intro'

import cardImage from './assets/card.jpg'

export default class BaseInfo extends Component {

    state = {
        cardName: '故宫-九有一心红白金卡',
        cardImage: cardImage,
        points: ['中国银联', '白金卡', '磁条+IC+非接触', '人民币'],
        introduce: `首款故宫LOGO联名卡，白金卡免首年年费，限时赢故宫迎春礼盒，故宫图书、
                    文创品9折，故宫AR特效。荣时荣差，适用特殊计息`
    }

    handleChangeClick = () => {
        console.log('handleChangeClick');
    }

    render () {
        return (
            <View>
                <Title />
                <Change cardName={this.state.cardName} onClick={this.handleChangeClick} />
                <CardIntro cardImage={this.state.cardImage} points={this.state.points} introduce={this.state.introduce} />
            </View>
        )
    }
}