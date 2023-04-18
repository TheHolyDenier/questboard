<script setup lang="ts">
import { PropType } from 'vue';
import { Campaign } from '@prisma/client';
import { useRoute } from 'vue-router';

defineProps({
  campaign: { type: Object as PropType<Campaign>, required: true }
});

const $route = useRoute();

const isElement = computed(() => !!$route.query.element);
</script>

<template>
  <CampaignSidebarElement v-if="isElement" />
  <CampaignSidebarUpdate v-else :campaign="campaign" />
</template>

<style scoped lang="scss"></style>
