<script setup lang="ts">
import { PropType } from 'vue';
import { IconType } from '~/types/icon.type';
import { ColorType } from '~/types/color.type';

const props = defineProps({
  icon: { type: String as PropType<IconType>, required: true },
  color: {
    type: String as PropType<ColorType>,
    default: 'primary'
  }
});

const src = `/icons/${props.icon}.svg`;
</script>

<template>
  <div
    class="icon"
    :style="{
      backgroundColor: `var(--maz-color-${props.color})`,
      '-webkit-mask': `url(${src}) no-repeat center / contain`,
      mask: `url(${src}) no-repeat center / contain`
    }"
  ></div>
</template>

<style scoped lang="scss">
.icon {
  width: 12px;
  height: 12px;
}
</style>
