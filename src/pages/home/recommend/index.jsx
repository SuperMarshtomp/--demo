import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, CoverView } from '@tarojs/components'
import { Tag } from '@components'
import defaultAvatar from '@assets/default-avatar.png'
import './index.scss'

export default class Recommend extends Component {
  static defaultProps = {
    list: [],
    showDetail:false,
  }

  constructor(props) {
    super(props)
    this.state = {
      showDetail: false,
      showItem: {}
    }
  }

  handleClick = (id) => {
    Taro.navigateTo({
      url: `/pages/item/item?itemId=${id}`
    })
  }

  handleHidden = () => {
    this.setState({
      showDetail: false
    })
  }

  
  handleShowDetail = (showItem) => {
    this.setState({
      showItem,
      showDetail:true
    },() => {
      this.forceUpdate()
    })
  }

  render () {
    const { list,isList } = this.props
    const { showItem } = this.state
    return (
      <View className='home-recommend'>
        {
          this.state.showDetail ?
          <View class="b1" onClick={ this.handleHidden }>
            <View class="b2">
              <Text>
                {showItem.name}
              </Text>
            </View>
                <CoverView class="t_image">
                </CoverView>
          </View>:
          <View />
        }
        {
          isList ?
            <View className='home-recommend__list'>
              {list.filter(item => item.type === 1).map((item) => {
                const { id, categoryItem } = item
                return (
                  <View
                    key={id}
                    className='home-recommend__list-item'
                    // onClick={this.handleClick.bind(this, id)}
                  >
                    
                    <Text className='home-recommend__list-item-name' onClick={this.handleShowDetail.bind(this, categoryItem)} numberOfLines={1}>
                      {categoryItem.name}
                    </Text>

                    <Image className='home-recommend__list-item-img' onClick={this.handleShowDetail.bind(this, categoryItem)} src={categoryItem.listPicUrl} />
                    <Text className='home-recommend__list-item-desc' onClick={this.handleShowDetail.bind(this, categoryItem)}>
                      {categoryItem.simpleDesc}
                    </Text>
                    <View 
                      className='home-recommend__list-item-btn'
                      onClick={this.handleClick.bind(this, id)}
                    >
                      <Text numberOfLines={1}>
                        立即申请
                      </Text>
                    </View>
                  </View>
                )
              })}
            </View>
          :
            <View className='home-recommend__list2'>
              {list.filter(item => item.type === 1).map((item) => {
                const { id, categoryItem } = item
                return (
                  <View
                    key={id}
                    className='home-recommend__list2-item'
                   
                  >
                    <Image className='home-recommend__list2-item-img' onClick={this.handleShowDetail.bind(this, categoryItem)} src={categoryItem.listPicUrl} />

                    <View className="home-recommend__list2-item-text" onClick={this.handleShowDetail.bind(this, categoryItem)}>
                      <Text className='home-recommend__list2-item-text-name' numberOfLines={1}>
                        {categoryItem.name}
                      </Text>
                      <Text className='home-recommend__list2-item-text-desc'>
                        {categoryItem.simpleDesc}
                      </Text>
                    </View>
                    
                    <View className='home-recommend__list2-item-btn'  onClick={this.handleClick.bind(this, id)}>
                      <Text numberOfLines={1}>
                        立即申请
                      </Text>
                    </View>
                  </View>
                )
              })}
            </View>
        }
      </View>
    )
  }
}
