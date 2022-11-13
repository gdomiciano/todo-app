<template>
   <section>
    <h2>{{title}}</h2>
    <ul>
        <TheItem v-for="item in currentItems" :key="item.id" :content="item"/>
    </ul>
   </section>
</template>

<script setup>
    import TheItem from './TheItem.vue';
    import { computed, ref } from 'vue'
     const props = defineProps({
        title: String
    })
    const currentItems = computed(() => {
        return [
            {"id":0,"text": "some text", "status": "done"},
            {"id":1,"text": "some text", "status": "progress"},
            {"id":2,"text": "some text", "status": "todo"}
        ].filter((item) => item.status === props.title)
    })
</script>

<style lang="scss" scoped>

</style>