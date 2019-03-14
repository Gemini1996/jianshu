import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import NoteList from './components/NoteList'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import { actionCreators } from './store'

class Home extends PureComponent {

  handleScrollTop() {
        // eslint-disable-next-line
        clearInterval(timer)
        let timer = setInterval(function () {
        // 获取html向上卷动的距离
        let scroll_top = document.compatMode === "CSS1Compat" ? document.documentElement.scrollTop : document.body.scrollTop
        // scroll_top = document.documentElement.scrollTop || document.body.scrollTop
        // 每次移动的距离
        let distance = scroll_top / 10
        // html向上滚动
        document.documentElement.scrollTop -= distance
        // 滚动到距离顶部10以内清除定时器
        if (scroll_top <= 10) {
          document.documentElement.scrollTop = 0
          // 清空定时器
          clearInterval(timer)
        }
      },20)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <a className="banner" href="https://www.jianshu.com/p/4497f25e3532?utm_medium=index-banner&utm_source=desktop">
          </a>
          <div className="line"></div>
          <NoteList />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll?<BackTop onClick={this.handleScrollTop}><i className="iconfont">&#xe769;</i></BackTop>: null}
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.getHomeData()
    this.props.getWriterData()
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
  getHomeData() {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
  getWriterData() {
    const action = actionCreators.getWriterInfo()
    dispatch(action)
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)