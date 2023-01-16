<template>
    <div>
        <h1>Hola gentita</h1>

        <div v-for="holies in holi">
            <h1>{{ holies }}</h1>
        
        </div>

    </div>
</template>

<script setup lang="ts">

    const { data: holi } = await useFetch('/api/notes')
</script>

<style lang="scss" scoped>

</style>