<template>
  <v-container
    class="fill-height d-flex flex-column align-center justify-center text-center"
  >
    <v-icon icon="mdi-cog-outline" size="64" />

    <div class="mt-3">Settings</div>
  </v-container>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});
</script>

<style></style>
