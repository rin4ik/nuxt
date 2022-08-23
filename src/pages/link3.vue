<template>
    <div class="text-center">Third Link</div>
</template>
<script lang="ts">
export default defineComponent({
    name: "Link2",
    head() {
        return {
            titleTemplate: '%s - Link3',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Link3 page description'
                }
            ]
        };
    },
})
</script>