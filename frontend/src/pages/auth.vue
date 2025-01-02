<template>
    <div class="h-screen">
        <div class="h-full flex items-center justify-center flex-col gap-6">
            <h1 class="text-4xl">Chat App</h1>
            <fade-transition>
                <mail-auth @changeAuthMethod="changeAuthMethod" v-if="isPhoneAuth" />
                <qr-code-auth @changeAuthMethod="changeAuthMethod" v-else />
            </fade-transition>
        </div>
    </div>
</template>

<script lang="ts" setup>

const isPhoneAuth = ref(true);

function changeAuthMethod(value: boolean) {
    isPhoneAuth.value = value;
}

</script>