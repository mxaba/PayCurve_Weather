<template>
  <div class="error__wrapper">
    <Search />
    <Error />
  </div>
  {{ message }}
</template>

<script lang="ts">
import Search from "@/components/Search/Search.vue";

import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export const namespaced = true;

export default {
  name: "Home",
  components: { Search },
  setup() {
    const message = ref("You are not logged in!");
    const store = useStore();
    const router = useRouter();

    onMounted(async () => {
      try {
        const results = await fetch("http://localhost:5000/api/user", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const defaultSearch = async(query: string) => {
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

        const content = await results.json();
        if (results.status == 200) {
          message.value = `Hello ${content.name}`;

          if (content.email == "admin@admin.com") {
            await store.dispatch("setIsAdmin", true);
          } else {
            await store.dispatch("setIsAdmin", false);
          }
          await store.dispatch("setAuthentication", true);
        } else {
          await router.push("/error");
        }
      } catch (error) {
        await store.dispatch("setAuthentication", false);
        await store.dispatch("setIsAdmin", false);
      }
    });

    return {
      message,
    };
  },
};
</script>
