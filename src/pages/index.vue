<template> 
        <div class="text-center">
             <h3 class="text-2xl tracking-tight font-medium text-gray-900 sm:text-3xl md:text-4xl">AI-powered software for <strong class="main-active font-semibold">fast and accurate video translation and dubbing</strong> into 70 languages</h3>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        </div>
</template>


<script lang="ts">

export default defineComponent({
    name: "Home",
    head() {
        return {
            titleTemplate: '%s - make your business global with fast & accurate video dubbing',
            meta: [
                { name: "twitter:title", content: "Nuxt Async" },
                { name: "twitter:description", content: "Nuxt + ME = 🍕" },
                { name: "twitter:image", content: "https://avatars.dicebear.com/api/avataaars/sssssssssssff.svg" },
                { name: "twitter:card", content: "summary_large_image" }
            ]
        };
    },
})
</script>