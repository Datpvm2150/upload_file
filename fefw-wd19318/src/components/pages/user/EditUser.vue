<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const router = useRouter();

const editingUser = ref({
    name: "",
    email: "",
});


const fetchUser = async () =>{
    try {

        const response = await axios.get(`http://localhost:3000/users/${route.params.id}`);
        
        editingUser.value = response.data;

    } catch (err) {

        alert("Lỗi khi tải người dùng: " + err.message);

    }
};
const updateUser = async () =>{
    try {
        await axios.put(`http://localhost:3000/users/${route.params.id}`, editingUser.value);
        alert("Cập nhật người dùng thành công!");
        router.push("/");
    } catch (err) {
        alert("Lỗi khi cập nhật người dùng: " + err.message);
    }
};

onMounted(fetchUser);
</script>

<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h1 class="text-center mb-4">Sửa người dùng</h1>
                <form @submit.prevent="updateUser" class="card shadow p-4">
                    <div class="form-group mb-3">
                        <label for="name">Họ tên</label>
                        <input type="text" id="name" v-model="editingUser.name" class="form-control" placeholder="Nhập họ tên" required>
                    </div>
                    <div class="form-group mb-3">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="editingUser.email" class="form-control" placeholder="Nhập email" required>
                    </div>
                    <div class="d-flex justify-content-between">
                        <button type="submit" class="btn btn-success">Cập nhật</button>
                        <router-link to="/" class="btn btn-secondary">Quay lại</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<style scoped>
</style>