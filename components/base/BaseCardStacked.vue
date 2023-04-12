<template>
  <div class="papers">
    <div class="papers__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.papers {
  display: flex;
  margin-inline-end: 1em;
  margin-block-start: 1em;
  &__content {
    flex: 1;
    background: #fff;
    box-shadow: /* The top layer shadow */ 0 -1px 1px rgba(0, 0, 0, 0.15),
      /* The second layer */ 0 -10px 0 -5px #eee,
      /* The second layer shadow */ 0 -10px 1px -4px rgba(0, 0, 0, 0.15),
      /* The third layer */ 0 -20px 0 -10px #eee,
      /* The third layer shadow */ 0 -20px 1px -9px rgba(0, 0, 0, 0.15);
    padding: 30px;
  }
}
</style>
