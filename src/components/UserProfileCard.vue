<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="profile.image" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ profile.name }}</h5>
          <p class="card-text">{{ profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ profile.Comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ profile.FavoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ profile.Followings.length }}</strong> followings
              (追蹤者)
            </li>
            <li>
              <strong>{{ profile.Followers.length }}</strong> followers (追隨者)
            </li>
          </ul>
          <p v-if="isCurrentUserEqualProfileUser">
            <router-link
              :to="{ name: 'users-edit', params: { id: profile.id } }"
              ><button type="submit" class="btn btn-primary">
                edit
              </button></router-link
            >
          </p>
          <p v-else>
            <button
              type="submit"
              v-show="!initialIsFollowed"
              class="btn btn-success"
              @click.stop.prevent="addFollowing(profile.id)"
            >
              Add Following
            </button>
            <button
              type="submit"
              v-show="initialIsFollowed"
              class="btn btn-danger"
              @click.stop.prevent="deleteFollowing(profile.id)"
            >
              Delete Following
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "../utils/helpers.js";
import usersAPI from "../apis/users.js";
export default {
  props: {
    profile: {
      type: Object,
      required: true,
    },
    isCurrentUserEqualProfileUser: {
      type: Boolean,
      required: true,
    },
    initialIsFollowed:{
      type:Boolean,
      required:true
    }
  },
  data() {
    return {
      pageId: Number(this.profile.id),
    };
  },
  methods: {
    async addFollowing(userId) {
      try{
        const {data} =await usersAPI.addFollowing({userId})
        if(data.status!=="success"){
          throw Error(data.message)
        }
        console.log(data)
      }catch(e){
        console.log(e);
        Toast.fireError('無法取消追蹤，請稍後再試')
      }
      this.$emit('updateAfterFollowing')
    },
    async deleteFollowing(userId){
      try{
        const {data} =await usersAPI.deleteFollowing({userId});
        if(data.status!=="success"){
          throw new Error(data.message)
        }
        this.$emit('updateAfterFollowing')
      }catch(e){
        console.log(e.message);
        Toast.fireError('取消追蹤失敗，請稍後再試')
      }
    }
  },
};
</script>
