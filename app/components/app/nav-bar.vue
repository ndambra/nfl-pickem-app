<template>
  <client-only>
    <v-app-bar color="primary">
      <template #prepend>
        <v-app-bar-nav-icon @click.stop="openDrawer" />
      </template>
      <v-app-bar-title class="font-weight-bold text-title-large ms-3"
        >NFL Pick 'em'</v-app-bar-title
      >

      <template #append>
        <v-btn
          :icon="
            props.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
          "
          slim
          @click="onClick"
        />

        <v-btn
          v-if="!loggedIn"
          color="secondary-lighten-1"
          variant="flat"
          @click="navigateTo('/login')"
          >Login</v-btn
        >
        <app-user-menu v-else />
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
        />
      </v-list>
    </v-navigation-drawer>
  </client-only>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
const { loggedIn } = useUserSession();

const emit = defineEmits(["changeTheme", "toggleDrawer"]);
const props = defineProps({
  theme: {
    type: String,
    default: "light",
  },
});

const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});

const items = [
  { title: "Home", link: "/", icon: "mdi-home" },
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
