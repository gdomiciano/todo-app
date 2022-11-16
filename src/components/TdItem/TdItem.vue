<template>
  <li class="item">
    <TdCheckbox
      :id="item.id"
      :text="item.text"
    />
  </li>
</template>

<script setup>
import TdCheckbox from '../TdCheckbox/TdCheckbox.vue';

    defineProps({
        item: {
          type: Object,
          required: true
        }
    })
</script>

<style lang="css" scoped>
.item {
    list-style: none;
}
</style>