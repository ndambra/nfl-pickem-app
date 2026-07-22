<template>
  <v-container max-width="450">
    <v-row>
      <v-col>
        <v-form @submit.prevent="register">
          <v-container max-width="400">
            <v-text-field
              v-model="credentials.name"
              placeholder="Name"
              required
            />

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

            <v-btn type="submit" color="primary" block class="mb-3"
              >Sign Up</v-btn
            >
            <v-divider :content-offset="[12, 2.5]" opacity=".7">or</v-divider>
            <v-btn
              class="mt-3"
              block
              prepend-icon="mdi-github"
              @click="openInPopup('/api/auth/github')"
              >Sign Up with Github</v-btn
            >
          </v-container>
        </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-btn variant="plain" to="/login">Have an account? Login</v-btn>
      </v-col>
    </v-row>
    <app-toast v-model="showToast" :toast-msg="toastMsg" :color="toastColor" />
  </v-container>
</template>

<script lang="ts" setup>
const { loggedIn, fetch: refreshSession, openInPopup } = useUserSession();
const showToast = ref(false);
const toastMsg = ref("");
const toastColor = ref("primary");

const credentials = reactive({
  email: "",
  password: "",
  name: "",
});

watch(loggedIn, () => {
  if (loggedIn.value) navigateTo("/dashboard");
});

async function register() {
  try {
    await $fetch("/api/auth/register", {
      method: "POST",
      body: credentials,
    });
    refreshSession();
    toastMsg.value = "User registered";
    toastColor.value = "success";
  } catch {
    toastMsg.value = "Registration failed.";
    toastColor.value = "error";
  }
  showToast.value = true;
}
</script>

<style></style>
