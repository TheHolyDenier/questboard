<template>
  <div>
    <NuxtLayout name="auth" title="Sign-up">
      <div>
        <p v-if="formError" class="auth__error text-error">
          <v-icon icon="mdi-alert-circle" />
          E-mail or username already registered.
        </p>
        <BaseForm :form-definition="signUpForm" @on:save="save">
          <template #actions>
            <NuxtLink to="/sign-in">
              <BaseButton
                label="Already have an account? Sign-in"
                variant="text"
              />
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
import { SignUpDto } from '~/domain/auth/sign-up.dto';
import { useUser } from '~/stores/user.store';

definePageMeta({
  middleware: 'unsign'
});

const user = useUser();

const signUpForm: FormDefinitionInterface[] = [
  { label: 'username', name: 'username', required: true },
  { label: 'email', name: 'email', required: true },
  { label: 'password', name: 'password', required: true, type: 'password' }
];

const formError = ref<number>(0);

const save = async (data: SignUpDto) => {
  try {
    await user.signUp(data);
    navigateTo('/sign-in');
  } catch (e) {
    formError.value = new Date().getTime();
  }
};
</script>

<style lang="scss" scoped>
.auth__error {
  margin-block-end: 0.5em;
}
</style>
