<script setup lang="ts">
import { useCampaign } from '~/stores/campaign.store';

definePageMeta({
  middleware: 'auth',
  layout: 'default'
});

const { campaigns } = useCampaign();
</script>

<template>
  <div class="campaigns">
    <h1>Campaigns</h1>
    <div
      v-for="campaign of campaigns"
      :key="campaign.id"
      class="campaigns__item"
    >
      <RouterLink :to="{ name: 'campaign-id', params: { id: campaign.id } }">
        <h2>\>{{ campaign.title }}</h2>
        <p>{{ campaign.summary }}</p>
      </RouterLink>
    </div>
  </div>

  <QuestBoard />
</template>

<style scoped lang="scss">
.campaigns__item {
  margin-block-end: 1em;
}
</style>
