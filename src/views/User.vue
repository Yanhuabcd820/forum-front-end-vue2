<template>
  <main role="main">
    <div class="album py-5 bg-light">
      <div class="container">
        <UserProfileCard
          :initialProfile="profile"
          :initialIsFollowed="isFollowed"
        />
        <div class="row">
          <div class="col-md-4">
            <UserFollowingsCard :initialFollowings="profile.Followings" />
            <br />
            <UserFollowersCard :initialFollowers="profile.Followers" />
          </div>
          <div class="col-md-8">
            <UserCommentsCard :Comments="profile.Comments" />

            <br />
            <UserFavoritedRestaurantsCard
              :initialFavoritedRestaurants="profile.FavoritedRestaurants"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
/* eslint-disable */
import UserProfileCard from "../components/UserProfileCard";
import UserFollowingsCard from "../components/UserFollowingsCard";
import UserFollowersCard from "../components/UserFollowersCard";
import UserCommentsCard from "../components/UserCommentsCard";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard";
import userAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";

export default {
  name: "User",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },

  data() {
    return {
      profile: {
        id: "",
        name: "",
        email: "",
        image: "",
        Comments: [],
        FavoritedRestaurants: [],
        Followings: [],
        Followers: [],
      },
      isFollowed: false,
    };
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await userAPI.get({ userId });
        console.log("data", data);
        const { profile, isFollowed } = data;
        this.profile = profile;
        this.isFollowed = isFollowed;

        const {
          id,
          name,
          email,
          image,
          Comments,
          FavoritedRestaurants,
          Followings,
          Followers,
        } = profile;
        this.id = id;
        this.name = name;
        this.email = email;
        this.image = image;
        this.Comments = Comments;
        this.FavoritedRestaurants = FavoritedRestaurants;
        this.Followings = Followings;
        this.Followers = Followers;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得user，請稍後再試",
        });
      }
    },
  },
};
</script>
