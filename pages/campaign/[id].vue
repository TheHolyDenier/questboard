<script setup lang="ts">
import { useRoute } from 'vue-router';

definePageMeta({
  middleware: 'auth'
});

const route = useRoute();

const id = computed(() => route.params.id);
</script>

<template>
  <div>
    <h1>{{ id }}</h1>
    <QuestBoard />
  </div>
</template>

<style scoped lang="scss"></style>
