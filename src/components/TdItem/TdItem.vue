<template>
   <li>
        <input type="checkbox" name="" :id="`todo-item-${id}`" :value="id">
        <label :for="`todo-item-${id}`">{{text}}</label>
    </li>
</template>

<script setup>
    defineProps({
        id: Number,
        text: String
    })
</script>

<style lang="scss" scoped>

</style>