<template>
  <header class="header">
    <img src="../../assets/logo_128.png" alt="" class="header__image">
    <nav class="header__navigation">
      <ul>
        <li>
          <a ref="skipLink" href="#main">Skip to main content</a>
        </li>
      </ul>
    </nav>
    <TdSelect :options="languages" />
    <TdSwitch on-text="On" off-text="off" label="Dark theme" @toggle="toggleTheme" />
  </header>
</template>

<script setup>
  import TdSwitch from '../TdSwitch/TdSwitch.vue'
  import getData from "../../composables/getData";
  import TdSelect from '../TdSelect/TdSelect.vue';

  const { response, load } = getData();
  load("languages");
  const languages = response;

  function toggleTheme(isDarkTheme) {
    console.log('called theme changes', isDarkTheme)
    if (document.firstElementChild.getAttribute('dataTheme')) document.firstElementChild.removeAttribute('data-theme');

    if (isDarkTheme) {
      document.firstElementChild.setAttribute('data-theme', 'dark')
    } else {
      document.firstElementChild.setAttribute('data-theme', 'light')
    }
  }
</script>

<style lang="css" scoped>

  .header {
    border-bottom: 0.3rem inset var(--font-color);
    display: grid;
    margin-bottom: 2rem;
  }

</style>