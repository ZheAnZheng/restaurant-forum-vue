<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{name:'admin-restaurant',params:{id:restaurant.id}}"
            class="btn btn-link"
          >Show</router-link>

          <router-link
            :to="{name:'admin-restaurant-edit',params:{id:restaurant.id}}"
            class="btn btn-link"
          >Edit</router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.prevent.stop="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
    "restaurants": [
        {
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
            }
        },
        {
            "id": 2,
            "name": "Brice Heaney",
            "tel": "289.771.9008 x7230",
            "address": "34562 Volkman Lights",
            "opening_hours": "08:00",
            "description": "Aut voluptas enim exercitationem asperiores soluta a.\nIusto et asperiores fugiat et ipsum cumque dolorum voluptas explicabo.\nA neque et.\nRepellendus animi facilis consequuntur fugit.\nUt ipsum sunt non dolor aliquid aperiam ipsum nam perspiciatis.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=75.23294688678943",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 3,
            "name": "Berry Collins MD",
            "tel": "(840) 158-5495",
            "address": "9447 Purdy Flat",
            "opening_hours": "08:00",
            "description": "Sed quae enim reiciendis nam neque et. Facilis molestiae ipsa ut. Incidunt perspiciatis amet et. Est dicta voluptatem perspiciatis et assumenda nesciunt fugit praesentium similique.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.113080540161224",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 7,
            "name": "Rafaela Bosco",
            "tel": "422-068-9168 x5209",
            "address": "14077 Abbie Path",
            "opening_hours": "08:00",
            "description": "Quod est nostrum quia quisquam et sed aliquam qui maxime. Laborum rerum sed qui odit. Harum repellendus libero rerum nobis enim amet nihil nobis. Deserunt quia dolores itaque voluptatibus repellat. Voluptatem ex quisquam.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.60331259524741",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 8,
            "name": "Amalia Daugherty",
            "tel": "566.984.3406",
            "address": "1247 Caesar Gardens",
            "opening_hours": "08:00",
            "description": "Omnis ut ratione fuga dolorum consequatur quis voluptatem dolorum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.971555887877967",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 11,
            "name": "Kelvin Fritsch",
            "tel": "1-633-357-0011",
            "address": "90720 Aufderhar Port",
            "opening_hours": "08:00",
            "description": "Corporis rem eos laboriosam veniam omnis deserunt molestias cupiditate. Ut nihil maiores dolores numquam ipsam nulla maiores quaerat. Rerum ratione aut numquam. Corporis blanditiis consequatur aut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.47037509875685",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 13,
            "name": "Francesco VonRueden",
            "tel": "1-299-103-2670",
            "address": "986 Eduardo Rapid",
            "opening_hours": "08:00",
            "description": "Porro reprehenderit ut atque omnis esse qui laborum totam dignissimos. Eos ea omnis id. Ut repudiandae adipisci quod sed. Ullam quia perspiciatis qui. Aut maxime in voluptatem commodi mollitia deleniti ipsam voluptatem. Illum dolorum provident et consectetur.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.528604441565843",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 14,
            "name": "Clement Howe",
            "tel": "648.853.2437",
            "address": "5576 Mattie Skyway",
            "opening_hours": "08:00",
            "description": "sunt voluptatibus et",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=79.45212953910368",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 19,
            "name": "Eddie Marks",
            "tel": "025-946-9841 x987",
            "address": "3915 Mertz Islands",
            "opening_hours": "08:00",
            "description": "Qui mollitia aut facilis dolorum aliquam velit illo.\nVoluptas temporibus eaque ut voluptatem explicabo.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=97.97220550358763",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 21,
            "name": "Helmer Considine",
            "tel": "994.728.4200 x74594",
            "address": "1121 Breanna Station",
            "opening_hours": "08:00",
            "description": "Dicta aut et quos tempora quos blanditiis. Est a quia error odit aut qui.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=19.087397045217024",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 29,
            "name": "Luther Heidenreich",
            "tel": "793-404-2629 x59148",
            "address": "00866 Toy Extensions",
            "opening_hours": "08:00",
            "description": "Ipsam aut est provident molestias et explicabo tenetur recusandae. A quasi fuga accusamus vel mollitia labore voluptates. Non blanditiis tempore ut vel est est. Cumque impedit hic.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.848090268652506",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 31,
            "name": "Rosalee VonRueden",
            "tel": "(436) 307-3900 x10589",
            "address": "2596 Rodriguez Fork",
            "opening_hours": "08:00",
            "description": "Beatae possimus sed provident velit. Animi voluptatem amet omnis. Officiis iusto quibusdam eum nemo commodi placeat ut quia. Et laboriosam qui nostrum porro maiores.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.640547827291744",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 32,
            "name": "Katharina Lynch",
            "tel": "006.388.2150",
            "address": "93362 Salvador Inlet",
            "opening_hours": "08:00",
            "description": "Similique nostrum consectetur eligendi molestias modi commodi. Amet veritatis aut hic excepturi quae corrupti voluptate inventore. Ea eligendi vel impedit sunt at maiores est nisi. Aut explicabo nostrum voluptatem deserunt quia tempore aut quia.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=71.85242776175484",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 47,
            "name": "Herminia Krajcik",
            "tel": "(075) 499-3432",
            "address": "37325 King Row",
            "opening_hours": "08:00",
            "description": "Vero magnam perferendis voluptatem culpa enim doloribus. Nihil deleniti itaque doloribus possimus facere. Quod praesentium aut soluta commodi ex omnis molestias. Facere voluptas enim consequatur unde. Optio quisquam incidunt est ex consequatur quia quasi. Beatae nostrum et architecto eum debitis ad natus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.87787124405071",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 48,
            "name": "Vita Olson",
            "tel": "068.490.1818",
            "address": "73128 Champlin Club",
            "opening_hours": "08:00",
            "description": "Mollitia necessitatibus dolor est et veritatis. Necessitatibus sint ab voluptate velit omnis. Autem et eius labore enim exercitationem repellat iure voluptas. Consequatur delectus et tempora nulla. Iure nihil rerum. Sint aperiam reiciendis maiores accusamus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.412100531732015",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
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
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 17,
            "name": "Gwen Stehr",
            "tel": "347-749-3319",
            "address": "734 Eduardo Views",
            "opening_hours": "08:00",
            "description": "Omnis omnis cumque. Qui molestiae mollitia provident error. Id magni ipsa veritatis sit quis. Voluptates perspiciatis magnam commodi asperiores ipsam veritatis. Aut maiores sequi ipsum qui.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=65.24252857778974",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 22,
            "name": "Lamar Dietrich",
            "tel": "846.009.1433",
            "address": "12927 Breana Trail",
            "opening_hours": "08:00",
            "description": "Voluptates tenetur voluptatem est dolores quo non. Et modi ut similique rerum voluptas ut. Aliquam omnis maiores deserunt voluptatem quia.\n \rId qui similique ut expedita dolores quia quia. Molestiae dolore quia et omnis. Eos dolorem magnam nam necessitatibus debitis atque.\n \rTemporibus doloremque laboriosam nihil molestiae ut atque possimus in aut. Totam eius cum velit quia minima nam. Officia magni et nihil neque. Repellendus eaque est cupiditate. Alias sed vel sapiente voluptatem odit et qui ipsa. Non minima qui eos magni necessitatibus sint sed cum facere.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.722346382319188",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 23,
            "name": "Stephon Gorczany",
            "tel": "(945) 168-4631 x6011",
            "address": "830 Ludwig Coves",
            "opening_hours": "08:00",
            "description": "Aut quia aspernatur neque quibusdam. Beatae autem dolorum harum. Aut sapiente sit. Qui ut dolorem ex praesentium doloribus modi. Ullam et exercitationem.\n \rLaudantium voluptatibus aut deserunt officia voluptatem ratione soluta dolores. Culpa maxime optio quae alias omnis. Quos quam reiciendis consequatur. Consequatur consectetur minus suscipit sed. Temporibus neque sapiente. Hic dolor porro.\n \rPerspiciatis excepturi voluptas magni et a. Molestias voluptas consequatur sed et alias harum. Non qui nulla dolores qui aut. Eos eius in sunt voluptate. Iusto omnis magnam eaque voluptatem animi sunt. Aut et maiores odit culpa nihil libero porro temporibus rem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.15383874256262",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 25,
            "name": "Logan Kihn",
            "tel": "448-818-3619",
            "address": "1431 Schiller Lake",
            "opening_hours": "08:00",
            "description": "eum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=71.72181163579774",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 27,
            "name": "Carissa Schuster",
            "tel": "870-057-4721 x0450",
            "address": "66545 Trey Coves",
            "opening_hours": "08:00",
            "description": "iste",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.2456217812113044",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 38,
            "name": "Kennedy Padberg",
            "tel": "1-014-695-8436",
            "address": "95484 Rick Fords",
            "opening_hours": "08:00",
            "description": "Eos et vel. Mollitia et eos. Molestiae blanditiis ut repellat maiores voluptates odio sint eum. Nihil vero consequatur.\n \rUt inventore saepe velit voluptatem dolorum facilis voluptas corrupti quo. Necessitatibus voluptatibus autem sunt doloribus et natus fugiat autem. Molestiae reprehenderit enim eum.\n \rOdio officia enim laboriosam dolor assumenda dolores. Odit maxime optio. Cum accusantium deserunt aut eum eum velit voluptatum. Incidunt sed recusandae sapiente et in commodi velit unde aut. Facere ea sapiente. Quos architecto quo.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=48.52059949218604",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 41,
            "name": "Aniya Bauch",
            "tel": "775-226-8529 x116",
            "address": "3528 Ramona Fall",
            "opening_hours": "08:00",
            "description": "Natus temporibus maiores culpa molestiae cupiditate aut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=17.713725587642525",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
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
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 4,
            "name": "Wallace Gutmann",
            "tel": "750-812-3325 x001",
            "address": "0766 Volkman Trace",
            "opening_hours": "08:00",
            "description": "asperiores magni sit",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.92537255122227",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 10,
            "name": "Lou Prohaska",
            "tel": "781-577-0238 x8674",
            "address": "990 Eliza Key",
            "opening_hours": "08:00",
            "description": "Hic et possimus possimus rerum ea eligendi rerum nesciunt ducimus.\nAnimi aspernatur voluptas incidunt.\nCum recusandae sit in sunt quod dolorem in praesentium voluptatem.\nAccusantium et aliquam.\nRatione laboriosam et eligendi eos fuga ut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.57101448014596",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 12,
            "name": "Marianna Ritchie",
            "tel": "1-032-176-3065 x61115",
            "address": "7818 Schaefer Hill",
            "opening_hours": "08:00",
            "description": "voluptas",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.783468941316169",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 16,
            "name": "Mr. Spencer Dach",
            "tel": "570-609-6051",
            "address": "1764 Bria Shoals",
            "opening_hours": "08:00",
            "description": "Quae adipisci nulla adipisci architecto quo ut. Quis dolores ut tempore. Dolore voluptate a corporis a voluptatem cupiditate voluptas iusto voluptatibus.\n \rUt accusantium eligendi. In iusto sint fugit quia quia eum dolorum ipsa nihil. Enim deleniti animi voluptatem vitae voluptas at ut ut. Sed qui fugit unde iste velit sunt.\n \rAut nostrum veniam nesciunt animi minus. Ipsa quod et quibusdam. Cumque non libero. Inventore nemo aut sed aut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.40465518756693",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 20,
            "name": "Brandon Funk",
            "tel": "(580) 671-2583 x37904",
            "address": "75213 Velva Springs",
            "opening_hours": "08:00",
            "description": "Dolorem sed ratione labore delectus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=62.75628139495546",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 33,
            "name": "Alayna Okuneva",
            "tel": "(974) 925-0868",
            "address": "5345 Natasha Course",
            "opening_hours": "08:00",
            "description": "occaecati",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=71.24368275808921",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 34,
            "name": "Jamal Bosco",
            "tel": "798-364-4019 x30708",
            "address": "906 Maybelle Court",
            "opening_hours": "08:00",
            "description": "Officia quia voluptas debitis sed.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.58404521443492",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 36,
            "name": "Keeley Kuhlman",
            "tel": "713-839-6844",
            "address": "85685 O'Connell Spring",
            "opening_hours": "08:00",
            "description": "Amet sit molestiae est fuga non officiis sit velit hic. Deserunt qui laudantium illum quia voluptas provident vitae laborum. Enim unde ab perspiciatis.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.072324304633238",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 39,
            "name": "Ada Hand",
            "tel": "125-562-5029 x9269",
            "address": "54783 Macejkovic Turnpike",
            "opening_hours": "08:00",
            "description": "a",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=33.68803776481033",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 44,
            "name": "Lewis Hilpert",
            "tel": "937.413.4087 x4129",
            "address": "71936 Darrick Land",
            "opening_hours": "08:00",
            "description": "Itaque a dolores doloribus. Nulla magni et assumenda dicta dolore illo earum. Velit nemo sapiente est. Qui alias est corrupti qui alias nihil dicta. Commodi consequatur aliquam voluptates commodi recusandae dignissimos. Deleniti consequatur placeat repellendus possimus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.00020863303374",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
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
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 5,
            "name": "Bert Jacobi",
            "tel": "691.504.9560 x1310",
            "address": "1458 Kub Ridges",
            "opening_hours": "08:00",
            "description": "Sed quia sed et non.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=55.4809513790542",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 15,
            "name": "Miss Roel Jacobson",
            "tel": "1-519-086-9575 x6294",
            "address": "10032 Reanna Cliff",
            "opening_hours": "08:00",
            "description": "Velit aut aut voluptatem quasi. Rerum repellendus laborum autem animi. Deserunt illo eveniet magni blanditiis unde ut ipsum eos. Dolores quas unde ipsam vero autem est. Quasi modi ut tempore eius totam sint. Et eos aliquam ut.\n \rVoluptatem est et repudiandae et. Maxime vero dolore vitae eum nulla quo dolorem reiciendis. Quaerat consequatur aliquid nulla quia et eum et. Harum et excepturi sequi hic et rerum neque. Vitae magnam neque.\n \rSit ut quis odit aut rem. Enim eaque qui ipsa consequatur quia. Inventore vero porro. Aut ullam minima qui quisquam quidem quas voluptates et. Ad omnis architecto.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=71.03821597043898",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 18,
            "name": "Malinda Toy",
            "tel": "(276) 296-7662 x30961",
            "address": "5146 Stan Lights",
            "opening_hours": "08:00",
            "description": "odio",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.044072888570122",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 24,
            "name": "Salvador Adams",
            "tel": "1-307-243-8548",
            "address": "613 Gunnar Lodge",
            "opening_hours": "08:00",
            "description": "delectus",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.84791664532867",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 37,
            "name": "Alexandro Ebert",
            "tel": "1-587-669-8087",
            "address": "77894 Mertie Well",
            "opening_hours": "08:00",
            "description": "dolor veniam animi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=0.618128164790388",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 40,
            "name": "Brooks Skiles",
            "tel": "908.920.1553 x9919",
            "address": "930 Davion Roads",
            "opening_hours": "08:00",
            "description": "cum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=71.37209906159696",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
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
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 6,
            "name": "Casey Sawayn",
            "tel": "1-923-272-8597",
            "address": "53053 Terry Green",
            "opening_hours": "08:00",
            "description": "Autem saepe optio est inventore ducimus unde distinctio quis. Porro provident commodi repudiandae sit. Ut est inventore.\n \rVoluptatibus voluptatem pariatur libero totam quos. Vitae aut est qui distinctio natus commodi amet error a. Quidem voluptatem deserunt qui magni. Maiores magnam facilis quam. Odio architecto quibusdam suscipit et consequatur deserunt illum. Deleniti eum aut pariatur nobis.\n \rPariatur quos accusamus quis. Et vel nesciunt omnis nobis ut asperiores alias sunt. Aut repellat suscipit labore nihil omnis maiores tenetur et. Quia voluptas vel voluptate ut illum quo fugiat dolorem nobis.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.73216419569458",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 9,
            "name": "Ms. Virginia McKenzie",
            "tel": "(783) 549-0536",
            "address": "4176 Pfannerstill Gardens",
            "opening_hours": "08:00",
            "description": "Sed est voluptatem explicabo similique et quo cupiditate. Saepe pariatur modi occaecati voluptatem ullam soluta. Nihil qui vitae omnis dolorum eaque. Consequatur sit quaerat velit labore praesentium consectetur dolorem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.11143773743464",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 26,
            "name": "Mrs. Rollin Gutmann",
            "tel": "(389) 646-3203",
            "address": "91858 Willa Curve",
            "opening_hours": "08:00",
            "description": "voluptas",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.89061902530566",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 28,
            "name": "Erwin Turner",
            "tel": "1-972-874-8625",
            "address": "476 Rubie Pines",
            "opening_hours": "08:00",
            "description": "Odit quis nostrum iure non qui iure dolore perspiciatis. Tenetur ratione exercitationem cupiditate amet iusto enim.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.702769650429",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 30,
            "name": "Letitia Heidenreich",
            "tel": "1-910-938-6947",
            "address": "8801 Alanna Glen",
            "opening_hours": "08:00",
            "description": "voluptas aperiam dolorem",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.552879624455414",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 35,
            "name": "Rachael Erdman",
            "tel": "927.206.5102 x71440",
            "address": "828 Abernathy Bypass",
            "opening_hours": "08:00",
            "description": "Quia laudantium velit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=48.89840614643231",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        },
        {
            "id": 43,
            "name": "Davon Schultz",
            "tel": "498-493-6750 x472",
            "address": "957 Megane Village",
            "opening_hours": "08:00",
            "description": "Repellendus sint consequuntur mollitia corrupti quis autem. Cumque nihil dolor vitae aspernatur assumenda officia quod.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.3637471247528685",
            "viewCounts": 0,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
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
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-12-24T04:10:21.000Z",
                "updatedAt": "2021-12-24T04:10:21.000Z"
            }
        }
    ]
}

export default {
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    deleteRestaurant(id){
        this.restaurants=this.restaurants.filter(restaurant=>restaurant.id !== id)
    }
  }
}
</script>