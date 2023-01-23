<template>
  <div class="mb-3 xl:w-96">
    <input type="text" class="
        form-control
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      " id="exampleFormControlInput1" :placeholder="props.hint" :v-model="props.value" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["hint", "value"])

</script>

<style scoped>

</style>