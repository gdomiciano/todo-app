<template>
  <TdHeader />
  <main
    id="main"
    class="container"
    role="main"
  >
    <h1>Todo Kanban App</h1>
    <form
      class="container__form"
      @submit.prevent
    >
      <TdInput
        id="add"
        v-model="itemValue"
        :placeholder="addInputPlaceholder"
        name="add"
        label="What do you have todo?"
      />
      <TdButton
        type="submit"
        :label="addBtnText"
      />
    </form>
    <div class="container__columns">
      <TdColumn
        v-for="(status, index) in statuses"
        :key="index"
        v-bind="status"
      />
    </div>
  </main>
</template>

<script setup>
  import TdHeader from "../components/TdHeader/TdHeader.vue";
  import TdColumn from "../components/TdColumn/TdColumn.vue";
  import getData from "../composables/getData";
  import { ref } from "vue";
  import TdButton from "../components/TdButton/TdButton.vue";
  import TdInput from "../components/TdInput/TdInput.vue";

  let addBtnText = "Add Item";
  let addInputPlaceholder = "write your todo item...";

  const itemValue = ref(null);
  const { response, load } = getData();
  load("statuses");
  const statuses = response;
</script>

<style scoped>
  .container {
    width: 90%;
    display: grid;
    gap: 2rem;
    margin: 0 auto;
    grid-template-rows: auto 1fr;
  }

  .container__form {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2rem;
    margin-bottom: 3rem;
    align-items: end;
  }

  .container__columns {
    display: grid;
    gap: 2rem;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    .container__columns {
      grid-template-columns: repeat(3, auto);
    }
  }
</style>
