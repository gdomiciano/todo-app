<script setup>
import TdHeader from "../components/TdHeader/TdHeader.vue";
import TdColumn from "../components/TdColumn/TdColumn.vue";
import getData from "../composables/getData";
import { ref } from "vue";
import TdButton from "../components/TdButton/TdButton.vue";

let addBtnText = "Add Item";
let addInputPlaceholder = "write your todo item...";
const itemValue = ref(null);
const { response, error, load } = getData();
load("statuses");
const statuses = response;
</script>

<template >
  <TdHeader />
  <main class="container">
  <form @submit.prevent class="form">
    <input
      type="text"
      name="add"
      id="add"
      :placeholder="addInputPlaceholder"
      v-model="itemValue"
    />
    <TdButton :type="submit" :label="addBtnText"/>
  </form>
  <div class="container__columns">
    <TdColumn v-for="(status, index) in statuses" :key="index" v-bind="status" />
  </div>
  </main>
</template>

<style scoped>

.container {
  width: 90%;
  display: grid;
  gap:2em;
  margin: 0 auto;
}
.container__columns {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2em;
align-items: center;
}
</style>
