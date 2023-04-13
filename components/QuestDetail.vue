<script setup lang="ts">
import { PropType } from 'vue';
import { QuestDto } from '~/domain/quests/quest.dto';

defineProps({ quest: { type: Object as PropType<QuestDto>, required: true } });
</script>

<template>
  <div class="quest-detail card-parchment">
    <h3>{{ quest.title }}</h3>
    <p>{{ quest.description }}</p>
  </div>
</template>

<style scoped lang="scss">
.quest-detail {
  width: 100%;
}
</style>
