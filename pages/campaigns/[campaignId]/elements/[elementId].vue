<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useElement } from '~/stores/element.store';

const $route = useRoute();
const $element = useElement();

const elementId = computed(() => String($route.params.elementId));
const { selectedElement } = storeToRefs($element);

onMounted(() => $element.getOne(elementId.value));
</script>

<template>
  <div>
    {{ selectedElement }}
  </div>
</template>

<style scoped lang="scss"></style>
