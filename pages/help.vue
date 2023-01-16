<template>
    <div>
        <h1>Hola</h1>
        <h1>{{ hola }}</h1>
        <h2> {{ anotate }}</h2>
        <button @click="createUser">cambiar</button>
        <ButtonsDefault>Hola</ButtonsDefault>


        <div>

            <input v-model="userName">
        </div>
    </div>
</template>

<script setup lang="ts">
import { PrismaClient } from "@prisma/client";

const hola = "23"

let anotate = 322

let userName = ""

function changeNum() {
    anotate = 233
    console.log(anotate)
}
async function createUser() {
    const { data: user } = await useFetch('/api/createUser')
    console.log(user)
}




</script>

<style scoped>

</style>