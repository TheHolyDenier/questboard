<script setup lang="ts">
import { PropType } from 'vue';
import { ListItemInterface } from '~/interfaces/list-item.interface';
import BaseListItem from '~/components/base/BaseListItem.vue';

defineProps({
  list: { type: Array as PropType<ListItemInterface[]>, default: () => [] }
});
</script>

<template>
  <div class="list">
    <BaseListItem v-for="item of list" :key="item.name" :item="item" />
  </div>
</template>

<style scoped lang="scss">
.list {
  display: flex;
  gap: 1em;
  flex-direction: column;
}
</style>
