<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="profile.image | emptyImage" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ profile.name }}</h5>
          <p class="card-text">{{ profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ profile.Comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ profile.FavoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ profile.Followers.length }}</strong> followings
              (追蹤者)
            </li>
            <li>
              <strong>{{ profile.Followings.length }}</strong> followers
              (追隨者)
            </li>
          </ul>

          <p>
            <router-link :to="{ name: 'USER-EDIT', params: { id: profile.id } }"
              ><button type="button" class="btn btn-primary">
                edit
              </button></router-link
            >
          </p>
          <!-- vue無法讀取isAuthenticated, 無法做v-if判斷  
           -->
          <form
            v-if="isAuthenticated"
            action="/following/51?_method=DELETE"
            method="POST"
            style="display: contents"
          >
            <button
              type="submit"
              class="btn btn-danger"
              @click.prevent.stop="cancleFollow(profile.id)"
              v-if="isFollowed"
            >
              取消追蹤
            </button>
            <button
              class="btn btn-primary"
              @click.prevent.stop="addFollow(profile.id)"
              v-else
            >
              追蹤
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userAPI from "./../apis/user";
import { emptyImageFilter } from "./../utils/mixins";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";
export default {
  mixins: [emptyImageFilter],
  props: {
    initialProfile: {
      type: Object,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      profile: this.initialProfile,
      isFollowed: this.initialIsFollowed,
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    console.log("this.currentUser", this.currentUser);
  },
  methods: {
    async cancleFollow(userId) {
      try {
        await userAPI.deleteFollowing({ userId });
        this.isFollowed = false;
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法刪除追蹤",
        });
      }
    },
    async addFollow(userId) {
      try {
        await userAPI.addFollowing({ userId });

        this.isFollowed = true;
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法增加追蹤",
        });
      }
    },
  },
  watch: {
    initialProfile(newValue) {
      this.profile = {
        ...this.initialProfile,
        ...newValue,
      };
    },
    initialIsFollowed(newValue) {
      this.isFollowed = {
        ...this.initialIsFollowed,
        ...newValue,
      };
    },
  },
};
</script>
