<script setup lang="ts">
import MazCard from 'maz-ui/components/MazCard';
import { PropType } from 'vue';
defineProps({
  images: { type: [Array, null] as PropType<string[] | null>, default: null },
  title: { type: String, default: null },
  subtitle: { type: String, default: null },
  orientation: {
    type: String as PropType<
      'column' | 'row' | 'row-reverse' | 'column-reverse'
    >,
    default: 'column'
  },
  zoom: { type: Boolean },
  bordered: { type: Boolean, default: true },
  collapsable: { type: Boolean },
  hasAction: { type: Boolean }
});
</script>

<template>
  <MazCard
    class="card"
    :class="{ active: hasAction }"
    :bordered="bordered || false"
    :collapsable="collapsable || false"
    :elevation="false"
    :images="images"
    :orientation="orientation || ''"
    :zoom="zoom || false"
    no-padding
  >
    <template v-if="title || $slots.title" #title>
      <slot name="title">
        <div class="card__title">
          <h2 style="margin: 0">{{ title }}</h2>
        </div>
      </slot>
    </template>
    <template v-if="subtitle || $slots.subtitle" #subtitle>
      <slot name="subtitle">
        <p>{{ subtitle }}</p>
      </slot>
    </template>
    <template v-if="$slots.default" #content>
      <slot></slot>
    </template>
  </MazCard>
</template>

<style scoped lang="scss">
@import '/styles/variables.scss';

.card__title {
  background: $patternBackground;
  background-size: $patternBackgroundSize;
  padding: 0.5em;
  color: $patternBackgroundContrast;
}

:deep(.m-card__content) {
  padding: 0.5em;
}
</style>
