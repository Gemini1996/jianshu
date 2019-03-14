import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

// immutable 的 fromJS 方法将 js 对象转换为 immutable 对象
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  currentPage: 1,
  totalPage: 1,
  list: []
}) 


export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS :
      // immutable 的 set 方法将设置的值和之前immutable对象的值结合生成新的对象
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR :
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST :
      // return state.set('list', action.data)
      //             .set('totalPage', action.totalPage);
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case actionTypes.MOUSE_ENTER :
      return state.set('mouseIn', true)     
    case actionTypes.MOUSE_LEAVE :
      return state.set('mouseIn', false) 
    case actionTypes.CHANGE_PAGE :
      return state.set('currentPage', action.page)              
    default:
      return state;
  }
}