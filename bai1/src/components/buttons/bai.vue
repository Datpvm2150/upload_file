<script setup>
import { reactive, ref } from 'vue';
const bai1 = ref(false)
const bai11 = ()=>{
    bai1.value = !bai1.value
}
</script>

<template>
    
    <button @click="bai11" class="btn btn-info">bài 1</button>
    
</template>

<style scoped>

</style>