<template>
   <li>
        <input type="checkbox" name="" :id="`todo-item-${content.id}`">
        <label :for="`todo-item-${content.id}`">{{content.text}}</label>
    </li>
</template>

<script setup>
    defineProps({
        content: Object
    })
</script>

<style lang="scss" scoped>

</style>