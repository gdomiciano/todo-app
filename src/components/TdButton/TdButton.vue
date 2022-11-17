<template>
  <button
    :type="type"
    class="button"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script setup>
  import { emit } from "process";

  defineProps({
    type: {
      type: String,
      default: "button",
      validator: function (value) {
        return ["button", "submit", "reset"].indexOf(value) !== -1;
      },
    },
    label: {
      type: String,
      required: true,
    },
  });
  defineEmits(["click"]);

  function onClick() {
    emit("click");
  }
</script>

<style lang="css" scoped>
  .button {
    background-color: var(--primary-color);
    color: var(--font-color);
    border-radius: 1rem;
    font-size: 1.6rem;
    line-height: 4rem;
    padding: 0 2rem;
    border: none;
    cursor: pointer;
  }

  .button:hover {
    filter: brightness(1.1);
  }
</style>
