<script setup lang="ts">
import { useCampaign } from '~/stores/campaign.store';
import CampaignForm from '~/components/CampaignForm.vue';

definePageMeta({
  middleware: 'auth'
});

const $campaign = useCampaign();
const campaigns = computed(() =>
  $campaign.campaigns.map((campaign) => ({
    name: campaign.id,
    title: campaign.title,
    subtitle: campaign.summary,
    to: { name: 'campaign-id', params: { id: campaign.id } }
  }))
);

onMounted(() => {
  $campaign.get();
});

watch(
  () => $campaign.needsRefresh,
  () => $campaign.get()
);
</script>

<template>
  <div class="campaigns">
    <h1 class="campaigns__title">Campaigns</h1>
    <div class="campaigns__container">
      <div class="campaigns__container__list">
        <BaseList :list="campaigns" />
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
    justify-content: center;

    &__list {
      flex: 1;
      min-width: 40vw;
    }
  }
}
</style>
