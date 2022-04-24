<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ initialFollowers.length }}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <router-link
        :to="{ name: 'USER', params: { id: Follower.id } }"
        class="ml-1"
        v-for="Follower in initialFollowers"
        :key="Follower.id"
      >
        <img :src="Follower.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "UserFollowersCard",
  props: {
    initialFollowers: {
      type: Array,
      required: true,
    },
  },
};
</script>
