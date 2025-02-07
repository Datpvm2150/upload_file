<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

// Lấy thông tin từ route và router
const route = useRoute();
const router = useRouter();

// Biến lưu thông tin sinh viên và trạng thái tải
const student = ref(null);
const isLoading = ref(false);

// Hàm tải thông tin sinh viên
const fetchStudent = async () => {
  isLoading.value = true;
  try {
    const response = await axios.get(`http://localhost:3000/students/${route.params.id}`);
    student.value = response.data;
  } catch (err) {
    alert("Không tìm thấy sinh viên: " + err.message);
    router.push("/"); // Quay lại trang danh sách nếu không tìm thấy
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchStudent);
</script>

<template>
  <div class="student-detail">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div v-if="isLoading" class="loading text-center">
            <span class="spinner-border"></span> Đang tải thông tin...
          </div>
          <div v-else-if="student" class="card shadow-lg p-4">
            <div class="row">
              <div class="col-md-4 text-center">
                <img
                  :src="student.image"
                  alt="Ảnh sinh viên"
                  class="student-image"
                />
              </div>
              <div class="col-md-8">
                <h2 class="student-name">{{ student.name }}</h2>
                <p><strong>Tuổi:</strong> {{ student.age }}</p>
                <p><strong>Email:</strong> {{ student.email }}</p>
              </div>
            </div>
            <div class="text-end mt-4">
              <router-link to="/" class="btn btn-secondary">Quay lại</router-link>
            </div>
          </div>
          <div v-else class="alert alert-danger">
            Không tìm thấy thông tin sinh viên.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
