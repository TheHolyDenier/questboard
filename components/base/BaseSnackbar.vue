<template>
  <v-snackbar v-model="showSnackbar" :timeout="timeout" color="warning">
    {{ text }}

    <template v-if="closeButton" #actions>
      <v-btn color="blue" variant="text" @click="showSnackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts" setup>
const props = defineProps({
  snackbar: { type: Number, default: null },
  text: { type: String, required: true },
  timeout: { type: Number, default: 20000 },
  closeButton: { type: Boolean }
});

const showSnackbar = ref(false);

watch(
  () => props.snackbar,
  () => {
    showSnackbar.value = true;
  }
);
</script>

<style lang="scss" scoped></style>
