<template>
  <div class="card">
    <div class="card-header">
      <strong> {{ initialFollowings.length }}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link
        :to="{ name: 'USER', params: { id: Following.id } }"
        class="ml-1"
        v-for="Following in initialFollowings"
        :key="Following.id"
      >
        <img :src="Following.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "UserFollowingsCard",
  props: {
    initialFollowings: {
      type: Array,
      required: true,
    },
  },
};
</script>
