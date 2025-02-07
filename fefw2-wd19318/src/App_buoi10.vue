<script setup>
import Header from './components/blocks/Header.vue';
import Sidebar from './components/blocks/Sidebar.vue';
import Footer from './components/blocks/Footer.vue';
</script>

<template>
<header class="bg-info text-center py-3">
    <Header></Header>
</header>
<div class="row">
    <aside class="col-3 bg-warning">
        <Sidebar></Sidebar>
    </aside>
    <main class="col-9 bg-success">
        <RouterView></RouterView>
    </main>
</div>
<footer class="bg-dark text-light text-center py-3">
    <Footer></Footer>
</footer>
</template>

<style scoped>

</style>