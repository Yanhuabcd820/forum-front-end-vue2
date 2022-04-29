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
        src="https://loremflickr.com/320/240/food,dessert,restaurant/"
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
        @click.prevent.stop="cancleFavorited"
        v-if="restaurant.isFavorited"
      >
        移除最愛
      </button>
      <button
        type="button"
        class="btn btn-primary btn-border mr-2"
        @click.prevent.stop="addFavorited"
        v-else
      >
        加到最愛
      </button>
      <button
        type="button"
        class="btn btn-danger like mr-2"
        @click.prevent.stop="cancleLiked"
        v-if="restaurant.isLiked"
      >
        Unlike
      </button>
      <button
        type="button"
        class="btn btn-primary like mr-2"
        @click.prevent.stop="addLiked"
        v-else
      >
        Like
      </button>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
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
  methods: {
    featchRestaurantDetail() {
      this.restaurant = this.initialRestaurantDetail;
      const { opening_hours: openingHours } = this.initialRestaurantDetail;
    },
    cancleFavorited() {
      this.restaurant.isFavorited = false;
    },
    addFavorited() {
      this.restaurant.isFavorited = true;
    },
    cancleLiked() {
      this.restaurant.isLiked = false;
    },
    addLiked() {
      this.restaurant.isLiked = true;
    },
  },
};
</script>
