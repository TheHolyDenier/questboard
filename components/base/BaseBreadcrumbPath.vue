<script setup lang="ts">
import { PropType } from 'vue';
import { Navigation } from '~/utils/navigation';

defineProps({
  path: { type: Object as PropType<Navigation>, required: true },
  hasAction: { type: Boolean }
});
</script>

<template>
  <div>
    <BaseIcon v-if="path.icon" :icon="path.icon" color="transparent" />
    {{ path.label }}
  </div>
</template>

<style scoped lang="scss">
@import 'styles/variables';

div {
  font-family: $titleFont;
  font-weight: 400;
}
</style>
