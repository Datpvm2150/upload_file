<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const newUser = ref({ name: "", email: ""});

const addUser = async () =>{
    try {
        await axios.post("http://localhost:3000/users", newUser.value);
        alert("Thêm người dùng thành công!");
        router.push("/");
    } catch (err) {
        alert("Lỗi khi thêm người dùng: " + err.message);
    }
};

</script>

<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h1 class="text-center mb-4">Thêm người dùng</h1>
                <form @submit.prevent="addUser" class="card shadow p-4">
                    <div class="form-group mb-3">
                        <label for="name">Họ tên</label>
                        <input type="text" id="name" v-model="newUser.name" class="form-control" placeholder="Nhập họ tên" required>
                    </div>
                    <div class="form-group mb-3">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="newUser.email" class="form-control" placeholder="Nhập email" required>
                    </div>
                    <div class="d-flex justify-content-between">
                        <button type="submit" class="btn btn-success">Thêm</button>
                        <router-link to="/" class="btn btn-secondary">Quay lại</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>