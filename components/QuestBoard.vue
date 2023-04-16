<script setup lang="ts">
import { Quest } from '.prisma/client';
import { useQuests } from '~/stores/quest.store';
import QuestDetail from '~/components/QuestDetail.vue';
import { ListItemInterface } from '~/interfaces/list-item.interface';

const $quest = useQuests();
const quests = computed(() =>
  $quest.quests.map<ListItemInterface>((item) => ({
    name: item.id,
    title: item.title!,
    nameClass: 'active'
  }))
);
const selectedQuest = ref<Quest>();

const setSelectedQuest = (id: string) => {
  selectedQuest.value = $quest.quests.find((quest) => quest.id === id);
};
</script>

<template>
  <BaseCard title="Campaign">
    <div class="quest-board">
      <div class="quest-board__list">
        <BaseList :list="quests" @on:click="setSelectedQuest" />
      </div>
      <QuestDetail v-if="selectedQuest" :quest="selectedQuest" />
    </div>
  </BaseCard>
</template>

<style scoped lang="scss">
@import 'settings.scss';

.quest-board {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;

  &__header {
    grid-column: -1/1;
    margin-block-end: -10px;
    margin-inline-start: 2px;
    text-align: center;
  }
}
</style>
