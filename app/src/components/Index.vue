<template>
  
  <Loader v-if="$store.state.loading" />
  
  <div class="error__wrapper" v-else-if="$store.state.error">
    <NavBar />
    <Search @search="defaultSearch"/>
    <Error />
  </div>
  <div v-else>
    <NavBar />
    <Search @search="defaultSearch" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import Error from "@/components/Error.vue";
import Loader from "@/components/Loader.vue";
import Search from "@/components/Search/Search.vue";
import { BACKEND_URL } from "./../constraints";

import { defineComponent, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Main",
  components: {
    NavBar,
    Loader,
    Search,
    Error,
  },
  setup() {
    const store = useStore();
    const router = useRouter();


    const auth = computed(() => store.state.authenticated);

    onMounted(async () => {
      try {
        const results = await fetch(`${BACKEND_URL}/user`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const content = await results.json();
        if (results.status == 200) {
          console.log(`Hello ${content.name}`);

          if (content.role) {
            await store.dispatch("setIsAdmin", true);
          } else {
            await store.dispatch("setIsAdmin", false);
          }
          await store.dispatch("setAuthentication", true);
        } else {
          await router.push("/login");
        }
      } catch (error) {
        await store.dispatch("setAuthentication", false);
        await store.dispatch("setIsAdmin", false);
      }
    });


    async function defaultSearch(query: string) {
      if (!query.trim().length) {
        store.dispatch("setError", true);
        return;
      }

      store.dispatch("setLoading", true);
      try {
        await store.dispatch("getCurrentWeather", query);

        const { coord } = store.state.currentWeather;
        await store.dispatch("getDailyWeather", {
          lat: coord.lat,
          lon: coord.lon,
        });
        await store.dispatch("getTimezone", { lat: coord.lat, lon: coord.lon });

        store.dispatch("setError", false);
      } catch {
        store.dispatch("setError", true);
      } finally {
        store.dispatch("setLoading", false);
      }
    }

    //first search
    defaultSearch("Cape Town");

    return { defaultSearch, auth };
  },
});
</script>
