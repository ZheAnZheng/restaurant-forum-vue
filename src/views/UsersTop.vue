<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">

      <div v-for="user in users" :key="user.id" class="col-3">
        <!-- <a href="#"> -->
          <router-link :to="{name:'users',params:{id:user.id}}">
          <img
            :src='user.id'
            width="140px"
            height="140px"
          >
          </router-link>
        <!-- </a> -->
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
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
import NavTabs from '../components/NavTabs.vue'

const dummyData={
    users:[{
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$gFXZT20xGTogjEUpcEZfmuIt2pWprzCOhQJLUNI56h1siKXHuqJsK",
            "isAdmin": true,
            "image": null,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$DX/zNtSIXpvcwBI33DP9S.R.xIfUB9Vb2XJQeNvX1ZdvKd/yG9Xx.",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$b959r6qh3n1ow0hrzEYed.JSMIvdhn4XXrSeog6g/Khoh.2FGUspK",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }]
}
export default {
    components:{
        NavTabs
    },
    data(){
        return {
            users:[]
        }
    },
    created(){
        this.fetchUsers();
    },
    methods:{
        fetchUsers(){
            this.users=dummyData.users
        }
    }
}
</script>