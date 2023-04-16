<script setup lang="ts">
import MazCard from 'maz-ui/components/MazCard';
import { PropType } from 'vue';
import BaseIcon from '~/components/base/BaseIcon.vue';
import { ListItemInterface } from '~/interfaces/list-item.interface';

defineProps({
  item: { type: Object as PropType<ListItemInterface>, required: true }
});
</script>

<template>
  <MazCard :elevation="false" orientation="row" bordered no-padding>
    <template #title>
      <h3>
        <BaseIcon v-if="item.leadingIcon" :icon="item.leadingIcon" />
        {{ item.title }}
      </h3>
    </template>
    <template v-if="item.subtitle" #subtitle>
      <span> {{ item.subtitle }} </span>
    </template>
    <template v-if="$slots.default" #content>
      <slot></slot>
    </template>
  </MazCard>
</template>

<style scoped lang="scss"></style>
