<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useElement } from '~/stores/element.store';

const $route = useRoute();
const $element = useElement();

const elementId = computed(() => String($route.params.elementId));
const { selectedElement, loading } = storeToRefs($element);

onMounted(() => $element.getOne(elementId.value));
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
