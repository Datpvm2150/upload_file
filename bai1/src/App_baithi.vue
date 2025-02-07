<script setup>
import { reactive, ref } from 'vue';

const book = reactive({
    tensach: "java",
    tacgia: "Nguyễn Tuấn Anh",
    nam: "2000",
    gia: "200"
})
function tinhTuoiSach() {
    const namHienTai = new Date().getFullYear();
    const tuoiSach = namHienTai - parseInt(book.nam);
    // parseInt chuyển chuỗi thành số nguyên
    alert(`Tuổi của cuốn sách là ${tuoiSach} năm.`);
}

const thuVien = reactive([
    { tensach: "php", tacgia: "Nguyễn Tuấn Anh", nam: "2005" },
    { tensach: "java", tacgia: "Nguyễn Tuấn Em", nam: "2005" },
    { tensach: "hóa học", tacgia: "Nguyễn Tuấn Tú", nam: "2004" },
    { tensach: "vật lý", tacgia: "Nguyễn Văn tú", nam: "2006" },
]);

function hienThiThongTinSach(sach) {
    alert(`Tên sách: ${sach.tensach}\nTác giả: ${sach.tacgia}`);
}

</script>

<template>
    
        <div class="container text-warning">
            <table class="table table-dark table-striped text-warning">
            <thead>
                <tr>
                    <th class="text-warning">key</th>
                    <th class="text-warning">value</th>
                </tr>
            </thead>
            <tbody v-for="(value, index) in book" :key="index">
                <tr>
                    <td class="text-success">{{ index }}</td>
                    <td class="text-success">{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <br>
    <input type="text" v-model="book.gia">
    <br>
    <button @click="tinhTuoiSach" class="btn btn-info">Tính tuổi sách</button>
    <br>

    <div class="container">
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
    </div>
    
    
</template>


<style>




</style>