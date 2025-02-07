<script setup>
import {ref} from 'vue';
const score = ref(0)

const addScore = ()=>{
    score.value++;
}
</script>

<template>
<button @click="addScore" class="btn btn-danger">Bạn đã click: {{ score }} lần</button>
</template>

<style scoped>

</style>