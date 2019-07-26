import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon } from '@tarojs/components'
import './index.scss'

export default class MyRadio extends Component {
    static defaultProps = {
        radioInfo: {
            radioName: '身份证到期日',
            radioList: ['手动输入', '长期有效'],
            finished: false,
            selected: -1
        }
    }
    render () {
        // const radioInfo = this.props.radioInfo;
        // let radioInfo = {};
        // for (const i in this.props.radioInfo) {
        //     if (typeof this.props.radioInfo[i] === 'object') {
        //         radioInfo[i] = this.props.radioInfo[i].slice(0);
        //     } else {
        //         radioInfo[i] = this.props.radioInfo[i];
        //     }
        // }
        let radioInfo = JSON.parse(JSON.stringify(this.props.radioInfo));

        const listLength = radioInfo.radioList.length > 4 ? 3 : radioInfo.radioList.length;

        let temp = radioInfo.radioList;
        if (temp.length > 4) {
            while(temp.length % 3 !== 0) {
                temp.push('');
            }
        }

        return (
            <View className='my-radio'>
                <View className='my-radio-name'>
                    <Text>{radioInfo.radioName}</Text>
                    {radioInfo.finished ? <Icon size='18' type='success' className='my-radio-icon'></Icon> : <Text></Text>}
                </View>
                <View className='my-radio-list'>
                    {
                        temp.map((item, index) => {
                            return item != ''
                                ?
                                (
                                    <View
                                      onClick={() => {this.props.onRadioClick(index, radioInfo.name)}} 
                                      key={item} 
                                      className={radioInfo.selected != index 
                                                ? 'my-radio-list-item my-radio-list-item-border my-radio-list-item-' + listLength
                                                : 'my-radio-list-item my-radio-list-item-border my-radio-list-item-red my-radio-list-item-' + listLength}
                                    >
                                        <Text>{item}</Text>
                                    </View>
                                )
                                :
                                (
                                    <View key={item} className={'my-radio-list-item my-radio-list-item-' + listLength}>
                                        <Text>{item}</Text>
                                    </View>
                                )
                        })
                    }
                </View>
            </View>
        )
    }
}