<template>
  <li class="item">
    <TdCheckbox
      :id="item.id"
      :text="item.text"
    />
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
    gap: var(--xmall-spacing);
    grid-template-columns: auto 1fr;
    justify-content: left;
  }
</style>
