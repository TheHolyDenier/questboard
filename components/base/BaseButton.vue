<script setup lang="ts">
import MazBtn from 'maz-ui/components/MazBtn';
import { PropType } from 'vue';

defineProps({
  to: { type: Object, default: null },
  label: { type: String, default: null },
  loading: { type: Boolean, default: false },
  size: {
    type: String as PropType<'mini' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    default: 'xs'
  },
  color: {
    type: String as PropType<
      | 'primary'
      | 'secondary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'white'
      | 'black'
      | 'transparent'
    >,
    default: 'primary'
  },
  outline: { type: Boolean, default: false },
  pastel: { type: Boolean, default: false },
  rounded: { type: Boolean, default: false },
  circle: { type: Boolean, default: false },
  fullWidth: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
});
</script>

<template>
  <MazBtn
    :to="to"
    :loading="loading"
    :size="size"
    :color="color"
    :outline="outline"
    :pastel="pastel"
    :fab="circle"
    :rounded="rounded"
    :block="fullWidth"
    :disabled="disabled"
  >
    {{ label }}
    <template #left-icon>
      <slot name="left-icon"></slot>
    </template>
    <template #right-icon>
      <slot name="right-icon"></slot>
    </template>
  </MazBtn>
</template>

<style scoped lang="scss"></style>
