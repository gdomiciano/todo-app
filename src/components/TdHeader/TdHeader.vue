<template>
    <header class="header">
        <img src="assets/logo.svg" alt="" class="header__image">
        <nav class="header__navigation">
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </nav>
        <!-- <div class="header__search">
            <input type="search" :placeholder="searchInputPlaceholder" v-model="searchQuery">
            <TdButton :label="searchBtnText" />
        </div> -->
        <TdSelect v-bind:options="languages" />
    </header>
</template>

<script setup>
    import TdButton from '../TdButton/TdButton.vue'
import { ref } from 'vue';
import getData from "../../composables/getData";
import TdSelect from '../TdSelect/TdSelect.vue';

    const searchBtnText = 'Search Item'
    const searchInputPlaceholder = 'find an item...'
    const searchQuery = ref(null)

    const { response, error, load } = getData();
    load("languages");
    const languages = response;
</script>

<style lang="css" scoped>

.header {
  border-bottom: 0.3rem inset var(--font-color) ;
  display: grid;
  grid-template-areas: "image navigation lang font theme";
  margin-bottom: 2rem;
}
.header__image {
    grid-area: image;
}

.header__navigation {
    grid-area: navigation;
}

.header__lang {
    grid-area: lang;
}

.header__font {
    grid-area: font;
}

.header__theme {
    grid-area: theme;
}

</style>