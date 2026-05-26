<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <v-btn
          prepend-icon="mdi-github"
          @click="openInPopup('/api/auth/github')"
          >Login with Github</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center text-grey"> or </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-form @submit.prevent="login">
          <v-container max-width="400">
            <v-text-field
              v-model="credentials.email"
              placeholder="Email"
              type="email"
              required
            />

            <v-text-field
              v-model="credentials.password"
              placeholder="Password"
              type="password"
              required
            />

            <v-btn type="submit" color="primary">Login</v-btn>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const { fetch: refreshSession, openInPopup } = useUserSession();

const credentials = reactive({
  email: "",
  password: "",
});
// openInPopup('/api/auth/github')

async function login() {
  try {
    await $fetch("/api/login", {
      method: "POST",
      body: credentials,
    });
    await refreshSession();
    await navigateTo("/");
  } catch {
    alert("Bad credentials");
  }
}
</script>

<style></style>
