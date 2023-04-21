<script setup lang="ts">
import { useSidebar } from '~/composables/sidebar.composable';

defineProps({ title: { type: String, required: true } });

const sidebar = useSidebar();

const isSidebarOpen = computed<boolean>(() => sidebar.isOpen.value);
const close = () => sidebar.close();
</script>

<template>
  <Transition name="slide-fade">
    <div v-if="isSidebarOpen" class="background" @click.self.prevent="close">
      <div class="sidebar" @close="close">
        <div class="sidebar__title">
          <h2>
            {{ title }}
          </h2>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@import 'styles/variables.scss';

.background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  //left: 0;
  width: 100%;
  background-color: rgba($blue, 0.8);
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
  }

  .sidebar {
    background-color: $green-light;
    min-width: 300px;
    max-width: 95vw;

    overflow-y: scroll;
    overflow-x: hidden;
    border-left: 2px solid $blue;

    &__title {
      background-color: $secondary;
      padding-inline: 1em;
      padding-block: 1.5em;
      h2 {
        margin: 0;
      }
    }
  }
}
</style>
