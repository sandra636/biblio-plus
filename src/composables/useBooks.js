// src/composables/useBooks.js
import { ref } from 'vue'
export function useBooks() {
    const books = ref([])
    const loading = ref(false)
    const error = ref(null)
    async function load() {
        loading.value = true
        error.value = null
        try {
            const res = await fetch(import.meta.env.BASE_URL + 'data/books.json')
            if (!res.ok) throw new Error('Erreur HTTP ' + res.status)
            books.value = await res.json()
        } catch (e) {
            error.value = e.message
        } finally {
            loading.value = false
        }
    }
    return { books, loading, error, load }
}