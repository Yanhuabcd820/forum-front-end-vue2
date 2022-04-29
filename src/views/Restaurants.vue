<template>
  <div class="container py-5">
    <navTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      v-if="totalPage.length"
      :categoryId="categoryId"
      :currentPage="currentPage"
      :totalPage="totalPage"
      :prev="previousPage"
      :next="nextPage"
    />
  </div>
</template>
<script>
/* eslint-disable */
import navTabs from "../components/NavTabs";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantsNavPills from "../components/RestaurantsNavPills";
import RestaurantsPagination from "../components/RestaurantsPagination";
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Antonietta Johns III",
      tel: "1-957-015-0468 x5921",
      address: "154 Orrin Knolls",
      opening_hours: "08:00",
      description: "Nesciunt qui laboriosam. Et magnam nisi. Id quas e",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.1209253154608",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式11料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 15,
      name: "Jamaal Torp",
      tel: "846-257-6097",
      address: "3219 Walter Way",
      opening_hours: "08:00",
      description: "quos",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=74.81979981718186",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 24,
      name: "Haven Hahn",
      tel: "603-509-9354",
      address: "246 Dorcas Lane",
      opening_hours: "08:00",
      description: "Sapiente minima sint quas dolorum necessitatibus a",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.572582617269456",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 29,
      name: "Dr. Ross Kulas",
      tel: "1-823-364-6521",
      address: "311 Spencer Union",
      opening_hours: "08:00",
      description: "Doloribus facilis modi. Excepturi enim ut voluptat",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.223359710660958",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 31,
      name: "Miller Olson",
      tel: "1-940-024-7630 x30391",
      address: "34268 Fadel Well",
      opening_hours: "08:00",
      description: "Voluptas sint quis. Magni praesentium porro ut sun",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.25988642181467",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 34,
      name: "Rylee Dietrich",
      tel: "1-906-938-8661 x8828",
      address: "37887 Liam Loop",
      opening_hours: "08:00",
      description: "Laboriosam ut veniam nihil esse. Sunt iure ipsum q",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.34934536101417",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 38,
      name: "Eleanore Mante",
      tel: "(781) 272-4150 x4665",
      address: "6378 Willard Course",
      opening_hours: "08:00",
      description: "numquam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=81.41083807935776",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 39,
      name: "Myah Beatty",
      tel: "973.568.8724 x4549",
      address: "9383 Justice Brook",
      opening_hours: "08:00",
      description: "Iure harum dolorem sunt et deleniti itaque vel omn",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.32947786921031",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 44,
      name: "Cordie Beatty",
      tel: "692.887.7388 x909",
      address: "147 Emie Station",
      opening_hours: "08:00",
      description: "Exercitationem molestias voluptas nobis neque et i",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.91583890330164",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 47,
      name: "Salvatore Block",
      tel: "(714) 879-2288 x82713",
      address: "531 Sabina Mountain",
      opening_hours: "08:00",
      description: "Dolore atque quo doloremque quia voluptatem eaque ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=50.582176214905",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};
export default {
  name: "restaurants",
  components: {
    navTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;

      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
};
</script>
