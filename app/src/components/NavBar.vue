<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link to="/home" class="navbar-brand">Home</router-link>

      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="!auth">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
        </ul>

        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="auth">
          <li class="nav-item" v-if="isAdmin">
            <router-link to="/manage" class="nav-link">Manage</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/login" class="nav-link" @click="logoutFunction"
              >LogOut</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();

    const auth = computed(() => store.state.authenticated);
    const isAdmin = computed(() => store.state.isAdmin);
    const logoutFunction = async () => {
      await fetch("http://localhost:5000/api/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      await store.dispatch('setAuthentication', false)
    };

    return {
      isAdmin,
      auth,
      logoutFunction,
    };
  },
};
</script>

<style scoped></style>
