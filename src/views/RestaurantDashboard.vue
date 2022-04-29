<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>
<script>
/*eslint-disable*/
const dummyDashboard = {
  restaurant: {
    id: 1,
    name: "Antonietta Johns III",
    tel: "1-957-015-0468 x5921",
    address: "154 Orrin Knolls",
    opening_hours: "08:00",
    description:
      "Nesciunt qui laboriosam. Et magnam nisi. Id quas eos quaerat.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=79.1209253154608",
    viewCounts: 10,
    createdAt: "2022-04-21T15:25:58.000Z",
    updatedAt: "2022-04-25T07:43:58.000Z",
    CategoryId: 1,
    Category: {
      id: 1,
      name: "中式料理",
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
    },
    Comments: [
      {
        id: 1,
        text: "Molestiae enim aut.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$JoEFYiTgU1fEdO8D4txOqOgjTnI.V5JHpQUUTzzuA5YtIUgPbCuCq",
          isAdmin: true,
          image: null,
          createdAt: "2022-04-21T15:25:58.000Z",
          updatedAt: "2022-04-21T15:25:58.000Z",
        },
      },
      {
        id: 51,
        text: "Dolorem sequi exercitationem alias expedita qui quos inventore dolore et.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$JoEFYiTgU1fEdO8D4txOqOgjTnI.V5JHpQUUTzzuA5YtIUgPbCuCq",
          isAdmin: true,
          image: null,
          createdAt: "2022-04-21T15:25:58.000Z",
          updatedAt: "2022-04-21T15:25:58.000Z",
        },
      },
      {
        id: 101,
        text: "Blanditiis dignissimos odio quia dolorum non nam eos veritatis.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$J8oi5C/yCUquP0ByJiBKOOmAxlOS5M5tpN9RyDYLLsc5SiwIttGsu",
          isAdmin: false,
          image: null,
          createdAt: "2022-04-21T15:25:58.000Z",
          updatedAt: "2022-04-21T15:25:58.000Z",
        },
      },
    ],
  },
};

export default {
  name: "Dashboard",
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0,
      },
    };
  },
  created() {
    this.fetchDashboard();
  },
  methods: {
    fetchDashboard() {
      const { id, name, Category, Comments, viewCounts } =
        dummyDashboard.restaurant;
      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name : "未分類",
        commentsLength: Comments.length,
        viewCounts,
      };
    },
  },
};
</script>
