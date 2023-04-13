<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({ title: { type: String, required: true } });
</script>

<style lang="scss" scoped></style>
