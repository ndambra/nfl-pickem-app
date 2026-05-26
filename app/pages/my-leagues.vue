<template>
  <v-container
    class="fill-height d-flex flex-column align-center justify-center text-center"
  >
    <v-icon icon="mdi-format-list-bulleted-square" size="64" />

    <div class="mt-3">My Leagues</div>
  </v-container>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});
</script>

<style></style>
