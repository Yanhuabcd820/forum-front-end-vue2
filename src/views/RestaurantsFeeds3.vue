<template>
  <div class="container py-5">
    <navTabs />

    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :rest="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :NewestComments="comments" />
      </div>
    </div>
  </div>
</template>
<script>
import navTabs from "../components/NavTabs";
import NewestRestaurants from "../components/NewestRestaurants";
import NewestComments from "../components/NewestComments";
import feedsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
/* eslint-disable */

export default {
  name: "restaurant-feeds",
  components: {
    navTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    this.featchFeeds();
  },
  methods: {
    async featchFeeds() {
      try {
        const response = await feedsAPI.getFeeds({
          restaurants,
          comments,
        });
        console.log("response", response);
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試",
        });
      }
      // this.restaurants = dummyData.restaurants;
      // this.comments = dummyData.comments.filter(
      //   (item) => item.Restaurant.name && item.text
      // );
    },
  },
};
</script>
