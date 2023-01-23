<template>
    <div>
        <form class="row flex-center flex" @submit.prevent="handleLogin">
            <div class="col-6 form-widget">
                <h1 class="header">Supabase + Nuxt 3</h1>
                <p class="description">Sign in via magic link with your email below</p>
                <div>
                    <InputsText :value="email" hint="Tu email" />
                </div>
                <div>
                    <input type="submit" class="button block" :value="loading ? 'Loading' : 'Send magic link'"
                        :disabled="loading" />
                </div>
            </div>
        </form>

    </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()
const loading = ref(false)
const email = ref("")
const handleLogin = async () => {
    try {
        loading.value = true
        const { data, error } = await supabase.auth.signInWithOtp({ email: email.value })
        if (error) throw error
        alert("Mira tu Email para el link de login")
        console.log(error)
    } catch (error) {
        alert("no se, pero no funciona :c")
    } finally {
        loading.value = false
    }
}

</script>

<style scoped>
.header{
    @apply text-3xl
}

</style>