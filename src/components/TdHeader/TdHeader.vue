<template>
    <header class="header">
        <img src="../../assets/logo.png" alt="" class="header__image">
        <nav class="header__navigation">
            <ul>
                <li>
                    <a href="#main" ref="skipLink">Skip to main content</a>
                </li>
                <li> <a href="#main" ref="a11yLink">Skip to main content</a></li>
                <li>About</li>
            </ul>
        </nav>
        <TdSelect v-bind:options="languages" />
        <TdSwitch on-text="On" off-text="off" label="Dark theme" @toggle="toggleTheme" />
    </header>
</template>

<script setup>
    import TdSwitch from '../TdSwitch/TdSwitch.vue'
import getData from "../../composables/getData";
import TdSelect from '../TdSelect/TdSelect.vue';

    const { response, error, load } = getData();
    load("languages");
    const languages = response;

    function toggleTheme(isDarkTheme) {
        console.log('called theme changes', isDarkTheme)
        if (document.firstElementChild.getAttribute('dataTheme')) document.firstElementChild.removeAttribute('data-theme');

        if(isDarkTheme) {
            document.firstElementChild.setAttribute('data-theme', 'dark')
        } else {
            document.firstElementChild.setAttribute('data-theme', 'light')
        }
    }
</script>

<style lang="css" scoped>

.header {
  border-bottom: 0.3rem inset var(--font-color) ;
  display: grid;
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