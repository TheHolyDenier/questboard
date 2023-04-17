<template>
  <div class="layout">
    <div class="layout__profile">
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

  &__profile {
    position: absolute;
    top: 0;
    right: 5px;
    z-index: 99;
  }

  &__container {
    padding-inline: 1em;
    padding-block: 3em;
  }
}
</style>
