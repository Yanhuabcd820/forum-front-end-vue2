<template>
  <div class="card">
    <div class="card-header">最新餐廳</div>
    <div class="card-body">
      <div v-for="restaurant in rest" :key="restaurant.id">
        <h4>
          <router-link
            :to="{ name: 'RESTAURANT', params: { id: restaurant.id } }"
          >
            {{ restaurant.name }}
          </router-link>

          &nbsp;
          <small>{{
            restaurant.Category ? restaurant.Category.name : "未分類"
          }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>
        {{ restaurant.createdAt | fromNow }}
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";
export default {
  mixins: [fromNowFilter],
  props: {
    rest: {
      type: Array,
      required: true,
    },
  },
};
</script>


<style scoped>
small {
  font-size: 10px;
}
</style>