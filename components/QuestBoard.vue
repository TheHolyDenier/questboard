<template>
  <div class="quest-board">
    <div class="quest-board__header">
      <img src="@/img/quest-header.png" />
    </div>
    <div class="quest-board__list">
      <img src="@/img/quest-list.png" />
    </div>
    <div class="quest-board__detail">
      <img src="@/img/quest-detail.png" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.quest-board {
  width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  &__header {
    grid-column: -1/1;
    margin-block-end: -10px;
    margin-inline-start: 2px;
  }
}
</style>
