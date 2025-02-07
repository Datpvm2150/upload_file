<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute(); // Lấy thông tin `id` từ route

// Dữ liệu người dùng
const userDetails = ref(null);
const isLoading = ref(false);

// Hàm lấy thông tin người dùng chi tiết
const fetchUserDetails = async () => {
  isLoading.value = true;
  try {
    const response = await axios.get(`http://localhost:3000/users/${route.params.id}`);
    userDetails.value = response.data;
  } catch (error) {
    alert("Không tìm thấy người dùng");
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchUserDetails); // Lấy dữ liệu khi component được tải
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h1 class="text-center mb-4">Chi Tiết Người Dùng</h1>
        <div v-if="isLoading" class="text-center">
          <span class="spinner-border"></span> Đang tải...
        </div>
        <div v-else-if="userDetails" class="card shadow p-4">
          <div class="row">
            <div class="col-md-4 text-center">
              <img
                :src="userDetails.image || 'https://via.placeholder.com/150'"
                alt="Ảnh người dùng"
                class="img-thumbnail"
              />
            </div>
            <div class="col-md-8">
              <h2 class="text-primary">{{ userDetails.name }}</h2>
              <p><strong>Tuổi:</strong> {{ userDetails.age || "Không có" }}</p>
              <p><strong>Email:</strong> {{ userDetails.email }}</p>
              
            </div>
          </div>
          <router-link to="/" class="btn btn-secondary mt-3">Quay Lại</router-link>
        </div>
        <div v-else class="alert alert-danger">
          Không tìm thấy thông tin người dùng.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
}
.img-thumbnail {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.text-center {
  text-align: center;
}
</style>
