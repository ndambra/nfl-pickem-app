<template>
  <v-menu min-width="200px">
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <v-avatar color="primary-lighten-2">
          <span class="text-headline-small">{{ user.initials }}</span>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <v-avatar color="primary-darken-2">
            <span class="text-headline-small">{{ user.initials }}</span>
          </v-avatar>
          <h3 class="my-0">{{ user.fullname }}</h3>
          <p class="text-body-small mt-1">
            {{ user.email }}
          </p>
          <v-divider class="my-1"></v-divider>
          <v-btn variant="text">Account Settings</v-btn>
          <v-divider class="my-1"></v-divider>
          <v-btn variant="text">Log out</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script lang="ts" setup>
defineProps(["user"]);
</script>

<style></style>
