<template>
  <header class="header">
    <div class="header__brand">
      <img
        src="../../assets/logo_128.png"
        alt="yellow post-it block with the first note containing an orange check sign and ready to be pulled out of the block."
        class="header__brand-image"
        aria-hidden="true"
      />
      <h1 class="header__brand-title">Kanban</h1>
    </div>
    <div class="header__options">
      <nav class="header__navigation">
        <ul>
          <li class="header__navigation-item">
            <a ref="skipLink" href="#main">Skip to main content</a>
          </li>
        </ul>
      </nav>
      <TdSelect
        id="languages"
        :options="languages"
        name="language-selector"
        label="Select your language:"
      />
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
    margin-bottom: var(--large-spacing);
    padding: var(--base-spacing) 0;
    grid-template-columns: auto auto;
    align-items: center;
    gap: var(--base-spacing);
    justify-content: space-around;
  }
  .header__brand {
    display: grid;
    justify-content: center;
  }
  .header__brand-image {
    width: 58px;
  }

  .header__brand-title {
    font-size: 2rem;
    margin-top: var(--small-spacing);
  }
  .header__options {
    display: grid;
    gap: var(--base-spacing);
  }

  .header__navigation-item {
    list-style: none;
  }

  @media screen and (min-width: 370px) {
    .header {
      padding: var(--medium-spacing) 0;
      gap: var(--medium-spacing);
    }
    .header__brand-image {
      width: 64px;
    }

    .header__brand-title {
      font-size: 2.4rem;
    }
  }
  @media screen and (min-width: 720px) {
    .header__image {
      width: unset;
    }
    .header__options {
      grid-template-columns: repeat(3, auto);
      align-items: center;
      gap: var(--medium-spacing);
    }
  }
</style>
