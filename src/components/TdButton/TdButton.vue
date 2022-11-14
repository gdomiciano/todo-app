<template>
  <button :type="type" @click="onClick" class="td-button">{{ label }}</button>
</template>

<script setup>
import { emit } from 'process';

defineProps({
    type: {
        type:String,
        default: 'button',
        validator: function (value) {
            return ['button', 'submit', 'reset'].indexOf(value) !== -1;
        },
    },
    label: {
      type: String,
      required: true,
    },
})
defineEmits(['click'])

function onClick() {
    emit('click')
}
</script>

<style scoped>
.td-button {
    background-color: blanchedalmond;
    padding: 15px;
    font-weight: bold;
}
</style>