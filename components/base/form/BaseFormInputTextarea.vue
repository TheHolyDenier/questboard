<script setup lang="ts">
import { PropType, ref } from 'vue';
import MazTextarea from 'maz-ui/components/MazTextarea';
import { InputDefinitionInterface } from '~/interfaces/input-definition.interface';
import { InputEventInterface } from '~/interfaces/input-event.interface';
import { useForm } from '~/composables/form.composable';

const props = defineProps({
  inputDefinition: {
    type: Object as PropType<InputDefinitionInterface>,
    required: true
  },
  model: { type: [String, Number], default: null }
});

const emit = defineEmits<{
  (e: 'on:change', inputEvent: InputEventInterface): void;
}>();

const inputValue = ref(props.model ? String(props.model) : '');

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
const form = useForm();

const isValid = async () => {
  error.value = false;
  errorMessage.value = null;
  const result = await form.validate(inputValue.value, props.inputDefinition);

  if (result !== true) {
    error.value = true;
    errorMessage.value = result;
    return false;
  }

  return true;
};

// const editor = new Editor({
//   usageStatistics: false
// });

// const editor = new toastui.Editor({
//   el: document.querySelector('#editor'),
//   previewStyle: 'vertical',
//   height: '500px',
//   initialValue: content
// });
</script>

<template>
  <BaseMarkdown :id="inputDefinition.name" />
  <!--  <MazTextarea-->
  <!--    :id="inputDefinition.name"-->
  <!--    v-model="inputValue"-->
  <!--    :error="error"-->
  <!--    :hint="(error ? errorMessage : inputDefinition.hint) || ''"-->
  <!--    :name="inputDefinition.name"-->
  <!--    :required="inputDefinition.required || false"-->
  <!--    :type="inputDefinition.type || 'text'"-->
  <!--    @blur="isValid"-->
  <!--  />-->
</template>

<style scoped lang="scss"></style>
