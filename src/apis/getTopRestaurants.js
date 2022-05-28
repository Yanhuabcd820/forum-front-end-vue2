import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')


export default {
  getTopRestaurants() {
    return apiHelper.get(`/restaurants/top`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  
}