<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <admin-nav></admin-nav>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td v-if="user.isAdmin">admin</td>
          <td v-else>user</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              @click.prevent.stop="toggleUserRole(user.id)"
            >
              <span v-if="user.isAdmin">set as user</span>
              <span v-else>set as admin</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import AdminNav from "../components/AdminNav.vue";
import { Toast } from "../utils/helpers.js";
import adminAPI from "../apis/admin.js";
import { mapState } from "vuex";
export default {
  components: {
    AdminNav,
  },
  created() {
    this.fetchUsers();
  },
  data() {
    return {
      users: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await adminAPI.users.getUsers();
        console.log(response);
        if (response.statusText !== "OK") {
          throw new Error("cant fetch users");
        }
        const allUsers = response.data.users;
        this.users = [...allUsers];
      } catch (e) {
        console.log(e.message);
        Toast.fireError("讀取用戶失敗，起稍後再試");
      }
    },
    toggleUserRole(userId) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          user.isAdmin=!user.isAdmin;
         
          this.updateRole(userId,user.isAdmin)
          return {
            ...user,
            isAdmin: user.isAdmin,
          };
        } else {
          return {
            ...user,
          };
        }
      });
    },
    async updateRole(userId,isAdmin){
      try{
        const {data}=await adminAPI.users.update({userId,isAdmin});
        console.log(data)
        if(data.status!=='success'){
          throw new Error(data.message)
        }

      }catch(e){
        console.log(e)
        Toast.fireError('切換管理員失敗，請稍候再試')
      }
    }
  },
};
</script>
