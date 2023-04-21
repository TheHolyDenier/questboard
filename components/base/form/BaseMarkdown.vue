<script setup lang="ts">
import Editor from '@toast-ui/editor';
import debounce from 'lodash/debounce';

const $emit = defineEmits<{
  (e: 'on:change', value: string): void;
}>();

const props = defineProps({
  name: { type: String, required: true },
  inputValue: { type: String, default: '' }
});

let editor: Editor;

const id = `${props.id}-markdown`;

const onChange = () => $emit('on:change', editor!.getMarkdown());

onMounted(() => {
  const { $markdown } = useNuxtApp();

  editor = new $markdown({
    el: document.querySelector(`#${id}`)!,
    previewStyle: 'tab',
    height: '500px',
    initialValue: props.inputValue,
    events: {
      change: debounce(onChange, 250, { maxWait: 1000 })
    },
    hideModeSwitch: true
  });
});
</script>

<template>
  <div :id="id"></div>
</template>

<style scoped lang="scss">
.markdown {
  min-width: 575px;
}
</style>
