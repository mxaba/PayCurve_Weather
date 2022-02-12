<template>
  <nav class="navbar navbar-expand-md mb-4">
    <div class="container-fluid">
      <router-link to="/home" class="navbar-brand"></router-link>

      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="!auth">
          <li class="nav-item">
            <router-link to="/login" class="btn btn-success">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="btn btn-warning">Register</router-link>
          </li>
        </ul>

        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="auth">
          <li class="nav-item" v-if="isAdmin">
            <router-link to="/manage" class="btn btn-dark">Manage</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/login" class="btn btn-danger" @click="logoutFunction"
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
import { BACKEND_URL } from "./../constraints";

export default {
  setup() {
    const store = useStore();

    const auth = computed(() => store.state.authenticated);
    const isAdmin = computed(() => store.state.isAdmin);
    const logoutFunction = async () => {
      await fetch(`${BACKEND_URL}/logout`, {
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
