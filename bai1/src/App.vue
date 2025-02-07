<!-- // Thành phần gốc của  project (root component)
// đay là thành phần đầu tiên khi khởi tạo app vue
// App.vue  đc  truyền vào hàm creatapp trong file node.js dể tạo ứng dụng -->
<script setup>
// code js sẽ viết ở đây
const name = "Tuấn anh"
const gender = "nam"

</script>

<template>
  <!-- // code html xẽ viết ở đây -->
   <main>
    <header>
      <ul>
        <li><a href="trangchu.html">Trang Chủ</a></li>
        <li><a href="">Liên Hệ</a></li>
        <li><a href="">Giới Thiệu</a></li>
        <li><a href="">Cửa Hàng</a></li>
      </ul>
    </header>
   </main>
  <br>
  <h1 class="text-warning">xin chào các bạn</h1>
  <br>
  <h2 class="text-denger">{{ name }} <br> giới tính: {{ gender }}</h2>
</template>

<style>
/* code scc sẽ viết ở đây */
*{
  color: rgb(28, 190, 169);
}
h1{
  color: rgb(255, 200, 49);
}
</style>