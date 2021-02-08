import { GET_PRODUCT_LIST } from '../../Constants/RequestsTypes.js'

export const getProductList = payload => ({
  type: GET_PRODUCT_LIST,
  payload: payload
})
