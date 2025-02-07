<script setup>
import {ref, reactive} from "vue"

const name = ref("Pham Van Manh Dat")

const old = ref(20)

const lop = ref("WD19318")

const gpa = ref(4)

const tinhNam = ()=>{
    const tinhNamSinh =  2024 - old.value
    alert(tinhNamSinh)
}

const sinhviens = reactive([
                {name : "Nguyễn Đức Anh", old : 20 , lop : "WD19318" , gpa : 4  }, 
                {name : "Nguyễn Quang Nam", old : 20 , lop : "WD19318" , gpa : 4 }, 
                {name : "Phạm Văn Mạnh Đạt", old : 20 , lop : "WD19318" , gpa : 4 },
            ]);

const hienThiSV = (sinhvien) =>{
    alert('Sinh vien ten:' + sinhvien.name + 'GPA la:' + sinhvien.gpa)
}
</script>

<template>
<h1>Tên: {{ name }}</h1>  <br>

<input type="text" v-model="name"><br>

<h2>Tuổi: {{ old }}</h2> <br>

<h3>Lớp: {{ lop }}</h3> <br>

<h4>GPA: {{ gpa }}</h4> <br>

<button @click="tinhNam" class="btn btn-success">Tính Năm Sinh</button> <br>

<div>
    <table class="table">
        <thead>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Lớp</th>
            <th>GPA</th>
            <th>Button</th>
        </thead>
        <tbody v-for="sinhvien in sinhviens">
            <tr>
                <td>{{ sinhvien.name }}</td>
                <td>{{ sinhvien.old }}</td>
                <td>{{ sinhvien.lop }}</td>
                <td>{{ sinhvien.gpa }}</td>
                <td><button @click="hienThiSV(sinhvien)" class="btn btn-success">Hiển thị</button></td>
            </tr>
        </tbody>
    </table>
</div>
</template>