<template>
  <div class="select">
    <label :for="id" class="select__label">{{ label }}</label>
    <select :id="id" class="select__field" :name="name">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
  defineProps({
    options: {
      type: Array,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  });
</script>

<style lang="css" scoped>
  .select {
    display: grid;
    gap: var(--xsmall-spacing);
  }
  .select__field {
    border: 1px solid var(--primary-color);
    padding: var(--small-spacing);
    font-size: 1.6rem;
    border-radius: 0.6rem;
    width: max-content;
    position: relative;
    background-color: var(--white-color);
  }
</style>
