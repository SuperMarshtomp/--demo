import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
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