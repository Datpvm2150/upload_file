<script setup>
import { reactive, ref } from 'vue';

import Sidebar from './components/blocks/Sidebar.vue';
import Footer from './components/blocks/Footer.vue';
import addButton from './components/buttons/addButton.vue';
import Header from './components/blocks/Header.vue';
import ds from './components/table/ds.vue';

const bai1 = ref(true)
const swap = ()=>{
    bai1.value = !bai1.value;
}
</script>

<template>

    <Header />

    <div class="container-fluid">
        <div class="row">
            <!-- Sidebar -->
            <Sidebar />
            <main class="col-9 bg-warning">
                <!-- Content -->
                
                <div class="container">
                    <RouterView></RouterView>
                </div>
                
            </main>
        </div>
    </div>

    <Footer />

</template>