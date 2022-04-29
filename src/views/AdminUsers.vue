<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? "admin" : "user" }}</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              v-if="user.isAdmin"
              @click.stop.prevent="toggleIsAdmin(user.id)"
            >
              set as admin
            </button>
            <button
              type="button"
              class="btn btn-link"
              v-else
              @click.stop.prevent="toggleIsAdmin(user.id)"
            >
              set as user
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import AdminNav from "@/components/AdminNav";
// import { v4 as uuidv4 } from "uuid";
const dummyUsers = {
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
    },
  ],
};
export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    fetchUsers() {
      const { users } = dummyUsers;
      this.users = users;
    },
    toggleIsAdmin(userId) {
      this.users = this.users.filter((user) => {
        if (user.id === userId) {
          console.log(user.id, user.isAdmin);
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }

        return user;
      });
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>
