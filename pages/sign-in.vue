<template>
  <div>
    <NuxtLayout name="auth" title="Sign-in">
      <div>
        <BaseForm :form-definition="signInForm" @on:save="save">
          <template #actions>
            <NuxtLink to="/sign-up">
              <BaseButton label="Need an account? Sign-up" variant="text" />
            </NuxtLink>
          </template>
        </BaseForm>
        <BaseSnackbar
          :snackbar="formError"
          color="error"
          text="There's been an error"
        />
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { FormDefinitionInterface } from '~/interfaces/form-definition.interface';
import { SignInDto } from '~/domain/auth/sign-in.dto';
import { useUser } from '~/stores/user.store';

definePageMeta({
  middleware: 'unsign'
});

const user = useUser();

const signInForm: FormDefinitionInterface[] = [
  { label: 'email', name: 'email', required: true },
  { label: 'password', name: 'password', required: true, type: 'password' }
];

const formError = ref<number>(0);

const save = async (data: SignInDto) => {
  try {
    await user.signIn(data);
    navigateTo('/');
  } catch (e) {
    formError.value = new Date().getTime();
  }
};
</script>

<style lang="scss" scoped></style>
