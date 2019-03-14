/*
 * @Author: yinzhm 
 * @Date: 2019-03-11 21:46:49 
 * @Last Modified by: yinzhm
 * @Last Modified time: 2019-03-13 23:18:38
 */
import React, { Component, Fragment } from "react"
import { HeaderWrapper, Logo, Nav, NavItem, NavInput, NavSearch, Button, SearchInfo, SearchInfoTrending, SearchRecent } from "./style"
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'

class Header extends Component {
  getListArea() {
    const { focused, mouseIn, list, currentPage, totalPage, handleChangePage, handleMouseEnter, handleMouseLeave } = this.props
    // 把immutable数组转化为普通数组
    const jsList = list.toJS()
    const pageList = []
    if (jsList.length) {
      for (let i = (currentPage - 1) * 10; i < currentPage * 10; i++ ) {
        if (jsList[i]) {
          pageList.push(
            <li key={jsList[i]}><a href='/'>{jsList[i]}</a></li>
          )
        }
      }
    }
   
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTrending>
            <div className='title'>
              <span>热门搜索</span>
                <a onClick={() => {handleChangePage(currentPage, totalPage, this.spinIcon)}} href='/'>
                  <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont ic-search">&#xe63f;</i>换一批
                </a>
            </div>
            <ul>
              {
                pageList
              }
            </ul>
          </SearchInfoTrending>
          <SearchRecent>
            <ul>
              <li>
                <a href='/'>
                  <i className="iconfont">&#xe629;</i><span>React</span>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className="iconfont">&#xe629;</i><span>Web前端</span>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className="iconfont">&#xe629;</i><span>ECMA10</span>
                </a>
              </li>
            </ul>
          </SearchRecent>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props
    return (
      <Fragment>
        <HeaderWrapper>
          <Nav className="header-left">
            <Link to="/">
              <Logo />
            </Link>
          </Nav>
          <Nav className="header-right">
            <Button className="write-btn">
              <i className="iconfont">&#xe62d;</i>写文章
            </Button>
            <Button className="sign-up">注册</Button>
            <Button className="log-in">登录</Button>
            <Button className="style-mode">
              <i className="iconfont">&#xe636;</i>
            </Button>
          </Nav>
          <Nav className="header-center"> 
            <NavItem className="left active" href="/">
              <i className="iconfont">&#xe786;</i>
              <span>首页</span>
            </NavItem>
            <NavItem className="left">
              <i className="iconfont">&#xe61a;</i>
              <span>下载App</span>
            </NavItem>
            <NavInput className="search">
              <CSSTransition 
                timeout={400}
                in={focused}
                classNames="slide"
              >
                <NavSearch 
                  className={focused?'focused':''}
                  onFocus={() => {handleInputFocus(list)}}
                  onBlur={handleInputBlur}
                >
                </NavSearch>
              </CSSTransition>
              <a className={focused?"focused search-btn":"search-btn"} href="/">
                <i className={focused?'focused iconfont':'iconfont'}>&#xe623;</i>
              </a>
              {this.getListArea()}
            </NavInput>
          </Nav>
        </HeaderWrapper>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // immutable的 get 方法获取 state 中的数据
    // focused: state.get('focused')
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    currentPage: state.getIn(['header', 'currentPage']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header','mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      // if(!list) {
      //   dispatch(actionCreators.getList())
      // }
      // immutable中 list的长度用 size 属性获得
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(currentPage, totalPage, spinDOM) {
      let originAngle = spinDOM.style.transform.replace(/[^0-9]/ig,'')
      if (originAngle) {
        originAngle = parseInt(originAngle)
      } else {
        originAngle = 0
      }
      spinDOM.style.transform = `rotate(${originAngle+360}deg)`
      if (currentPage < totalPage) {
        dispatch(actionCreators.changePage(currentPage + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)