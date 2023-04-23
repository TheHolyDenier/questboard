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
  <div>
    <HeaderCard
      :image="selectedElement?.cover"
      :title="selectedElement?.name"
      :loading="!selectedElement || loading"
    ></HeaderCard>

    <BaseMarkdownViewer
      v-if="selectedElement"
      :name="selectedElement.id"
      :value="selectedElement.description"
      :max-length="0"
    />
  </div>
</template>

<style scoped lang="scss"></style>
