<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            count: 1
        };
    },
    head() {
        return {
            title: "Home Page",
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

<template>
    <div style="color: var(--bronse)" class="text-2xl">
        <tooling />
    </div>
</template>