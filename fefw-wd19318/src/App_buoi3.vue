<script setup>
// const point = 0
import { ref , reactive} from "vue"

    // ref() trong vuejs
    const point = ref(0)

    const addPoint = ()=>{
        point.value++ ;
    }
    const name = ref("Nguyễn Quang Nam")
    const reName = ()=>{
        name.value = 'Phạm Văn Mạnh Đạt';
    }


    // reactive trong vuejs

    const state=reactive({
        point:0,
        name:"Nguyễn Đức Anh"
    })

    const addPoint1=()=>{
        state.point++ ;

    }

    const reName1=()=>{
        state.name="Phạm Văn Mạnh Đạt";
    }
    
</script>
<template>
<div class="container">
    <h1>Điểm của tôi là :{{ point }}</h1>
    <button @click="addPoint" class="btn btn-success"> Thêm 1 điểm</button>

    <h1>Tên tôi là : {{ name }}</h1>
    <button @click="reName" class="btn btn-warning">Đổi tên</button>


    <h1>Điểm của tôi là :{{ state.point }}</h1>
    <button @click="addPoint1" class="btn btn-success"> Thêm 1 điểm</button>

    <h1>Tên tôi là : {{ state.name }}</h1>
    <button @click="reName1" class="btn btn-warning">Đổi tên</button>
</div>
</template>