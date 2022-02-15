<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      />
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant } }"
            >{{ restaurant.name }}</router-link
          >
        </p>
        <span class="badge badge-secondary">{{
          restaurant.Category.name
        }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
          v-if="restaurant.isFavorited"
        >
          移除最愛
        </button>
        <button
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          @click.stop.prevent="addFavorite(restaurant.id)"
          v-else
        >
          加到最愛
        </button>
        <button
          type="button"
          class="btn btn-danger like mr-2"
          @click.stop.prevent="deleteLike(restaurant.id)"
          v-if="restaurant.isLiked"
        >
          Unlike
        </button>
        <button
          type="button"
          class="btn btn-primary like mr-2"
          @click.stop.prevent="addLike(restaurant.id)"
          v-else
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from "../apis/users.js";
import { Toast } from "../utils/helpers.js";
export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
    };
  },
  methods: {
    async addFavorite(restaurantId) {
      try {
        await this.tryAddFavorite(restaurantId);
      } catch (e) {
        console.log(e);
        Toast.fire({
          icon: "error",
          title: "無法將餐廳加入最愛，請稍後再試",
        });
      }
    },
    async tryAddFavorite(restaurantId) {
      const response = await usersAPI.addFavorite({ restaurantId });
      console.log(response);
      if (response.statusText !== "OK") {
        throw new Error("Not Fetch UserCard");
      }
      this.restaurant = {
        ...this.restaurant,
        isFavorited: true,
      };
    },
    async deleteFavorite(restaurantId) {
      try {
        await this.tryDeleteFavorite(restaurantId);
      } catch (e) {
        console.log(e);
        Toast.fire({
          icon: "error",
          title: "無法將餐廳移除最愛，請稍後再試",
        });
      }
      this.restaurant = {
        ...this.restaurant,
        isFavorite: false,
      };
    },
    async tryDeleteFavorite(restaurantId) {
      console.log(restaurantId);
      const response = await usersAPI.deleteFavorite({ restaurantId });
      if (response.statusText !== "OK") {
        new Error("Not Fetch UserCard");
      }
      this.restaurant = {
        ...this.restaurant,
        isFavorited: false,
      };
    },
    async addLike(restaurantId) {
      try {
        await this.tryAddLike(restaurantId);
      } catch (e) {
        console.log(e);
        Toast.fire({
          icon: "error",
          title: "無法加入喜愛，請稍後再試",
        });
      }
    },
    async tryAddLike(restaurantId) {
      const response = await usersAPI.addLike({ restaurantId });
        console.log(response)
      if (response.statusText !== "OK") {
        throw new Error("can fetch UserCard");
      }
      this.restaurant = {
        ...this.restaurant,
        isLiked: true,
      };
    },
    async deleteLike(restaurantId) {
      try{
        await this.tryDeleteLike(restaurantId)
      }catch(e){
        console.log(e)
        Toast.fire({
          icon:'error',
          title:'無法移出喜愛，請稍後再試'
        })
      }
    },
    async tryDeleteLike(restaurantId){
      const response = await usersAPI.deleteLike({ restaurantId });
        console.log(response)
      if (response.statusText !== "OK") {
        throw new Error("can fetch UserCard");
      }
      this.restaurant = {
        ...this.restaurant,
        isLiked: false,
      };
    }
  },
};
</script>
