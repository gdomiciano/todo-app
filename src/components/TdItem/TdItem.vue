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
        item: Object,
    })
</script>

<style lang="css" scoped>
.item {
    list-style: none;
}
</style>