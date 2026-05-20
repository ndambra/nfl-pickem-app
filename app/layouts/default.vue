<template>
  <v-app :theme="theme">
    <client-only>
      <v-navigation-drawer v-model="drawer" location="right" temporary>
        <v-list density="comfortable">
          <v-list-item
            v-for="item in items"
            :key="item.value"
            :prepend-icon="item.icon"
            :title="item.title"
            :value="item.value"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </client-only>
    <app-nav-bar
      @change-theme="toggleTheme"
      @toggle-drawer="openDrawer"
      :theme="theme"
    />
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const theme = ref("light");
const items = [
  { title: "Dashboard", value: "dashboard", icon: "mdi-view-dashboard" },
  {
    title: "My Leagues",
    value: "my-leagues",
    icon: "mdi-format-list-bulleted-square",
  },
  { title: "Settings", value: "settings", icon: "mdi-cog-outline" },
];

const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
}

function openDrawer() {
  drawer.value = !drawer.value;
}
</script>

<style></style>
