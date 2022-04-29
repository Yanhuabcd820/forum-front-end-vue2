<template>
  <div class="card">
    <div class="card-header">最新評論</div>
    <div class="card-body" v-for="comment in NewestComments" :key="comment.id">
      <div>
        <h4>
          <router-link
            :to="{ name: 'RESTAURANT', params: { id: comment.Restaurant.id } }"
          >
            {{ comment.Restaurant.name }}
          </router-link>
        </h4>
        <p>{{ comment.text }}</p>
        by
        <a href="#"> {{ comment.User.name }} </a>
        {{ comment.updatedAt | fromNow }}
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
    NewestComments: {
      type: Array,
      required: true,
    },
  },
};
</script>
