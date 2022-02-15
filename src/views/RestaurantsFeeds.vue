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
import NewestComments from "../components/NewestComments.vue";
import restaurantAPI from "../apis/restaurants.js";
import { Toast } from "../utils/helpers.js";

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  methods: {
    async fetchFeeds() {
      try {
        await this.tryFetchFeeds();
      } catch (e) {
       Toast.fireError("讀取Feeds頁面錯誤，請稍候")
        console.log(e);
      }
    },
    async tryFetchFeeds() {
      const response = await restaurantAPI.getFeeds();
      if (response.statusText !== "OK") {
        throw new Error("Not fetch RestaurantFeeds");
      }
      const { restaurants, comments } = response.data;
      this.restaurants = restaurants;
      this.comments = comments;
    },
  },
  created() {
    this.fetchFeeds();
  },
};
</script>
