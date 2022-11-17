<template>
  <header class="header">
    <img
      src="../../assets/logo_128.png"
      alt="yellow post-it block with the first note containing an orange check sign and ready to be pulled out of the block."
      class="header__image"
      aria-hidden="true"
    />
    <div class="header__options">
      <nav class="header__navigation">
        <ul>
          <li class="header__navigation-item">
            <a ref="skipLink" href="#main">Skip to main content</a>
          </li>
        </ul>
      </nav>
      <TdSelect :options="languages" />
      <TdSwitch on-text="On" off-text="off" label="Dark theme" @toggle="toggleTheme" />
    </div>
  </header>
</template>

<script setup>
  import TdSwitch from "../TdSwitch/TdSwitch.vue";
  import getData from "../../composables/getData";
  import TdSelect from "../TdSelect/TdSelect.vue";

  const { response, load } = getData();
  load("languages");
  const languages = response;

  function toggleTheme(isDarkTheme) {
    console.log("called theme changes", isDarkTheme);
    if (document.firstElementChild.getAttribute("dataTheme"))
      document.firstElementChild.removeAttribute("data-theme");

    if (isDarkTheme) {
      document.firstElementChild.setAttribute("data-theme", "dark");
    } else {
      document.firstElementChild.setAttribute("data-theme", "light");
    }
  }
</script>

<style lang="css" scoped>
  .header {
    border-bottom: 0.3rem dashed var(--font-color);
    box-shadow: var(--heading-color) 0px 0px 10px;
    display: grid;
    margin-bottom: 3rem;
    padding: 2rem 0;
    grid-template-columns: min-content auto;
    justify-content: space-evenly;
    align-items: center;
  }
  .header__image {
    width: 64px;
  }
  .header__options {
    display: grid;
    gap: 1.4rem;
  }

  .header__navigation-item {
    list-style: none;
  }

  @media screen and (min-width: 768px) {
    .header {
      padding: 2rem;
    }
    .header__image {
      width: unset;
    }
    .header__options {
      grid-template-columns: repeat(3, minmax(min-content, 1fr));
    }
  }
</style>
