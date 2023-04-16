<script setup lang="ts">
import { PropType } from 'vue';
import MazCard from 'maz-ui/components/MazCard';
import { ListItemInterface } from '~/interfaces/list-item.interface';
import BaseIcon from '~/components/base/BaseIcon.vue';

defineProps({
  item: { type: Object as PropType<ListItemInterface>, required: true }
});
</script>

<template>
  <RouterLink v-if="item.to" :to="item.to">
    <MazCard :elevation="false" orientation="row" bordered no-padding>
      <template #title>
        <BaseIcon />
        <h3>{{ item.title }}</h3>
      </template>
      <template v-if="item.subtitle" #subtitle>
        <span> {{ item.subtitle }} </span>
      </template>
      <template #content>
        <slot></slot>
      </template>
    </MazCard>
  </RouterLink>
  <MazCard v-else :elevation="false" orientation="row" bordered>
    <template #title>
      <h2>{{ item.title }}</h2>
    </template>
    <template v-if="item.subtitle" #subtitle>
      <span> {{ item.subtitle }} </span>
    </template>
    <template #content>
      <slot></slot>
    </template>
  </MazCard>
</template>

<style scoped lang="scss">
@import '/styles/variables.scss';

:deep(.m-card) {
  width: 100%;
  padding: 1em;
  color: $blue;
  position: relative;
  background-color: $green-light;
}
a {
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
}
</style>
