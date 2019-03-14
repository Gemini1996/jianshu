import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const getHomeData = (data) => ({
  type: actionTypes.GET_HOME_DATA,
  articleList: data.articleList,
  recommendList: data.recommendList
})

const addHomeData = (data, page) => ({
  type: actionTypes.ADD_HOME_DATA,
  // 把普通数组转化为Immutable数组
  list: fromJS(data),
  page
})

const getWriterData = (data) => ({
  type: actionTypes.GET_WRITER_DATA,
  writerList: fromJS(data)
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((result) => {
      const data = result.data.data
      const action = getHomeData(data)
      dispatch(action)
    })
  }
}

export const getWriterInfo = () => {
  return (dispatch) => {
    axios.get('/api/writer.json').then((result) => {
      const data = result.data.users
      const action = getWriterData(data)
      dispatch(action)
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get(`/api/homeList.json?page=${page}`).then((result) => {
      const data = result.data.data
      const action = addHomeData(data, page+1)
      dispatch(action)
    })
  }
}

export const toggleTopShow = (show) => ({
  type: actionTypes.TOGGLE_SCROLL_TOP,
  show
})