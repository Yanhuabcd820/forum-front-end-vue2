import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getFeeds() {
    return apiHelper.get(`/restaurants/feeds`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  restaurants: {
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    getRestaurant({ restaurantId }) {
      return apiHelper.get(`/restaurants/${restaurantId
        }`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  },
  comments: {
    postComments({ restaurantId, text }) {
      return apiHelper.post(`/comments`, { restaurantId, text }, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    deleteComment({ id }) {
      return apiHelper.delete(`/comments/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  }
}