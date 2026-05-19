<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Dashboard",
    to: "/dashboard",
    icons: "lucide:layout-dashboard",
    active: route.path.startsWith("/dashboard"),
  },
  {
    label: "My Leagues",
    to: "/leagues/my-leagues",
    icons: "lucide:layout-list",
    active: route.path.startsWith("/leagues/my-leagues"),
  },
  {
    label: "Settings",
    to: "/settings",
    icons: "lucide:settings",
    active: route.path.startsWith("/settings"),
  },
]);
</script>

<template>
  <UHeader
    title="NFL Pick'em"
    mode="slideover"
    :menu="{
      title: 'User',
      ui: {
        content: 'bg-primary dark:bg-primary text-white',
        header: 'bg-primary dark:bg-primary border-b border-white/10',
        body: 'bg-primary dark:bg-primary text-white',
        title: 'text-white text-xl font-bold',
      },
    }"
    :ui="{
      root: 'bg-primary',
      title: 'text-white text-2xl',
    }"
  >
    <UNavigationMenu :items="items" color="primary" variant="link" />

    <template #right>
      <UColorModeButton variant="soft" color="secondary">
        <template #fallback>
          <UButton loading variant="outline" color="primary" />
        </template>
      </UColorModeButton>
    </template>
    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5 text-white"
      />
    </template>
  </UHeader>
  <UMain>
    <slot />
  </UMain>
</template>
