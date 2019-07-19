import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker, Icon } from '@tarojs/components'
import './index.scss'

import MyRadio from '@components/my-radio'
import MyInput from '@components/my-input'

export default class InfoInput extends Component {
    render () {
        const infoLists = this.props.infoLists;

        return (
            <View>
                <View className='info-input-pinyin'>
                    <View className='info-input-pinyin-content'>
                        <Text>姓名拼音</Text>
                        <Text>CHEN XU TAO</Text>
                    </View>
                    <View className='info-input-pinyin-warn'>
                        <Text>请核对，可修改，每字间请以单个空格隔开</Text>
                    </View>
                </View>

                <MyRadio radioInfo={infoLists.idCard} onRadioClick={() => infoLists.idCard.onIdCardClick} />
                {
                    infoLists.idCard.selected == 0
                    ? 
                    <View className='info-input-date'>
                        <View className='info-input-date-name'>
                            <Text>{infoLists.dueDate.pickerName}</Text>
                            {infoLists.dueDate.finished ? <Icon size='18' type='success' className='my-radio-icon'></Icon> : <Text></Text>}
                        </View>
                        <View className={infoLists.dueDate.date == '请选择'
                                        ? 'info-input-date-picker'
                                        : 'info-input-date-picker info-input-date-picker-black'}
                        >
                            <Picker mode='date' onChange={infoLists.dueDate.onDueDateChange}>
                                <View>
                                    <Text>{infoLists.dueDate.date}</Text>
                                </View>
                            </Picker>
                        </View>
                    </View>
                    : <View></View>
                }

                <MyRadio radioInfo={infoLists.mariage} onRadioClick={() => infoLists.mariage.onMariageClick} />
                <MyRadio radioInfo={infoLists.education} onRadioClick={() => infoLists.education.onEducationClick} />
                <MyRadio radioInfo={infoLists.house} onRadioClick={() => infoLists.house.onHouseClick} />
                <MyRadio radioInfo={infoLists.job} onRadioClick={() => infoLists.job.onJobClick} />
                <MyRadio radioInfo={infoLists.companyCharacter} onRadioClick={() => infoLists.companyCharacter.onCompanyCharacterClick} />
                <MyRadio radioInfo={infoLists.level} onRadioClick={() => infoLists.level.onLevelClick} />
                <View className='info-input-item'>
                    <MyInput 
                      inputName={infoLists.companyName.inputName} 
                      type='text' 
                      finished={infoLists.companyName.finished} 
                      onBlur={() => infoLists.companyName.onCompanyNameBlur}
                    />
                </View>
                <View className='info-input-item'>
                    <MyInput 
                      inputName={infoLists.contactsName.inputName} 
                      type='text' 
                      finished={infoLists.contactsName.finished} 
                      onBlur={() => infoLists.contactsName.onContactsNameBlur}
                    />
                </View>
                <View className='info-input-item'>
                    <MyInput 
                      inputName={infoLists.contactsPhone.inputName} 
                      type='number' 
                      finished={infoLists.contactsPhone.finished} 
                      onBlur={() => infoLists.contactsPhone.onContactsPhoneBlur}
                    />
                </View>
                <MyRadio radioInfo={infoLists.relationship} onRadioClick={() => infoLists.relationship.onRelationshipClick} />
                <MyRadio radioInfo={infoLists.postalAddress} onRadioClick={() => infoLists.postalAddress.onPostalAddressClick} />
            </View>
        )
    }
}