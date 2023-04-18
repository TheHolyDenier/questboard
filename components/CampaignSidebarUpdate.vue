<script setup lang="ts">
import { PropType } from 'vue';
import { Campaign } from '@prisma/client';
import { useSidebar } from '~/composables/sidebar.composable';

defineProps({
  campaign: { type: Object as PropType<Campaign>, required: true }
});

const sidebar = useSidebar();

const close = () => sidebar.close();
</script>

<template>
  <BaseSidebar title="Edit campaign">
    <CampaignForm :campaign="campaign" @on:cancel="close" @on:success="close" />
  </BaseSidebar>
</template>

<style scoped lang="scss"></style>
