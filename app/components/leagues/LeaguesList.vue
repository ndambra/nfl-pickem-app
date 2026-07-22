<template>
  <v-card variant="outlined" class="mx-auto">
    <v-card-title class="text-headline-medium">My Leagues</v-card-title>
    <v-card-text>
      <v-divider />
      <v-list v-if="leagues && leagues.length > 0">
        <template v-for="(league, index) in leagues" :key="league.id">
          <v-list-item>
            <v-list-item-title class="text-title-small">{{
              league.name
            }}</v-list-item-title>
            <v-list-item-subtitle>Members: 8</v-list-item-subtitle>
            <template #append>
              <v-btn
                icon="mdi-eye"
                variant="text"
                size="small"
                @click="viewLeague(league.id)"
              />
            </template>
          </v-list-item>

          <v-divider
            v-if="index < leagues.length - 1"
            :key="`${index}-divider`"
            class="my-2"
          />
        </template>
      </v-list>
      <v-sheet v-else class="text-center my-4"> No Leagues </v-sheet>
      <v-divider class="my-2" />
      <v-btn block color="primary" @click="showDialog = true">Add League</v-btn>
      <new-league-dialog v-model="showDialog" @create="createNewLeague" />
    </v-card-text>
    <app-toast v-model="showToast" :toast-msg="toastMsg" :color="toastColor" />
  </v-card>
</template>

<script lang="ts" setup>
import type { League } from "~~/server/db/schema";
import NewLeagueDialog from "./NewLeagueDialog.vue";

const { user } = useUserSession();
const leagues = ref<League[]>([]);
const showDialog = ref(false);
const showToast = ref(false);
const toastMsg = ref("");
const toastColor = ref("primary");

function viewLeague(leagueId: string) {
  // TODO: implement viewing leagues
  console.log(`View league: ${leagueId}`);
}

async function fetchUsersLeagues() {
  const response = await fetch(`/api/leagues/${user.value?.id}`);

  if (!response.ok) {
    throw new Error(`Server error: ${response.status}`);
  }

  const data: League[] = await response.json();
  return data;
}

async function createNewLeague(leagueName: string) {
  console.log(`Create new league for: ${leagueName}`);
  try {
    if (user && user.value && user.value.id) {
      const newLeague = await $fetch(`/api/leagues/${user.value?.id}`, {
        method: "POST",
        body: { name: leagueName },
      });
      console.log(`New league created: ${newLeague.id} ; ${newLeague.name}`);
      leagues.value = await fetchUsersLeagues();
    }
  } catch {
    console.log("Failed to create league");
    showToast.value = true;
    toastMsg.value = "Server error, failed to create league.";
    toastColor.value = "error";
  }
}

onMounted(async () => {
  leagues.value = await fetchUsersLeagues();
});
</script>
