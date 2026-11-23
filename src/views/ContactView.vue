// dans ContactView.vue
const form = reactive({ name: '', email: '', message: '' })
const touched = reactive({ name: false, email: false, message: false })
const sent = ref(false)
const errors = computed(() => ({
 name: form.name.trim().length < 2 ? 'Votre nom est requis.' : '',
 email: /^\S+@\S+\.\S+$/.test(form.email) ? '' : 'Adresse e-mail invalide.',
 message: form.message.trim().length < 10 ? '10 caractères minimum.' : '',
}))
const isValid = computed(() => Object.values(errors.value).every(e => !e))
function submit() {
 Object.keys(touched).forEach(k => (touched[k] = true))
 if (!isValid.value) return
 sent.value = true // simulation : aucun back-end dans ce projet
}
