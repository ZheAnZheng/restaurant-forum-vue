<template>
  <div class="container py-5">
    <admin-restaurant-form @after-submit="handleAfterSubmit"></admin-restaurant-form>
    
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'

export default {
  components: {
    AdminRestaurantForm
  },
  methods:{
    handleAfterSubmit(formData){
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>