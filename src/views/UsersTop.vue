<template>
  <div class="container py-5">
    <navTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <a href="#">
          <img
            :src="
              user.image
                ? user.image
                : 'http://via.placeholder.com/300x300?text=No+Image'
            "
            width="140px"
            height="140px"
          />
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.followerCount }}</span
        >
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            @click="cancleFollow(user.id)"
            v-if="user.isFollowed"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="addFollow(user.id)"
            v-else
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import navTabs from "../components/NavTabs";
import usersAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";
export default {
  name: "userTop",
  components: {
    navTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchTopUsers();
  },
  methods: {
    async fetchTopUsers() {
      try {
        const { data } = await usersAPI.getTopUsers();

        // console.log("data", data);
        // this.users = users;
        this.users = data.users.map((user) => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed,
        }));
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });
      }
    },
    async cancleFollow(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });

        this.users = this.users.map((_user) => {
          if (_user.id === userId) {
            return {
              ..._user,
              followerCount: _user.followerCount - 1,
              isFollowed: false,
            };
          } else {
            return {
              ..._user,
            };
          }
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });
      }
    },
    async addFollow(Id) {
      try {
        const { data } = await usersAPI.addFollowing({ userId: Id });
        // console.log("data33", data);
        this.users = this.users.map((_user) => {
          if (_user.id === userId) {
            return {
              ..._user,
              followerCount: _user.followerCount + 1,
              isFollowed: true,
            };
          } else {
            return {
              ..._user,
            };
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
      }
    },
  },
};
</script>