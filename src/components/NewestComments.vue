<template>
  <div class="card">
    <div class="card-header">最新評論</div>
    <div class="card-body" v-for="comment in NewestComments" :key="comment.id">
      <div>
        <h4>
          <a href="#"> {{ comment.Restaurant.name }} </a>
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

import moment from "moment";
export default {
  filters:{
    fromNow(value){
      if(!value){
      return "-"
    }
    // 使用 moment 提供的 fromNow 方法
    return moment(value).fromNow();
    },
  },
  props: {
    NewestComments: {
      type: Array,
      required: true,
    },
  },
};
</script>
