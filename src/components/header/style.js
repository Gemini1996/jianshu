import styled from 'styled-components'
import LogoPic from '../../statics/logo.png'

export const HeaderWrapper  = styled.nav`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(240, 240, 240);
  background: #fff
`

export const Logo = styled.div`
  display: inline-block;
  width: 100px;
  height: 56px;
  background: url(${LogoPic}) no-repeat 0 0 /100px 56px;
` 

export const Nav = styled.div`
  height: 100%;
  &::before, &::after {
    content: " ";
    display: table;
  }
  &::after {
    clear: both;
  }
  &.header-left {
    width: 100px;
    float: left;
  }
  &.header-center {
    width: 960px;
    margin: 0 auto;
    i {
      margin-right: 5px;
      vertical-align: top;
    }
    span {
      vertical-align: top;
    }
    
  }
  &.header-right {
    float: right;
  }
`

export const NavItem = styled.a`
  height: 56px;
  padding: 15px;
  margin-right: 5px;
  line-height: 26px;
  font-size: 17px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
  &.active {
    color:#ea6f5a;
  }
`

export const NavInput = styled.div`
  float: left;
  height: 56px;
  padding: 15px;
  margin-right: 5px;
  line-height: 26px;
  font-size: 17px;
  &.search {
    padding-top: 9px;
    position: relative;
    .search-btn {
      display:block;
      position: absolute;
      top: 14px;
      right: 25px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      border-radius: 50%;
      text-align: center;
      &.focused {
        background-color: #969696;
      }
      i {
        font-size: 19px;
        padding-left:5px;
        color: #a0a0a0;
        &.focused {
        color: #fff;
        }
      }
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索',
  type: "text"
})`
    padding: 0 40px 0 20px;
    width: 240px;
    height: 38px;
    border: 1px solid #eee;
    border-radius: 40px;
    box-sizing: border-box;
    font-size: 14px;
    background: #eee;
    &.slide-enter {
      transition: width .4s ease-out
    }
    &.slide-enter-active {
      width: 320px
    }
    &.slide-exit {
      transition: width .4s ease-out
    }
    &.slide-exit-active {
      width: 240px
    }
    &.focused {
      width: 320px;
    }
    &::placeholder {
      color: #a0a0a0;
    }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 15px;
  top: 57px;
  width: 240px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  &::before {
    position: absolute;
    left: 27px;
    top: -5px;
    width: 10px;
    height: 10px;
    content: '';
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    z-index: -1;
    transform: rotate(45deg)
  }
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`

export const SearchInfoTrending = styled.div`
  border-bottom: 1px solid #f0f0f0;
  .title {
    padding: 20px 20px 10px;
    &::before, &::after {
      content: " ";
      display: table;
    }
    &::after {
      clear: both
    }
    span {
      float: left;
      font-size: 14px;
      line-height: 20px;
      color: #969696;
    }
    a {
      float: right;
      vertical-align: top;
      font-size: 13px;
      line-height: 20px;
      color: #969696;
      background-color: transparent;
      .ic-search {
        display:inline-block;
        font-size: 20px;
        transition: all .3s linear;
      }
    }
  }
  ul {
    padding: 0 20px 10px;
    li {
      margin-right: 9px;
      display: inline-block;
      line-height: 28px;
      a {
        padding: 2px 6px;
        font-size: 12px;
        color: #787878;
        border: 1px solid #ddd;
        border-radius: 3px;
      }
    }
  }
`

export const SearchRecent = styled.div`
  padding: 10px 20px;
  a {
    padding: 10px 0;
    display: block;
    height: 40px;
    line-height: 20px;
    font-size: 14px;
    color: #333;
    position: relative;
    .iconfont {
      font-size: 16px;
      margin-right: 10px;
    }
  }
  span {
    padding-right: 30px;
    line-height: 20px;
    font-size: 14px;
    color: #333;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const Button = styled.a`
  float: right;
  padding: 6px 12px;
  border: 1px solid transparent;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  &.write-btn {
    width: 100px;
    height: 40px;
    margin: 8px 15px 0;
    border-radius: 20px;
    line-height: 24px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
    &::hover {
      color: #fff;
      background-color: #ec6149;
    }
  }
  &.sign-up {
    width: 80px;
    height: 38px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    line-height: 24px;
    font-size: 15px;
    color: #ea6f5a;
    &:hover {
      color: #ec6149;
      border-color: #ec6149;
      background-color: rgba(236,97,73,.05);
    }
  }
  &.log-in {
    color: #969696;
    margin: 11px 6px 0 10px;
    font-size: 15px;
    line-height: 1.42857;
  }
  &.style-mode {
    line-height: 20px;
    padding: 17px 10px 17px 15px;
    font-size: 24px;
    color: #969696;
  }
`