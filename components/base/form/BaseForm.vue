<script setup lang="ts">
import { computed, PropType } from 'vue';
import { InputDefinitionInterface } from '~/interfaces/input-definition.interface';
import BaseFormInput from '~/components/base/form/BaseFormInput.vue';
import { InputEventInterface } from '~/interfaces/input-event.interface';
import { FormDataInterface } from '~/interfaces/form-data.interface';

defineProps({
  inputDefinitions: {
    type: Array as PropType<InputDefinitionInterface[]>,
    default: () => []
  },
  model: { type: Object, default: null },
  okButtonLabel: { type: String, default: 'Save' },
  cancelButtonLabel: { type: String, default: 'Cancel' },
  cancelAction: { type: Boolean }
});

const emit = defineEmits<{
  (e: 'on:change', dataForm: FormDataInterface): void;
  (e: 'on:submit', dataForm: FormDataInterface): Promise<void>;
  (e: 'on:cancel'): void;
}>();

const inputValues = reactive<InputEventInterface[]>([]);
const formData = computed<FormDataInterface>(() =>
  inputValues.reduce(
    (acc: FormDataInterface, value: InputEventInterface) =>
      Object.assign(acc, { [value.name]: value.value }),
    {}
  )
);

const updateDataForm = (inputEvent: InputEventInterface) => {
  const index = inputValues.findIndex((data) => data.name === inputEvent.name);
  if (index === -1) {
    inputValues.push(inputEvent);
  } else {
    inputValues[index].value = inputEvent.value;
  }

  emit('on:change', formData.value);
};

const submit = () => emit('on:submit', formData.value);
</script>

<template>
  <div class="form">
    <BaseFormInput
      v-for="inputDefinition of inputDefinitions"
      :key="inputDefinition.name"
      :input-definition="inputDefinition"
      :model="model?.[inputDefinition.name]"
      @on:change="updateDataForm"
    />
    <div class="form__actions">
      <BaseButton
        v-if="cancelAction"
        :label="cancelButtonLabel"
        color="transparent"
        @click="emit('on:cancel')"
      />
      <BaseButton :label="okButtonLabel" @click="submit" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.form {
  display: flex;
  gap: 1em;
  margin: 1em;
  flex-wrap: wrap;
  flex-direction: column;

  > * {
    min-width: 300px;
    max-width: 600px;
    flex: 1;
  }

  &__actions {
    text-align: right;
  }
}
</style>
