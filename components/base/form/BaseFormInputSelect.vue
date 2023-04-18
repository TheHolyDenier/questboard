<script setup lang="ts">
import { PropType, ref } from 'vue';
import MazSelect, { MazSelectOption } from 'maz-ui/components/MazSelect';
import { InputDefinitionInterface } from '~/interfaces/input-definition.interface';
import { InputEventInterface } from '~/interfaces/input-event.interface';

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

const inputValue = ref(props.model || null);

const customTemplateOptions: MazSelectOption[] =
  props.inputDefinition.options!.map<MazSelectOption>(
    (option) => option as unknown as MazSelectOption
  );

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
  <MazSelect
    v-slot="{ option, isSelected }"
    v-model="inputValue"
    :name="inputDefinition.name"
    :options="customTemplateOptions"
    :required="inputDefinition.required || false"
    class="select"
    search
  >
    <div class="select__option">
      <BaseIcon
        v-if="option.icon"
        :icon="option.icon"
        :color="isSelected ? 'white' : 'primary'"
      />
      <span class="select__option__label">
        {{ option.label }}
      </span>
    </div>
  </MazSelect>
</template>

<style scoped lang="scss">
.select {
  &__option {
    padding-block: 0.5em;
    width: 100%;
    gap: 1em;
    display: flex;
    align-items: center;

    &__label {
      font-weight: bold;
    }
  }
}
</style>
