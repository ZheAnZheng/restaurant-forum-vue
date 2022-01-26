<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{restaurant.name}}
            </h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            <!-- <router-link :to="{name:'restaurant',params:{id:restaurant.id},path:''}"></router-link> -->
            <a
              href="#"
              class="btn btn-primary mr-2"
            >Show</a>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.prevent.stop="deleteFavorite(restaurant)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent.stop="addFavorite(restaurant)"
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
import NavTabs from '../components/NavTabs.vue'
const dummyData={
  "restaurants": [
        {
            "id": 50,
            "name": "Lois Carroll",
            "tel": "(372) 388-9689 x790",
            "address": "70632 Norma Drive",
            "opening_hours": "08:00",
            "description": "Dolor sed aut laudantium recusandae et delectus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.12949626242853",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Norris Osinski",
            "tel": "946.105.1479 x728",
            "address": "3838 Wisozk Hill",
            "opening_hours": "08:00",
            "description": "aperiam non et",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.149375133456708",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Vita Olson",
            "tel": "068.490.1818",
            "address": "73128 Champlin Club",
            "opening_hours": "08:00",
            "description": "Mollitia necessitatibus dolor est et veritatis. Ne",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.412100531732015",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Herminia Krajcik",
            "tel": "(075) 499-3432",
            "address": "37325 King Row",
            "opening_hours": "08:00",
            "description": "Vero magnam perferendis voluptatem culpa enim dolo",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.87787124405071",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Audreanne Fisher",
            "tel": "170.891.9603 x8793",
            "address": "4013 Schaden Way",
            "opening_hours": "08:00",
            "description": "Aut repellendus et aut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.470660345405282",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Adolphus Halvorson",
            "tel": "731-344-6260 x196",
            "address": "25100 Fisher Tunnel",
            "opening_hours": "08:00",
            "description": "quisquam",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=18.423128222788133",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Lewis Hilpert",
            "tel": "937.413.4087 x4129",
            "address": "71936 Darrick Land",
            "opening_hours": "08:00",
            "description": "Itaque a dolores doloribus. Nulla magni et assumen",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.00020863303374",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Davon Schultz",
            "tel": "498-493-6750 x472",
            "address": "957 Megane Village",
            "opening_hours": "08:00",
            "description": "Repellendus sint consequuntur mollitia corrupti qu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.3637471247528685",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Dennis Hayes",
            "tel": "1-325-871-6140 x819",
            "address": "673 Sienna Cape",
            "opening_hours": "08:00",
            "description": "pariatur",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.048567981548764",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Aniya Bauch",
            "tel": "775-226-8529 x116",
            "address": "3528 Ramona Fall",
            "opening_hours": "08:00",
            "description": "Natus temporibus maiores culpa molestiae cupiditat",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=17.713725587642525",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}
export default {

  components:{
    NavTabs
  },
  data(){
    return{
      restaurants:dummyData.restaurants
    }
  },
  methods:{
    addFavorite(restaurant){
      restaurant.isFavorited=true
    },
    deleteFavorite(restaurant){
       restaurant.isFavorited=false
    }
  }
}
</script>