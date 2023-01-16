<template>
    <div>
        <h1>Hola gentita</h1>

        <div v-for="(user, id) in holi?.data">
        
            <p>{{ user }} </p>
        </div>

    </div>
</template>

<script setup lang="ts">

    const { data: holi } = await useFetch('/api/notes')
</script>

<style lang="scss" scoped>

</style>