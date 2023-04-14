<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUser } from '~/stores/user.store';

const user = useUser();
user.getMe();
const { me } = storeToRefs(user);
</script>

<template>
  <div class="ribbon">
    <h2>{{ me?.username }}</h2>
  </div>
</template>

<style scoped lang="scss">
@import 'styles/variables.scss';

.ribbon {
  text-align: center;
  display: block;
  width: 100px;
  background: #d00202;
  color: $primary;

  h2 {
    padding-block: 1em;
  }

  &:after {
    content: '';
    display: block;
    position: relative;
    top: 80px;
    width: 0;
    height: 0;
    border-width: 30px 50px 50px 50px;
    border-style: solid;
    border-color: #d00202 #d00202 transparent #d00202;
  }
}
</style>
