<script setup lang="ts">
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCampaign } from '~/stores/campaign.store';
import { useSidebar } from '~/composables/sidebar.composable';
import CampaignSidebar from '~/components/CampaignSidebar.vue';
import ElementCards from '~/components/ElementCards.vue';
import HeaderCard from '~/components/HeaderCard.vue';

definePageMeta({
  middleware: 'auth'
});

const $sidebar = useSidebar();
const $route = useRoute();
const $router = useRouter();
const $campaign = useCampaign();

const id = computed(() => String($route.params.campaignId));
const { selectedCampaign, loading } = storeToRefs($campaign);

onMounted(() => {
  $campaign.getOne(id.value);
});

const open = () => $sidebar.open();

const remove = async () => {
  await $campaign.remove(id.value);
  await $router.replace({ name: 'campaigns' });
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
  <HeaderCard
    :id="selectedCampaign?.id"
    :loading="!selectedCampaign || loading"
    :title="selectedCampaign?.title"
    :image="selectedCampaign?.cover"
    :markdown-text="selectedCampaign?.summary"
    @on:delete="remove"
    @on:update="open"
  >
    <ElementCards />

    <CampaignSidebar v-if="selectedCampaign" :campaign="selectedCampaign" />
  </HeaderCard>
</template>

<style scoped lang="scss"></style>
