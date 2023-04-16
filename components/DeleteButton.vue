<script setup lang="ts">
import MazDialogPromise, {
  useMazDialogPromise
} from 'maz-ui/components/MazDialogPromise';

const { showDialogAndWaitChoice } = useMazDialogPromise();

const emits = defineEmits<{ (e: 'on:delete'): void }>();

const askConfirm = async () => {
  try {
    const response = await showDialogAndWaitChoice('dialog');
    if (response) emits('on:delete');
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <BaseButton leading-icon="bone-bite" label="Delete" @click="askConfirm" />
  <MazDialogPromise identifier="dialog">
    <template #title> Are you sure you want to delete? </template>
    <template #default> This action cannot be undone.</template>
    <template #footer-button="{ reject, resolve }">
      <BaseButton label="Delete" @click="resolve" />
      <BaseButton label="Cancel" color="transparent" @click="reject" />
    </template>
  </MazDialogPromise>
</template>

<style scoped lang="scss"></style>
