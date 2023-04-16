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
  <div v-if="selectedCampaign">
    <h1>
      {{ selectedCampaign.title }}
      <DeleteButton @on:delete="remove" />
    </h1>

    <QuestBoard />
  </div>
</template>

<style scoped lang="scss"></style>
