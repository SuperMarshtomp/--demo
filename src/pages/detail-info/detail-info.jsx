import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import './detail-info.scss'

import Title from '@components/title'
import InfoSave from './info-save'
import { getWindowHeight } from '@utils/style'

import InfoInput from './info-input'

export default class DetailInfo extends Component {
    state = {
        infoLists: {
            idCard: {
                radioName: '身份证到期日',
                finished: false,
                radioList: ['手动输入', '长期有效'],
                selected: -1,
                onIdCardClick: (e) => {
                    // console.log('onIdCardClick-' + e.currentTarget.title);
                    let temp = this.state.infoLists;
                    temp.idCard.selected = parseInt(e.currentTarget.title);
                    temp.idCard.finished = true;
                    this.setState({
                        infoLists: temp
                    }, () => {console.log(this.state.infoLists.idCard)})
                }
            },
            mariage: {
                radioName: '婚姻状况',
                finished: false,
                radioList: ['已婚', '未婚', '其他'],
                selected: -1,
                onMariageClick: (e) => {
                    // console.log('onMariageClick-' + e.currentTarget.title);
                    let temp = this.state.infoLists;
                    temp.mariage.selected = parseInt(e.currentTarget.title);
                    temp.mariage.finished = true;
                    this.setState({
                        infoLists: temp
                    }, () => {console.log(this.state.infoLists.mariage)})
                }
            },
            education: {
                radioName: '教育程度',
                finished: false,
                radioList: ['专科及以下', '本科', '硕士', '博士及以上'],
                selected: -1,
                onEducationClick: (e) => {
                    // console.log('onEducationClick-' + e.currentTarget.title);
                    let temp = this.state.infoLists;
                    temp.education.selected = parseInt(e.currentTarget.title);
                    temp.education.finished = true;
                    this.setState({
                        infoLists: temp
                    }, () => {console.log(this.state.infoLists.education)})
                }
            },
            house: {
                radioName: '住宅状况',
                finished: false,
                radioList: ['全款购房', '贷款购房', '租房', '其他'],
                selected: -1,
                onHouseClick: (e) => {
                    // console.log('onHouseClick-' + e.currentTarget.title);
                    let temp = this.state.infoLists;
                    temp.house.selected = parseInt(e.currentTarget.title);
                    temp.house.finished = true;
                    this.setState({
                        infoLists: temp
                    }, () => {console.log(this.state.infoLists.house)})
                }
            },
            job: {
                radioName: '职业',
                finished: false,
                radioList: ['公司职员', '公务员', '事业单位员工', '金融单位员工', '军人', '学生', '自由职业者'],
                selected: -1,
                onJobClick: (e) => {
                    // console.log('onJobClick-' + e.currentTarget.title);
                    let temp = this.state.infoLists;
                    temp.job.selected = parseInt(e.currentTarget.title);
                    temp.job.finished = true;
                    this.setState({
                        infoLists: temp
                    }, () => {console.log(this.state.infoLists.job)})
                }
            },
            companyCharacter: {
                radioName: '单位性质',
                finished: false,
                radioList: ['国有经济', '集体经济', '私营/民营', '股份制', '三资'],
                selected: -1,
                onCompanyCharacterClick: (e) => {
                    // console.log('onCompanyCharacterClick-' + e.currentTarget.title);
                    let temp = this.state.infoLists;
                    temp.companyCharacter.selected = parseInt(e.currentTarget.title);
                    temp.companyCharacter.finished = true;
                    this.setState({
                        infoLists: temp
                    }, () => {console.log(this.state.infoLists.companyCharacter)})
                }
            },
            level: {
                radioName: '职务',
                finished: false,
                radioList: ['科员级/职员', '科级/部门经理', '县处级/总经理', '厅局级及以上/企业负责人', '其他'],
                selected: -1,
                onLevelClick: (e) => {
                    // console.log('onLevelClick-' + e.currentTarget.title);
                    let temp = this.state.infoLists;
                    temp.level.selected = parseInt(e.currentTarget.title);
                    temp.level.finished = true;
                    this.setState({
                        infoLists: temp
                    }, () => {console.log(this.state.infoLists.level)})
                }
            },
            relationship: {
                radioName: '与申请人关系',
                finished: false,
                radioList: ['夫妻', '父子', '母子', '兄弟姐妹', '同事', '朋友'],
                selected: -1,
                onRelationshipClick: (e) => {
                    // console.log('onRelationshipClick-' + e.currentTarget.title);
                    let temp = this.state.infoLists;
                    temp.relationship.selected = parseInt(e.currentTarget.title);
                    temp.relationship.finished = true;
                    this.setState({
                        infoLists: temp
                    }, () => {console.log(this.state.infoLists.relationship)})
                }
            },
            postalAddress: {
                radioName: '卡片邮寄地址',
                finished: false,
                radioList: ['单位地址', '住宅地址'],
                selected: -1,
                onPostalAddressClick: (e) => {
                    // console.log('onPostalAddressClick-' + e.currentTarget.title);
                    let temp = this.state.infoLists;
                    temp.postalAddress.selected = parseInt(e.currentTarget.title);
                    temp.postalAddress.finished = true;
                    this.setState({
                        infoLists: temp
                    }, () => {console.log(this.state.infoLists.postalAddress)})
                }
            }
        }
    }

    handleSaveClick = () => {
        console.log('handleSaveClick');
    }

    render () {
        const scrollHeight = parseInt(getWindowHeight()) - 145 + 'px'
        
        return (
            <View className='detail-info'>
                <Title />
                <InfoSave onClick={this.handleSaveClick} />
                <ScrollView scrollY style={{ height: scrollHeight }}>
                    <InfoInput infoLists={this.state.infoLists} />
                </ScrollView>
            </View>
        )
    }
}