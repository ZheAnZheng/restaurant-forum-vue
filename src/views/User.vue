<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <!-- userProfileCard -->
      <user-profile-card
        :profile="profile"
        :isProfileOwner="isProfileOwner"
        :initialIsFollowed="isFollowed"
        @updateAfterFollowing="updateAfterFollowing"
      ></user-profile-card>
      <div class="row">
        <div class="col-md-4">
          <!-- userFollowingsCard -->
          <user-followings-card
            :followings="profile.Followings"
          ></user-followings-card>
          <br />
          <!-- userFollowersCard -->
          <user-followers-card
            :followers="profile.Followers"
          ></user-followers-card>
        </div>
        <div class="col-md-8">
          <!-- userCommentsCard -->
          <user-comments-card :comments="profile.Comments"></user-comments-card>
          <br />
          <!-- userFavoritedRestaurantsCard -->
          <user-favorited-restaurants-card
            :favoriteRestaurants="profile.FavoritedRestaurants"
          >
          </user-favorited-restaurants-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingsCard from "../components/UserFollowingsCard.vue";
import UserFollowersCard from "../components/UserFollowersCard.vue";
import UserCommentsCard from "../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard.vue";
import usersAPI from "../apis/users.js";
import { Toast } from "../utils/helpers.js";
import { mapState } from "vuex";

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      profile: {
        id: -1,
        name: "",
        email: "",
        password: "",
        isAdmin: "",
        image: "",
        createAt: "",
        updatedAt: "",
        Comments: [],
        FavoritedRestaurants: [],
        Followers: [],
        Followings: [],
      },
      isFollowed: false,
    };
  },
  created() {
    const { id } = this.$route.params;

    this.fetchUser(id);
  },
  computed: {
    isProfileOwner() {
      return this.isCurrentUserEqualProfileUser()
    },
    ...mapState(["currentUser"]),
  },
  methods: {
    async fetchUser(userId) {
      try {
        const response = await usersAPI.get({ userId });
        
        console.log(response.data);
        if (response.statusText !== "OK") {
          throw new Error("cant fetch User");
        }
        this.profile = response.data.profile;
        this.isFollowed = response.data.isFollowed;
      } catch (e) {
        console.log(e);
        Toast.fireError("讀取失敗，請稍後再試");
      }
    },
    updateAfterFollowing() {
      const { id } = this.profile;
      this.fetchUser(id);
    },
    isCurrentUserEqualProfileUser(){
      console.log(this.profile.id)
      console.log(this.currentUser.id)
      return this.profile.id== this.currentUser.id;
    }
  },
};
</script>
