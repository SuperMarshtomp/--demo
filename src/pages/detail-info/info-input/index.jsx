import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

import MyRadio from '@components/my-radio'

export default class InfoInput extends Component {
    render () {
        const infoLists = this.props.infoLists;

        return (
            <View>
                <MyRadio radioInfo={infoLists.idCard} onRadioClick={() => infoLists.idCard.onIdCardClick} />
                <MyRadio radioInfo={infoLists.mariage} onRadioClick={() => infoLists.mariage.onMariageClick} />
                <MyRadio radioInfo={infoLists.education} onRadioClick={() => infoLists.education.onEducationClick} />
                <MyRadio radioInfo={infoLists.house} onRadioClick={() => infoLists.house.onHouseClick} />
                <MyRadio radioInfo={infoLists.job} onRadioClick={() => infoLists.job.onJobClick} />
                <MyRadio radioInfo={infoLists.companyCharacter} onRadioClick={() => infoLists.companyCharacter.onCompanyCharacterClick} />
                <MyRadio radioInfo={infoLists.level} onRadioClick={() => infoLists.level.onLevelClick} />
                <MyRadio radioInfo={infoLists.relationship} onRadioClick={() => infoLists.relationship.onRelationshipClick} />
                <MyRadio radioInfo={infoLists.postalAddress} onRadioClick={() => infoLists.postalAddress.onPostalAddressClick} />
            </View>
        )
    }
}