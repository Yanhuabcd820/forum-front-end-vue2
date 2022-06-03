<template>
  <div class="card">
    <div class="card-header">
      <!-- <strong>{{ initialFavoritedRestaurants.length }}</strong> 收藏的餐廳 -->
    </div>
    <div class="card-body">
      <router-link
        class="ml-1 mb-1"
        :to="{ name: 'RESTAURANTS', params: { id: Favorit.id } }"
        v-for="Favorit in initialFavoritedRestaurants"
        :key="Favorit.id"
      >
        <img :src="Favorit.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "UserFavoritedRestaurants",
  props: {
    initialFavoritedRestaurants: {
      type: Array,
      required: true,
    },
  },
  // data() {
  //   return {
  //     // FavoritedRestaurants: [],
  //   };
  // },
  // created() {
  //   this.FavoritedRestaurants();
  // },
  // methods: {
  //   FavoritedRestaurants() {
  //     this.FavoritedRestaurants = {
  //       ...this.initialFavoritedRestaurants,
  //     };
  //   },
  // },
};
</script>
