<script setup lang="ts">
import MazDrawer from 'maz-ui/components/MazDrawer';
import { useSidebar } from '~/composables/sidebar.composable';

defineProps({ title: { type: String, required: true } });

const sidebar = useSidebar();

const isSidebarOpen = computed<boolean>(() => sidebar.isOpen.value);
const close = () => sidebar.close();
</script>

<template>
  <MazDrawer
    :model-value="isSidebarOpen"
    variant="right"
    backdrop-class="sidebar"
    @close="close"
  >
    <template #title>
      {{ title }}
    </template>
    <template #default>
      <slot></slot>
    </template>
  </MazDrawer>
</template>

<style scoped lang="scss"></style>
