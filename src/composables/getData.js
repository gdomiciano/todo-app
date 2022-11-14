import { ref } from 'vue'

const getData = () => {
    const response = ref([]);
    const error = ref(null);

    const load = async (endpoint) => {
        try {
            const data = await fetch(`http://localhost:3000/${endpoint}`)

            if (!data.ok) {
                throw Error('Could not load kanban columns')
            }

            response.value = await data.json();

        } catch (err) {
            error.value = err.message;
        }
    }
    return {response, error, load}
}
export default getData;