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

const backgroundColor = computed(() => {
  if (['transparent', 'black'].includes(props.color)) {
    return 'var(--maz-color-text)';
  }

  if (['white'].includes(props.color)) {
    return 'var(--maz-bg-color-light)';
  }

  let color = `var(--maz-color-${props.color}`;
  if (props.contrastColor) {
    color += '-contrast';
  }
  color += ')';
  return color;
});

const src = `/icons/${props.icon}.svg`;
</script>

<template>
  <span
    class="icon"
    :style="{
      backgroundColor: backgroundColor,
      '-webkit-mask': `url(${src}) no-repeat center / contain`,
      mask: `url(${src}) no-repeat center / contain`,
      width: props.size,
      height: props.size
    }"
  ></span>
</template>

<style scoped lang="scss">
.icon {
  display: inline-block;
  padding: 0.3em;
}
</style>
