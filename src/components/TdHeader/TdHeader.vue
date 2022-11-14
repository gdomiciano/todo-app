<template>
    <header>
        <img src="assets/logo.svg" alt="">
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </nav>
        <div>
            <input type="search" :placeholder="searchInputPlaceholder" v-model="searchQuery">
            <TdButton :label="searchBtnText" />
        </div>
        <select>
            <option v-for="lang in languages" :key="lang.value" :value="lang.value">{{lang.name}}</option>
        </select>
    </header>
</template>

<script setup>
    import TdButton from '../TdButton/TdButton.vue'
import { ref } from 'vue';

    const searchBtnText = 'Search Item'
    const searchInputPlaceholder = 'find an item...'
    const searchQuery = ref(null)
    const languages = [{
        value:'en',
        name:'English'
    },
    {
        value:'pt_br',
        name:'Português (Brasil)'
    },
    {
        value:'sv',
        name:'Svenska'
    }];
</script>

<style scoped>

</style>