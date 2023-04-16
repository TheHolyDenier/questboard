<script setup lang="ts">
import { Quest } from '.prisma/client';
import { useQuests } from '~/stores/quest.store';
import QuestDetail from '~/components/QuestDetail.vue';

const { quests } = useQuests();
const selectedQuest = ref<Quest>(quests[0]);
</script>

<template>
  <div class="quest-board card-wood">
    <div class="quest-board__header separator">
      <h1>Campaign</h1>
    </div>
    <div class="quest-board__list">
      <div
        v-for="quest of quests"
        :key="quest.id!"
        class="card-parchment mini"
        @click="selectedQuest = quest"
      >
        <p>- {{ quest.title! }}</p>
      </div>
    </div>
    <QuestDetail v-if="selectedQuest !== null" :quest="selectedQuest" />
  </div>
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
