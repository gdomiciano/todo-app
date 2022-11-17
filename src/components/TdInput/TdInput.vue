<template>
  <div class="input">
    <label
      :for="id"
      class="input__label"
    >{{ label }}</label>
    <input
      :id="id"
      class="input__field"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      v-bind="$attrs"
    >
  </div>
</template>

<script setup>
  defineProps({
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    placeholder: {
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
  .input {
    display: grid;
    gap: 1.4rem;
  }

  .input__field {
    background-color: var(--bg-color);
    border: var(--secondary-color) 0.2rem solid;
    border-radius: 6px;
    filter: brightness(1.2);
    padding: 1rem;
    font-size: 1.6rem;
  }
</style>
