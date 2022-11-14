<template>
   <section class="column">
    <h2 class="column__title">{{name}}</h2>
    <ul class="column__items">
        <TdItem v-for="item in currentItems" :key="item.id" v-bind="item" />
    </ul>
   </section>
</template>

<script setup>
    import TdItem from '../TdItem/TdItem.vue';
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

<style  lang="css" scoped>
.column {
    background-color: var(--bg-color);
    filter: brightness(0.95);
    padding:1em;
    border-radius: 10px;
    display: grid;
    box-shadow: inset var(--font-color) 2px -2px 6px;
}

.column__title {
    justify-self: center;
    margin:0;
    font-size: 3.4rem;
    text-transform: capitalize;
}

.column__items {
 padding: 0;
}

</style>