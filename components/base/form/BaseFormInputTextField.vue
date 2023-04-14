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

watch(
  () => inputValue.value,
  () => {
    emit('on:change', {
      name: props.inputDefinition.name,
      value: inputValue.value
    });
  }
);
</script>

<template>
  <MazInput
    v-model="inputValue"
    :label="inputDefinition.label"
    :required="inputDefinition.required"
  />
</template>

<style scoped lang="scss"></style>
