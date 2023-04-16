<script setup lang="ts">
import { PropType } from 'vue';
import { ListItemInterface } from '~/interfaces/list-item.interface';
import BaseListItemValue from '~/components/base/BaseListItemValue.vue';

defineProps({
  item: { type: Object as PropType<ListItemInterface>, required: true }
});

defineEmits<{ (e: 'on:click', value: string): void }>();
</script>

<template>
  <div :class="[item.nameClass]" @click="$emit('on:click', item.name)">
    <RouterLink v-if="item.to" :to="item.to">
      <BaseListItemValue :item="item" />
    </RouterLink>
    <BaseListItemValue v-else :item="item" />
  </div>
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

a,
.active {
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
}
</style>
