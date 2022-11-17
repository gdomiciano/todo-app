<template>
  <div class="input">
    <label :for="id" class="input__label">{{ label }}</label>
    <input
      :id="id"
      class="input__field"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      v-bind="$attrs"
    />
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
    gap: var(--base-spacing);
    font-size: 1.6rem;
  }

  .input__field {
    border: var(--secondary-color) 0.2rem solid;
    border-radius: 0.6rem;
    padding: var(--small-spacing);
    background-color: var(--white-color);
  }
</style>
