<template>
    <div>
        <DataviewsUsersTable />

        <div>
            contador {{ count }}

            <br>
            <button @click="count++">sumar</button>

        </div>

    </div>
</template>

<script setup lang="ts">


    const count = ref(0)


</script>

<style lang="scss" scoped>

</style>