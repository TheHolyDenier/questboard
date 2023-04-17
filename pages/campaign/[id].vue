<script setup lang="ts">
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCampaign } from '~/stores/campaign.store';

definePageMeta({
  middleware: 'auth'
});

const route = useRoute();
const router = useRouter();
const $campaign = useCampaign();

const id = computed(() => String(route.params.id));
const { selectedCampaign } = storeToRefs($campaign);

onMounted(() => {
  $campaign.getOne(id.value);
});

const remove = async () => {
  await $campaign.remove(id.value);
  await router.replace({ name: 'campaign-list' });
};

watch(
  () => $campaign.needsRefresh,
  () => $campaign.getOne(id.value)
);

watch(
  () => id.value,
  () => $campaign.getOne(id.value)
);
</script>

<template>
  <div v-if="selectedCampaign" class="campaign">
    <BaseCard
      :bordered="false"
      :images="selectedCampaign.cover ? [String(selectedCampaign.cover)] : null"
      orientation="row"
      style="width: 100%"
    >
      <template #title>
        <div class="campaign__title">
          <h1>
            {{ selectedCampaign.title }}
          </h1>
          <DeleteButton @on:delete="remove" />
          <CampaignFormSidebar :campaign="selectedCampaign" />
        </div>
      </template>
      <template #subtitle>
        <p class="campaign__subtitle">{{ selectedCampaign.summary }}</p>
      </template>
    </BaseCard>
  </div>
</template>

<style scoped lang="scss">
.campaign {
  &__title {
    display: flex;
    gap: 1em;
    align-items: center;

    h1 {
      flex: 1;
    }
  }

  &__subtitle {
    margin-inline-start: 1em;
  }
}
</style>
