<script setup lang="ts">
import { useCampaign } from '~/stores/campaign.store';
import CampaignForm from '~/components/CampaignForm.vue';

definePageMeta({
  middleware: 'auth',
  layout: 'default'
});

const { campaigns } = useCampaign();
</script>

<template>
  <div class="campaigns">
    <h1 class="campaigns__title">Campaigns</h1>
    <div class="campaigns__container">
      <div class="campaigns__container__list">
        <div
          v-for="campaign of campaigns"
          :key="campaign.id"
          class="card-parchment mini"
        >
          <RouterLink
            :to="{ name: 'campaign-id', params: { id: campaign.id } }"
          >
            <h2>\>{{ campaign.title }}</h2>
            <p>{{ campaign.summary }}</p>
          </RouterLink>
        </div>
      </div>
      <CampaignForm />
    </div>
  </div>
</template>

<style scoped lang="scss">
.campaigns {
  display: flex;
  min-width: 500px;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;

  &__title {
    width: 100%;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
  }
}
</style>
