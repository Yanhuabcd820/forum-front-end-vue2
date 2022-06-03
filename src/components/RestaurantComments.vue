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
          <router-link :to="{ name: 'USER', params: { id: Comment.User.id } }">
            {{ Comment.User.name }}
          </router-link>
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
import { mapState } from "vuex";

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
      // currentUser: this.currentUser,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    handleDeleteButtonClick(commentID) {
      console.log(commentID);
      this.$emit("after-delete-comment", commentID);
    },
  },
};
</script>
