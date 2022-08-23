<template>
    <div class="text-center">Second Link</div>
</template>
<script lang="ts">
export default defineComponent({
    name: "Link2",
    head() {
        return {
            titleTemplate: '%s - Link2',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Home page description'
                }
            ]
        };
    },
})
</script>