import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView, CoverView } from '@tarojs/components'
// import { Loading } from '@components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/home'
// import { dispatchCartNum } from '@actions/cart'
import { getWindowHeight } from '@utils/style'
import Recommend from './recommend'
import './home.scss'

import Title from '@components/title'
import Search from './search'
import Location from './location'
import Tip from './tip'
import Select from './select'

const RECOMMEND_SIZE = 20

@connect(state => state.home, { ...actions })
class Home extends Component {
  config = {
    navigationBarTitleText: 'Demo'
  }

  state = {
    loaded: false,
    loading: false,
    lastItemId: 0,
    hasMore: true,
    showTip: true,
    isList: true
  }

  handleSearchClick () {
    console.log('handleSearchClick');
  }

  handleBrandClick () {
    console.log('handleBrandClick');
  }

  handleLevelClick () {
    console.log('handleLevelClick');
  }

  changeList = () => {
    console.log('handleIconClick');
    this.setState({
      isList: !this.state.isList
    })
  }

  componentDidMount() {

    this.props.dispatchHome().then(() => {
      this.setState({ loaded: true })
    })
    // this.props.dispatchCartNum()
    this.props.dispatchSearchCount()
    this.props.dispatchPin({ orderType: 4, size: 12 })
    this.loadRecommend()
  }

  loadRecommend = () => {
    if (!this.state.hasMore || this.state.loading) {
      return
    }

    const payload = {
      lastItemId: this.state.lastItemId,
      size: RECOMMEND_SIZE
    }
    this.setState({ loading: true })
    this.props.dispatchRecommend(payload).then((res) => {
      const lastItem = res.rcmdItemList[res.rcmdItemList.length - 1]
      this.setState({
        loading: false,
        hasMore: res.hasMore,
        lastItemId: lastItem && lastItem.id
      })
    }).catch(() => {
      this.setState({ loading: false })
    })
  }

  handlePrevent = () => {
    // XXX 时间关系，首页只实现底部推荐商品的点击
    Taro.showToast({
      title: '目前只可点击底部推荐商品',
      icon: 'none'
    })
  }

  render () {
    // if (!this.state.loaded) {
    //   return <Loading />
    // }

    const { homeInfo, searchCount, recommend, pin } = this.props
    return (
      <View className='home'>
        
        <Title />
        <Search isList = {this.state.isList} changeList = {this.changeList} onClick={ () => this.handleSearchClick() }/>
        <Location city='广州' />
        <Tip/> 

        <View className='index-select-view'>
          <View className='index-select-item' onClick={ () => this.handleBrandClick() }>
            <Select title='全部品牌'/>
          </View>
          <View className='index-select-item' onClick={ () => this.handleLevelClick() }>
            <Select title='全部等级'/> 
          </View>
        </View>
        
        <ScrollView
          scrollY
          className='home__wrap'
          onScrollToLower={this.loadRecommend}
          style={{ height: (parseInt(getWindowHeight())-100)+'px'}}
        >
        
          {/* 为你推荐 */}
          <Recommend list={recommend} isList = {this.state.isList}/>
        </ScrollView>
      </View>
    )
  }
}

export default Home
