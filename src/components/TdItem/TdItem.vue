<template>
  <li class="item">
    <TdCheckbox :id="item.id" :text="item.text" />
  </li>
</template>

<script setup>
  import TdCheckbox from "../TdCheckbox/TdCheckbox.vue";

  defineProps({
    item: {
      type: Object,
      required: true,
    },
  });
</script>

<style lang="css" scoped>
  .item {
    list-style: none;
    display: grid;
    gap: var(--xsmall-spacing);
    grid-template-columns: auto auto;
    justify-content: left;

    margin-bottom: var(--base-spacing);
  }
</style>
