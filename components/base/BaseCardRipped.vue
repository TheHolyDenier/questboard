<template>
  <div class="article">
    <v-card :subtitle="subtitle" :title="title" variant="text">
      <template v-if="$slots.title" #title>
        <slot name="title" />
      </template>

      <template v-if="$slots.subtitle" #subtitle>
        <slot name="subtitle" />
      </template>

      <template #text>
        <slot />
      </template>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: { type: String, default: null },
  subtitle: { type: String, default: null }
});
</script>

<style lang="scss" scoped>
.article {
  position: relative;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  background-color: white;
  padding: 20px;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    height: 20px;
    width: 100%;
    left: 0;
    background: url(/svg/rip.svg) bottom;
    background-size: 200%;
  }
}
</style>
