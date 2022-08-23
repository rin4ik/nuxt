<template>
    <div class="text-center">Fourth Link</div>
</template>
<script lang="ts">
export default defineComponent({
    name: "Link2",
    head() {
        return {
            titleTemplate: '%s - Link4',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Link4 page description'
                }
            ]
        };
    },
})
</script>