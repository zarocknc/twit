<template>
    <div>
        <div v-for="user in holi?.data">
        
            <p class="bg-gray-800 text-white p-6 cursor-pointer">{{ user.name }} </p>
            <div class="bg-gray-100 p-6">
                <p>{{ user.email }}</p>
                <p>{{ user.id }}</p>
            </div>
        </div>
        

    </div>
</template>

<script setup lang="ts">

    const { data: holi } = await useFetch('/api/notes')
</script>

<style lang="scss" scoped>

</style>