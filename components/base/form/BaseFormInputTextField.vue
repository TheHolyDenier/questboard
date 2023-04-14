<script setup lang="ts">
import { PropType, ref } from 'vue';
import MazInput from 'maz-ui/components/MazInput';
import { InputDefinitionInterface } from '~/interfaces/input-definition.interface';
import { InputEventInterface } from '~/interfaces/input-event.interface';

const props = defineProps({
  inputDefinition: {
    type: Object as PropType<InputDefinitionInterface>,
    required: true
  }
});

const emit = defineEmits<{
  (e: 'on:change', inputEvent: InputEventInterface): void;
}>();

const inputValue = ref('');
const error = ref(false);
const errorMessage = ref<string | null>(null);

watch(
  () => inputValue.value,
  () => {
    emit('on:change', {
      name: props.inputDefinition.name,
      value: inputValue.value
    });
  }
);

const validate = async () => {
  error.value = false;
  errorMessage.value = null;
  if (
    props.inputDefinition.required &&
    (!inputValue.value || inputValue.value === '')
  ) {
    error.value = true;
    errorMessage.value = `${props.inputDefinition.label} is required`;

    if (error.value) return true;
  }

  for (const validation of props.inputDefinition.validations || []) {
    const result = await validation(inputValue.value);
    if (result !== true) {
      error.value = true;
      errorMessage.value = String(result);
      if (error.value) return true;
    }
  }

  return false;
};
</script>

<template>
  <MazInput
    v-model="inputValue"
    :label="inputDefinition.label"
    :required="inputDefinition.required || false"
    :error="error"
    :hint="(error ? errorMessage : inputDefinition.hint) || ''"
    :type="inputDefinition.type || 'text'"
    @blur="validate"
  />
</template>

<style scoped lang="scss"></style>
