<template>
   <section>
    <h2>{{name}}</h2>
    <ul>
        <TheItem v-for="item in currentItems" :key="item.id" v-bind="item"/>
    </ul>
   </section>
</template>

<script setup>
    import TheItem from '../TheItem/TheItem.vue';
    import { computed, ref } from 'vue';
    import getData from '../../composables/getData'
     const props = defineProps({
        name: String,
    })

    const {response, error, load} = getData();
    load('items');

    const currentItems = computed(() => {
        return response.value.filter((item) => item.status === props.name)
    })
</script>

<style lang="scss" scoped>

</style>