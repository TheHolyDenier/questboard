<script setup lang="ts">
defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  required: { type: Boolean }
});
</script>

<template>
  <label :for="id">
    {{ label }}{{ required ? '*' : '' }}:
    <slot></slot>
  </label>
</template>

<style scoped lang="scss">
@import 'styles/variables';

label {
  font-family: $bebasNeueFont;
  font-size: 1.2em;
  font-weight: 700;
}
</style>
