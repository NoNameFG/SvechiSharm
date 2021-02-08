import { combineReducers, applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// Reducers
import productList from '../Reducers/RequestProductList.js'
// Middleware
import apiMiddleware from '../Middleware/apiMiddleware.js'

const allReducers = combineReducers({
  productList
})

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk, apiMiddleware))
)

export default store
