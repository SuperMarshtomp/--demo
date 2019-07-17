import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'



export default class CardIntro extends Component {
    render () {
        const points = this.props.points.map((point, index) => {
            return <Text key={index}>{point}</Text>
        })

        return (
            <View className='card-intro'>
                <View>
                    <View>
                        <Image className='card-intro-image' src={this.props.cardImage} />
                    </View>
                    <View>
                        {points}
                    </View>
                </View>
                <View>
                    <Text>
                        {this.props.introduce}
                    </Text>
                </View>
            </View>
        )
    }
}