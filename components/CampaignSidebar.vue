<script setup lang="ts">
import { PropType } from 'vue';
import { Campaign } from '@prisma/client';

defineProps({
  campaign: { type: Object as PropType<Campaign>, required: true }
});
</script>

<template>
  <CampaignFormSidebar :campaign="campaign" />
</template>

<style scoped lang="scss"></style>
