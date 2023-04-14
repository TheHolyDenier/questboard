<script setup lang="ts">
import { InputDefinitionInterface } from '~/interfaces/input-definition.interface';
import BaseForm from '~/components/base/form/BaseForm.vue';

definePageMeta({
  middleware: 'unsign',
  layout: 'auth'
});

const inputDefinitions: InputDefinitionInterface[] = [
  { name: 'username', label: 'Username', required: true },
  { name: 'email', label: 'Email', required: true },
  { name: 'password', label: 'Password', required: true }
];

function submit() {
  // Handle form submission
}
</script>

<template>
  <div class="signup-form card-wood" @submit.prevent="submit">
    <h1 class="form-title">Sign Up</h1>

    <BaseForm :input-definitions="inputDefinitions" ok-button-label="Sign Up" />
  </div>
</template>

<style lang="scss"></style>
