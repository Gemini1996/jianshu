import React, { PureComponent } from 'react'
import { WriterWrapper, WriterContainer } from '../style'
import { connect } from 'react-redux'

class Writer extends PureComponent {
  render() {
    const { writerList } = this.props
    return (
      <WriterContainer>
        <div className="title">
          <span>推荐作者</span>
          <a className="page-change" href='/'><i className="iconfont">&#xe63f;</i>换一批</a>
        </div>
        { 
          writerList.map((item) => {
            return (
              <WriterWrapper key={item.get("id")}>
                
                <div className="content">
                  <a className="avator" href='/'>
                    <img alt="" src={item.get('avatar_url')}></img>
                  </a>
                  <div className="subscribe">
                      <i className="iconfont">&#xe6d1;</i>关注
                  </div>
                  <div className="user">
                    <div className="authorName">
                      {item.get('nickname')}
                    </div>
                    <div className="describe">
                      <span>写了{Math.floor(item.get('total_wordage')/1000).toFixed(1)}k字</span> · <span>{(item.get('total_likes_count')/1000).toFixed(1)}k喜欢</span>
                    </div>
                  </div>
                </div>
              </WriterWrapper>
            )
          }) 
        }
      </WriterContainer>
      
    )
  }
}

const mapStateToProps = (state) => ({
  writerList: state.getIn(['home','writerList'])
})

export default connect(mapStateToProps, null)(Writer)