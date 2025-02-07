<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// Sử dụng router để điều hướng
const router = useRouter();

// Tạo một đối tượng người dùng mới với các trường mặc định
const newUser = ref({
  name: "",
  age: null,
  email: "",
  image: "",
});

// Hàm thêm người dùng
const addUser = async () => {
  try {
    // Kiểm tra dữ liệu hợp lệ trước khi gửi
    if (!newUser.value.name || !newUser.value.email || !newUser.value.age || !newUser.value.image) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    await axios.post("http://localhost:3000/users", newUser.value);
    alert("Thêm người dùng thành công!");
    router.push("/");
  } catch (error) {
    alert("Lỗi khi thêm người dùng: " + error.message);
  }
};
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center mb-4">Thêm Người Dùng</h1>
        <form @submit.prevent="addUser" class="card shadow p-4">
          <div class="form-group mb-3">
            <label for="name">Họ Tên</label>
            <input
              type="text"
              id="name"
              v-model="newUser.name"
              class="form-control"
              placeholder="Nhập Họ Tên"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label for="age">Tuổi</label>
            <input
              type="number"
              id="age"
              v-model="newUser.age"
              class="form-control"
              placeholder="Nhập Tuổi"
              required
              min="1"
            />
          </div>
          <div class="form-group mb-3">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="newUser.email"
              class="form-control"
              placeholder="Nhập Email"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label for="image">Hình Ảnh (URL)</label>
            <input
              type="url"
              id="image"
              v-model="newUser.image"
              class="form-control"
              placeholder="Nhập URL Hình Ảnh"
              required
            />
          </div>
          <div class="d-flex justify-content-between">
            <button type="submit" class="btn btn-success">Thêm</button>
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
