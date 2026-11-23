<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useBooks } from '@/composables/useBooks'
const props = defineProps({ id: String })
const router = useRouter()
const { books, loading, load } = useBooks()
const book = computed(() =>
 books.value.find(b => b.id === Number(props.id)))
onMounted(async () => {
 await load()
 if (!book.value) router.replace({ name: 'not-found' })
})
</script>
<template>
 <p v-if="loading" role="status">Chargement…</p>
 <article v-else-if="book">
 <h1>{{ book.title }}</h1>
 <p>{{ book.author }} · {{ book.year }}</p>
 <p>{{ book.summary }}</p>
 <p>{{ book.available ? 'Disponible' : 'Emprunté' }}</p>
 <RouterLink to="/catalogue">← Retour au catalogue</RouterLink>
 </article>
</template>