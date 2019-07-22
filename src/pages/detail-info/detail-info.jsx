import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Text, Picker, Icon } from '@tarojs/components'
import './detail-info.scss'

import Title from '@components/title'
import InfoSave from './info-save'
import { getWindowHeight } from '@utils/style'

import MyInput from '@components/my-input'
import MyRadio from '@components/my-radio'

export default class DetailInfo extends Component {
    state = {
        idCard: {
            radioName: '身份证到期日',
            finished: false,
            radioList: ['手动输入', '长期有效'],
            selected: -1,
            onRadioClick: (index, e) => {
                // console.log('onIdCardClick-' + e.currentTarget.title);
                let temp = this.state.idCard;
                temp.selected = parseInt(index);
                temp.finished = true;
                this.setState({
                    idCard: temp
                }, () => {console.log(this.state.idCard)})
            }
        },
        dueDate: {
            pickerName: '身份证到期日',
            finished: false,
            date: '请选择'
        },
        mariage: {
            radioName: '婚姻状况',
            finished: false,
            radioList: ['已婚', '未婚', '其他'],
            selected: -1,
            onRadioClick: (index, e) => {
                // console.log('onMariageClick-' + e.currentTarget.title);
                let temp = this.state.mariage;
                temp.selected = parseInt(index);
                temp.finished = true;
                this.setState({
                    mariage: temp
                }, () => {console.log(this.state.mariage)})
            }
        },
        education: {
            radioName: '教育程度',
            finished: false,
            radioList: ['专科及以下', '本科', '硕士', '博士及以上'],
            selected: -1,
            onRadioClick: (index, e) => {
                // console.log('onEducationClick-' + e.currentTarget.title);
                let temp = this.state.education;
                temp.selected = parseInt(index);
                temp.finished = true;
                this.setState({
                    education: temp
                }, () => {console.log(this.state.education)})
            }
        },
        house: {
            radioName: '住宅状况',
            finished: false,
            radioList: ['全款购房', '贷款购房', '租房', '其他'],
            selected: -1,
            onRadioClick: (index, e) => {
                // console.log('onHouseClick-' + e.currentTarget.title);
                let temp = this.state.house;
                temp.selected = parseInt(index);
                temp.finished = true;
                this.setState({
                    house: temp
                }, () => {console.log(this.state.house)})
            }
        },
        job: {
            radioName: '职业',
            finished: false,
            radioList: ['公司职员', '公务员', '事业单位员工', '金融单位员工', '军人', '学生', '自由职业者'],
            selected: -1,
            onRadioClick: (index, e) => {
                // console.log('onJobClick-' + e.currentTarget.title);
                let temp = this.state.job;
                temp.selected = parseInt(index);
                temp.finished = true;
                this.setState({
                    job: temp
                }, () => {console.log(this.state.job)})
            }
        },
        companyCharacter: {
            radioName: '单位性质',
            finished: false,
            radioList: ['国有经济', '集体经济', '私营/民营', '股份制', '三资'],
            selected: -1,
            onRadioClick: (index, e) => {
                // console.log('onCompanyCharacterClick-' + e.currentTarget.title);
                let temp = this.state.companyCharacter;
                temp.selected = parseInt(index);
                temp.finished = true;
                this.setState({
                    companyCharacter: temp
                }, () => {console.log(this.state.companyCharacter)})
            }
        },
        level: {
            radioName: '职务',
            finished: false,
            radioList: ['科员级/职员', '科级/部门经理', '县处级/总经理', '厅局级及以上/企业负责人', '其他'],
            selected: -1,
            onRadioClick: (index, e) => {
                // console.log('onLevelClick-' + e.currentTarget.title);
                let temp = this.state.level;
                temp.selected = parseInt(index);
                temp.finished = true;
                this.setState({
                    level: temp
                }, () => {console.log(this.state.level)})
            }
        },
        companyName: {
            inputName: '单位名称',
            finished: false,
            onCompanyNameInput: (e) => {
                let temp = this.state.companyName;
                if (e.currentTarget.value != '') {
                    temp.finished = true;
                } else {
                    temp.finished = false;
                }
                this.setState({
                    companyName: temp
                })
            }
        },
        contactsName: {
            inputName: '联系人姓名',
            finished: false,
            onContactsNameInput: (e) => {
                let temp = this.state.contactsName;
                if (e.currentTarget.value != '') {
                    temp.finished = true;
                } else {
                    temp.finished = false;
                }
                this.setState({
                    contactsName: temp
                })
            }
        },
        contactsPhone: {
            inputName: '联系人手机号',
            finished: false,
            onContactsPhoneInput: (e) => {
                let temp = this.state.contactsPhone;
                if (e.currentTarget.value != '') {
                    temp.finished = true;
                } else {
                    temp.finished = false;
                }
                this.setState({
                    contactsPhone: temp
                })
            }
        },
        relationship: {
            radioName: '与申请人关系',
            finished: false,
            radioList: ['夫妻', '父子', '母子', '兄弟姐妹', '同事', '朋友'],
            selected: -1,
            onRadioClick: (index, e) => {
                // console.log('onRelationshipClick-' + e.currentTarget.title);
                let temp = this.state.relationship;
                temp.selected = parseInt(index);
                temp.finished = true;
                this.setState({
                    relationship: temp
                }, () => {console.log(this.state.relationship)})
            }
        },
        postalAddress: {
            radioName: '卡片邮寄地址',
            finished: false,
            radioList: ['单位地址', '住宅地址'],
            selected: -1,
            onRadioClick: (index, e) => {
                // console.log('onPostalAddressClick-' + e.currentTarget.title);
                let temp = this.state.postalAddress;
                temp.selected = parseInt(index);
                temp.finished = true;
                this.setState({
                    postalAddress: temp
                }, () => {console.log(this.state.postalAddress)})
            }
        }
    }

    handleSaveClick = () => {
        console.log('handleSaveClick');
    }

    onDueDateChange = (e) => {
        let temp = this.state.dueDate;
        temp.finished = true;
        temp.date = e.detail.value;
        this.setState({
            dueDate: temp
        })
    }

    render () {
        const scrollHeight = parseInt(getWindowHeight()) - 145 + 'px'

        return (
            <View className='detail-info'>
                <Title />
                <InfoSave onClick={this.handleSaveClick} />
                <ScrollView scrollY style={{ height: scrollHeight }}>
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

                        <MyRadio radioInfo={this.state.idCard} />
                        {
                            this.state.idCard.selected == 0
                            ? 
                            <View className='info-input-date'>
                                <View className='info-input-date-name'>
                                    <Text>{this.state.dueDate.pickerName}</Text>
                                    {this.state.dueDate.finished ? <Icon size='18' type='success' className='my-radio-icon'></Icon> : <Text></Text>}
                                </View>
                                <View className={this.state.dueDate.date == '请选择'
                                                ? 'info-input-date-picker'
                                                : 'info-input-date-picker info-input-date-picker-black'}
                                >
                                    <Picker mode='date' onChange={this.onDueDateChange}>
                                        <View>
                                            <Text>{this.state.dueDate.date}</Text>
                                        </View>
                                    </Picker>
                                </View>
                            </View>
                            : <View></View>
                        }

                        <MyRadio radioInfo={this.state.mariage} />
                        <MyRadio radioInfo={this.state.education} />
                        <MyRadio radioInfo={this.state.house} />
                        <MyRadio radioInfo={this.state.job} />
                        <MyRadio radioInfo={this.state.companyCharacter} />
                        <MyRadio radioInfo={this.state.level} />
                        <View className='info-input-item'>
                            <MyInput 
                              inputName={this.state.companyName.inputName} 
                              type='text' 
                              finished={this.state.companyName.finished} 
                              onInput={this.state.companyName.onCompanyNameInput}
                            />
                        </View>
                        <View className='info-input-item'>
                            <MyInput 
                              inputName={this.state.contactsName.inputName} 
                              type='text' 
                              finished={this.state.contactsName.finished} 
                              onInput={this.state.contactsName.onContactsNameInput}
                            />
                        </View>
                        <View className='info-input-item'>
                            <MyInput 
                              inputName={this.state.contactsPhone.inputName} 
                              type='number' 
                              finished={this.state.contactsPhone.finished} 
                              onInput={this.state.contactsPhone.onContactsPhoneInput}
                            />
                        </View>
                        <MyRadio radioInfo={this.state.relationship} />
                        <MyRadio radioInfo={this.state.postalAddress} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}