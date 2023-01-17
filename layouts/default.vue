<template>
    <div>

        <nav>
            <ul class="flex justify-between">
                <div v-for="link in enlaces">
                    <li>
                        <NuxtLink :to="link.link">
                        {{ link.name }}
</NuxtLink>
                    </li>
                
                </div>
            </ul>
        </nav>


        <div>
            <slot/>
        </div>

    </div>
</template>

<script setup lang="ts">

const enlaces = [{name: "Principal", link: "/"}, {name: "Ayuda", link: "/help"}]

</script>

<style scoped>

</style>