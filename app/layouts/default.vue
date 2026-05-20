<template>
  <v-app :theme="theme">
    <app-nav-bar @change-theme="toggleTheme" :theme="theme" />
    <v-main>
      <slot />
    </v-main>

    <v-footer app color="primary-darken-3" height="30">
      <v-container class="text-center text-body-small">
        © {{ new Date().getFullYear() }} NFL Pick 'em - All Rights Reserved
      </v-container>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const theme = ref("light");

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>

<style></style>
