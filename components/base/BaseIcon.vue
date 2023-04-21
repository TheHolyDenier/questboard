<script setup lang="ts">
import { PropType } from 'vue';
import { IconType } from '~/types/icon.type';
import { ColorType } from '~/types/color.type';

const props = defineProps({
  icon: { type: String as PropType<IconType>, required: true },
  color: {
    type: String as PropType<ColorType>,
    default: 'primary'
  },
  size: { type: String, default: '16px' },
  contrastColor: { type: Boolean }
});

const src = `/icons/${props.icon}.svg`;
</script>

<template>
  <span
    class="icon"
    :class="{ [color]: true, contrast: contrastColor }"
    :style="{
      '-webkit-mask': `url(${src}) no-repeat center / contain`,
      mask: `url(${src}) no-repeat center / contain`,
      width: props.size,
      height: props.size
    }"
  ></span>
</template>

<style scoped lang="scss">
@import 'styles/variables.scss';

.icon {
  display: inline-block;
  padding: 0.3em;

  &.primary {
    background-color: $primary;

    &.contrast {
      background-color: $green-light;
    }
  }

  &.secondary {
    background-color: $secondary;

    &.contrast {
      background-color: $primary;
    }
  }

  &.black {
    background-color: $blue;

    &.contrast {
      background-color: $green-light;
    }
  }

  &.transparent {
    background-color: $blue;

    &.contrast {
      background-color: $green-light;
    }
  }

  &.white {
    background-color: $green-light;
  }
}
</style>
