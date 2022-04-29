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
            10:00
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
      <a class="btn btn-primary btn-border mr-2" href="#">Dashboard</a>

      <button
        type="button"
        class="btn btn-danger btn-border mr-2"
        @click.prevent.stop="cancleFavorited"
        v-if="!restaurant.isFavorited"
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
      <button type="button" class="btn btn-danger like mr-2">Unlike</button>
      <button type="button" class="btn btn-primary like mr-2">Like</button>
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
      // openingHours: opening_hours,
      // opening_hours: openingHours,
    };
  },
  created() {
    this.featchRestaurantDetail();
  },
  methods: {
    featchRestaurantDetail() {
      // this.restaurant = this.initialRestaurantDetail;
      const {
        id,
        name,
        Category,
        image,
        opening_hours: openingHours,
        tel,
        address,
        description,
        isFavorited,
        isLiked,
      } = this.initialRestaurantDetail;
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
    },
    cancleFavorited() {
      this.restaurant.isFavorited = false;
    },
    addFavorited() {
      this.restaurant.isFavorited = true;
    },
  },
};
</script>
