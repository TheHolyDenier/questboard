<script setup lang="ts">
import { useQuests } from '~/stores/quest.store';
import QuestDetail from '~/components/QuestDetail.vue';
import { QuestDto } from '~/domain/quests/quest.dto';

const { quests } = useQuests();
const selectedQuest = ref<null | QuestDto>(null);
</script>

<template>
  <div class="quest-board card-wood">
    <div class="quest-board__header separator">
      <h1>Campaign</h1>
    </div>
    <div class="quest-board__list">
      <div
        v-for="quest of quests"
        :key="quest.id"
        class="card-parchment mini"
        @click="selectedQuest = quest"
      >
        <p>- {{ quest.title }}</p>
      </div>
    </div>
    <QuestDetail v-if="selectedQuest" :quest="selectedQuest" />
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

  &__list > div {
    transition: transform 0.3s ease;
    padding: 0.5em;
    margin: 1em;

    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
}
</style>
