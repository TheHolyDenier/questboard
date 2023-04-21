<script setup lang="ts">
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCampaign } from '~/stores/campaign.store';
import { useSidebar } from '~/composables/sidebar.composable';
import CampaignSidebar from '~/components/CampaignSidebar.vue';
import ElementCards from '~/components/ElementCards.vue';

definePageMeta({
  middleware: 'auth'
});

const $sidebar = useSidebar();
const $route = useRoute();
const $router = useRouter();
const $campaign = useCampaign();

const id = computed(() => String($route.params.id));
const { selectedCampaign } = storeToRefs($campaign);

onMounted(() => {
  $campaign.getOne(id.value);
});

const open = () => $sidebar.open();

const remove = async () => {
  await $campaign.remove(id.value);
  await $router.replace({ name: 'campaign' });
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
      :image="selectedCampaign.cover"
      orientation="row"
      style="width: 100%"
    >
      <template #title>
        <div class="campaign__title">
          <h1>
            {{ selectedCampaign.title }}
          </h1>
          <DeleteButton @on:delete="remove" />
          <EditButton @click="open" />
        </div>
      </template>
      <template #subtitle>
        <p class="campaign__subtitle">{{ selectedCampaign.summary }}</p>
      </template>
    </BaseCard>

    <ElementCards />

    <CampaignSidebar v-if="selectedCampaign" :campaign="selectedCampaign" />
  </div>
</template>

<style scoped lang="scss">
.campaign {
  &__title {
    display: flex;
    gap: 1em;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    h1 {
      flex: 1;
      margin: 0;
    }
  }

  &__subtitle {
    margin-inline-start: 1em;
  }
}
</style>
