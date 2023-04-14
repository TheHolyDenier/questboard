<script setup lang="ts">
import { PropType } from 'vue';
import { InputDefinitionInterface } from '~/interfaces/input-definition.interface';
import BaseFormInput from '~/components/base/form/BaseFormInput.vue';
import { InputEventInterface } from '~/interfaces/input-event.interface';

defineProps({
  inputDefinitions: {
    type: Array as PropType<InputDefinitionInterface[]>,
    default: () => []
  },
  okButtonLabel: { type: String, default: 'Save' }
});

const emit = defineEmits<{
  (e: 'on:change', inputEvents: InputEventInterface[]): void;
}>();

const dataForm = reactive<InputEventInterface[]>([]);

const updateDataForm = (inputEvent: InputEventInterface) => {
  const index = dataForm.findIndex((data) => data.name === inputEvent.name);
  if (index === -1) {
    dataForm.push(inputEvent);
  } else {
    dataForm[index].value = inputEvent.value;
  }

  emit('on:change', dataForm);
};
</script>

<template>
  <div class="form">
    <BaseFormInput
      v-for="inputDefinition of inputDefinitions"
      :key="inputDefinition.name"
      :input-definition="inputDefinition"
      @on:change="updateDataForm"
    />
    <div class="form__actions">
      <BaseButton :label="okButtonLabel" />
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
