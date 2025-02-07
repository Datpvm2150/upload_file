<script setup>
import { ref, computed } from 'vue';

// Khai báo đối tượng sinh viên
const student = ref({
    name: "Nguyễn Tuấn Anh",
    age: 20,
    class: "CNTT 1",
    gpa: 3.6
});

// Tính toán năm sinh
const tinhnamsinh = computed(() => {
    const namhientai = new Date().getFullYear();
    return namhientai - student.value.age;
});

// Popup trạng thái hiển thị GPA và năm sinh
const showGpaPopup = ref(false);
const showYearPopup = ref(false);

// Đóng popup
function closePopup() {
    showGpaPopup.value = false;
    showYearPopup.value = false;
}
</script>

<template>
    <h2>Thông tin sinh viên</h2>
    
    <!-- Hiển thị thông tin sinh viên -->
    <div>
        <p><strong>Họ tên:</strong> {{ student.name }}</p>
        <p><strong>Tuổi:</strong> {{ student.age }}</p>
        <p><strong>Lớp học:</strong> {{ student.class }}</p>
    </div>

    <!-- Ô input để thay đổi họ tên sinh viên -->
    <label for="name">Thay đổi họ tên:</label>
    <input v-model="student.name" id="name" class="form-control mb-3" placeholder="Nhập họ tên mới" />

    <!-- Nút hiển thị GPA dưới dạng popup -->
    <button @click="showGpaPopup = true" class="btn btn-info mb-2">Hiển thị GPA</button>

    <!-- Nút hiển thị năm sinh dưới dạng popup -->
    <button @click="showYearPopup = true" class="btn btn-info">Hiển thị năm sinh</button>

    <!-- Popup hiển thị GPA -->
    <div v-if="showGpaPopup" class="popup">
        <p><strong>Điểm GPA:</strong> {{ student.gpa }}</p>
        <button @click="closePopup" class="btn btn-secondary">Đóng</button>
    </div>

    <!-- Popup hiển thị năm sinh -->
    <div v-if="showYearPopup" class="popup">
        <p><strong>Năm sinh:</strong> {{ tinhnamsinh }}</p>
        <button @click="closePopup" class="btn btn-secondary">Đóng</button>
    </div>
</template>

<style>
.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    z-index: 1000;
}
</style>
