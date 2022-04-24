<template>
  <div class="container py-5">
    <navTabs />

    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :rest="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :NewestComments="commentss" />
      </div>
    </div>
  </div>
</template>
<script>
import navTabs from "../components/NavTabs";
import NewestRestaurants from "../components/NewestRestaurants";
import NewestComments from "../components/NewestComments";
/* eslint-disable */
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Antonietta Johns III",
      tel: "1-957-015-0468 x5921",
      address: "154 Orrin Knolls",
      opening_hours: "08:00",
      description:
        "Nesciunt qui laboriosam. Et magnam nisi. Id quas eos quaerat.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.1209253154608",
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
    },
    {
      id: 2,
      name: "Fred Kemmer",
      tel: "1-124-457-8004 x3881",
      address: "27866 Frankie Forge",
      opening_hours: "08:00",
      description: "Sed similique ducimus qui et ipsam iste.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.366283953177568",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
    },
    {
      id: 3,
      name: "Georgiana Littel",
      tel: "1-061-483-4246",
      address: "8370 Savion Alley",
      opening_hours: "08:00",
      description:
        "Laudantium voluptates libero eius adipisci ad aut. Tempora incidunt nisi. Ut quisquam non perspiciatis rerum accusantium similique. Blanditiis nisi cum corporis eligendi. Vel dolorum eos debitis voluptatem ut saepe voluptatem ut et. Sapiente dignissimos a autem enim autem cum molestias.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.901165168235956",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
    },
    {
      id: 4,
      name: "Oral Jacobi DDS",
      tel: "1-312-270-0910",
      address: "256 Avery Causeway",
      opening_hours: "08:00",
      description:
        "Odio iure ducimus ut nostrum. Ut doloribus sequi libero placeat. Laudantium adipisci quasi ut enim quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.306433215120144",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
    },
    {
      id: 5,
      name: "Lori Tillman",
      tel: "103.529.0638",
      address: "57382 Marta Port",
      opening_hours: "08:00",
      description:
        "Ab qui velit ut aut nobis est sunt non amet. Iusto accusantium repellendus tempora voluptates. Et vero tenetur eius quo velit. Cumque et enim. Sit ut et. Aut voluptatem sed et accusamus ipsam amet esse.\n \rRem perferendis occaecati ea iusto placeat illo iusto vel. Ut blanditiis iste rerum non debitis labore possimus eum. Labore suscipit consectetur vel tempora veniam consequatur ratione quae commodi. Est corrupti repellat qui ex.\n \rDoloremque molestiae dolor. Occaecati dolores consequatur culpa sit. Qui voluptatem reprehenderit ad. Qui veritatis non rerum temporibus et tenetur quibusdam. Autem quia dolor porro voluptas. Iure ut sequi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.2919000717366",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
    },
    {
      id: 6,
      name: "Dr. Piper Ledner",
      tel: "218.046.4122",
      address: "338 Lindgren Village",
      opening_hours: "08:00",
      description: "Cupiditate exercitationem distinctio nisi mollitia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.65674213335842",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
    },
    {
      id: 7,
      name: "Sophia Stark",
      tel: "1-322-636-3036 x91372",
      address: "9628 Trantow Brooks",
      opening_hours: "08:00",
      description: "quia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=65.02891317017882",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
    },
    {
      id: 8,
      name: "Maybell Heaney",
      tel: "(716) 347-2118 x07441",
      address: "4816 Schuster Loop",
      opening_hours: "08:00",
      description:
        "Eius culpa sit occaecati culpa quia quaerat. Officiis ratione in. Asperiores velit ex tempore quia eligendi amet debitis. Ipsam ea ex iure recusandae hic repellat fuga necessitatibus. Eveniet quibusdam quibusdam saepe ab quam laudantium. Assumenda repellat vero a est reprehenderit.\n \rNihil illum consequuntur minima ea dolores. Temporibus qui omnis assumenda magni et esse possimus et illum. Deserunt earum quo.\n \rPlaceat eum aut laboriosam ea doloribus eum sunt. Ipsum nihil non et autem corporis in. Voluptas qui eum doloremque id alias rerum fugiat.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.9793878971573493",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
    },
    {
      id: 9,
      name: "Mr. Clay Donnelly",
      tel: "1-968-736-8963 x738",
      address: "16812 Kody Forges",
      opening_hours: "08:00",
      description:
        "Nihil corporis molestiae quo inventore corrupti ducimus. Recusandae libero earum odit alias qui nihil numquam odit. Aut accusamus velit inventore eaque maiores necessitatibus. Itaque dolores aut voluptatem eos rerum eum voluptatem. Enim voluptatibus quaerat ducimus. Autem quidem facilis velit non eum est aut dolor.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=2.4014269161039214",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
    },
    {
      id: 10,
      name: "Eusebio Wiegand",
      tel: "1-063-273-1725",
      address: "83314 Quinton Rest",
      opening_hours: "08:00",
      description:
        "Aut est unde. Ex est optio eum. Facilis aliquam magni ipsa et veritatis neque assumenda et. Quasi veniam et nulla culpa unde qui dolorem illum hic. Quia voluptatum repellat quas labore. Aperiam perferendis dolores nihil eos voluptatem reiciendis et dolores distinctio.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=84.94842704603869",
      viewCounts: 0,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
    },
  ],
  comments: [
    {
      id: 11,
      text: "Ea beatae qui totam ut provident cum tempore tempora.",
      UserId: 1,
      RestaurantId: 11,
      createdAt: "2022-04-21T15:25:58.000Z",
      updatedAt: "2022-04-21T15:25:58.000Z",
      User: {
        id: 1,
        name: "root1",
        email: "root@example.com",
        password:
          "$2a$10$JoEFYiTgU1fEdO8D4txOqOgjTnI.V5JHpQUUTzzuA5YtIUgPbCuCq",
        isAdmin: true,
        image: null,
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
      },
      Restaurant: {
        id: 11,
        name: "Jensen12 Renner",
        tel: "1-605-269-6718",
        address: "07081 Orn Stravenue",
        opening_hours: "08:00",
        description: "repellat",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=92.08750250069258",
        viewCounts: 0,
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 32,
      text: "Praesentium nemo illum dolore iste expedita.",
      UserId: 1,
      RestaurantId: 32,
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
      Restaurant: {
        id: 32,
        name: "Webster Heller",
        tel: "710.159.9371",
        address: "26229 Lueilwitz Passage",
        opening_hours: "08:00",
        description:
          "Eos laudantium deleniti. Commodi cupiditate illum perspiciatis quia beatae.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=61.535480731452076",
        viewCounts: 0,
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 49,
      text: "Excepturi consequatur repellat est fugit fugit.",
      UserId: 1,
      RestaurantId: 49,
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
      Restaurant: {
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
      },
    },
    {
      id: 62,
      text: "Quia earum ut et occaecati.",
      UserId: 1,
      RestaurantId: 12,
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
      Restaurant: {
        id: 12,
        name: "Ms. Brittany Sawayn",
        tel: "919-715-0752 x34708",
        address: "901 Damaris Flats",
        opening_hours: "08:00",
        description:
          "Non necessitatibus at quia mollitia quis. Molestiae eum omnis iusto labore. Incidunt qui est velit sunt ducimus et velit adipisci. Sed inventore debitis perspiciatis consectetur laboriosam ullam officiis voluptas autem. Voluptatum veniam aut.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=73.70911501518795",
        viewCounts: 0,
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 75,
      text: "Quia temporibus repellat quia aperiam.",
      UserId: 1,
      RestaurantId: 25,
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
      Restaurant: {
        id: 25,
        name: "Clint Considine",
        tel: "1-782-551-4827 x84167",
        address: "4449 Schoen Heights",
        opening_hours: "08:00",
        description:
          "Quis quos ad porro non esse. Voluptas quis dolorum maiores necessitatibus molestiae non repellendus id. Debitis aliquid in quibusdam itaque ex eum enim.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=37.62121669060961",
        viewCounts: 0,
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 98,
      text: "Sed non magni vel ut tempora inventore deserunt voluptatem sint.",
      UserId: 1,
      RestaurantId: 48,
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
      Restaurant: {
        id: 48,
        name: "Keshaun Hermann",
        tel: "1-354-857-0796 x718",
        address: "578 Dwight Well",
        opening_hours: "08:00",
        description:
          "Itaque autem repellendus quidem et ipsam sequi id cupiditate voluptatem.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=20.90537055368873",
        viewCounts: 0,
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 127,
      text: "Enim dolor consequatur.",
      UserId: 1,
      RestaurantId: 27,
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
      Restaurant: {
        id: 27,
        name: "Brittany Langosh",
        tel: "254.515.2253",
        address: "06939 Magnolia Extensions",
        opening_hours: "08:00",
        description: "et",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=61.45278833887924",
        viewCounts: 0,
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 148,
      text: "Doloribus perferendis sint.",
      UserId: 1,
      RestaurantId: 48,
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
      Restaurant: {
        id: 48,
        name: "Keshaun Hermann",
        tel: "1-354-857-0796 x718",
        address: "578 Dwight Well",
        opening_hours: "08:00",
        description:
          "Itaque autem repellendus quidem et ipsam sequi id cupiditate voluptatem.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=20.90537055368873",
        viewCounts: 0,
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 16,
      text: "Optio sit consequatur rem saepe placeat atque.",
      UserId: 2,
      RestaurantId: 16,
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
      Restaurant: {
        id: 16,
        name: "Loyce Heller V",
        tel: "1-746-475-0323 x6013",
        address: "47614 Cristian Crossroad",
        opening_hours: "08:00",
        description:
          "Iusto vel dignissimos et autem. Dolor rerum debitis facere blanditiis vitae quo ea. Quo est deleniti molestiae rerum culpa eveniet perspiciatis dolores. Doloribus consectetur dolore distinctio consequatur esse voluptatem. Asperiores perferendis enim explicabo quisquam ut deleniti. Voluptatem fugiat dolores consectetur.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=92.71464930423814",
        viewCounts: 0,
        createdAt: "2022-04-21T15:25:58.000Z",
        updatedAt: "2022-04-21T15:25:58.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 43,
      text: "Libero quis non odit amet id unde cumque aperiam odio.",
      UserId: 2,
      RestaurantId: 43,
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
      Restaurant: {
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
      },
    },
  ],
};
export default {
  name: "restaurant-feeds",
  components: {
    navTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      commentss: [],
    };
  },
  created() {
    this.featchFeeds();
  },
  methods: {
    featchFeeds() {
      this.restaurants = dummyData.restaurants;
      this.commentss = dummyData.comments.filter(
        (item) => item.Restaurant.name && item.text
      );
    },
  },
};
</script>
