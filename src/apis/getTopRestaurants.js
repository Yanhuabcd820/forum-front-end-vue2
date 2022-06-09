import { apiHelper } from './../utils/helpers'



export default {
  getTopRestaurants() {
    return apiHelper.get(`/restaurants/top`)
  },

}