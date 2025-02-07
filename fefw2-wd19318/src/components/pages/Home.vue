<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// Khai báo các state
const students = ref([]);
const loading = ref(true);
const error = ref(null);

// Gọi API khi component được mount
const fetchStudents = async () => {
  try {
    const response = await axios.get("http://localhost:3000/students");
    students.value = response.data;
  } catch (err) {
    error.value = "Lỗi khi tải dữ liệu: " + err.message;
  } finally {
    loading.value = false;
  }
};

// Hàm xác nhận xóa student
const confirmDelete = async (id) => {
  if (window.confirm("Bạn có chắc muốn xóa sinh viên này không?")) {
    await deleteStudent(id);
  }
};

// Hàm xóa student
const deleteStudent = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/students/${id}`);
    students.value = students.value.filter((student) => student.id !== id);
    alert("Xóa sinh viên thành công.");
  } catch (err) {
    alert("Lỗi khi xóa sinh viên: " + err.message);
  }
};

onMounted(fetchStudents);
</script>

<template>
  <div class="container">
    <h1 class="text-center">Danh sách sinh viên</h1>

    <p v-if="loading">Đang tải dữ liệu...</p>
    <p v-if="error">{{ error }}</p>

    <div v-if="!loading && !error">
      <router-link to="/add" class="btn btn-warning mb-3">Thêm sinh viên</router-link>

      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Email</th>
            <th>Hình ảnh</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ student.id }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.age }}</td>
            <td>{{ student.email }}</td>
            <td>
              <img :src="student.image" alt="Ảnh sinh viên" class="student-image" style="width: 50px; height: 50px; object-fit: cover;">
            </td>
            <td>
              <router-link :to="`/students/${user.id}`" class="btn btn-info btn-sm">Xem</router-link>
              <router-link :to="`/edit/${student.id}`" class="btn btn-primary">Sửa</router-link>
              <button @click="confirmDelete(student.id)" class="btn btn-danger">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>

</style>
