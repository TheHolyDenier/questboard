<template>
  <div :class="{ expanded: expanded }" class="drawer">
    <div class="drawer__header">
      <div class="drawer__header__user">
        <UserAvatar :user="me" />
        <h2 v-if="expanded">{{ me?.username }}</h2>
      </div>
      <BaseButton
        v-if="expanded"
        icon="mdi-chevron-left"
        variant="text"
        @click="app.toggleDrawer"
      />
    </div>

    <div class="drawer__content">
      <BaseList :items="listItems" :only-icons="!expanded" />
    </div>

    <div class="drawer__empty" @click="app.toggleDrawer"></div>

    <BaseButton
      :label="expanded ? 'sign-out' : null"
      icon="mdi-logout"
      @click.prevent="logout"
    />

    <div v-if="expanded" class="drawer__footer">2023 arroba Helena</div>
    <div v-else>23@H</div>
  </div>
</template>

<script lang="ts" setup>
import { User } from '.prisma/client';
import { useUser } from '~/stores/user.store';
import UserAvatar from '~/components/domain/UserAvatar.vue';
import { ListItemInterface } from '~/interfaces/list-item.interface';
import { useApp } from '~/stores/app.store';

const app = useApp();

const user = useUser();
user.getMe();
const me = computed<User | null>(() => user.me);

const listItems: ListItemInterface[] = [
  { title: 'Home', name: 'home', path: '/', icon: 'mdi-home' },
  {
    title: 'Profile',
    name: 'profile',
    path: '/profile/me',
    icon: 'mdi-account'
  }
];

const logout = () => {
  user.logout();
  navigateTo('/sign-in');
};

const expanded = computed(() => app.drawerExpanded);
</script>

<style lang="scss" scoped>
.drawer {
  background-color: var(--v-theme-background);
  border-right: 1px double var(--v-theme-on-background);
  transition: width 350ms ease;
  width: calc(40px + 16px + 2em);
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: center;

  &.expanded {
    width: 20%;
    max-width: 350px;
    min-width: 200px;
    align-items: stretch;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    height: 50px;

    &__user {
      display: flex;
      gap: 0.5em;
      align-items: center;
    }
  }

  &__empty {
    flex: 1;
    width: 100%;
  }
}
</style>
