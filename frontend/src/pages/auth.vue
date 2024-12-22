<template>
    <div class="h-screen">
        <div class="h-full flex items-center justify-center">
            <mail-auth v-if="isPhoneAuth" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const isPhoneAuth = ref(true);

</script>
