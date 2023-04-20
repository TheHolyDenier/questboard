<script setup lang="ts">
import Editor from '@toast-ui/editor';
import { debounce } from 'lodash';

const props = defineProps({
  id: { type: String, required: true },
  inputValue: { type: String, default: 'Vengaaa' }
});

let editor: Editor;

const onChange = () => {
  console.log('change!', editor!.getMarkdown());
};

onMounted(() => {
  const { $markdown } = useNuxtApp();

  editor = new $markdown({
    el: document.querySelector(`#${props.id}`)!,
    previewStyle: 'tab',
    height: '500px',
    initialValue: props.inputValue,
    events: {
      change: debounce(onChange, 250, { maxWait: 1000 })
    }
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
