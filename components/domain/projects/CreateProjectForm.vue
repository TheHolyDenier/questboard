<template>
  <BaseForm :form-definition="formDefinition" />
</template>

<script setup lang="ts">
import { FormDefinitionInterface } from '~/interfaces/form-definition.interface';

const formDefinition: FormDefinitionInterface[] = [
  { label: 'Title', name: 'title', required: true },
  { label: 'Summary', name: 'summary' },
  { label: 'Cover', name: 'cover' },
  { label: 'Is favorite', name: 'isFavorite' }
];
</script>

<style scoped lang="scss"></style>
