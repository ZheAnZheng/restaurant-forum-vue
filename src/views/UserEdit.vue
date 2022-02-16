<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          v-model="currentUser.name"
          required
          :disabled="isProcessing"
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          width="200px"
          height="200px"
          :src="image | emptyImage"
          class="d-block mb-4"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          @change="handleFileChagne"
          class="form-control-file"
          :disabled="isProcessing"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">Submit</button>
    </form>
  </div>
</template>
<script>
import { emptyImageFilter } from "../utils/mixins.js";
import { Toast } from "../utils/helpers.js";
import usersAPI from "../apis/users.js";
import { mapState, mapActions } from "vuex";

export default {
  data(){
    return {
      image:'',
      isProcessing:false
    }
  },
  created(){
    this.image=this.currentUser.image
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  mixins:[emptyImageFilter],
  methods: {
    ...mapActions(["fetchCurrentUser"]),
    handleFileChagne(e) {
      const { files } = e.target;
      console.log(files)
      if (files.length > 0) {
        this.image = window.URL.createObjectURL(files[0]);
      }
    },
    async handleSubmit(e) {
      try{
        const formData = new FormData(e.target);
        for(let [name , value] of formData.entries()){
          console.log(name ,value)
        }
        this.isProcessing=true;
        const {data}=await usersAPI.update({userId:this.currentUser.id,formData});
        
        if(data.status!=="success"){
          throw new Error(data.message)
        }
        await this.fetchCurrentUser()
        Toast.fireSuccess('更新成功')
        
      }catch(e){
        console.log(e);
        Toast.fireError('儲存失敗，請稍後再試')
      }finally{
        this.isProcessing=false;
      }

    },
  },
 
};
</script>
