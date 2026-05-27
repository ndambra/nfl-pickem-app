<template>
  <v-container>
    <h2 class="mt-3">Hi, {{ user?.name }}!</h2>
    <v-row>
      <v-col cols="12">
        <v-card variant="outlined" class="mx-auto">
          <v-card-title class="text-headline-medium">My Leagues</v-card-title>
          <v-card-text>
            <v-divider />
            <v-list v-if="leagues">
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
            <v-btn block color="primary" @click="createLeague"
              >Add League</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
// import type { League } from "~~/server/db/schema";
const { user } = useUserSession();
definePageMeta({
  middleware: ["auth"],
});

const { data: leagues } = await useFetch(`/api/leagues/${user.value?.id}`);

function viewLeague(leagueId: string) {
  console.log(`View league: ${leagueId}`);
}

function createLeague() {}
</script>

<style></style>
