<script setup>
import { reactive, ref } from 'vue';

const book = reactive({
    tensach: "java",
    tacgia: "Nguyễn Tuấn Anh",
    nam: "2000",
    gia: "200"
})
</script>

<template>

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
</template>

<style scoped>

</style>