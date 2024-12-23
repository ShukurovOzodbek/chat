<template>
    <div class="w-10/12 sm:w-7/12 md:w-3/12 flex flex-col items-center gap-6">
        <h1 class="text-4xl">Chat App</h1>
        <form class="w-full" @submit.prevent="login">
            <input type="email"
                class="py-3 px-4 w-full bg-gray-100 outline-gray-200 rounded-t-lg text-sm disabled:opacity-50"
                placeholder="example@gmail.com" v-model="user.email" @input="validate">
            <button type="submit"
                class="w-full bg-[#62A1DD] opacity-100 transition-all rounded-b-lg text-white p-2 text-lg disabled:opacity-40 hover:opacity-90"
                :disabled="isDisabled">Next</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
import type { ValidateSchema } from '~/types';

const isDisabled = ref(true);
const user = ref({ email: '' });

const schemas: ValidateSchema[] = [
    {
        key: 'email',
        defaultMessage: 'Required field',
        patterns: [
            {
                message: 'Incorrect email address',
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            }
        ]
    }
];

function login() {

}

function validate() {
    const { isError } = useValidate(schemas, user.value);
    isDisabled.value = isError;
}

</script>