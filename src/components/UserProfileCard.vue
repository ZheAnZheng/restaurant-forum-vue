<template>
        <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              :src="profile.image"
              width="300px"
              height="300px"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{profile.name}}</h5>
              <p class="card-text">{{profile.email}}</p>
              <ul class="list-unstyled list-inline">
                <li><strong>{{profile.Comments.length}}</strong> 已評論餐廳</li>
                <li><strong>{{profile.FavoritedRestaurants.length}}</strong> 收藏的餐廳</li>
                <li><strong>{{profile.Followings.length}}</strong> followings (追蹤者)</li>
                <li><strong>{{profile.Followers.length}}</strong> followers (追隨者)</li>
              </ul>
              <p v-if="isCurrentUserEqualProfileUser">
                <router-link :to="{name:'users-edit',params:{id:profile.id}} "
                  ><button type="submit" class="btn btn-primary">
                    edit 
                  </button></router-link
                >
              </p>
              <p v-else>
                <button type="submit" class="btn btn-success" @click.stop.prevent="addFollowing">
                  Add Following 
                </button>
                <button type="submit" class="btn btn-danger" @click.stop.prevent="deleteFollowing">
                  Delete Following
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    props:{
        profile:{
            type:Object,
            required:true
        },
        isCurrentUserEqualProfileUser:{
          type:Boolean,
          required:true
        }
    },
    data(){
        return{
            pageId:Number(this.profile.id)
        }
    }
}
</script>