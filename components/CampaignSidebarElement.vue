<script setup lang="ts">
import { InputDefinitionInterface } from '~/interfaces/input-definition.interface';
import BaseForm from '~/components/base/form/BaseForm.vue';
import { OptionInterface } from '~/interfaces/option.interface';
import { IconType } from '~/types/icon.type';

const $icon = useIcon();

const inputDefinitions: InputDefinitionInterface[] = [
  { name: 'name', label: 'Name', required: true },
  { name: 'description', label: 'Description', type: 'textarea' },
  {
    name: 'type',
    label: 'Type',
    type: 'select',
    options: $icon.icons.map<OptionInterface>((icon) => ({
      label: icon.replaceAll('-', ' '),
      icon: icon as IconType,
      value: icon
    }))
  },
  { name: 'cover', label: 'Cover' },
  { name: 'isFavorite', label: 'Is favorite?', type: 'checkbox' },
  { name: 'exists', label: 'Exists?', type: 'checkbox' }
];
</script>

<template>
  <BaseSidebar title="Create element">
    <BaseForm :input-definitions="inputDefinitions" cancel-action />
  </BaseSidebar>
</template>

<style scoped lang="scss"></style>
