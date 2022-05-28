<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
        :alt="restaurant.name"
        width="286px"
        height="180px"
      />
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link
            :to="{ name: 'RESTAURANT', params: { id: restaurant.id } }"
          >
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge badge-secondary">
          {{ restaurant.Category.name }}
        </span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          v-if="restaurant.isFavorited"
          @click.prevent.stop="deleteFavorited(restaurant.id)"
        >
          移除最愛
        </button>
        <button
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          v-else
          @click.prevent.stop="addFavorited(restaurant.id)"
        >
          加到最愛
        </button>
        <button
          type="button"
          class="btn btn-danger like mr-2"
          v-if="restaurant.isLiked"
          @click.prevent.stop="deleteLike(restaurant.id)"
        >
          Unlike
        </button>
        <button
          type="button"
          class="btn btn-primary like mr-2"
          v-else
          @click.prevent.stop="addLike(restaurant.id)"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import userAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";
export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
    };
  },
  methods: {
    async addFavorited(restaurantId) {
      try {
        const { data } = await userAPI.addFavorite({ restaurantId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試",
        });
      }
    },
    async deleteFavorited(restaurantId) {
      try {
        const { data } = await userAPI.deleteFavorite({ restaurantId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試",
        });
      }
    },
    async addLike(restaurantId) {
      try {
        const { data } = await userAPI.addLike({ restaurantId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: true,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試",
        });
      }
    },
    async deleteLike(restaurantId) {
      try {
        const { data } = await userAPI.deleteLike({ restaurantId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: false,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試",
        });
      }
    },
  },
};
</script>
