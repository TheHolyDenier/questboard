<template>
  <v-list>
    <template v-for="item of items" :key="item.name">
      <RouterLink v-if="item.path" :to="item.path" @click.prevent>
        <BaseListItem :item="item" :only-icons="onlyIcons" @click.stop />
      </RouterLink>
      <BaseListItem v-else :item="item" :only-icons="onlyIcons" />
    </template>
  </v-list>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { ListItemInterface } from '~/interfaces/list-item.interface';

defineProps({
  items: { type: Array as PropType<ListItemInterface[]>, default: () => [] },
  onlyIcons: { type: Boolean }
});
</script>

<style lang="scss" scoped></style>
