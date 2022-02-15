<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <admin-nav></admin-nav>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" >
          <th scope="row">
            {{user.id}}
          </th>
          <td>{{user.email}}</td>
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
import AdminNav from '../components/AdminNav.vue';
const dummyData=[
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$gFXZT20xGTogjEUpcEZfmuIt2pWprzCOhQJLUNI56h1siKXHuqJsK",
            "isAdmin": true,
            "image": null,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z"
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$DX/zNtSIXpvcwBI33DP9S.R.xIfUB9Vb2XJQeNvX1ZdvKd/yG9Xx.",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z"
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$b959r6qh3n1ow0hrzEYed.JSMIvdhn4XXrSeog6g/Khoh.2FGUspK",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-12-24T04:10:21.000Z",
            "updatedAt": "2021-12-24T04:10:21.000Z"
        }
    ]
export default {
    components:{
        AdminNav
    },
    created(){
        this.fetchUsers()
    },
    data(){
        return {
            users:[]
        }
    },
    methods:{
        fetchUsers(){
            this.users=[...dummyData];
        },
        toggleUserRole(userId){
           
            this.users=this.users.map(user=>{
                if(user.id===userId){
                    return{
                        ...user,
                        isAdmin:!user.isAdmin
                    }
                }else{
                    return {
                        ...user
                    }
                }
            })
        }
    }
}
</script>