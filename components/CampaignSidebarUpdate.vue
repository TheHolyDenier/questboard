<script setup lang="ts">
import { PropType } from 'vue';
import { Campaign } from '@prisma/client';
import { useSidebar } from '~/composables/sidebar.composable';
import { useCampaign } from '~/stores/campaign.store';

defineProps({
  campaign: { type: Object as PropType<Campaign>, required: true }
});

const sidebar = useSidebar();
const $campaign = useCampaign();

const close = () => {
  $campaign.refresh();
  return sidebar.close();
};
</script>

<template>
  <BaseSidebar title="Edit campaign">
    <CampaignForm :campaign="campaign" @on:cancel="close" @on:success="close" />
  </BaseSidebar>
</template>

<style scoped lang="scss"></style>
