<template>
  <NuxtLayout v-if="me" :title="`${me.username}'s profile`">
    <template #sidebar>
      <BaseImage :alt="me.username" :image-url="me.avatar" />
    </template>
    <BaseForm :form-definition="formDefinition" :model="me" @on:save="save" />
  </NuxtLayout>
  <NuxtLayout v-else title="Profile">
    <BaseLoading />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { FormDefinitionInterface } from '~/interfaces/form-definition.interface';
import { UpdateUserDto } from '~/domain/users/update-user.dto';
import { useUser } from '~/stores/user.store';

definePageMeta({
  middleware: 'auth'
});

const user = useUser();

const formDefinition: FormDefinitionInterface[] = [
  { label: 'Avatar', name: 'avatar' }
];

const me = computed(() => user.me);
user.getMe();
const save = async (body: UpdateUserDto) => {
  return await user.update(body);
};
</script>

<style lang="scss" scoped></style>
