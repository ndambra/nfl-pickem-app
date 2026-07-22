<template>
  <v-dialog v-model="internalValue" max-width="600">
    <v-card prepend-icon="mdi-football" title="Create New League">
      <v-card-text>
        <v-row density="comfortable">
          <v-col cols="12">
            <v-text-field v-model="leagueName" label="League name*" required />
          </v-col>
        </v-row>
        <small class="text-body-small text-medium-emphasis"
          >*indicates required field</small
        >
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer />
        <v-btn text="Cancel" variant="plain" @click="closeDialog" />
        <v-btn
          color="primary"
          text="Create League"
          variant="tonal"
          @click="createLeague"
        />
      </v-card-actions>
      <app-toast v-model="showToast" :toast-msg="toastMsg" color="error" />
    </v-card>
  </v-dialog>
</template>
<script setup>
const props = defineProps({
  modelValue: { type: Boolean, required: true },
});
const emit = defineEmits(["update:modelValue", "create"]);

const internalValue = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

const leagueName = ref("");
const showToast = ref(false);
const toastMsg = ref("");

function closeDialog() {
  internalValue.value = false;
}

function createLeague() {
  if (leagueName.value.trim().length <= 0) {
    toastMsg.value = "League Name is required.";
    showToast.value = true;
  } else {
    closeDialog();
    const newLeagueName = leagueName.value;
    leagueName.value = "";
    emit("create", newLeagueName);
  }
}
</script>
