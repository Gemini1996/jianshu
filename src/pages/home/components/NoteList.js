import React, { PureComponent, Fragment } from 'react'
import { ListItem, ListContent, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
 
class NoteList extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props
    return (
      <Fragment>
        {
          list.map((item, index) => {
            return (
              <ListItem key={index}>
                <a className="imgContainer" href="/">
                  <img alt="" className="img" src={item.get('imgUrl')} />
                </a>
                <ListContent>
                  <Link className="title" to='/detail'>{item.get('title')}</Link>
                  <p className="abstract">{item.get('desc')}</p>
                  <div className="meta">
                    <span className="jsd-meta">
                      <i className="iconfont ic-paid">&#xe63d;</i>12.8
                    </span>
                    <a className="nickname" href='/'>{item.get('nickname')}</a>
                    <a className="comments" href='/'>
                      <i className="iconfont">&#xe684;</i>5
                    </a>
                    <span className="like">
                      <i className="iconfont">&#xe6ca;</i>40
                    </span>
                  </div>
                </ListContent>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => {getMoreList(page)}}>阅读更多</LoadMore>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatchToProps = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)