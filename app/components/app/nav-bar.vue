<template>
  <client-only>
    <v-app-bar color="primary">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="openDrawer"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title class="font-weight-bold text-title-large ms-3"
        >NFL Pick 'em'</v-app-bar-title
      >

      <template v-slot:append>
        <v-btn
          :icon="
            props.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
          "
          slim
          @click="onClick"
        ></v-btn>
        <app-user-menu :user="user"></app-user-menu>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list density="comfortable">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :prepend-icon="item.icon"
          :title="item.title"
          @click="navigateTo(item.link)"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </client-only>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const emit = defineEmits(["changeTheme", "toggleDrawer"]);
const props = defineProps(["theme"]);

const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});

const user = {
  initials: "ND",
  fullname: "Nik Dam",
  email: "test@test.com",
};

const items = [
  { title: "Dashboard", link: "dashboard", icon: "mdi-view-dashboard" },
  {
    title: "My Leagues",
    link: "my-leagues",
    icon: "mdi-format-list-bulleted-square",
  },
  { title: "Settings", link: "settings", icon: "mdi-cog-outline" },
];

function onClick() {
  emit("changeTheme");
}

function openDrawer() {
  drawer.value = !drawer.value;
}
</script>

<style></style>
