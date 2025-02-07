<script setup>
import { reactive, ref } from 'vue';

const score = ref(7)

const isActive = ref(true)
const swap = ()=>{
    isActive.value = !isActive.value;
}

//v-for

const student = reactive(["Nguyễn Tuấn Anh","Nguyễn Tuấn Em",">>>>>"]);

const tanh = reactive({
    name: "Tuấn Anh",
    tuoi: "18",
    trangthai: "Độc Thân"
})

// mảng gồm nhiều obj
const mang = reactive([
    {id: 1, name: "Anh 1", score: 7},
    {id: 2, name: "Anh 2", score: 8},
    {id: 3, name: "Anh 3", score: 9},
    {id: 4, name: "Anh 4", score: 10},
])

// bài tập
const sp = reactive([
    {name: "anh1",img: "https://img5.thuthuatphanmem.vn/uploads/2021/11/09/anh-do-an-dep-nhat_095144754.jpg",
    soluong: "1",price: "99",mota: "đẹp"},
    {name: "anh1",img: "https://img5.thuthuatphanmem.vn/uploads/2021/11/09/anh-do-an-dep-nhat_095144754.jpg",
    soluong: "1",price: "99",mota: "đẹp"},
    {name: "anh1",img: "https://img5.thuthuatphanmem.vn/uploads/2021/11/09/anh-do-an-dep-nhat_095144754.jpg",
    soluong: "1",price: "99",mota: "đẹp"},
    {name: "anh1",img: "https://img5.thuthuatphanmem.vn/uploads/2021/11/09/anh-do-an-dep-nhat_095144754.jpg",
    soluong: "1",price: "99",mota: "đẹp"},
    
])
</script>

<template>
    <div class="border border-info">
        <h1>trạng thái điểm</h1>
        <p v-if="score>=9">giỏi😎</p>
        <p v-else-if="score>=7">Khá😊</p>
        <p v-else-if="score>=5">trung bình😁</p>
        <p v-else>yếu😒</p>
        <input type="text" v-model="score">
    </div>
    <br>
    <br>
    <!-- v-show -->
     <div class="container">
        <button @click="swap" class="btn btn-info"> {{ isActive ? "ẩn":"hiện" }} Thông báo</button>
     </div>
     <br>
     <br>
     <div v-show="isActive" class="alert alert-success" role="alert">
        <p>Thông Báo Thành Công</p>
     </div>
     <div v-show="!isActive" class="alert alert-warning" role="alert">
        <p>Ẩn Thông Báo Thành Công</p>
     </div>

     <br>
     <div v-if="isActive" class="alert alert-success" role="alert">
        <p>Thông Báo Thành Công</p>
     </div>
     <div v-if="!isActive" class="alert alert-warning" role="alert">
        <p>Ẩn Thông Báo Thành Công</p>
     </div>

     <br>
    <div class="container">
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>NAME</th>
                </tr>
            </thead>
            <tbody v-for="(student, index) in student" :key="index">
                <tr>
                    <td>{{ index + 1 }}</td>
                    <td>{{ student }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="container">
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>key</th>
                    <th>value</th>
                </tr>
            </thead>
            <tbody v-for="(value, index) in tanh" :key="index">
                <tr>
                    <td>{{ index }}</td>
                    <td>{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    

    <!-- v-for <template> -->
    
    <div class="container">
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>id</th>
                    <th>name</th>
                    <th>Điểm</th>
                </tr>
            </thead>
            <tbody v-for="(mang, index) in mang" :key="index">
                <tr>
                    <td>{{ index + 1 }}</td>
                    <td>{{ mang.id }}</td>
                    <td>{{ mang.name }}</td>
                    <td>{{ mang.score }}</td>
                </tr>
            </tbody>
        </table>
    </div>
<br>
<div class="container">
    <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th>STT</th>
                <th>TÊN</th>
                <th>ẢNH</th>
                <th>SỐ LƯỢNG</th>
                <th>GIÁ</th>
                <th>MÔT TẢ</th>
            </tr>
        </thead>
        <tbody v-for="(sanpham, index) in sp" :key="index">
            <tr>
                <td>{{ index + 1 }}</td>
                <td>{{ sanpham.name }}</td>
                <td><img :src="sanpham.img" alt="" width="100px"></td>
                
                <td>{{ sanpham.soluong }}</td>
                <td>{{ sanpham.price }}</td>
                <td>{{ sanpham.mota }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>


<style>


</style>