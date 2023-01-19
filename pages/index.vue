<template>
    <div>
        <div v-for="(user, id) in holi?.data">
        
            <p class="bg-gray-800 text-white p-6 cursor-pointer" @click="changeView(id)">{{ user.name }} </p>
            <div :data-charapter-id="id" class="bg-gray-200 p-6 hidden">
                <p>{{ user.email }}</p>
                <p>{{ user.id }}</p>
            </div>
        </div>

        <div>
            contador {{ count }}

            <br>
            <button @click="count++">sumar</button>

        </div>

    </div>
</template>

<script setup lang="ts">

    const { data: holi } = await useFetch('/api/notes')

    const count = ref(0)

    function changeView(id:number) {
        const userInfo = document.querySelectorAll('[data-charapter-id="' +id+ '"]')[0]
        if(userInfo.classList.contains('block')){
            userInfo.classList.remove('block')
            userInfo.classList.add('hidden')
        } else {
            userInfo.classList.remove('hidden')
            userInfo.classList.add('block')
        }
    }
</script>

<style lang="scss" scoped>

</style>