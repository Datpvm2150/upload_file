<script setup>
import { reactive, ref } from 'vue';
const thuVien = reactive([
    { tensach: "php", tacgia: "Nguyễn Tuấn Anh", nam: "2005" },
    { tensach: "java", tacgia: "Nguyễn Tuấn Em", nam: "2005" },
    { tensach: "hóa học", tacgia: "Nguyễn Tuấn Tú", nam: "2004" },
    { tensach: "vật lý", tacgia: "Nguyễn Văn tú", nam: "2006" },
]);
</script>

<template>
    <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th class="text-warning">Tên sách</th>
                    <th class="text-warning">Tác giả</th>
                    <th class="text-warning">Năm xuất bản</th>
                    <th class="text-warning">Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(sach, index) in thuVien" :key="index">
                    <td class="text-success">{{ sach.tensach }}</td>
                    <td class="text-success">{{ sach.tacgia }}</td>
                    <td class="text-success">{{ sach.nam }}</td>
                    <td><button @click="hienThiThongTinSach(sach)" class="btn btn-info">Hiển thị thông tin</button></td>
                </tr>
            </tbody>
        </table>
</template>