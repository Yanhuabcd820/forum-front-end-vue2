<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ Comments.length }}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <router-link
        :to="{ name: 'RESTAURANTS', params: { id: Comment.Restaurant.id } }"
        class="ml-1 mb-1"
        v-for="Comment in Comments"
        :key="Comment.id"
      >
        <img
          :src="Comment.Restaurant.image"
          width="60"
          height="60"
          class="avatar"
        />
      </router-link>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "UserCommentsCard",
  props: {
    Comments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  // watch: {
  //   Comments(newValue) {
  //     this.Comments = {
  //       ...this.initialComments,
  //       ...newValue,
  //     };
  //   },
  // },
  // created() {
  //   this.fetchComments();
  // },

  // methods: {
  //   fetchComments() {
  //     this.Comments = {
  //       ...this.initialComments,
  //     };
  //     // console.log("this.Comments", this.Comments);
  //     // console.log("initialComments", this.initialComments);
  //   },
  // },
};
</script>
