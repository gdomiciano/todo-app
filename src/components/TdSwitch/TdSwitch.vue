<template>
  <div>
    <label
      for="pageTheme"
      class="switch__label"
    > {{ label }}</label>
    <button
      id="pageTheme"
      role="switch"
      :aria-checked="`${isChecked}`"
      class="switch"
      @click="onSwitchClick"
    >
      <span class="switch__state">{{ offText }}</span>
      <span class="switch__state">{{ onText }}</span>
    </button>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const emit = defineEmits(["toggle"]);
  defineProps({
    onText: {
      type: String,
      default: "On",
    },
    offText: {
      type: String,
      default: "Off",
    },
    label: {
      type: String,
      required: true,
    },
  });

  const isChecked = ref(false);

  function onSwitchClick() {
    if (isChecked.value) {
      isChecked.value = false;
    } else {
      isChecked.value = true;
    }

    emit("toggle", isChecked.value);
  }
</script>

<style lang="css" scoped>
  .switch {
    margin: 0;
    padding: 0;
    border: 0.2rem solid var(--secondary-color);
    display: grid;
    grid-template-columns: 1fr 1fr;
    line-height: var(--medium-spacing);
    font-size: 1.6rem;
    background-color: var(--white-color);
  }

  .switch__state {
    display: inline-block;
    padding: 0 2rem;
    pointer-events: none;
    text-transform: capitalize;
  }

  [role="switch"][aria-checked="false"] :first-child,
  [role="switch"][aria-checked="true"] :last-child {
    background: var(--primary-color);
    color: var(--font-color);
  }

  [role="switch"][aria-checked="false"] :last-child,
  [role="switch"][aria-checked="true"] :first-child {
    color: --font-color;
  }

  .switch__label {
    font: 16rem;
    line-height: var(--medium-spacing);
    vertical-align: middle;
    user-select: none;
  }
</style>
