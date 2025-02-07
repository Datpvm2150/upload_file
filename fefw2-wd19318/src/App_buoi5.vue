<script setup>
import {ref, reactive } from "vue";

const score = ref(5)

const isActive = ref(true)
//Hàm đảo ngược giá trị hiện tại của isActive 
const swap = ()=>{
    isActive.value = !isActive.value
}
//v for mang
const students = reactive(["Nguyễn Đức Anh", "Nguyễn Quang Nam", "Phạm Văn Mạnh Đạt"]);

//v for obj
const teachers = reactive({
    name : "Hà Thành",
    country: "Hà Nội",
    gender: "Nữ"
});

//v for template
const cousers = reactive([
    {name: "FEFW", code: "WEB2072", isActive: true},
    {name: "DỰ ÁN 1", code: "WD19318", isActive: true},
    {name: "LẬP TRÌNH PHP2", code: "WEB2014", isActive: true},
    {name: "LẬP TRÌNH PHP3", code: "WEB4012", isActive: false},
]);

</script>

<template>
    <div class="container">
        <h1>Tình trạng học lực: {{ score }} điểm </h1>
        <!-- <h2 v-if="score>=5">Đã qua môn</h2>
        <h3 v-else>Đã trượt</h3> -->

        <h2 v-if="score>=9">Xuất Sắc</h2>
        <h2 v-else-if="score>=8">Giỏi</h2>
        <h2 v-else-if="score>=7">Khá</h2>
        <h2 v-else-if="score>=5">Trung Bình</h2>
        <h3 v-else>Đã trượt</h3>
        <input type="number" step="any" v-model="score">
    </div>

    <!-- So sánh v-show và v-if -->
     <div class="container">
        <button @click="swap" class="btn btn-success">
            {{ isActive ? 'Ẩn' : 'Hiện' }} thông báo
        </button>

        <!-- thông báo của v-show -->
         <div v-show="isActive" class="alert alert-success">
            Trạng thái isActive = true
         </div>
         <div v-show="!isActive" class="alert alert-warning">
            Trạng thái isActive = false 
         </div>

        <!-- thông báo của v-if -->
        <div v-if="isActive" class="alert alert-success">
            Trạng thái isActive = true
         </div>
         <div v-if="!isActive" class="alert alert-warning">
            Trạng thái isActive = false 
         </div>
     </div>

     <!-- v for mang -->
      <div>
        <table class="table">
            <thead>
                <th>STT</th>
                <th>Họ tên</th>
            </thead>
            <tbody v-for="(student, index) in students" :key="index">
                <tr>
                    <td>{{ index+1 }}</td>
                    <td>{{ student }}</td>
                </tr>
            </tbody>
        </table>
      </div>

      <!-- v for obj -->
      <div>
        <table class="table">
            <thead>
                <th>Key</th>
                <th>Value</th>
            </thead>
            <tbody v-for="(value, key) in teachers" :key="key">
                <tr>
                    <td>{{ key }}</td>
                    <td>{{ value }}</td>
                </tr>
            </tbody>
        </table>
      </div>

      <!-- v for template -->
      <div>
        <table class="table">
            <thead>
                <th>Tên môn</th>
                <th>Mã môn</th>
                <th>Trạng thái</th>
            </thead>
            <tbody v-for="couse in cousers">
                <tr>
                    <td>{{ couse.name }}</td>
                    <td>{{ couse.code }}</td>
                    <td>{{ couse.isActive ? "Đã học" : "Chưa học" }}</td>
                </tr>
            </tbody>
        </table>
      </div>
</template>
