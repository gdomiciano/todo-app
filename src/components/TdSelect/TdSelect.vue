<template>
    <select class="header__lang">
        <option v-for="option in options" :key="option.value" :value="option.value">{{option.name}}</option>
    </select>
</template>

<script setup>
defineProps({
    options: {
        type:Array,
        required:true
    }
})
</script>

<style lang="scss" scoped>

</style>