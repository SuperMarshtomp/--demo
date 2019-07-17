import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import { Tag } from '@components'
import defaultAvatar from '@assets/default-avatar.png'
import './index.scss'

export default class Recommend extends Component {
  static defaultProps = {
    list: []
  }

  handleClick = (id) => {
    Taro.navigateTo({
      url: `/pages/item/item?itemId=${id}`
    })
  }

  render () {
    const { list,isList } = this.props
    return (
      <View>
        {
          isList ?
          <View className='home-recommend'>
            <View className='home-recommend__list'>
              {list.filter(item => item.type === 1).map((item) => {
                const { id, categoryItem } = item
                return (
                  <View
                    key={id}
                    className='home-recommend__list-item'
                    onClick={this.handleClick.bind(this, id)}
                  >
                    <Text className='home-recommend__list-item-name' numberOfLines={1}>
                      {categoryItem.name}
                    </Text>

                    <Image className='home-recommend__list-item-img' src={categoryItem.listPicUrl} />
                    {!!categoryItem.simpleDesc && !categoryItem.simpleDescClose &&
                      <Text className='home-recommend__list-item-desc'>
                        {categoryItem.simpleDesc}
                      </Text>
                    }
                    {/* <View className='home-recommend__list-item-info'>
                      {!!categoryItem.limitedTag &&
                        <Tag text={categoryItem.limitedTag} />
                      }
                    </View> */}
                    <View className='home-recommend__list-item-btn'>
                      <Text numberOfLines={1}>
                        立即申请
                      </Text>
                    </View>
                  </View>
                )
              })}
            </View>
          </View>
          :<View />
        }
      </View>
    )
  }
}
