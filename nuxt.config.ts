import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            baseUrl: '',
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
    build: {
        transpile: [
            '@heroicons/vue',
            '@headlessui/vue',
            '@pinia/nuxt'
        ]
    },
    srcDir: 'src/',
    css: [
        '@/assets/app.scss',
    ],
    app: {
        head: {
            title: 'vidby',
            meta: [
                // <meta name="viewport" content="width=device-width, initial-scale=1">
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            script: [
                // <script src="https://myawesome-lib.js"></script>
                // { src: 'https://awesome-lib.js' }
            ],
            link: [
                // <link rel="stylesheet" href="https://myawesome-lib.css">
                // { rel: 'stylesheet', href: 'https://awesome-lib.css' }
                { rel: 'icon', type: 'image/x-icon', href: 'https://vidby.com/vidby-website-frontend/icons/favicon-32x32.png' }
            ],
            // please note that this is an area that is likely to change
            style: [
                // <style type="text/css">:root { color: red }</style>
                // { children: ':root { color: red }', type: 'text/css' }
            ],
            noscript: [
                // <noscript>Javascript is required</noscript>
                { children: 'Javascript is required' }
            ]
        }
    }
})
