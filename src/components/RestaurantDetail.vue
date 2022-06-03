<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.names }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image"
        style="width: 250px; margin-bottom: 25px"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
            <!-- opening_hours該如何更改 -->
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{ name: 'DASHBOARD', params: { id: restaurant.id } }"
        >Dashboard</router-link
      >

      <button
        type="button"
        class="btn btn-danger btn-border mr-2"
        @click.prevent.stop="cancleFavorited(restaurant.id)"
        v-if="restaurant.isFavorited"
      >
        移除最愛
      </button>
      <button
        type="button"
        class="btn btn-primary btn-border mr-2"
        @click.prevent.stop="addFavorited(restaurant.id)"
        v-else
      >
        加到最愛
      </button>
      <button
        type="button"
        class="btn btn-danger like mr-2"
        @click.prevent.stop="cancleLiked(restaurant.id)"
        v-if="restaurant.isLiked"
      >
        Unlike
      </button>
      <button
        type="button"
        class="btn btn-primary like mr-2"
        @click.prevent.stop="addLiked(restaurant.id)"
        v-else
      >
        Like
      </button>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
import userAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";
export default {
  name: "RestaurantDetail",
  props: {
    initialRestaurantDetail: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurant: {},
    };
  },
  created() {
    this.featchRestaurantDetail();
  },
  watch: {
    initialRestaurantDetail(newValue) {
      this.restaurant = {
        ...this.initialRestaurantDetail,
        ...newValue,
      };
    },
  },
  methods: {
    featchRestaurantDetail() {
      this.restaurant = this.initialRestaurantDetail;
      const { opening_hours: openingHours } = this.initialRestaurantDetail;
    },
    async cancleFavorited(restaurantId) {
      try {
        await userAPI.deleteFavorite({ restaurantId });

        this.restaurant.isFavorited = false;
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法刪除最愛",
        });
      }
    },
    async addFavorited(restaurantId) {
      try {
        await userAPI.addFavorite({ restaurantId });
        this.restaurant.isFavorited = true;
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法刪除最愛",
        });
      }
    },
    async cancleLiked(restaurantId) {
      try {
        await userAPI.deleteLike({ restaurantId });
        this.restaurant.isLiked = false;
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法刪除最愛",
        });
      }
    },
    async addLiked(restaurantId) {
      try {
        await userAPI.addLike({ restaurantId });

        this.restaurant.isLiked = true;
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法刪除最愛",
        });
      }
    },
  },
};
</script>
