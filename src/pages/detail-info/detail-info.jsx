import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Text, Picker, Icon, Input } from '@tarojs/components'
import './detail-info.scss'

import Title from '@components/title'
import InfoSave from './info-save'
import { getWindowHeight } from '@utils/style'

import MyInput from '@components/my-input'
import MyRadio from '@components/my-radio'

import provice from '@utils/provice'

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
        houseAddress: {
            pickerName: '住宅地址',
            finished: false,
            address: '请选择省市区',
            addressIndex: [0, 0, 0],
            addressRange: [],
            detailAddress: ''
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
        companyAddress: {
            pickerName: '单位地址',
            finished: false,
            address: '请选择省市区',
            addressIndex: [0, 0, 0],
            addressRange: [],
            detailAddress: ''
        },
        companyPhone: {
            inputName: '单位电话',
            inputSubName: '(分机号选填)',
            finished: false,
            prefix: '',
            phone: '',
            suffix: ''
        },
        income: {
            inputName: '税前年收入',
            finished: false,
            onIncomeInput: (e) => {
                let temp = this.state.income;
                if (e.currentTarget.value != '') {
                    temp.finished = true;
                } else {
                    temp.finished = false;
                }
                this.setState({
                    income: temp
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

    componentWillMount() {
        // 地区选择器初始化
        let houseAddress = this.state.houseAddress;
        let addressRange = houseAddress.addressRange;

        let temp = [];
        for (let i = 0; i < provice.length; i++) {
            temp.push(provice[i].name);
        }
        addressRange.push(temp);
        temp = [];
        for (let i = 0; i < provice[0].city.length; i++) {
            temp.push(provice[0].city[i].name);
        }
        addressRange.push(temp);
        temp = [];
        for (let i = 0; i < provice[0].city[0].districtAndCounty.length; i++) {
            temp.push(provice[0].city[0].districtAndCounty[i]);
        }
        addressRange.push(temp);
        houseAddress.addressRange = addressRange;

        this.setState({
            houseAddress: houseAddress
        })


        // 简单复用住宅地址
        let companyAddress = this.state.companyAddress;
        companyAddress.addressRange = addressRange.slice(0);
        this.setState({
            companyAddress: companyAddress
        })
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

    onHouseAddressChange = (e) => {
        let temp = this.state.houseAddress;
        temp.addressIndex = e.detail.value;
        temp.address = temp.addressRange[0][temp.addressIndex[0]] + ' - ' + temp.addressRange[1][temp.addressIndex[1]] + ' - ' + temp.addressRange[2][temp.addressIndex[2]];
        this.setState({
            houseAddress: temp
        })
    }

    onHouseAddressColumnChange = (e) => {
        let temp = this.state.houseAddress;
        let column = e.detail.column;
        let row = e.detail.value;

        temp.addressIndex[column] = row;

        switch (column) {
            case 0:
                let t1 = [];
                let t2 = [];
                for (let i = 0; i < provice[row].city.length; i++) {
                    t1.push(provice[row].city[i].name);
                }
                for (let i = 0; i < provice[row].city[0].districtAndCounty.length; i++) {
                    t2.push(provice[row].city[0].districtAndCounty[i]);
                }
                temp.addressIndex[1] = 0;
                temp.addressIndex[2] = 0;
                temp.addressRange[1] = t1;
                temp.addressRange[2] = t2;
                break;
            case 1:
                let t = [];
                for (let i = 0; i < provice[temp.addressIndex[0]].city[row].districtAndCounty.length; i++) {
                    t.push(provice[temp.addressIndex[0]].city[row].districtAndCounty[i]);
                }
                temp.addressIndex[2] = 0;
                temp.addressRange[2] = t;
                break;
            case 2:
                break;
        }

        this.setState({
            houseAddress: temp
        })
    }

    onHouseDetailAddressInput = (e) => {
        let temp = this.state.houseAddress;
        if (e.currentTarget.value != '' && temp.address != '请选择省市区') {
            temp.finished = true;
        } else {
            temp.finished = false;
        }
        this.setState({
            houseAddress: temp
        })
    }

    // 简单复用住宅地址
    onCompanyAddressChange = (e) => {
        let temp = this.state.companyAddress;
        temp.addressIndex = e.detail.value;
        temp.address = temp.addressRange[0][temp.addressIndex[0]] + ' - ' + temp.addressRange[1][temp.addressIndex[1]] + ' - ' + temp.addressRange[2][temp.addressIndex[2]];
        this.setState({
            companyAddress: temp
        })
    }

    onCompanyAddressColumnChange = (e) => {
        let temp = this.state.companyAddress;
        let column = e.detail.column;
        let row = e.detail.value;

        temp.addressIndex[column] = row;

        switch (column) {
            case 0:
                let t1 = [];
                let t2 = [];
                for (let i = 0; i < provice[row].city.length; i++) {
                    t1.push(provice[row].city[i].name);
                }
                for (let i = 0; i < provice[row].city[0].districtAndCounty.length; i++) {
                    t2.push(provice[row].city[0].districtAndCounty[i]);
                }
                temp.addressIndex[1] = 0;
                temp.addressIndex[2] = 0;
                temp.addressRange[1] = t1;
                temp.addressRange[2] = t2;
                break;
            case 1:
                let t = [];
                for (let i = 0; i < provice[temp.addressIndex[0]].city[row].districtAndCounty.length; i++) {
                    t.push(provice[temp.addressIndex[0]].city[row].districtAndCounty[i]);
                }
                temp.addressIndex[2] = 0;
                temp.addressRange[2] = t;
                break;
            case 2:
                break;
        }

        this.setState({
            companyAddress: temp
        })
    }

    onCompanyDetailAddressInput = (e) => {
        let temp = this.state.companyAddress;
        if (e.currentTarget.value != '' && temp.address != '请选择省市区') {
            temp.finished = true;
        } else {
            temp.finished = false;
        }
        this.setState({
            companyAddress: temp
        })
    }
    // 简单复用住宅地址


    // 单位电话
    onPrefixInput = (e) => {
        let temp = this.state.companyPhone;
        temp.prefix = e.currentTarget.value;
        if (temp.prefix != '' && temp.phone != '' && temp.suffix != '') {
            temp.finished = true;
        } else {
            temp.finished = false;
        }
        this.setState({
            companyPhone: temp
        })
    }
    onCompanyPhoneInput = (e) => {
        let temp = this.state.companyPhone;
        temp.phone = e.currentTarget.value;
        if (temp.prefix != '' && temp.phone != '' && temp.suffix != '') {
            temp.finished = true;
        } else {
            temp.finished = false;
        }
        this.setState({
            companyPhone: temp
        })
    }
    onSuffixInput = (e) => {
        let temp = this.state.companyPhone;
        temp.suffix = e.currentTarget.value;
        if (temp.prefix != '' && temp.phone != '' && temp.suffix != '') {
            temp.finished = true;
        } else {
            temp.finished = false;
        }
        this.setState({
            companyPhone: temp
        })
    }

    onConfirmClick = () => {
        console.log('onConfirmClick');
    }

    render () {
        const scrollHeight = parseInt(getWindowHeight()) - 145 + 'px';

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
                        <View className='info-input-house-address'>
                            <View className='info-input-house-address-title'>
                                <Text>{this.state.houseAddress.pickerName}</Text>
                                {this.state.houseAddress.finished ? <Icon size='18' type='success' className='my-radio-icon'></Icon> : <Text></Text>}
                            </View>
                            <View className={this.state.houseAddress.address == '请选择省市区'
                                            ? 'info-input-house-address-picker'
                                            : 'info-input-house-address-picker-black'}
                            >
                                <Picker
                                  mode='multiSelector' 
                                  onChange={this.onHouseAddressChange}
                                  onColumnChange={this.onHouseAddressColumnChange}
                                  range={this.state.houseAddress.addressRange}
                                  value={this.state.houseAddress.addressIndex}
                                >
                                    <View className='info-input-house-address-selected'>
                                        <View className='info-input-house-address-selected-name'>
                                            <Text>{this.state.houseAddress.address}</Text>
                                        </View>
                                        <View className='info-input-house-address-selected-icon'>
                                            <Text>{'>'}</Text>
                                        </View>
                                    </View>
                                </Picker>
                            </View>
                            <View>
                                <Input 
                                  className='info-input-house-address-input' 
                                  type='text' 
                                  placeholder='请具体到门牌号且不少于3个字'
                                  onInput={this.onHouseDetailAddressInput}
                                />
                            </View>
                        </View>

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
                        {/* 单位地址--简单复用住宅地址 */}
                        <View className='info-input-house-address'>
                            <View className='info-input-house-address-title'>
                                <Text>{this.state.companyAddress.pickerName}</Text>
                                {this.state.companyAddress.finished ? <Icon size='18' type='success' className='my-radio-icon'></Icon> : <Text></Text>}
                            </View>
                            <View className={this.state.companyAddress.address == '请选择省市区'
                                            ? 'info-input-house-address-picker'
                                            : 'info-input-house-address-picker-black'}
                            >
                                <Picker
                                  mode='multiSelector' 
                                  onChange={this.onCompanyAddressChange}
                                  onColumnChange={this.onCompanyAddressColumnChange}
                                  range={this.state.companyAddress.addressRange}
                                  value={this.state.companyAddress.addressIndex}
                                >
                                    <View className='info-input-house-address-selected'>
                                        <View className='info-input-house-address-selected-name'>
                                            <Text>{this.state.companyAddress.address}</Text>
                                        </View>
                                        <View className='info-input-house-address-selected-icon'>
                                            <Text>{'>'}</Text>
                                        </View>
                                    </View>
                                </Picker>
                            </View>
                            <View>
                                <Input 
                                  className='info-input-house-address-input' 
                                  type='text' 
                                  placeholder='请具体到门牌号且不少于3个字'
                                  onInput={this.onCompanyDetailAddressInput}
                                />
                            </View>
                        </View>
                        {/* 单位地址--简单复用住宅地址 */}

                        {/* 单位电话 */}
                        <View className='info-input-company-phone'>
                            <View className='info-input-company-phone-name'>
                                <View>
                                    <Text>{this.state.companyPhone.inputName}</Text>
                                    {this.state.companyPhone.finished ? <Icon size='18' type='success' className='my-radio-icon'></Icon> : <Text></Text>}
                                </View>
                                <View className='info-input-company-phone-name-sub'>
                                    <Text>{this.state.companyPhone.inputSubName}</Text>
                                </View>
                            </View>
                            <View className='info-input-company-phone-prefix-view'>
                                <Input 
                                  type='number' 
                                  placeholder='区号' 
                                  className='info-input-company-phone-prefix' 
                                  onInput={this.onPrefixInput}
                                />
                            </View>
                            <View className='info-input-company-phone-divide'>
                                <Text>-</Text>
                            </View>
                            <View className='info-input-company-phone-phone-view'>
                                <Input 
                                  type='number' 
                                  placeholder='电话号' 
                                  className='info-input-company-phone-phone' 
                                  onInput={this.onCompanyPhoneInput}
                                />
                            </View>
                            <View className='info-input-company-phone-divide'>
                                <Text>-</Text>
                            </View>
                            <View className='info-input-company-phone-suffix-view'>
                                <Input 
                                  type='number' 
                                  placeholder='分机号' 
                                  className='info-input-company-phone-suffix' 
                                  onInput={this.onSuffixInput}
                                />
                            </View>
                        </View>

                        {/* 税前年收入 */}
                        <View className='info-input-item info-input-income'>
                            <View className='info-input-income-input'>
                                <MyInput 
                                  inputName={this.state.income.inputName}
                                  type='number' 
                                  finished={this.state.income.finished}
                                  onInput={this.state.income.onIncomeInput}
                                  noPlaceholder
                                />
                            </View>
                            <View className='info-input-income-unit'><Text>万元</Text></View>
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

                        {/* 提交申请按钮 */}
                        <View className='info-input-confirm-btn' onClick={this.onConfirmClick}>
                            <Text>
                                提交申请
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}