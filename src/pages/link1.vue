<template>
    <div class="text-center">First Link</div>
</template>

<script lang="ts">
export default defineComponent({
    name: "Link1",
    head() {
        return {
            titleTemplate: `%s - ${process.env}`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Link1 page description'
                }
            ]
        };
    },
})
</script>