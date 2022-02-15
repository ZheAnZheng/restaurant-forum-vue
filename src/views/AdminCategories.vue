<template>
  <div class="container py-5">
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
            v-model="newCategoryName"
          />
        </div>
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-primary"
            @click.prevent.stop="createCategory"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span
              v-show="category.isEditing"
              class="cancel"
              @click="handleCancel(category.id)"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="
                updateCategory({ categoryId: category.id, name: category.name })
              "
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";
import { v4 as uuidv4 } from "uuid";
import { Toast } from "../utils/helpers.js";
import adminAPI from "../apis/admin.js";

export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      categories: [],
      newCategoryName: "",
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await adminAPI.categories.get();
        if (response.statusText !== "OK") {
          throw new Error("Error:can fetch categories");
        }
        this.categories = response.data.categories;
      } catch (e) {
        Toast.fireError("無法讀取餐廳類別，請稍候再試");
        console.log(e.message);
      }
    },
    async createCategory() {
      try {
        if (!this.newCategoryName) {
          Toast.fireWarning("請填寫新類別");
          return;
        }
        const { data } = await adminAPI.categories.create({
          id: uuidv4(),
          name: this.newCategoryName,
        });
        if (data.status !== "success") {
          throw Error("cant create categories");
        }
        await this.fetchCategories();
        Toast.fireSuccess("成功新增類別");
      } catch (e) {
        console.log(e.message);
        Toast.fireError("發生錯誤，無法新增類別，請稍後再試");
      } finally {
        this.newCategoryName = "";
      }
    },
    async deleteCategory(categoryId) {
      try {
        const { data } = await adminAPI.categories.delete({ categoryId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.categories = this.categories.filter(
          (category) => category.id !== categoryId
        );
        Toast.fireSuccess("成功刪除類別");
      } catch (e) {
        Toast.fireError("無法刪除，請稍後再試");
        console.log(e.message);
      }
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name,
          };
        }

        return category;
      });
    },
    async updateCategory({ categoryId, name }) {
      try {
        const { data } = await adminAPI.categories.update({ categoryId, name });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fireSuccess("更新成功");
      } catch (e) {
        console.log(e);
        Toast.fireError("更新失敗，請再試一次");
      } finally {
        this.toggleIsEditing(categoryId);
      }
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            name: category.nameCached,
          };
        }

        return category;
      });

      this.toggleIsEditing(categoryId);
    },
  },
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>
