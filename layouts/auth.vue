<template>
  <div class="auth">
    <div>
      <h1>{{ title }}</h1>

      <BaseCardRipped class="auth__card">
        <slot />
      </BaseCardRipped>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseCardRipped from '~/components/base/BaseCardRipped.vue';

defineProps({ title: { type: String, required: true } });
</script>

<style lang="scss" scoped>
.auth {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  &__card {
    max-width: 100%;
    width: 500px;
  }
}
</style>
