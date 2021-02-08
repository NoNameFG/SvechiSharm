import { GET_PRODUCT_LIST } from '../Constants/RequestsTypes.js'

const productList = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return action.payload
    default:
      return state
  }
}

export default productList
