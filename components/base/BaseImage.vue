<template>
  <div class="image">
    <div class="image__container">
      <v-img :src="imageUrl || defaultImage" aspect-ratio="1.5:1" cover></v-img>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  imageUrl: { type: String, default: '/img/question-mark.jpg' },
  alt: { type: String, default: null }
});

const defaultImage = '/img/question-mark.jpg';
</script>

<style lang="scss" scoped>
.image {
  display: flex;
  box-sizing: border-box;
  padding: 1em;

  &__container {
    flex: 1;
    position: relative;
    text-align: center;
    display: inline-block;

    &:before {
      background: rgba(255, 255, 235, 0.6);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
      content: '';
      display: block;
      height: 30px;
      position: absolute;
      width: 100px;
      z-index: 20;
      left: 50%;
      margin-left: -50px;
      top: -10px;
    }

    :deep(img) {
      background: #fff;
      border: 1px solid #ddd;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
      display: inline-block;
      height: auto;
      max-width: 100%;
      padding: 8px;
      text-align: center;
      vertical-align: top;
    }
  }
}
</style>
