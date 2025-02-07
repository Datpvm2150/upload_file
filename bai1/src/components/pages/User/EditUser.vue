<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const router = useRouter();

const editingUser = ref({ name: "", age: "", email: "", image: "" });

const fetchUser = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/users/${route.params.id}`);
    editingUser.value = response.data;
  } catch (error) {
    alert("Lỗi khi tải thông tin người dùng: " + error.message);
  }
};

const validateUser = () => {
  if (!editingUser.value.name || editingUser.value.age <= 0 || !editingUser.value.email.includes("@")) {
    alert("Thông tin không hợp lệ. Vui lòng kiểm tra lại.");
    return false;
  }
  return true;
};

const updateUser = async () => {
  if (!validateUser()) return;
  try {
    await axios.put(`http://localhost:3000/users/${route.params.id}`, editingUser.value);
    alert("Cập nhật người dùng thành công!");
    router.push("/");
  } catch (error) {
    alert("Lỗi khi cập nhật người dùng: " + error.message);
  }
};


onMounted(fetchUser);
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center mb-4">Sửa Người Dùng</h1>
        <form @submit.prevent="updateUser" class="card shadow p-4">
          <div class="form-group mb-3">
            <label for="name">Họ Tên</label>
            <input
              type="text"
              id="name"
              v-model="editingUser.name"
              class="form-control"
              placeholder="Nhập Họ Tên"
              required
            />
          </div>
          <div class="form-group">
        <label for="age">Tuổi</label>
        <input id="age" type="number" v-model="editingUser.age" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="editingUser.email" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="image">Hình Ảnh</label>
        <input id="image" type="url" v-model="editingUser.image" class="form-control" required />
      </div>
          <div class="d-flex justify-content-between">
            <button type="submit" class="btn btn-primary">Cập Nhật</button>
            <router-link to="/" class="btn btn-secondary">Quay Lại</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-center {
  text-align: center;
}
</style>
