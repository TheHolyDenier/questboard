<template>
  <v-avatar :color="src ? null : color">
    <v-img v-if="src" :alt="alt" :src="src"></v-img>
    <v-icon v-else :icon="icon"></v-icon>
  </v-avatar>
</template>

<script lang="ts" setup>
defineProps({
  src: { type: String, default: null },
  icon: { type: String, default: 'mdi-image' },
  alt: { type: String, default: null },
  color: { type: String, default: 'primary' }
});
</script>

<style lang="scss" scoped></style>
