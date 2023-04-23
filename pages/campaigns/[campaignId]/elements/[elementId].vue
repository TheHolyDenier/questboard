<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useElement } from '~/stores/element.store';

const $route = useRoute();
const $element = useElement();

const { selectedElement, loading } = storeToRefs($element);

watch(
  () => $route.params.elementId,
  (elementId) => {
    if (!elementId) return;
    $element.getOne(String(elementId));
  },
  { immediate: true }
);
</script>

<template>
  <HeaderCard
    :id="selectedElement?.id"
    :markdown-text="selectedElement?.description"
    :image="selectedElement?.cover"
    :title="selectedElement?.name"
    :loading="!selectedElement || loading"
  ></HeaderCard>
</template>

<style scoped lang="scss"></style>
