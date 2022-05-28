<template>
  <div class="container py-5">
    <navTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      class="card mb-3"
      style="max-width: 540px; margin: auto"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoritedUsers.length }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button
              type="button"
              class="btn btn-danger mr-2"
              @click.prevent.stop="cancleFavorited(restaurant)"
              v-if="restaurant.isFavorited"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent.stop="addFavorited(restaurant)"
              v-else
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const dummyTop = {
  restaurants: [
    {
      id: 50,
      name: "Clemens Pagac",
      tel: "1-167-714-3969",
      address: "461 Joanne Canyon",
      opening_hours: "08:00",
      description: "Non aut ipsam quae consequatur provident modi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.829783567082046",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Mr. Kaia Zboncak",
      tel: "522.838.7391",
      address: "9016 Konopelski Crossroad",
      opening_hours: "08:00",
      description: "Facilis sint quo expedita sint harum sint velit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=32.560564684235736",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 3,
      FavoritedUsers: ["Mimi", "Febbi"],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Keshaun Hermann",
      tel: "1-354-857-0796 x718",
      address: "578 Dwight Well",
      opening_hours: "08:00",
      description: "Itaque autem repellendus quidem et ipsam sequi id ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.90537055368873",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
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
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Jaclyn Buckridge",
      tel: "1-184-378-3662",
      address: "0840 Rodrick Overpass",
      opening_hours: "08:00",
      description: "repellendus ut nesciunt",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=69.33351943324566",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Malachi Cassin",
      tel: "217-868-2646 x1744",
      address: "7338 McLaughlin Station",
      opening_hours: "08:00",
      description: "minus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.311312665796499",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
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
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Sharon Lynch",
      tel: "222.472.5259",
      address: "4496 Moshe Island",
      opening_hours: "08:00",
      description: "consequatur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=33.84682399589527",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Sibyl Paucek",
      tel: "604.554.0706 x039",
      address: "7451 Julius Course",
      opening_hours: "08:00",
      description: "eveniet",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.82052762763423",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Mrs. Romaine Schimmel",
      tel: "(829) 507-0205 x10864",
      address: "30196 Predovic Estate",
      opening_hours: "08:00",
      description: "Fugit minus aut officiis et earum sit atque suscip",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.07859481661878",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};
import navTabs from "../components/NavTabs";
export default {
  name: "RestaurantsTop",
  components: {
    navTabs,
  },
  data() {
    return {
      restaurants: {},
    };
  },
  created() {
    this.fetchTop();
  },
  methods: {
    fetchTop() {
      const { restaurants } = dummyTop;
      this.restaurants = restaurants;
    },

    cancleFavorited(restaurant) {
      this.restaurants = this.restaurants.map((_restaurant) => {
        if (_restaurant.id === restaurant.id) {
          return {
            ..._restaurant,
            isFavorited: false,
          };
        } else {
          return _restaurant;
        }
      });
    },
    addFavorited(restaurant) {
      this.restaurants = this.restaurants.map((_restaurant) => {
        if (_restaurant.id === restaurant.id) {
          return {
            ..._restaurant,
            isFavorited: true,
          };
        } else {
          return _restaurant;
        }
      });
    },
  },
};
</script>
