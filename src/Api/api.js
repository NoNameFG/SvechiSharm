import axios from 'axios'

const api = {
  admin_login: data => axios.get('/admin/login', {params: {...data}}),
  product: {
    add: data => axios.post('/admin/product', data),
    get_list: data => axios.get('/admin/product/list', {params: {...data}}),
    image_by_id: data => axios.get('/admin/product/image', {params: {...data}}),
    get_by_id: data => axios.get('/admin/product', {params: {...data}})
  }
}

export default api
