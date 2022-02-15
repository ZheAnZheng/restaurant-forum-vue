<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          v-model="email"
          
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          v-model="password"
          
        />
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit" :disabled="isProcessing">
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signUp">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import {Toast} from "../utils/helpers.js"
export default {
  data() {
    return {
      email: "",
      password: "",
      isProcessing:false
    };
  },
  methods: {
    async handleSubmit() {
      try{
        
        await this.trySignIn()
       
      }catch(e){
        this.password=''
        this.isProcessing=false;
        this.fireWarningToast('請確認您輸入了正確的帳號密碼')
        console.log(e.message)
      }
    },
    async trySignIn(){
      
      if (!this.email || !this.password) {
        Toast.fire({
          icon: 'warning',
          title: '請填入 email 和 password'
        })

        return
      }
      this.isProcessing=true;
      const { data } = await authorizationAPI.signIn({
          email: this.email,
          password: this.password,
        });

        if (data.status !== "success") {
          
          throw new Error(data.message);
        }else {
          localStorage.setItem("token", data.token);
          this.$router.push("/restaurants");
        }
        
    },
    fireWarningToast(title){
      Toast.fire({
        icon:'warning',
        title
      })
    },

  },
};
</script>
