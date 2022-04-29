<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="Comment in restaurantComments" :key="Comment.id">
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          class="btn btn-danger float-right"
          v-if="currentUser.isAdmin"
          @click.stop.prevent="handleDeleteButtonClick(Comment.id)"
        >
          Delete
        </button>
        <h3>
          <a href="#"> {{ Comment.User.name }} </a>
        </h3>
        <p>{{ Comment.text }}</p>
        <footer class="blockquote-footer">
          {{ Comment.updatedAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
import { fromNowFilter } from "../utils/mixins";
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};
export default {
  name: "restaurantComments",
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentUser: dummyUser.currentUser,
    };
  },
  methods: {
    handleDeleteButtonClick(commentID) {
      console.log(commentID);
      this.$emit("after-delete-comment", commentID);
    },
  },
};
</script>
