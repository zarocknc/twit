<template>
    <div v-for="(user, id) in holi?.data">

        <p class="dataHeaderStyle" @click="changeView(id)">{{ user.name }} </p>
        <div :data-charapter-id="id" class="bg-gray-200 p-6 hidden">
            <p>{{ user.email }}</p>
            <p>{{ user.id }}</p>
            <InputsText>cambiar email</InputsText>
        </div>
    </div>
</template>

<script setup lang="ts">

const { data: holi } = await useFetch('/api/notes')


function changeView(id: number) {
    const userInfo = document.querySelectorAll('[data-charapter-id="' + id + '"]')[0]
    if (userInfo.classList.contains('block')) {
        userInfo.classList.remove('block')
        userInfo.classList.add('hidden')
    } else {
        userInfo.classList.remove('hidden')
        userInfo.classList.add('block')
    }
}


</script>


<style scoped>
.dataHeaderStyle {
    @apply bg-gray-800 text-white p-6 cursor-pointer 
}
</style>