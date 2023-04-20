<script setup lang="ts">
import { useSidebar } from '~/composables/sidebar.composable';

defineProps({ title: { type: String, required: true } });

const sidebar = useSidebar();

const isSidebarOpen = computed<boolean>(() => sidebar.isOpen.value);
const close = () => sidebar.close();
</script>

<template>
  <div>
    <div v-if="isSidebarOpen" @close="close">
      <div>
        {{ title }}
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
