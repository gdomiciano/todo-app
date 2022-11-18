<template>
  <input
    :id="`todo-item-${id}`"
    type="checkbox"
    :name="`todo-item-${id}`"
    :value="id"
    class="checkbox__input"
  />
  <label :for="`todo-item-${id}`" class="checkbox__label">{{ text }}</label>
</template>

<script setup>
  defineProps({
    id: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    isMixedState: {
      type: Boolean,
      default: false,
    },
  });
</script>

<style lang="css" scoped>
  .checkbox__input {
    background-color: var(--bg-color);
    border: var(--secondary-color) 0.2rem solid;
    filter: brightness(1.2);
    width: 2.4rem;
    height: 2.4rem;
    justify-self: center;
    align-self: center;
  }

  .checkbox__label {
    color: var(--font-color);
    font-size: 1.8rem;
    line-height: 2.4rem;
    justify-self: center;
    align-self: center;
  }
</style>
