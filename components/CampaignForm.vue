<script setup lang="ts">
import { PropType } from 'vue';
import { Campaign } from '@prisma/client';
import { InputDefinitionInterface } from '~/interfaces/input-definition.interface';
import BaseForm from '~/components/base/form/BaseForm.vue';
import { useCampaign } from '~/stores/campaign.store';
import { FormDataInterface } from '~/interfaces/form-data.interface';

const props = defineProps({
  campaign: { type: Object as PropType<Campaign>, default: null }
});

const emit = defineEmits<{ (e: 'on:cancel'): void; (e: 'on:success'): void }>();

const inputDefinitions: InputDefinitionInterface[] = [
  { name: 'title', label: 'Title', required: true },
  { name: 'summary', label: 'Summary', type: 'textarea' },
  { name: 'cover', label: 'Cover' },
  { name: 'isFavorite', label: 'Is favorite?', type: 'checkbox' }
];

const $campaign = useCampaign();
const submit = async (body: FormDataInterface) => {
  props.campaign
    ? await $campaign.update(props.campaign.id, body)
    : await $campaign.create(body);
  emit('on:success');
};
</script>

<template>
  <BaseForm
    :model="campaign"
    :input-definitions="inputDefinitions"
    :cancel-action="!!campaign"
    @on:submit="submit"
    @on:cancel="emit('on:cancel')"
  />
</template>

<style scoped lang="scss"></style>
