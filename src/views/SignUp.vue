<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          v-model="name"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          v-model="email"
          required
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
          autocomplete="new-password"
          v-model="password"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          id="password-check"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          v-model="passwordCheck"
          required
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        {{ isProcessing ? "Registing" : "Submit" }}
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin"> Sign In </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import { Toast } from "../utils/helpers.js";
import adminAPI from "../apis/admin.js";
export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
      passwordCheck: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.isProcessing = true;

        if (!this.isPasswordCorrect) {
         Toast.fireWarning("密碼不相同!")
          this.isProcessing = false;
          return;
        }

        const { data } = await adminAPI.users.create({
          email: this.email,
          name: this.name,
          password: this.password,
          passwordCheck: this.passwordCheck,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        } else {
          Toast.fireSuccess("註冊成功!")
        }
        this.isProcessing = false;
        this.$router.replace("/");
      } catch (e) {
        console.log(e);
        this.isProcessing = false;
        Toast.fireError("註冊失敗，請稍後再試")
      }
    },
  },
  computed: {
    isPasswordCorrect() {
      return this.passwordCheck === this.password;
    },
  },
};
</script>
