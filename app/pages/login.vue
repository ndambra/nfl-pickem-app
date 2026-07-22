<template>
  <v-container>
    <v-row>
      <v-col>
        <v-form validate-on="blur" @submit.prevent="login">
          <v-container max-width="400">
            <v-text-field
              v-model="credentials.email"
              :rules="emailRules"
              placeholder="Email"
              type="email"
              required
            />

            <v-text-field
              v-model="credentials.password"
              :rules="passwordRules"
              placeholder="Password"
              type="password"
              required
            />

            <v-btn type="submit" color="primary" block class="mb-3"
              >Login</v-btn
            >
            <v-divider :content-offset="[12, 2.5]" opacity=".7">or</v-divider>
            <v-btn
              class="mt-3"
              block
              prepend-icon="mdi-github"
              @click="openInPopup('/api/auth/github')"
              >Login with Github</v-btn
            >
          </v-container>
        </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-btn variant="plain" to="/register">New user? Sign up!</v-btn>
      </v-col>
    </v-row>
    <app-toast v-model="showToast" :toast-msg="toastMsg" :color="toastColor" />
  </v-container>
</template>

<script lang="ts" setup>
import { FetchError } from "ofetch";

const { loggedIn, fetch: refreshSession, openInPopup } = useUserSession();

const showToast = ref(false);
const toastMsg = ref("");
const toastColor = ref("primary");

const emailRules = [
  (value: string) => {
    if (value) return true;

    return "E-mail is required.";
  },
  (value: string) => {
    if (/.+@.+\..+/.test(value)) return true;

    return "E-mail must be valid.";
  },
];

const passwordRules = [
  (value: string) => {
    if (value) return true;

    return "Password is required.";
  },
];

const credentials = reactive({
  email: "",
  password: "",
});

watch(loggedIn, () => {
  if (loggedIn.value) navigateTo("/dashboard");
});

async function login() {
  try {
    await $fetch("/api/auth/login", {
      method: "POST",
      body: credentials,
    });
    await refreshSession();
    await navigateTo("/dashboard");
  } catch (error) {
    toastColor.value = "error";
    if (error instanceof FetchError) {
      toastMsg.value = "Invalid email or password.";
    } else {
      toastMsg.value = "Error logging in. Try again later.";
    }
    showToast.value = true;
  }
}
</script>

<style></style>
