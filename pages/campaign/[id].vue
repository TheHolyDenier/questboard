<script setup lang="ts">
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCampaign } from '~/stores/campaign.store';
import EditButton from '~/components/EditButton.vue';

definePageMeta({
  middleware: 'auth'
});

const route = useRoute();
const router = useRouter();
const $campaign = useCampaign();

const id = computed(() => String(route.params.id));
const { selectedCampaign } = storeToRefs($campaign);

const editing = ref(true);

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
    <div class="campaign__header">
      <h1>
        {{ selectedCampaign.title }}
      </h1>
      <DeleteButton @on:delete="remove" />
      <EditButton @click="editing = true" />
    </div>

    <CampaignForm
      v-if="editing"
      :campaign="selectedCampaign"
      @on:cancel="editing = false"
      @on:success="editing = false"
    />
  </div>
</template>

<style scoped lang="scss">
.campaign {
  &__header {
    display: flex;
    gap: 1em;
    align-items: center;

    h1 {
      flex: 1;
    }
  }
}
</style>
