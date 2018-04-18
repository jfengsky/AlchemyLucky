// import initialState from '../store/'
import { TOGGLE_MODAL, GET_STORE } from '../action'

import list from './list'

const initialState = {
  alchemys: list,
  showModal: false,
  DB: {}
}

// action接口
interface ITAction {
  type: string
  value: any
}

export default (state: any = initialState, action: ITAction) => {
  switch(action.type) {
    case GET_STORE:
      return Object.assign({},state, {
        DB: action.value
      })
    case TOGGLE_MODAL:
      return Object.assign({},state, {
        showModal: action.value
      })
    default:
      return state
  }
}