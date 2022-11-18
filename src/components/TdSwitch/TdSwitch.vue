<template>
  <div class="switch">
    <label for="pageTheme" class="switch__label"> {{ label }}</label>
    <button
      id="pageTheme"
      role="switch"
      :aria-checked="`${isChecked}`"
      class="switch__button"
      @click="onSwitchClick"
    >
      <span :class="['switch__state', { 'switch__state--check': !isChecked }]">{{
        offText
      }}</span>
      <span :class="['switch__state', { 'switch__state--check': isChecked }]">{{
        onText
      }}</span>
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
    display: grid;
    gap: var(--xsmall-spacing);
  }
  .switch__button {
    border: 0.2rem solid var(--secondary-color);
    display: grid;
    grid-template-columns: repeat(2, max-content);
    line-height: var(--medium-spacing);
    background-color: var(--white-color);
    border-radius: 6px;
  }

  .switch__state {
    display: inline-block;
    padding: var(--small-spacing) var(--base-spacing);
    pointer-events: none;
    text-transform: capitalize;
  }
  .switch__state--check::before {
    content: "✓";
    display: inline-block;
    margin-right: var(--xsmall-spacing);
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
</style>
