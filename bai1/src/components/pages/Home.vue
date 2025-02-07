<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// Khai báo các state
const users = ref([]);
const loading = ref(true);
const error = ref(null);

// Hàm tải danh sách người dùng
// const fetchUsers = async () => {
//   try {
//     const response = await axios.get("http://localhost:3000/users");
//     users.value = response.data;
//   } catch (err) {
//     error.value = "Lỗi khi tải API: " + err.message;
//   } finally {
//     loading.value = false;
//   }
// };

const fetchUsers = async ()=>{
  try {
    const kiemtra = await axios.get("http://localhost:3000/users");
    users.value = kiemtra.data;
  } catch (error) {
    alert("thất bại");
  } finally{
    loading.value = false;
  }
  
}
// Hàm xác nhận và xóa người dùng
// const confirmDelete = async (id) => {
//   const confirm = window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?");
//   if (confirm) {
//     try {
//       await axios.delete(`http://localhost:3000/users/${id}`);
//       users.value = users.value.filter((user) => user.id !== id);
//       alert("Xóa người dùng thành công!");
//     } catch (err) {
//       alert("Lỗi khi xóa người dùng: " + err.message);
//     }
//   }
// };

const confirmDelete = async (id) => {
  const confirm = window.confirm("Bạn chắc muốn xóa chứ");
  if (confirm) {
    loading.value = true;  
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      users.value = users.value.filter((user) => user.id !== id);
      alert("Xóa thành công");
    } catch (error) {
      alert("Lỗi khi xóa người dùng: " + error.message);
    } finally {
      loading.value = false;  
    }
  }
}


// Gọi API khi component được mount
onMounted(fetchUsers);
</script>

<template>
  <div class="container">
    <h1 class="text-center">DANH SÁCH Sinh Viên</h1>

    <p v-if="loading">Đang tải dữ liệu...</p>
    <p v-if="error">{{ error }}</p>

    <div v-if="!loading && !error">
      <router-link to="/add" class="btn btn-success">Thêm người dùng</router-link>
      <table class="table table-hover table-striped table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Email</th>
            <th>Hình ảnh</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <td>{{ index + 1 }}</td>
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.email }}</td>
            <td>
              <img :src="user.image" alt="Ảnh sinh viên" class="img-thumbnail" />
            </td>
            <td>
              <router-link :to="`/edit/${user.id}`" class="btn btn-primary btn-sm">Sửa</router-link>
              <router-link :to="`/show/${user.id}`" class="btn btn-info btn-sm">Xem</router-link>
              <button class="btn btn-danger btn-sm" @click="confirmDelete(user.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.text-center {
  text-align: center;
}
.img-thumbnail {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  max-width: 100px;
  height: auto;
  object-fit: cover;
}
</style>
