import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 0,
  showScroll: false
})

const getHomeData = (state, action) => {
  return state.merge({
    'articleList': fromJS(action.articleList),
    'recommendList': fromJS(action.recommendList)
  })
}

const addHomeData = (state, action) => {
  return state.merge({
    'articleList': state.get('articleList').concat(action.list),
    'articlePage': action.page
  })
}

const getWriterData = (state, action) => {
  return state.set('writerList', action.writerList)
}

export default (state=defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_HOME_DATA:
      // state.set('articleList', fromJS(action.articleList))
      return getHomeData(state, action)
    case actionTypes.ADD_HOME_DATA:
      // return state.set('articleList',state.get('articleList').concat(action.list))
      return addHomeData(state, action)
    case actionTypes.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show)
    case actionTypes.GET_WRITER_DATA:
      return getWriterData(state, action)
    default:
      return state;
  }
}