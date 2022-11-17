<template>
  <select class="select">
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script setup>
  defineProps({
    options: {
      type: Array,
      required: true,
    },
  });
</script>

<style lang="css" scoped>
  .select {
    border: 1px solid var(--primary-color);
    padding: var(--small-spacing);
    font-size: 1.6rem;
    border-radius: 0.6rem;
    width: max-content;
    position: relative;
    background-color: var(--white-color);
  }
</style>
