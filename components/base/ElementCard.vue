<script setup lang="ts">
import { PropType } from 'vue';
import { ElementDto } from '~/domain/elements/element.dto';

defineProps({
  element: { type: Object as PropType<ElementDto>, required: true }
});
</script>

<template>
  <pre>{{ JSON.stringify(element, null, 2) }}</pre>
</template>

<style scoped lang="scss"></style>
