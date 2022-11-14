<script setup>
import TdHeader from "../components/TdHeader/TdHeader.vue";
import TdColumn from "../components/TdColumn/TdColumn.vue";
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
    <TdHeader />
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
    <TdColumn v-for="(status, index) in statuses" :key="index" v-bind="status" />
  </main>
</template>

<style scoped></style>
