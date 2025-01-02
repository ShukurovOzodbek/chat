<template>
    <div class="w-10/12 sm:w-7/12 md:w-3/12 flex flex-col items-center gap-6">
        <button @click="emit('changeAuthMethod', true)"
            class="hover:bg-gray-100 w-full p-2 rounded-lg text-lg transition-all">Authorize using email</button>
    </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['changeAuthMethod']);

</script>