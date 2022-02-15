<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image"
        style="width: 250px; margin-bottom: 25px"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{ path: `/restaurants/${restaurant.id}/dashboard` }"
        >Dashboard</router-link
      >

      <button
        type="button"
        class="btn btn-danger btn-border mr-2"
        v-if="restaurant.isFavorited"
        @click.prevent.stop="deleteFavorite"
      >
        移除最愛
      </button>
      <button
        type="button"
        class="btn btn-primary btn-border mr-2"
        v-else
        @click.prevent.stop="addFavorite"
      >
        加到最愛
      </button>
      <button
        type="button"
        class="btn btn-danger like mr-2"
        v-if="restaurant.isLiked"
        @click.prevent.stop="deleteLike"
      >
        Unlike
      </button>
      <button
        type="button"
        class="btn btn-primary like mr-2"
        v-else
        @click.prevent.stop="addLike"
      >
        Like
      </button>
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
  watch: {
    initialRestaurant(newValue) {
      this.restaurant = newValue;
    },
  },
  methods: {
    async addFavorite() {
      try {
        const { data } = await usersAPI.addFavorite({
          restaurantId: this.restaurant.id,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true,
        };
      } catch (e) {
        console.log(e);
        Toast.fireError("加入最愛失敗，請稍後再試");
      }
    },
    async deleteFavorite() {
      try {
        const { data } = await usersAPI.deleteFavorite({
          restaurantId: this.restaurant.id,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
        };
      } catch (e) {
        console.log(e);
        Toast.fireError("移除最愛失敗，請稍後再試");
      }
    },
    async addLike() {
      try {
        const { data } = await usersAPI.addLike({
          restaurantId: this.restaurant.id,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: true,
        };
      } catch (e) {
        console.log(e);
        Toast.fireError("按讚失敗，請稍後再試");
      }
    },
    async deleteLike() {
      try {
        const { data } = await usersAPI.deleteLike({
          restaurantId: this.restaurant.id,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: false,
        };
      } catch (e) {
        console.log(e);
        Toast.fireError("移除按讚失敗，請稍後再試");
      }
    },
  },
};
</script>
