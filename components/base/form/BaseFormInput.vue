<script setup lang="ts">
import { PropType } from 'vue';
import { InputDefinitionInterface } from '~/interfaces/input-definition.interface';
import { InputEventInterface } from '~/interfaces/input-event.interface';

defineProps({
  inputDefinition: {
    type: Object as PropType<InputDefinitionInterface>,
    required: true
  }
});

const emit = defineEmits<{
  (e: 'on:change', inputEvent: InputEventInterface): void;
}>();
</script>

<template>
  <BaseFormInputTextField
    :input-definition="inputDefinition"
    @on:change="emit('on:change', $event)"
  />
</template>

<style scoped lang="scss"></style>
