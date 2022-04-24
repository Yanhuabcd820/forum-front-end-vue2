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
          >追蹤人數：{{ user.Followers.length }}</span
        >
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            @click="cancleFollow(user)"
            v-if="user.isFollowed"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="addFollow(user)"
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
const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$JoEFYiTgU1fEdO8D4txOqOgjTnI.V5JHpQUUTzzuA5YtIUgPbCuCq",
      isAdmin: true,
      image: null,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      Followers: ["betty", "mike"],
      FollowerCount: 0,
      isFollowed: true,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$J8oi5C/yCUquP0ByJiBKOOmAxlOS5M5tpN9RyDYLLsc5SiwIttGsu",
      isAdmin: false,
      image: null,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$CZLIR6hMy/9u8rcNJ17Iie59XuSmzUn9f7cLiezX6oPDWkbOdtXw2",
      isAdmin: false,
      image: null,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};
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
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      const { users } = dummyData;
      this.users = users;
    },
    cancleFollow(user) {
      this.users = this.users.map((_user) => {
        if (_user.id === user.id) {
          return {
            ..._user,
            isFollowed: false,
          };
        } else {
          return {
            ..._user,
          };
        }
      });
    },
    addFollow(user) {
      this.users = this.users.map((_user) => {
        if (_user.id === user.id) {
          return {
            ..._user,
            isFollowed: true,
          };
        } else {
          return {
            ..._user,
          };
        }
      });
    },
  },
};
</script>