<script setup lang="ts">
const count = ref(1)
const double = computed(() => count.value * 2)
</script>

<template>
  <!-- type checking and auto-completion enabled -->
  {{ count.toFixed(2) }}
  {{double}}
</template>