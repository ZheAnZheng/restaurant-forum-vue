
<template>
     <div class="container py-5">
    <!-- 後台導覽頁籤 AdminNav -->
    <admin-nav></admin-nav>
    <router-link
      :to="{path:'/admin/restaurants/new'}"
      class="btn btn-primary mb-4"
    >
      New Restaurant
    </router-link>
    <!-- 後台餐廳列表 AdminRestaurantsTable -->
    <admin-restaurants-table></admin-restaurants-table>
  </div>
</template>

<script>
import AdminRestaurantsTable from '../components/AdminRestaurantsTable.vue'
import AdminNav from './../components/AdminNav'

export default {
  components: {
    AdminNav,
    AdminRestaurantsTable
  }
}
</script>