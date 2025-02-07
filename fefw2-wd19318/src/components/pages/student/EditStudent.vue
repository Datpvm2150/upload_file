<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();

const editingStudent = ref({
  name: "",
  age: "",
  email: "",
  image: "",
});

const fetchStudent = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/students/${route.params.id}`);
    editingStudent.value = response.data;
  } catch (err) {
    alert("Lỗi khi tải thông tin sinh viên: " + err.message);
  }
};

const updateStudent = async () => {
  try {
    await axios.put(`http://localhost:3000/students/${route.params.id}`, editingStudent.value);
    alert("Cập nhật sinh viên thành công!");
    router.push("/");
  } catch (err) {
    alert("Lỗi khi cập nhật sinh viên: " + err.message);
  }
};

onMounted(fetchStudent);
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center mb-4">Sửa Sinh Viên</h1>
        <form @submit.prevent="updateStudent" class="card shadow p-4">
          <div class="form-group mb-3">
            <label for="name">Họ Tên</label>
            <input
              type="text"
              id="name"
              v-model="editingStudent.name"
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
              v-model="editingStudent.age"
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
              v-model="editingStudent.email"
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
              v-model="editingStudent.image"
              class="form-control"
              placeholder="Nhập URL hình ảnh"
              required
            />
          </div>
          <div class="d-flex justify-content-between">
            <button type="submit" class="btn btn-success">Cập Nhật</button>
            <router-link to="/" class="btn btn-secondary">Quay Lại</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
