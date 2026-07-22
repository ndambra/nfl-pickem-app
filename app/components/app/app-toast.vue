<template>
  <v-snackbar
    v-model="internalValue"
    location="bottom"
    :color="color"
    :timeout="timeout"
    >{{ toastMsg }}</v-snackbar
  >
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: { type: Boolean, required: true },
  toastMsg: { type: String, required: true },
  color: { type: String, default: "primary" },
  timeout: { type: Number, default: 3000 },
});
const emit = defineEmits(["update:modelValue"]);

const internalValue = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>

<style></style>
