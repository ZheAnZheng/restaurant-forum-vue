import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  getRestaurants({ page, categoryId}) {
    //URLSearchParams將參數轉換成params格式 ?=params
    const searchParams = new URLSearchParams({ page, categoryId });
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getFeeds() {
    return apiHelper.get("/restaurants/feeds",{
        headers:{Authorization: `Bearer ${getToken()}`}
    });
  },
  getTopRestaurants(){
    return apiHelper.get('/restaurants/top',{
      headers:{Authorization:`Bearer ${getToken()}`}
    })
  }
};
