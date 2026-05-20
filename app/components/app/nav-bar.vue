<template>
  <v-app-bar color="primary">
    <template v-slot:prepend> </template>
    <v-app-bar-title class="font-weight-bold text-title-large"
      >NFL Pick 'em'</v-app-bar-title
    >

    <template v-slot:append>
      <v-spacer></v-spacer>

      <v-btn
        :icon="
          props.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        "
        slim
        @click="onClick"
      ></v-btn>
      <v-app-bar-nav-icon
        @click.stop="$emit('toggleDrawer')"
      ></v-app-bar-nav-icon>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
const emit = defineEmits(["changeTheme", "toggleDrawer"]);
const props = defineProps(["theme"]);

function onClick() {
  emit("changeTheme");
}
</script>

<style></style>
