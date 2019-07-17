import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'



export default class CardIntro extends Component {
    render () {
        const points = this.props.points.map((point, index) => {
            return (
                <View key={index} className='card-intro-point'>
                    <View>
                        <View className='card-intro-point-icon'>
                            
                        </View>
                    </View>
                    <Text>
                        {point}
                    </Text>
                </View>
            )
        })

        return (
            <View className='card-intro'>
                <View className='card-intro-image-item'>
                    <View>
                        <Image className='card-intro-image' src={this.props.cardImage} />
                    </View>
                    <View>
                        {points}
                    </View>
                </View>
                <View className='card-intro-text'>
                    <Text>
                        {this.props.introduce}
                    </Text>
                </View>
            </View>
        )
    }
}