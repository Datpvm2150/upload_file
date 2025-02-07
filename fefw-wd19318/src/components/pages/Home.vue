<script setup>
import { ref, onMounted } from "vue";
import axios from 'axios';
// Khai báo các state
const users = ref([])
const loading = ref(true)
const error = ref(null)

// Call API khi component đc them vào layout
// onMounted(async()=>{
//     try {
//         const response = await axios.get("http://localhost:3000/users")
//         users.value = response.data
//     } catch (err) {
//         error.value = "Lỗi khi tải dữ liệu: " + err.message;
//     } finally {
//         loading.value = false
//     }
// })
const fetchUsers = async  () =>{
    try {
        const response = await axios.get("http://localhost:3000/users");
        users.value = response.data;
    } catch (err) {
        error.value = "Lỗi khi tải  dữ liệu: " + err.message;
    } finally {
        loading.value = false;
    }
};
//Hàm xác  nhận delete user 
const confirmDelete = async (id) => {
    if(window.confirm("Bạn có chắc muốn xóa người dùng này không?")){
        await deleteUser(id);
    }
};

const deleteUser = async (id) =>{
    try {
        await axios.delete(`http://localhost:3000/users/${id}`);

        users.value = users.value.filter((user) => user.id !==id);
        alert("Xóa user thành công.");
    } catch (err) {
        alert("Lỗi khi xóa người dùng" + err.message);
    }
};
onMounted(fetchUsers)

</script>

<template>
<div class="container">
    <h1 class="text-center">Danh sách người dùng</h1>

    <p v-if="loading">Đang cài dữ liệu...</p>

    <p v-if="error">{{ error }}</p>

    <div v-if="!loading && !error">

        <router-link to="/add" class="btn btn-warning">Thêm người dùng</router-link>

        <table class="table table-hover table-stripped">
            <thead>
                <th>STT</th>
                <th>ID</th>
                <th>Họ tên</th>
                <th>Email</th>
            </thead>
            <tbody v-for="(user, index) in users" :key="index">
                <tr>
                    <td>{{ index + 1 }}</td>
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                        <router-link :to="`/edit/${user.id}`" class="btn btn-primary">Sửa</router-link>

                        <button @click="confirmDelete(user.id)" class="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<style scoped>

</style>