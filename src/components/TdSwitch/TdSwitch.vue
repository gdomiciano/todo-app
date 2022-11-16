<template>
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
  <label
    for="pageTheme"
    class="switch__label"
  > {{ label }}</label>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['toggle'])
defineProps({
    onText: String,
    offText: String,
    label: String
})

const isChecked = ref(null);


function onSwitchClick () {
    if (isChecked.value) {
        isChecked.value = false;
    } else {
        isChecked.value = true;
    }

    emit('toggle', isChecked.value)
}

</script>

<style lang="css" scoped>
.switch {
  margin: 0;
  padding: 0;
  width: 7rem;
  height: 2.6rem;
  border: .2rem solid var(--secondary-color);
  display: inline-block;
  margin-right: 0.25rem;
  line-height: 2rem;
  vertical-align: middle;
  text-align: center;
  font: 1.4rem;
}

.switch__state {
  padding: 0 4rem;
  pointer-events: none;
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
  line-height: 2rem;
  vertical-align: middle;
  user-select: none;
}
</style>