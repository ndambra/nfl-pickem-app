<template>
  <v-container>
    <h2 class="mt-3">Hi, {{ user?.name }}!</h2>
    <v-row>
      <v-col cols="12">
        <leagues-list />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const { user } = useUserSession();
definePageMeta({
  middleware: ["auth"],
});
</script>

<style></style>
