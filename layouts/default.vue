<template>
  <div class="layout">
    <TheDrawer class="layout__drawer" />
    <BaseCardStacked class="layout__content">
      <div v-if="title" class="layout__content__title">
        <h1>{{ title }}</h1>
        <v-divider color="primary" class="border-opacity-100"></v-divider>
      </div>
      <div class="layout__content__main">
        <div v-if="$slots.sidebar" class="layout__content__main__sidebar">
          <slot name="sidebar" />
        </div>
        <div class="layout__content__main__default">
          <slot />
        </div>
      </div>
    </BaseCardStacked>
  </div>
</template>

<script lang="ts" setup>
import TheDrawer from '~/components/unique/TheDrawer.vue';
import BaseCardStacked from '~/components/base/BaseCardStacked.vue';

defineProps({
  title: { type: String, default: null }
});
</script>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  gap: 1em;

  > * {
    padding: 1em;
  }

  &__content {
    flex: 1;
    height: 100vh;

    &__title {
      margin-block-end: 1em;
    }

    &__main {
      display: flex;
      width: 100%;
      height: 100%;
      gap: 1em;

      &__default {
        flex: 1;
      }

      &__sidebar {
        width: 300px;
      }
    }
  }
}
</style>
