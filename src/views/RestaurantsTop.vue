<template>
  <div class="container py-5">
    <navTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      class="card mb-3"
      style="max-width: 540px; margin: auto"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoritedUsers.length }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button
              type="button"
              class="btn btn-danger mr-2"
              @click.prevent.stop="cancleFavorited(restaurant.id)"
              v-if="restaurant.isFavorited"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent.stop="addFavorited(restaurant.id)"
              v-else
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navTabs from "../components/NavTabs";
import topRestaurantsAPI from "./../apis/getTopRestaurants.js";
import usersAPI from "./../apis/user.js";
import { Toast } from "./../utils/helpers";
export default {
  name: "RestaurantsTop",
  components: {
    navTabs,
  },
  data() {
    return {
      restaurants: {},
    };
  },
  created() {
    this.fetchTop();
  },
  methods: {
    async fetchTop() {
      try {
        const { data } = await topRestaurantsAPI.getTopRestaurants();
        // console.log(data);
        this.restaurants = data.restaurants;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試",
        });
      }
    },

    async cancleFavorited(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurants = this.restaurants.map((_restaurant) => {
          if (_restaurant.id === restaurantId) {
            return {
              ..._restaurant,
              isFavorited: false,
            };
          } else {
            return _restaurant;
          }
        });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試",
        });
      }
    },
    async addFavorited(restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite({ restaurantId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurants = this.restaurants.map((_restaurant) => {
          if (_restaurant.id === restaurantId) {
            return {
              ..._restaurant,
              isFavorited: true,
            };
          } else {
            return _restaurant;
          }
        });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試",
        });
      }
    },
  },
};
</script>
