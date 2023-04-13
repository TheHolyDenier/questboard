<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: { type: String, default: null }
});
</script>

<style lang="scss" scoped></style>
