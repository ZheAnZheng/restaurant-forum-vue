<template>
  <div class="container py-5">
    <nav-tabs></nav-tabs>

    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <newest-restaurants :restaurants="restaurants"></newest-restaurants>
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <newest-comments :comments="comments"></newest-comments>
      </div>
    </div>
  </div>
</template>
<script>
import NavTabs from "../components/NavTabs.vue";
import NewestRestaurants from "../components/NewestRestaurants.vue";
import NewestComments from "../components/NewestComments.vue"
const { restaurants, comments } = {
  restaurants: [
    {
      id: 1,
      name: "Garland Abshire",
      tel: "(298) 972-5710",
      address: "73534 Lenore Prairie",
      opening_hours: "08:00",
      description: "Occaecati accusamus repudiandae sed sed.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.45413696966837",
      viewCounts: 0,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
    },
    {
      id: 2,
      name: "Brice Heaney",
      tel: "289.771.9008 x7230",
      address: "34562 Volkman Lights",
      opening_hours: "08:00",
      description:
        "Aut voluptas enim exercitationem asperiores soluta a.\nIusto et asperiores fugiat et ipsum cumque dolorum voluptas explicabo.\nA neque et.\nRepellendus animi facilis consequuntur fugit.\nUt ipsum sunt non dolor aliquid aperiam ipsum nam perspiciatis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.23294688678943",
      viewCounts: 0,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
    },
    {
      id: 3,
      name: "Berry Collins MD",
      tel: "(840) 158-5495",
      address: "9447 Purdy Flat",
      opening_hours: "08:00",
      description:
        "Sed quae enim reiciendis nam neque et. Facilis molestiae ipsa ut. Incidunt perspiciatis amet et. Est dicta voluptatem perspiciatis et assumenda nesciunt fugit praesentium similique.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.113080540161224",
      viewCounts: 0,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
    },
    {
      id: 4,
      name: "Wallace Gutmann",
      tel: "750-812-3325 x001",
      address: "0766 Volkman Trace",
      opening_hours: "08:00",
      description: "asperiores magni sit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=45.92537255122227",
      viewCounts: 0,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
    },
    {
      id: 5,
      name: "Bert Jacobi",
      tel: "691.504.9560 x1310",
      address: "1458 Kub Ridges",
      opening_hours: "08:00",
      description: "Sed quia sed et non.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=55.4809513790542",
      viewCounts: 0,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
    },
    {
      id: 6,
      name: "Casey Sawayn",
      tel: "1-923-272-8597",
      address: "53053 Terry Green",
      opening_hours: "08:00",
      description:
        "Autem saepe optio est inventore ducimus unde distinctio quis. Porro provident commodi repudiandae sit. Ut est inventore.\n \rVoluptatibus voluptatem pariatur libero totam quos. Vitae aut est qui distinctio natus commodi amet error a. Quidem voluptatem deserunt qui magni. Maiores magnam facilis quam. Odio architecto quibusdam suscipit et consequatur deserunt illum. Deleniti eum aut pariatur nobis.\n \rPariatur quos accusamus quis. Et vel nesciunt omnis nobis ut asperiores alias sunt. Aut repellat suscipit labore nihil omnis maiores tenetur et. Quia voluptas vel voluptate ut illum quo fugiat dolorem nobis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=8.73216419569458",
      viewCounts: 0,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
    },
    {
      id: 7,
      name: "Rafaela Bosco",
      tel: "422-068-9168 x5209",
      address: "14077 Abbie Path",
      opening_hours: "08:00",
      description:
        "Quod est nostrum quia quisquam et sed aliquam qui maxime. Laborum rerum sed qui odit. Harum repellendus libero rerum nobis enim amet nihil nobis. Deserunt quia dolores itaque voluptatibus repellat. Voluptatem ex quisquam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.60331259524741",
      viewCounts: 0,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
    },
    {
      id: 8,
      name: "Amalia Daugherty",
      tel: "566.984.3406",
      address: "1247 Caesar Gardens",
      opening_hours: "08:00",
      description:
        "Omnis ut ratione fuga dolorum consequatur quis voluptatem dolorum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.971555887877967",
      viewCounts: 0,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
    },
    {
      id: 9,
      name: "Ms. Virginia McKenzie",
      tel: "(783) 549-0536",
      address: "4176 Pfannerstill Gardens",
      opening_hours: "08:00",
      description:
        "Sed est voluptatem explicabo similique et quo cupiditate. Saepe pariatur modi occaecati voluptatem ullam soluta. Nihil qui vitae omnis dolorum eaque. Consequatur sit quaerat velit labore praesentium consectetur dolorem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.11143773743464",
      viewCounts: 0,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
    },
    {
      id: 10,
      name: "Lou Prohaska",
      tel: "781-577-0238 x8674",
      address: "990 Eliza Key",
      opening_hours: "08:00",
      description:
        "Hic et possimus possimus rerum ea eligendi rerum nesciunt ducimus.\nAnimi aspernatur voluptas incidunt.\nCum recusandae sit in sunt quod dolorem in praesentium voluptatem.\nAccusantium et aliquam.\nRatione laboriosam et eligendi eos fuga ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.57101448014596",
      viewCounts: 0,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
    },
  ],
  comments: [
    {
      id: 4,
      text: "Magnam praesentium quia ab et.",
      UserId: 1,
      RestaurantId: 4,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$gFXZT20xGTogjEUpcEZfmuIt2pWprzCOhQJLUNI56h1siKXHuqJsK",
        isAdmin: true,
        image: null,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
      Restaurant: {
        id: 4,
        name: "Wallace Gutmann",
        tel: "750-812-3325 x001",
        address: "0766 Volkman Trace",
        opening_hours: "08:00",
        description: "asperiores magni sit",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=45.92537255122227",
        viewCounts: 0,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 29,
      text: "Esse ut ea rerum.",
      UserId: 1,
      RestaurantId: 29,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$gFXZT20xGTogjEUpcEZfmuIt2pWprzCOhQJLUNI56h1siKXHuqJsK",
        isAdmin: true,
        image: null,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
      Restaurant: {
        id: 29,
        name: "Luther Heidenreich",
        tel: "793-404-2629 x59148",
        address: "00866 Toy Extensions",
        opening_hours: "08:00",
        description:
          "Ipsam aut est provident molestias et explicabo tenetur recusandae. A quasi fuga accusamus vel mollitia labore voluptates. Non blanditiis tempore ut vel est est. Cumque impedit hic.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=16.848090268652506",
        viewCounts: 0,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
        CategoryId: 1,
      },
    },
    {
      id: 60,
      text: "Et sed consequatur.",
      UserId: 1,
      RestaurantId: 10,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$gFXZT20xGTogjEUpcEZfmuIt2pWprzCOhQJLUNI56h1siKXHuqJsK",
        isAdmin: true,
        image: null,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
      Restaurant: {
        id: 10,
        name: "Lou Prohaska",
        tel: "781-577-0238 x8674",
        address: "990 Eliza Key",
        opening_hours: "08:00",
        description:
          "Hic et possimus possimus rerum ea eligendi rerum nesciunt ducimus.\nAnimi aspernatur voluptas incidunt.\nCum recusandae sit in sunt quod dolorem in praesentium voluptatem.\nAccusantium et aliquam.\nRatione laboriosam et eligendi eos fuga ut.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=56.57101448014596",
        viewCounts: 0,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 77,
      text: "Ut est id tempora occaecati at mollitia delectus.",
      UserId: 1,
      RestaurantId: 27,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$gFXZT20xGTogjEUpcEZfmuIt2pWprzCOhQJLUNI56h1siKXHuqJsK",
        isAdmin: true,
        image: null,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
      Restaurant: {
        id: 27,
        name: "Carissa Schuster",
        tel: "870-057-4721 x0450",
        address: "66545 Trey Coves",
        opening_hours: "08:00",
        description: "iste",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=2.2456217812113044",
        viewCounts: 0,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 128,
      text: "Est praesentium facere facere non et eum ut.",
      UserId: 1,
      RestaurantId: 28,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$gFXZT20xGTogjEUpcEZfmuIt2pWprzCOhQJLUNI56h1siKXHuqJsK",
        isAdmin: true,
        image: null,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
      Restaurant: {
        id: 28,
        name: "Erwin Turner",
        tel: "1-972-874-8625",
        address: "476 Rubie Pines",
        opening_hours: "08:00",
        description:
          "Odit quis nostrum iure non qui iure dolore perspiciatis. Tenetur ratione exercitationem cupiditate amet iusto enim.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=89.702769650429",
        viewCounts: 0,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 1,
      text: "Facere ducimus reiciendis.",
      UserId: 2,
      RestaurantId: 1,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$DX/zNtSIXpvcwBI33DP9S.R.xIfUB9Vb2XJQeNvX1ZdvKd/yG9Xx.",
        isAdmin: false,
        image: null,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
      Restaurant: {
        id: 1,
        name: "Garland Abshire",
        tel: "(298) 972-5710",
        address: "73534 Lenore Prairie",
        opening_hours: "08:00",
        description: "Occaecati accusamus repudiandae sed sed.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=79.45413696966837",
        viewCounts: 0,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
        CategoryId: 1,
      },
    },
    {
      id: 27,
      text: "Commodi est quibusdam eaque et assumenda tenetur quo qui.",
      UserId: 2,
      RestaurantId: 27,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$DX/zNtSIXpvcwBI33DP9S.R.xIfUB9Vb2XJQeNvX1ZdvKd/yG9Xx.",
        isAdmin: false,
        image: null,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
      Restaurant: {
        id: 27,
        name: "Carissa Schuster",
        tel: "870-057-4721 x0450",
        address: "66545 Trey Coves",
        opening_hours: "08:00",
        description: "iste",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=2.2456217812113044",
        viewCounts: 0,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 54,
      text: "Delectus quia optio quaerat.",
      UserId: 2,
      RestaurantId: 4,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$DX/zNtSIXpvcwBI33DP9S.R.xIfUB9Vb2XJQeNvX1ZdvKd/yG9Xx.",
        isAdmin: false,
        image: null,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
      Restaurant: {
        id: 4,
        name: "Wallace Gutmann",
        tel: "750-812-3325 x001",
        address: "0766 Volkman Trace",
        opening_hours: "08:00",
        description: "asperiores magni sit",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=45.92537255122227",
        viewCounts: 0,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 76,
      text: "Eum illum adipisci consectetur dolorum nam inventore sint.",
      UserId: 2,
      RestaurantId: 26,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$DX/zNtSIXpvcwBI33DP9S.R.xIfUB9Vb2XJQeNvX1ZdvKd/yG9Xx.",
        isAdmin: false,
        image: null,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
      Restaurant: {
        id: 26,
        name: "Mrs. Rollin Gutmann",
        tel: "(389) 646-3203",
        address: "91858 Willa Curve",
        opening_hours: "08:00",
        description: "voluptas",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=61.89061902530566",
        viewCounts: 0,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 107,
      text: "Animi et aspernatur autem.",
      UserId: 2,
      RestaurantId: 7,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$DX/zNtSIXpvcwBI33DP9S.R.xIfUB9Vb2XJQeNvX1ZdvKd/yG9Xx.",
        isAdmin: false,
        image: null,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
      Restaurant: {
        id: 7,
        name: "Rafaela Bosco",
        tel: "422-068-9168 x5209",
        address: "14077 Abbie Path",
        opening_hours: "08:00",
        description:
          "Quod est nostrum quia quisquam et sed aliquam qui maxime. Laborum rerum sed qui odit. Harum repellendus libero rerum nobis enim amet nihil nobis. Deserunt quia dolores itaque voluptatibus repellat. Voluptatem ex quisquam.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=39.60331259524741",
        viewCounts: 0,
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
        CategoryId: 1,
      },
    },
  ],
};
export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  methods: {
    fetchFeeds() {
      this.restaurants = restaurants;
      this.comments = comments;
    },
  },
  created() {
    this.fetchFeeds();
  },
};
</script>