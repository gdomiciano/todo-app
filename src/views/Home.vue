<script setup>
    import TheHeader from "../components/TheHeader/TheHeader.vue";
    import TheColumn from "../components/TheColumn/TheColumn.vue";
    import getData from "../composables/getData";
    import { ref } from "vue";

    let addBtnText = "Add Item";
    let addInputPlaceholder = "write your todo item...";
    const itemValue = ref(null);
    const { response, error, load } = getData();
    load("statuses");
    const statuses = response;
</script>

<template>
  <main>
    <TheHeader />
    <hr />
    <input
      type="text"
      name="add"
      id="add"
      :placeholder="addInputPlaceholder"
      v-model="itemValue"
    />
    <button>{{ addBtnText }}</button>
    <hr />
    <TheColumn v-for="(status, index) in statuses" :key="index" v-bind="status" />
  </main>
</template>

<style scoped></style>
