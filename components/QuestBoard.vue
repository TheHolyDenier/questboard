<script setup lang="ts">
import { useQuests } from '~/stores/quest.store';
import QuestDetail from '~/components/QuestDetail.vue';

const { quests } = useQuests();
</script>

<template>
  <div class="quest-board card-wood">
    <div class="quest-board__header separator">
      <h1>Campaign</h1>
    </div>
    <div class="quest-board__list">
      <template v-for="quest of quests" :key="quest.id">
        <h2>- {{ quest.title }}</h2>
        <p>{{ quest.description }}</p>
      </template>
    </div>
    <QuestDetail v-if="quests.length" :quest="quests[0]" />
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

  &__list {
  }
}
</style>
