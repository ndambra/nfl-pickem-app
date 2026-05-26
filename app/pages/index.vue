<template>
  <v-container
    class="fill-height d-flex flex-column justify-center text-center"
  >
    <v-sheet v-if="loggedIn">
      <h1>logged in</h1>
    </v-sheet>
    <v-sheet v-else>
      <v-card
        title="Welcome to NFL Pick 'em"
        text="Keep track of all your NFL Pick 'em leagues!!!"
      />
      <v-btn
        color="primary-lighten-1"
        variant="flat"
        @click="navigateTo('/login')"
        >Get Started</v-btn
      >
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
const { loggedIn } = useUserSession();
</script>
