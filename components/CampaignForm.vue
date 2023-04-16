<script setup lang="ts">
import { InputDefinitionInterface } from '~/interfaces/input-definition.interface';
import BaseForm from '~/components/base/form/BaseForm.vue';
import { useCampaign } from '~/stores/campaign.store';
import { FormDataInterface } from '~/interfaces/form-data.interface';

const inputDefinitions: InputDefinitionInterface[] = [
  { name: 'title', label: 'Title', required: true },
  { name: 'summary', label: 'Summary' }
];

const campaign = useCampaign();
const create = async (create: FormDataInterface) => {
  return await campaign.create(create);
};
</script>

<template>
  <BaseCard title="Create campaign">
    <BaseForm :input-definitions="inputDefinitions" @on:submit="create" />
  </BaseCard>
</template>

<style scoped lang="scss"></style>
