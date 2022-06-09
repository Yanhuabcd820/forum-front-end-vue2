<template>
  <div class="container py-5">
    <navTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
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
    </template>
  </div>
</template>
<script>
import navTabs from "../components/NavTabs";
import NewestRestaurants from "../components/NewestRestaurants";
import NewestComments from "../components/NewestComments";
import Spinner from "../components/Spinner";
import feedsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
/* eslint-disable */
export default {
  name: "restaurant-feeds",
  components: {
    navTabs,
    NewestRestaurants,
    NewestComments,
    Spinner,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
      isLoading: true,
    };
  },
  created() {
    this.featchFeeds();
  },
  methods: {
    async featchFeeds() {
      try {
        const res = await feedsAPI.getFeeds();
        console.log("res", res);
        const { restaurants, comments } = res.data;
        this.restaurants = restaurants;
        this.comments = comments.filter(
          (item) => item.Restaurant.name && item.text
        );

        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試",
        });
      }
    },
  },
};
</script>
