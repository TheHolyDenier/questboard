<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  image: { type: String, default: null },
  title: { type: String, default: null },
  subtitle: { type: String, default: null },
  orientation: {
    type: String as PropType<
      'column' | 'row' | 'row-reverse' | 'column-reverse'
    >,
    default: 'column'
  },
  zoom: { type: Boolean },
  bordered: { type: Boolean },
  hasAction: { type: Boolean }
});
</script>

<template>
  <div
    class="card"
    :class="{ active: hasAction, bordered: bordered }"
    :style="{ flexDirection: orientation }"
  >
    <div
      v-if="image"
      class="card__image"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <div class="card__container">
      <template v-if="title || $slots.title">
        <slot name="title">
          <div class="card__title">
            <h2>{{ title }}</h2>
          </div>
        </slot>
      </template>
      <template v-if="subtitle || $slots.subtitle">
        <slot name="subtitle">
          <p>{{ subtitle }}</p>
        </slot>
      </template>
      <template v-if="$slots.default">
        <slot></slot>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/styles/variables.scss';

.card {
  display: flex;
  border-radius: 15px;
  overflow: hidden;

  &__image {
    flex: 1;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__container {
    flex: 4;
  }
}

.card__title {
  background: $patternBackground;
  background-size: $patternBackgroundSize;
  padding: 0.5em;
  color: $patternBackgroundContrast;
}
</style>
