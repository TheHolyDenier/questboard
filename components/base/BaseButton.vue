<template>
  <v-btn :icon="icon && !label" :variant="variant" color="primary">
    <v-icon v-if="icon" :icon="icon" />
    <span v-if="label">
      {{ label }}
    </span>
  </v-btn>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';

defineProps({
  label: { type: String, default: null },
  variant: {
    type: String as PropType<'flat' | 'outlined' | 'text'>,
    default: 'tonal'
  },
  icon: { type: String, default: null }
});
</script>

<style lang="scss" scoped></style>
