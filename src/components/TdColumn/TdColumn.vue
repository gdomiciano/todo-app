<template>
  <section class="column">
    <h2 class="column__title">
      {{ name }}
    </h2>
    <ul class="column__items">
      <TdItem
        v-for="item in currentItems"
        :key="item.id"
        :item="item"
      />
    </ul>
  </section>
</template>

<script setup>
  import TdItem from "../TdItem/TdItem.vue";
  import { computed } from "vue";
  import getData from "../../composables/getData";
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
  });

  const { response, load } = getData();
  load("items");

  const currentItems = computed(() => {
    return response.value.filter((item) => item.status === props.name);
  });
</script>

<style lang="css" scoped>
  .column {
    background-color: var(--bg-color);
    filter: brightness(0.95);
    padding: var(--small-spacing);
    border-radius: 0.6rem;
    display: grid;
    box-shadow: inset var(--font-color) 0.2rem -0.2rem 0.6rem;
    grid-template-rows: auto 1fr;
    gap: var(--medium-spacing);
  }

  .column__title {
    justify-self: center;
    margin: 0;
    font-size: 3.4rem;
    text-transform: capitalize;
  }

  .column__items {
    display: grid;
    gap: var(--base-spacing);
    grid-auto-flow: dense;
  }

  @media screen and (min-width: 768px) {
    .column {
      height: calc(100vh - 400px);
      /* height: calc(100vh - bind(offset)); */
    }
  }
</style>
