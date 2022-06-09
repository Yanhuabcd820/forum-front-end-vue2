<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1>餐廳描述頁</h1>
      <!-- 餐廳資訊頁 RestaurantDetail -->
      <RestaurantDetail :initialRestaurantDetail="restaurant" />
      <hr />
      <!-- 餐廳評論 RestaurantComments -->
      <RestaurantComments
        :restaurant-comments="restaurantComments"
        @after-delete-comment="afterDeleteComment"
      />
      <!-- 新增評論 CreateComment -->
      <CreateComment
        :restaurant-id="restaurant.id"
        @after-create-comment="afterCreateComment"
      />
    </template>
  </div>
</template>
<script>
/*eslint-disable*/
import RestaurantDetail from "../components/RestaurantDetail";
import RestaurantComments from "../components/RestaurantComments";
import CreateComment from "../components/CreateComment";
import Spinner from "../components/Spinner";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "Restaurant",
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
    Spinner,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      isLoading: true,
    };
  },
  beforeRouteUpdate(to, from, next) {
    console.log("to", to);
    console.log("from", from);
    const { id } = to.params;
    this.fetchRestaurant(id);
    next();
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.restaurants.getRestaurant({
          restaurantId,
        });
        console.log(data);
        const { restaurant, isFavorited, isLiked } = data;

        const {
          id,
          name,
          Category,
          image,
          opening_hours: openingHours,
          tel,
          address,
          description,
          Comments,
        } = restaurant;
        this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name : "未分類",
          image,
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked,
        };
        this.restaurantComments = Comments;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "warning",
          title: "無法取得餐廳資料",
        });
      }
    },
    async afterDeleteComment(id) {
      try {
        await restaurantsAPI.comments.deleteComment({ id });
        this.restaurantComments = this.restaurantComments.filter(
          (comment) => comment.id !== id
        );
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法刪除評論",
        });
      }
    },
    async afterCreateComment(payLoad) {
      try {
        const { commentId, restaurantId, text } = payLoad;

        await restaurantsAPI.comments.postComments({ restaurantId, text });

        this.restaurantComments.push({
          RestaurantId: restaurantId,
          User: {
            id: this.currentUser.id,
            name: this.currentUser.name,
          },
          text,
          updatedAt: new Date(),
        });
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法新增評論",
        });
      }
    },
  },
};
</script>
