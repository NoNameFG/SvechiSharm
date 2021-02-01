import { combineReducers, applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// Reducers



const allReducers = combineReducers({

})

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
