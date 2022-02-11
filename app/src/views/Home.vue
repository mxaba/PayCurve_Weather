<template>{{ message }}</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
export const namespaced = true;

export default {
  name: "Home",
  setup() {
    const message = ref("You are not logged in!");
    const store = useStore();

    onMounted(async () => {
      try {
        const results = await fetch("http://localhost:5000/api/user", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const content = await results.json();
        if (results.status == 200) {
          message.value = `Hello ${content.name}`;

          if (content.email == "admin@admin.com") {
            await store.dispatch("setIsAdmin", true);
          } else {
            await store.dispatch("setIsAdmin", false);
          }
          await store.dispatch("setAuthentication", true);
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
