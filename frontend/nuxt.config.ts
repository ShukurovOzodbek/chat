// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    srcDir: 'src/',
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ['~/assets/styles/main.css'],
    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ]
})
