<template>
     <input type="checkbox" name="" :id="`todo-item-${id}`" :value="id">
     <label :for="`todo-item-${id}`">{{text}}</label>
</template>

<script setup>
    defineProps({
        id: Number,
        text: String
    })
</script>

<style lang="scss" scoped>

</style>