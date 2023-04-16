<script setup lang="ts">
import MazIcon from 'maz-ui/components/MazIcon';

const iconNames = ['icons/monster-skull'];
</script>

<template>
  <span v-for="icon in iconNames" :key="icon">
    <MazIcon :name="icon" size="1em" />
  </span>
</template>

<style scoped lang="scss"></style>
