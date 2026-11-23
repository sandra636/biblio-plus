import { useBooks } from '@/composables/useBooks'
const { books, loading, error, load } = useBooks()
onMounted(load)
