<template>
  
  <Loader v-if="$store.state.loading" />
  <div class="error__wrapper" v-else-if="$store.state.error">
    <Search @search="defaultSearch"/>
    <Error />
  </div>
  <div v-else>
    <NavBar />
    <Search @search="defaultSearch" />
    <router-view></router-view>
    <Navbar />
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar/Navbar.vue";
import NavBar from "@/components/NavBar.vue";
import Error from "@/components/Error.vue";
import Loader from "@/components/Loader.vue";
import Search from "@/components/Search/Search.vue";

import { defineComponent } from "vue";
import { useStore } from "vuex";
import { getCityNameByCoordinates } from "@/utils";
export default defineComponent({
  name: "Main",
  components: {
    NavBar,
    Navbar,
    Loader,
    Search,
    Error,
  },
  setup() {
    const store = useStore();
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

    return { defaultSearch };
  },
});
</script>
