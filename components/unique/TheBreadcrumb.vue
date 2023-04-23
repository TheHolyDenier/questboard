<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useBreadcrumb } from '~/stores/breadcrumb.store';
import BaseBreadcrumbPath from '~/components/base/BaseBreadcrumbPath.vue';
import { Navigation } from '~/utils/navigation';

const $route = useRoute();

const { navigation } = storeToRefs(useBreadcrumb());

const activeNavigation = computed<Navigation[]>(() => {
  const index = navigation.value
    .filter((path) => !path.paramProperty || path.id)
    .findIndex((path) => path.name === $route.name);
  if (index === -1) return [navigation.value[0]];

  return navigation.value.slice(0, index + 1);
});
</script>

<template>
  <div class="breadcrumb">
    <div
      v-for="(path, index) of activeNavigation"
      :key="path.name"
      class="breadcrumb__path"
    >
      <div v-if="index === activeNavigation.length - 1">
        <BaseBreadcrumbPath :path="path" />
      </div>
      <RouterLink v-else :to="path.to">
        <BaseBreadcrumbPath :path="path" has-action />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'styles/variables';

.breadcrumb {
  display: flex;
  gap: 0.2em;
  align-items: center;

  a:hover :deep(.icon) {
    background-color: $secondary;
  }

  &__path {
    display: flex;
    align-items: center;

    &:nth-last-child(n + 2)::after {
      content: '>';
      margin-inline-start: 0.1em;
    }
  }
}
</style>
