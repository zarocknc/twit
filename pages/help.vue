<template>
    <div>
        <h1>Hola</h1>
         <button @click="createUser">cambiar</button>
        <!--<ButtonsDefault :propFunction="createUser">Hola</ButtonsDefault> -->


        <div>

            <input class="border border-solid border-blue-500" v-model="userName" placeholder="nombre">
            <input class="border border-solid border-blue-500" v-model="userMail" placeholder="E-mail">
        </div>
    </div>
</template>

<script setup lang="ts">
import { PrismaClient } from "@prisma/client";

let userName = ref("")
let userMail = ref("")

async function createUser() {
    const hola = await useFetch('/api/createUser', {
        method: "post",
        body: {
            newUserName: userName,
            newMail: userMail,
        }
    })
    console.log(hola)
}




</script>

<style scoped>

</style>