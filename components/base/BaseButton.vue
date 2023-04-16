<script setup lang="ts">
import MazBtn from 'maz-ui/components/MazBtn';
import { PropType } from 'vue';

defineProps({
  to: { type: Object, default: null },
  label: { type: String, default: null },
  loading: { type: Boolean, default: false },
  size: {
    type: String as PropType<'mini' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md'
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
  rounded: { type: Boolean, default: false },
  circle: { type: Boolean, default: false },
  fullWidth: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
});
</script>

<template>
  <span class="button">
    <MazBtn
      :to="to"
      :loading="loading || false"
      :size="size || 'md'"
      :color="color || 'primary'"
      :outline="outline || false"
      :fab="circle || false"
      :rounded="rounded || false"
      :block="fullWidth || false"
      :disabled="disabled || false"
    >
      {{ label }}
      <template #left-icon>
        <slot name="left-icon"></slot>
      </template>
      <template #right-icon>
        <slot name="right-icon"></slot>
      </template>
    </MazBtn>
  </span>
</template>

<style scoped lang="scss">
@import 'styles/variables.scss';

.button {
  font-family: $bebasNeueFont !important;
}
</style>
