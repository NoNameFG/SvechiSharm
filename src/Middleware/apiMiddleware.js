import api from '../Api/api.js'
import { GET_PRODUCT_LIST } from '../Constants/RequestsTypes.js'

const apiMiddleware = ({dispatch}) => next => async action => {

  if(action.type === GET_PRODUCT_LIST){
    
    try {

      let data = await api.product.get_list()
      next({...action, payload: data.data})

    } catch (e) {
      console.log(e)
    }
  }

}

export default apiMiddleware
