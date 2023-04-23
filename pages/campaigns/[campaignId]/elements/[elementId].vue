<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useElement } from '~/stores/element.store';
import { useBreadcrumb } from '~/stores/breadcrumb.store';

const $route = useRoute();
const $element = useElement();
const $breadcrumb = useBreadcrumb();

const { selectedElement, loading } = storeToRefs($element);

watch(
  () => $route.params.elementId,
  (elementId) => {
    if (!elementId) return;
    $element.getOne(String(elementId));
  },
  { immediate: true }
);

watch(
  () => selectedElement.value,
  (element) => {
    if (!element) return;
    $breadcrumb.update('elementId', element.id, element.name);
    if (element.campaign) {
      $breadcrumb.update(
        'campaignId',
        element.campaign.id,
        element.campaign.title
      );
    }
  }
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
