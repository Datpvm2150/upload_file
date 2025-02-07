<script setup>
import {ref, computed} from "vue"

//binding 1 chieu
    //binding nội suy
    const name = ref("Phạm Văn Mạnh Đạt")

    const tuoi = ref(10)

    const themTuoi = ()=>{
        tuoi.value++;
    }

    const tinhTuoi = computed(()=>2024 - tuoi.value)
    // console.log(tinhTuoi.value)

    const imgurl = ref("https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/home/logo_fpt_text_black.png?extension=webp&modified=20240111094946")
    const styleTuoi = ref({color:'white', backgroundColor:'blue'})
</script>


<template>
<div class="container">
    <!-- binding nội suy -->
     <div v-bind:class="'setName'">
        <h1>Tên: {{ name }}</h1>
    </div>

    <!-- binding 2 chiều -->
     <input type="text" v-model="name">

     <div :style="{color:'white', backgroundColor:'blue'}">
        <h2>Tuổi: {{ tuoi }}</h2>
     </div>

     <div :style="styleTuoi">
        <h2>Tuổi: {{ tuoi }}</h2>
     </div>

     <h3>Năm sinh: {{ tinhTuoi }}</h3>
     <input type="text" v-model="tuoi">
     
     <!-- Binding thuộc tính -->
     <!-- <img v-bind:src="imgurl" alt="">  -->
     <!-- hoặc -->
     <img :src="imgurl" alt=""> <br>

     <!-- Binding sự kiện -->
      <button @click="themTuoi" class="btn btn-primary">Thêm tuổi</button>
</div>
</template>

<style scoped>
.setName{
    background-color: red;
    color: #fff;
    padding: 15px;
}
</style>