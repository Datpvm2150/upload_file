<script setup>
import {ref, reactive } from 'vue';
const cousers = reactive([
    {code: "SP1", name: "Sản phẩm 1", img: "", price: 100, soluong: 10, isActive: true},
    {code: "SP2", name: "Sản phẩm 2", img: "", price: 100, soluong: 20, isActive: true},
    {code: "SP3", name: "Sản phẩm 3", img: "", price: 100, soluong: 30, isActive: true},
    {code: "SP4", name: "Sản phẩm 4", img: "", price: 100, soluong: 10, isActive: true},
    {code: "SP5", name: "Sản phẩm 5", img: "", price: 100, soluong: 0, isActive: false},
    
]);
</script>

<template>
<div>
        <table class="table">
            <thead>
                <th>Mã môn</th>
                <th>Tên môn</th>
                <th>Hình ảnh</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Trạng thái</th>
            </thead>
            <tbody v-for="couse in cousers">
                <tr>
                    <td>{{ couse.code }}</td>
                    <td>{{ couse.name }}</td>
                    <td> <img :src= "couse.img || 'https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/home/logo_fpt_text_black.png?extension=webp&modified=20240111094946'" alt=""></td>
                    <td>{{ couse.price }}</td>
                    <td>{{ couse.soluong }}</td>
                    <td>{{ couse.isActive ? "Có hàng" : "Hết hàng" }}</td>
                </tr>
            </tbody>
        </table>
      </div>
</template>