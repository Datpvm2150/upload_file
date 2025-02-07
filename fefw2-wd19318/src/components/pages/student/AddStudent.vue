<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const newStudent = ref({
  name: "",
  age: "",
  email: "",
  image: "",
});

const addStudent = async () => {
  try {
    // Kiểm tra đầu vào trước khi gửi yêu cầu
    if (!newStudent.value.name || !newStudent.value.age || !newStudent.value.email || !newStudent.value.image) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    await axios.post("http://localhost:3000/students", newStudent.value);
    alert("Thêm sinh viên thành công!");
    router.push("/");
  } catch (err) {
    alert("Lỗi khi thêm sinh viên: " + err.message);
  }
};
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center mb-4">Thêm Sinh Viên</h1>
        <form @submit.prevent="addStudent" class="card shadow p-4">
          <div class="form-group mb-3">
            <label for="name">Họ Tên</label>
            <input
              type="text"
              id="name"
              v-model="newStudent.name"
              class="form-control"
              placeholder="Nhập họ tên"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label for="age">Tuổi</label>
            <input
              type="number"
              id="age"
              v-model="newStudent.age"
              class="form-control"
              placeholder="Nhập tuổi"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="newStudent.email"
              class="form-control"
              placeholder="Nhập email"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label for="image">Hình Ảnh</label>
            <input
              type="url"
              id="image"
              v-model="newStudent.image"
              class="form-control"
              placeholder="Nhập URL hình ảnh"
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

</style>
