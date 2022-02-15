<template>
  <div class="container py-5">
    <NavTabs />
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
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <!-- <router-link :to="{name:'restaurant',params:{id:restaurant.id},path:''}"></router-link> -->
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.prevent.stop="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent.stop="addFavorite(restaurant.id)"
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
import NavTabs from "../components/NavTabs.vue";
import { Toast } from "../utils/helpers.js";
import restaurantsAPI from "../apis/restaurants.js";
import usersAPI from "../apis/users.js";
export default {
  components: {
    NavTabs,
  },
  created() {
    this.fetchRestaurants();
  },
  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    async fetchRestaurants() {
      try {
        await this.tryFetchRestaurants();
      } catch (e) {
        console.log(e);
        Toast.fire({
          icon: "error",
          title: "無法讀取人氣餐廳，請稍等再試",
        });
      }
    },
    async tryFetchRestaurants() {
      const response = await restaurantsAPI.getTopRestaurants();
      console.log(response);
      if (response.statusText !== "OK") {
        throw new Error("can fetch restaurantTop");
      }
      this.restaurants = response.data.restaurants;
    },
    async addFavorite(restaurantId) {
      try {
        const response = await usersAPI.addFavorite({ restaurantId });
        if (response.statusText !== "OK") {
          throw new Error("can fetch addLike");
        }

        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurant.id === restaurantId) {
            return {
              ...restaurant,
              FavoriteCount: restaurant.FavoriteCount + 1,
              isFavorited: true,
            };
          } else {
            return restaurant;
          }
        });
      } catch (e) {
        console.log(e);
        Toast.fire({
          icon: "error",
          title: "無法加入喜愛，請稍候再試",
        });
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const response = await usersAPI.deleteFavorite({ restaurantId });
        if (response.statusText !== "OK") {
          throw new Error("can fetch addLike");
        }

        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurant.id === restaurantId) {
            return {
              ...restaurant,
              FavoriteCount: restaurant.FavoriteCount - 1,
              isFavorited: false,
            };
          } else {
            return restaurant;
          }
        });
      } catch (e) {
        console.log(e);
        Toast.fire({
          icon: "error",
          title: "無法移除喜愛，請稍候再試",
        });
      }
    },
  },
};
</script>
