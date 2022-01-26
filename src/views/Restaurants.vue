<template>
  <div class="container py-5">
    <nav-tabs></nav-tabs>
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <restaurants-nav-pills :categories="categories"></restaurants-nav-pills>

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <restaurant-card
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      ></restaurant-card>
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <restaurant-pagination
    v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"></restaurant-pagination>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantsNavPills from "../components/RestaurantNavPills.vue"
import RestaurantPagination from "../components/RestaurantsPagination.vue"
const dummyData = {
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
      viewCounts: 1,
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-27T08:30:32.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-12-24T04:10:21.000Z",
        updatedAt: "2021-12-24T04:10:21.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Brice Heaney",
      tel: "289.771.9008 x7230",
      address: "34562 Volkman Lights",
      opening_hours: "08:00",
      description: "Aut voluptas enim exercitationem asperiores soluta",
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Berry Collins MD",
      tel: "(840) 158-5495",
      address: "9447 Purdy Flat",
      opening_hours: "08:00",
      description: "Sed quae enim reiciendis nam neque et. Facilis mol",
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
      isFavorited: false,
      isLiked: false,
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
      isFavorited: false,
      isLiked: false,
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Casey Sawayn",
      tel: "1-923-272-8597",
      address: "53053 Terry Green",
      opening_hours: "08:00",
      description: "Autem saepe optio est inventore ducimus unde disti",
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Rafaela Bosco",
      tel: "422-068-9168 x5209",
      address: "14077 Abbie Path",
      opening_hours: "08:00",
      description: "Quod est nostrum quia quisquam et sed aliquam qui ",
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Amalia Daugherty",
      tel: "566.984.3406",
      address: "1247 Caesar Gardens",
      opening_hours: "08:00",
      description: "Omnis ut ratione fuga dolorum consequatur quis vol",
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Ms. Virginia McKenzie",
      tel: "(783) 549-0536",
      address: "4176 Pfannerstill Gardens",
      opening_hours: "08:00",
      description: "Sed est voluptatem explicabo similique et quo cupi",
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Lou Prohaska",
      tel: "781-577-0238 x8674",
      address: "990 Eliza Key",
      opening_hours: "08:00",
      description: "Hic et possimus possimus rerum ea eligendi rerum n",
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
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2021-12-24T04:10:21.000Z",
      updatedAt: "2021-12-24T04:10:21.000Z",
    },
  ],
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
  categoryId: "",
};
export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantPagination
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
  created(){
    this.fetchRestaurants()
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