<script setup>
import {ref} from "vue"
const name = ref("Pham Van Manh Dat")
const tuoi = ref(20)
const lophoc = ref("Wd19318")
const gpa = ref(4)

const hoTen = ()=>{
    alert("Pham Van Manh Dat")
}

const namSinh = ()=>{
    alert("2005")
}


</script>

<template>
<h1>Ten: {{name}}</h1> <br>
<input type="text" v-model="name"> <br>
<h2>Tuoi:{{tuoi}}</h2> <br>
<h3>Lop: {{lophoc}}</h3> <br>
<h4>GPA: {{gpa}}</h4> <br>
<button @click="hoTen">Ho va ten</button> <br>
<button @click="namSinh">Nam sinh</button> 
</template>

<style scoped>

</style>