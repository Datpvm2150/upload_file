<script setup>
// Import đúng từ Vue
import { ref, reactive } from 'vue'

// Khai báo các biến với ref
const name = ref('Nguyên Tuấn Anh')
const point = ref(5)
const active = ref(true)

// In giá trị ra console
console.log(name.value)
console.log(point.value)
console.log(active.value)

// Khai báo đối tượng state sử dụng reactive
const student = reactive({
    name: 'Nguyên Tuấn Anh',
    point: 5,
    active: true
})
</script>

<template>
    <div>
        <!-- Hiển thị dữ liệu từ ref -->
        <h1 class="text-info">{{ name }}</h1>
        <h2>{{ point }}</h2>
        <h2>{{ active ? "đang Học" : "đã Nghỉ" }}</h2>

        <!-- Hiển thị dữ liệu từ reactive object -->
        <h1>{{ student.name }}</h1>
        <h2>{{ student.point }}</h2>
        <h2>{{ student.active ? "đang Học" : "đã Nghỉ" }}</h2>
    </div>
</template>

<style>
/* Thêm các kiểu CSS tại đây nếu cần */

</style>
