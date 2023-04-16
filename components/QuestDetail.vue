<script setup lang="ts">
import { PropType } from 'vue';
import { Quest } from '.prisma/client';

defineProps({ quest: { type: Object as PropType<Quest>, required: true } });
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
