<template>
  <v-form validate-on="submit" @submit.prevent="save">
    <BaseFormTextField
      v-for="inputDefinition of formDefinition"
      :key="inputDefinition.name"
      :input-definition="inputDefinition"
      :value="getValue(inputDefinition.name)"
      @update:value="formData[inputDefinition.name] = $event"
    />
    <div class="form__actions">
      <BaseButton label="Submit" type="submit" />
      <slot name="actions" />
    </div>
  </v-form>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { get } from 'lodash';
import { FormDefinitionInterface } from '~/interfaces/form-definition.interface';
import { FormDataInterface } from '~/interfaces/form-data.interface';

const emits = defineEmits<{
  (e: 'update:form', value: FormDataInterface): void;
  (e: 'on:save', value: FormDataInterface): void;
}>();
const props = defineProps({
  formDefinition: {
    type: Array as PropType<FormDefinitionInterface[]>,
    required: true
  },
  model: { type: Object, default: () => {} }
});

const formData = ref<FormDataInterface>(props.model || {});

watch(
  formData,
  (value) => {
    emits('update:form', value);
  },
  { immediate: true }
);

const save = async (event: SubmitEvent) => {
  if (await event) emits('on:save', formData.value);
};

const getValue = (inputName: string) => {
  return props.model ? get(props.model, inputName) : null;
};

// const emailRules = [
//   (value: string) => {
//     if (value) return true
//
//     return 'E-mail is requred.'
//   },
//   (value: string) => {
//     if (/.+@.+\..+/.test(value)) return true
//
//     return 'E-mail must be valid.'
//   },
// ];
</script>

<style lang="scss" scoped>
.form__actions {
  display: flex;
  gap: 0.5em;
}
</style>
