<template>
  <NuxtLayout>
    <!--    <CreateProjectForm />-->
    <QuestBoard />
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'unsign'
});
</script>

<style lang="scss" scoped></style>
