<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <restaurant-detail :initial-restaurant="restaurant"></restaurant-detail>
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <restaurant-comments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    ></restaurant-comments>
    <!-- 新增評論 CreateComment -->
    <create-comment
      :restaurantId="restaurant.id"
      @after-create-comment="afterCreateComment"
    ></create-comment>
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail.vue";
import RestaurantComments from "../components/RestaurantComments.vue";
import CreateComment from "../components/CreateComment.vue";
import restaurantsAPI from "../apis/restaurants.js";
import { Toast } from "../utils/helpers.js";
import { mapState } from "vuex";
export default {
  components: { RestaurantDetail, RestaurantComments, CreateComment },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
    };
  },
  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = to.params;
    this.fetchRestaurant(restaurantId);
    next();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const { id: restaurantId } = this.$route.params;

    this.fetchRestaurant(restaurantId);
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const response = await restaurantsAPI.getRestaurant({ restaurantId });
        if (response.statusText !== "OK") {
          throw new Error("cant fetch restaurant");
        }

        const { isLiked, isFavorited, restaurant } = response.data;
        this.restaurant = {
          ...this.restaurant,
          ...restaurant,
          isLiked,
          isFavorited,
        };

        this.restaurantComments = restaurant.Comments;
      } catch (e) {
        console.log(e.message);
        Toast.fireError("無法讀取此餐廳，請稍後再試");
      }
    },

    async afterDeleteComment(commentId) {
      try{
        
        const {data}=await restaurantsAPI.deleteComment({commentId});

        if(data.status!=="success"){
          throw new Error(data.message)
        }
      this.restaurantComments = this.restaurantComments.filter(comment=>comment.id!==commentId);
      Toast.fireSuccess('成功刪除評論')

      }catch(e){
        console.log(e.message);
        Toast.fireError('刪除評論發生錯誤，請傷後再試')
      }
    },
    async afterCreateComment(payload) {
      try {
        const {restaurantId, text } = payload;
        // const newComment = {
        //   id: commentId,
        //   RestaurantId: restaurantId,
        //   User: {
        //     id: this.currentUser.id,
        //     name: this.currentUser.name,
        //   },
        //   text,
        //   createAt: new Date(),
        // };
        const { data } = await restaurantsAPI.createComment({
          text,
          restaurantId,
          user: this.currentUser,
        });
        
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        await this.fetchRestaurant(restaurantId)
        Toast.fireSuccess("評論成功");
      } catch (e) {
        console.log(e.message);
        Toast.fireError("評論發生錯誤，請稍後再試");
      }
    },

  },
};
</script>
