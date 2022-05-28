<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'ADMIN-RESTAURANT', params: { id: restaurant.id } }"
            class="btn btn-link"
            >Show</router-link
          >

          <router-link
            :to="{
              name: 'ADMIN-RESTAURANT-EDIT',
              params: { id: restaurant.id },
            }"
            class="btn btn-link"
            >Edit</router-link
          >

          <button
            type="button"
            class="btn btn-link"
            @click.prevent.stop="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    async fetchRestaurants() {
      const { data } = await adminAPI.restaurants.get();
      console.log(data);
      this.restaurants = data.restaurants;
      // this.restaurants = dummyData.restaurants;
    },

    async deleteRestaurant(restaurantId) {
      try {
        console.log(restaurantId);
        const { data } = await adminAPI.restaurants.delete(restaurantId);
        console.log(data);
        this.restaurants = this.restaurants.filter(
          (rest) => rest.id !== restaurantId
        );
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳類別，請稍後再試",
        });
      }
    },
  },
};
</script>