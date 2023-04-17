<script setup lang="ts">
import { PropType } from 'vue';
import { Campaign } from '@prisma/client';
import { InputDefinitionInterface } from '~/interfaces/input-definition.interface';
import BaseForm from '~/components/base/form/BaseForm.vue';
import { useCampaign } from '~/stores/campaign.store';
import { FormDataInterface } from '~/interfaces/form-data.interface';

defineProps({
  campaign: { type: Object as PropType<Campaign>, default: null }
});

const emit = defineEmits<{ (e: 'on:cancel'): void }>();

const createInputDefinitions: InputDefinitionInterface[] = [
  { name: 'title', label: 'Title', required: true },
  { name: 'summary', label: 'Summary' }
];

const updateInputDefinitions: InputDefinitionInterface[] = [
  { name: 'title', label: 'Title', required: true },
  { name: 'summary', label: 'Summary' },
  { name: 'cover', label: 'Cover' },
  { name: 'isFavorite', label: 'Is favorite?', type: 'checkbox' }
];

const campaign = useCampaign();
const create = async (create: FormDataInterface) => {
  return await campaign.create(create);
};
</script>

<template>
  <BaseCard title="Create campaign">
    <BaseForm
      :input-definitions="
        campaign ? updateInputDefinitions : createInputDefinitions
      "
      :cancel-action="!!campaign"
      @on:submit="create"
      @on:cancel="emit('on:cancel')"
    />
  </BaseCard>
</template>

<style scoped lang="scss"></style>
