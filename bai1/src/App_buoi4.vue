<script setup>
import { ref,reactive } from 'vue';


const name = ref("Nguyễn Tuấn Anh")

// Binding Sự KIện
function trangname(){
    name.value= "Nguyễn Tuấn Em"
}

//Binding Thuộc Tính
// - Cú pháp: <element v-binding:atttribute = "datavalue"></element>
// - Rút gọn: <element :atttribute = "datavalue"></element>
const avatar = ref("https://www.pixelstalk.net/wp-content/uploads/2016/03/Cool-Luffy-One-Piece-Wallpaper-HD-Anime.jpg")
function changeImg() {
    avatar.value = "https://images.search.yahoo.com/images/view;_ylt=Awr99USHUTFnek0JuCiJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2IyOWI3MmRmNjI0NzdkYjg1OWIxNWNlMDIzYWM0YTc1BGdwb3MDMjkEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3DOne%2BPiece%26type%3DE210US91215G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D29&w=1920&h=1374&imgurl=www.gratistodo.com%2Fwp-content%2Fuploads%2F2021%2F07%2FOne-Piece-Wallpapers-14.jpg&rurl=https%3A%2F%2Fwww.gratistodo.com%2Fone-piece-wallpapers%2F&size=489KB&p=One+Piece&oid=b29b72df62477db859b15ce023ac4a75&fr2=piv-web&fr=mcafee&tt=Fondos+de+pantalla+One+Piece%2C+Wallpapers+HD+de+la+serie+manga&b=0&ni=21&no=29&ts=&tab=organic&sigr=X8sgJ7OlHsBv&sigb=XP76_PkGXBu_&sigi=m9Fa1F4RRmIJ&sigt=19AGACASzWEZ&.crumb=u9rqCXeTgS8&fr=mcafee&fr2=piv-web&type=E210US91215G0"
}

// binding 2 chieu
// sử dụng v-model


//bài tập

// Khai báo đối tượng sinh viên

</script>

<template>
    <h2>Buổi 4</h2>
    <div class="d-flex flex-row mb-3">
        <h2 class="p-2">{{ name }}</h2>
        <div class="p-2">
            <button @click="trangname" class="btn btn-outline-info" >Edit tên</button>
        </div>
        
    </div>

    <div class="d-flex flex-row mb-3">
        <img v-bind:src="avatar" alt="" class="img-fluid p-2">
        <div class="p-2">
            <br>
            <button @click="changeImg" class="btn btn-outline-info">Đổi ảnh</button>
        </div>
        
    </div>
     <!-- binding 2 chieu -->
    <input type="text" v-model="name">

        <!-- Binding class và style
        1. v-bind:class    : dùng để binding các lớp css
        2. v-bind:style    : dùng để binding các lớp css live cho phần tử -->
    <div v-bind:class="'active'">{{ name }}</div>

    
    
    


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