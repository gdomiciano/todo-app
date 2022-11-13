<script setup>
    import  TheHeader  from '../components/TheHeader.vue'
    import  TheColumn  from '../components/TheColumn.vue'

    let addBtnText = 'Add Item'
    let addInputPlaceholder = 'write your todo item...'
    const statuses = ['todo', 'progress', 'done'];
</script>

<template>
<main>
    <TheHeader />
    <hr>
    <input type="text" name="add" id="add" :placeholder="addInputPlaceholder" v-model="itemValue">
    <button>{{addBtnText}}</button>
    <hr>
    <TheColumn v-for="(status, index) in statuses" :key="index" :title="status" />
</main>
</template>

<style scoped>


</style>