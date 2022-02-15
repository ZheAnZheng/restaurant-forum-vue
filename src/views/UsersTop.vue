<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div v-for="user in users" :key="user.id" class="col-3">
        <!-- <a href="#"> -->
        <router-link :to="{ name: 'users', params: { id: user.id } }">
          <img :src="user.id" width="140px" height="140px" />
        </router-link>
        <!-- </a> -->
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.FollowerCount }}</span
        >
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            @click.stop.prevent="deleteFollowing(user.id)"
            v-if="user.isFollowed"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFollowing(user.id)"
            v-else
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import NavTabs from "../components/NavTabs.vue";
import usersAPI from "../apis/users.js";
import { Toast } from "../utils/helpers.js";

export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        this.tryFetachUsers();
      } catch (e) {
        console.log(e);
        Toast.fire({
          icon: "error",
          title: "無法取得UserTop，請稍後再試",
        });
      }
    },
    async tryFetachUsers() {
      const response = await usersAPI.getTopUsers();
      if (response.statusText !== "OK") {
        throw Error("cant fetch TopUser");
      }
      console.log(response);
      this.users = response.data.users;
    },
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              followerCount: user.followerCount + 1,
              isFollowed: true,
            };
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              followerCount: user.followerCount - 1,
              isFollowed: false,
            };
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試",
        });
      }
    },
  },
};
</script>
