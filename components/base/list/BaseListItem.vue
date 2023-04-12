<template>
  <v-list-item :subtitle="item.subtitle" active-color="primary">
    <v-list-item-title class="item__title">
      <v-icon v-if="item.icon" :icon="item.icon"></v-icon>
      <span v-if="!onlyIcons">{{ item.title }}</span>
    </v-list-item-title>
  </v-list-item>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { ListItemInterface } from '~/interfaces/list-item.interface';

defineProps({
  item: { type: Object as PropType<ListItemInterface>, required: true },
  onlyIcons: { type: Boolean }
});
</script>

<style lang="scss" scoped>
.item__title {
  display: flex;
  align-items: center;
  gap: 0.4em;
}
</style>
