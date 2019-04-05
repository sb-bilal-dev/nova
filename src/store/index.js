import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import createRootReducer from './rootReducer'

export const history = createBrowserHistory()

const configureStore = () => createStore(
  createRootReducer(history),
  applyMiddleware(thunk, routerMiddleware(history), logger)
)

export default configureStore
