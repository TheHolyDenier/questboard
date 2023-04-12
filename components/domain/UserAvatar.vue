<template>
  <BaseAvatar :alt="user?.username" :icon="icon" :src="user?.avatar" />
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { User } from '.prisma/client';

defineProps({
  user: { type: Object as PropType<User>, default: null }
});

const icons = [
  'cat',
  'cow',
  'dog',
  'pig',
  'panda',
  'robot',
  'sheep',
  'penguin',
  'koala'
];

const randomIcon = Math.floor(Math.random() * icons.length + 1);
const icon = `mdi-${icons[randomIcon]}`;
</script>

<style lang="scss" scoped></style>
