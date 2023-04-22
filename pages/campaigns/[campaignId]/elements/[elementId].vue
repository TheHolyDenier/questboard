<script setup lang="ts">
const $route = useRoute();
const elementId = computed(() => String($route.params.elementId));
</script>

<template>
  <div>
    {{ elementId }}
  </div>
</template>

<style scoped lang="scss"></style>
