<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSidebar } from '~/composables/sidebar.composable';
import CreateCard from '~/components/CreateCard.vue';
import { useElement } from '~/stores/element.store';
import ElementCard from '~/components/base/ElementCard.vue';

const $sidebar = useSidebar();
const $router = useRouter();
const $element = useElement();

const { elements } = storeToRefs($element);
$element.get();

const open = async () => {
  await $router.replace({ query: { element: 'true' } });
  return $sidebar.open();
};
</script>

<template>
  <div class="elements">
    <h2>Elements</h2>
    <div class="elements__list">
      <CreateCard @click="open" />
      <ElementCard
        v-for="element of elements"
        :key="element.id"
        :element="element"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'styles/variables.scss';

.elements {
  h2 {
    margin-block: 1em 0;
    border-top: 1px dashed $blue;
  }
  &__list {
    margin-block: 1em;
    max-width: calc(100vw - 2em);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1em;

    > * {
      max-width: 300px;
    }
  }
}
</style>
