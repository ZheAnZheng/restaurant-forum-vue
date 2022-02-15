import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  getRestaurants({ page, categoryId }) {
    //URLSearchParams將參數轉換成params格式 ?=params
    const searchParams = new URLSearchParams({ page, categoryId });
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getFeeds() {
    return apiHelper.get("/restaurants/feeds", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getTopRestaurants() {
    return apiHelper.get("/restaurants/top", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  createComment({ text, restaurantId, user }) {
    return apiHelper.post(
      "/comments",
      { text, restaurantId, user },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
  },
  deleteComment({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getRestaurantDashBoard({restaurantId}){
    return apiHelper.get(`/restaurants/${restaurantId}/dashboard`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  }
};
