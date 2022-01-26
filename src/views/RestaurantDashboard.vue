<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.Comments.length }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>
<script>
const dummyData={
  "restaurant": {
        "id": 1,
        "name": "Garland Abshire",
        "tel": "(298) 972-5710",
        "address": "73534 Lenore Prairie",
        "opening_hours": "08:00",
        "description": "Occaecati accusamus repudiandae sed sed.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=79.45413696966837",
        "viewCounts": 1,
        "createdAt": "2021-12-24T04:10:21.000Z",
        "updatedAt": "2021-12-27T08:30:32.000Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z"
        },
        "Comments": [
            {
                "id": 51,
                "text": "Qui illum natus blanditiis provident illo non.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$gFXZT20xGTogjEUpcEZfmuIt2pWprzCOhQJLUNI56h1siKXHuqJsK",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2021-12-24T04:10:21.000Z",
                    "updatedAt": "2021-12-24T04:10:21.000Z"
                }
            },
            {
                "id": 1,
                "text": "Facere ducimus reiciendis.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$DX/zNtSIXpvcwBI33DP9S.R.xIfUB9Vb2XJQeNvX1ZdvKd/yG9Xx.",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-12-24T04:10:21.000Z",
                    "updatedAt": "2021-12-24T04:10:21.000Z"
                }
            },
            {
                "id": 101,
                "text": "Reprehenderit et aliquam pariatur earum distinctio.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$b959r6qh3n1ow0hrzEYed.JSMIvdhn4XXrSeog6g/Khoh.2FGUspK",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-12-24T04:10:21.000Z",
                    "updatedAt": "2021-12-24T04:10:21.000Z"
                }
            }
        ]
    }
}
export default {
  data(){
    return{
      restaurant:dummyData.restaurant
    }
  }
}
</script>