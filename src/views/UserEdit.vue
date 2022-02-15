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
          v-model="userData.name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          width="200px"
          height="200px"
          :src="userData.image"
          class="d-block mb-4"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          @change="handleFileChagne"
          class="form-control-file"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
import { emptyImageFilter } from "../utils/mixins.js";
const dummyData = {
  id: 1,
  name: "root",
  email: "root@example.com",
  password: "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
  isAdmin: true,
  image: "https://i.imgur.com/58ImzMM.png",
  createdAt: "2019-07-30T16:24:54.983Z",
  updatedAt: "2019-08-01T10:33:51.095Z",
};
export default {
  created() {
    this.fetchUser();
  },
  data() {
    return {
      userData: {
        id: -1,
        name: "",
        email: "",
        password: "",
        isAdmin: false,
        image: "",
        createdAt: "",
        updatedAt: "",
      },
    };
  },
  mixins: [],
  methods: {
    fetchUser() {
      this.userData = dummyData;
    },
    handleFileChagne(e) {
      const { files } = e.target;
      if (files.length > 0) {
        this.userData.image = window.URL.createObjectURL(files[0]);
      } else {
        this.userData.image = emptyImageFilter(this.userData.image);
      }
    },
    handleSubmit(e) {
      const formData = new FormData(e.target);
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>
