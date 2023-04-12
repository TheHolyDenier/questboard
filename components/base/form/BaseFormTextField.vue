<template>
  <v-text-field
    v-model="model"
    :counter="inputDefinition.counter"
    :label="inputDefinition.label"
    :rules="rules"
    :type="inputDefinition.type || 'text'"
    :clearable="!inputDefinition.required"
    variant="underlined"
  ></v-text-field>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue';

import { FormDefinitionInterface } from '~/interfaces/form-definition.interface';

const emits = defineEmits<{
  (e: 'update:value', value: string | undefined): void;
}>();
const props = defineProps({
  inputDefinition: {
    type: Object as PropType<FormDefinitionInterface>,
    required: true
  },
  value: { type: String, default: null }
});

const model = ref(props.value);

const rules = computed(() => {
  let rules: any[] = [];

  if (props.inputDefinition.required) {
    rules.push(
      (value: string) =>
        !!value?.length || `${props.inputDefinition.label} is required.`
    );
  }

  if (props.inputDefinition.counter) {
    rules.push(
      (value: string) =>
        value?.length <= 10 ||
        `${props.inputDefinition.label} must be less than ${props.inputDefinition.counter} characters.`
    );
  }

  if (props.inputDefinition.rules) {
    rules = [...rules, ...props.inputDefinition.rules];
  }

  return rules;
});

watch(model, (val) => emits('update:value', val), { immediate: true });
</script>

<style lang="scss" scoped></style>
