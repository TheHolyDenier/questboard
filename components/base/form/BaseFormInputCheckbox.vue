<script setup lang="ts">
import { PropType, ref } from 'vue';
import MazCheckbox from 'maz-ui/components/MazCheckbox';
import { InputDefinitionInterface } from '~/interfaces/input-definition.interface';
import { InputEventInterface } from '~/interfaces/input-event.interface';

const props = defineProps({
  inputDefinition: {
    type: Object as PropType<InputDefinitionInterface>,
    required: true
  },
  model: { type: Boolean }
});

const inputValue = ref(props.model);

const emit = defineEmits<{
  (e: 'on:change', inputEvent: InputEventInterface): void;
}>();

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
  <MazCheckbox v-model="inputValue" :name="inputDefinition.name">
    {{ inputDefinition.label }}
  </MazCheckbox>
</template>

<style scoped lang="scss"></style>
