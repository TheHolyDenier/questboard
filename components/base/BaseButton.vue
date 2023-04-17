<script setup lang="ts">
import MazBtn from 'maz-ui/components/MazBtn';
import { PropType } from 'vue';
import { ColorType } from '~/types/color.type';
import { IconType } from '~/types/icon.type';

defineProps({
  to: { type: Object, default: null },
  label: { type: String, default: null },
  loading: { type: Boolean, default: false },
  size: {
    type: String as PropType<'mini' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md'
  },
  color: {
    type: String as PropType<ColorType>,
    default: 'primary'
  },
  outline: { type: Boolean, default: false },
  rounded: { type: Boolean, default: false },
  circle: { type: Boolean, default: false },
  fullWidth: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  leadingIcon: { type: String as PropType<IconType>, default: null },
  trailingIcon: { type: String as PropType<IconType>, default: null }
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
      no-padding
    >
      <div class="button__container">
        <BaseIcon
          v-if="leadingIcon"
          :icon="leadingIcon"
          :color="color"
          contrast-color
        />

        <span>{{ label }}</span>

        <BaseIcon v-if="trailingIcon" :icon="trailingIcon" />
      </div>
    </MazBtn>
  </span>
</template>

<style scoped lang="scss">
@import 'styles/variables.scss';

.button {
  margin-inline: 0.2em;
  font-family: $bebasNeueFont !important;
  &__container {
    padding: 0.3em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2em;
  }
}
</style>
