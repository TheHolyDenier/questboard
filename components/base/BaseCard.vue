<script setup lang="ts">
import MazCard from 'maz-ui/components/MazCard';
import { PropType } from 'vue';
defineProps({
  title: { type: String, default: null },
  subtitle: { type: String, default: null },
  orientation: {
    type: String as PropType<
      'column' | 'row' | 'row-reverse' | 'column-reverse'
    >,
    default: 'column'
  },
  zoom: { type: Boolean }
});
</script>

<template>
  <MazCard
    :elevation="false"
    :orientation="orientation || ''"
    :zoom="zoom || false"
    bordered
    no-padding
  >
    <template v-if="title" #title>
      <h2 style="margin: 0">{{ title }}</h2>
    </template>
    <template v-if="subtitle" #subtitle>
      <span> {{ subtitle }}} </span>
    </template>
    <template #content>
      <slot></slot>
    </template>
  </MazCard>
</template>

<style scoped lang="scss">
@import '/styles/variables.scss';

:deep(.m-card__title) {
  background: $patternBackground;
  background-size: $patternBackgroundSize;
  padding: 0.5em;
  color: $patternBackgroundContrast;
}

:deep(.m-card__content) {
  padding: 0.5em;
}
</style>
