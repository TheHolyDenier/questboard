<script setup lang="ts">
import { useSidebar } from '~/composables/sidebar.composable';

const $sidebar = useSidebar();
const $router = useRouter();

const open = async () => {
  await $router.replace({ query: { element: 'true' } });
  return $sidebar.open();
};
</script>

<template>
  <div class="elements">
    <BaseCard has-action @click="open"> + </BaseCard>
    <BaseCard @click="open"> + </BaseCard>
    <BaseCard @click="open"> + </BaseCard>
    <BaseCard @click="open"> + </BaseCard>
    <BaseCard @click="open"> + </BaseCard>
    <BaseCard @click="open"> + </BaseCard>
    <BaseCard @click="open"> + </BaseCard>
    <BaseCard @click="open"> + </BaseCard>
  </div>
</template>

<style scoped lang="scss">
.elements {
  margin-block: 1em;
  max-width: calc(100vw - 2em);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1em;
}
</style>
