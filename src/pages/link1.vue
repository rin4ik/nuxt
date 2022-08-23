<template>
    <div class="text-center">First Link</div>
</template>

<script lang="ts">

export default defineComponent({
    name: "Link1",
    head() {
        return {
            titleTemplate: '%s - Link1',
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