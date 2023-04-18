<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { PropType } from 'vue';
import { Campaign } from '@prisma/client';
import { InputDefinitionInterface } from '~/interfaces/input-definition.interface';
import BaseForm from '~/components/base/form/BaseForm.vue';
import { OptionInterface } from '~/interfaces/option.interface';
import { IconType } from '~/types/icon.type';
import { FormDataInterface } from '~/interfaces/form-data.interface';
import { useSidebar } from '~/composables/sidebar.composable';
import { useElement } from '~/stores/element.store';

defineProps({
  campaign: { type: Object as PropType<Campaign>, required: true }
});

const $icon = useIcon();
const $route = useRoute();
const $router = useRouter();
const $sidebar = useSidebar();
const $element = useElement();

const close = async () => $sidebar.close();

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

const isSidebarOpen = computed<boolean>(() => $sidebar.isOpen.value);

watch(
  () => isSidebarOpen.value,
  async () => {
    if (!isSidebarOpen.value) {
      const query = Object.assign({}, $route.query);
      delete query.element;
      await $router.replace({
        name: String($route.name),
        params: $route.params,
        query
      });
    }
  }
);

const submit = async (body: FormDataInterface) => {
  /*  props.campaign
    ? await $element.update(props.campaign.id, body)
    : */ await $element.create(body);
  close();
};
</script>

<template>
  <BaseSidebar title="Create element">
    <BaseForm
      :input-definitions="inputDefinitions"
      cancel-action
      @on:submit="submit"
      @on:cancel="close"
    />
  </BaseSidebar>
</template>

<style scoped lang="scss"></style>
