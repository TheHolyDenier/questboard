<template>
  <div class="layout">
    <div class="layout__navigation">
      <RouterLink :to="{ name: 'index' }">
        <BaseButton leading-icon="wood-cabin" color="transparent" />
      </RouterLink>
      <MiniProfile></MiniProfile>
    </div>
    <div class="layout__container">
      <slot> </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: { type: String, default: null }
});
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  padding-inline: 1em;

  &__navigation {
    position: sticky;
    display: flex;
    justify-content: space-between;
    top: 0;
    width: calc(100vw - 2em);
    padding-block: 0.5em;
  }
}
</style>
