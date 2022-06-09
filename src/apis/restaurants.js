import { apiHelper } from './../utils/helpers'

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getFeeds() {
    return apiHelper.get(`/restaurants/feeds`)
  },
  restaurants: {
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    getRestaurant({ restaurantId }) {
      return apiHelper.get(`/restaurants/${restaurantId
        }`)
    }
  },
  comments: {
    postComments({ restaurantId, text }) {
      return apiHelper.post(`/comments`, { restaurantId, text })
    },
    deleteComment({ id }) {
      return apiHelper.delete(`/comments/${id}`)
    }
  }
}