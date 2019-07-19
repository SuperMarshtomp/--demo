import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon } from '@tarojs/components'
import './index.scss'

export default class MyRadio extends Component {
    render () {
        const radioInfo = this.props.radioInfo;
        const listLength = radioInfo.radioList.length > 4 ? 3 : radioInfo.radioList.length;

        let temp = radioInfo.radioList;
        if (temp.length > 4) {
            while(temp.length % 3 !== 0) {
                temp.push('');
            }
        }

        const radioList = temp.map((item, index) => {
            if (item != '') {
                return (
                    <View title={index} 
                      onClick={this.props.onRadioClick()} 
                      key={item} 
                      className={radioInfo.selected != index 
                                ? 'my-radio-list-item my-radio-list-item-border my-radio-list-item-' + listLength
                                : 'my-radio-list-item my-radio-list-item-border my-radio-list-item-red my-radio-list-item-' + listLength}
                    >
                        <Text>{item}</Text>
                    </View>
                )
            } else {
                return (
                    <View key={item} className={'my-radio-list-item my-radio-list-item-' + listLength}>
                        <Text>{item}</Text>
                    </View>
                )
            }
        })

        return (
            <View className='my-radio'>
                <View className='my-radio-name'>
                    <Text>{radioInfo.radioName}</Text>
                    {radioInfo.finished ? <Icon size='18' type='success' className='my-radio-icon'></Icon> : <Text></Text>}
                </View>
                <View className='my-radio-list'>
                    {radioList}
                </View>
            </View>
        )
    }
}