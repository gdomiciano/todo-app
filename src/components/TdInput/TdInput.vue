<template>
    <input
    class="input"
      :type="type"
      :name="name"
      :id="id"
      :placeholder="placeholder"
    />
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'text'
    },
    name: {
        type: String,
        require: true
    },
    id: {
        type: String,
        require: true
    },
    placeholder: {
        type: String,
        require: true
    }
})
</script>

<style lang="css" scoped>
.input {
    background-color: var(--bg-color);
    border: var(--secondary-color) 0.2rem solid;
    border-radius: 6px;
    filter: brightness(1.2);
    padding: 1rem;
    font-size: 1.8rem;
}

</style>