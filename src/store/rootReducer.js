import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import home from '../containers/Home/reducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  home
})
