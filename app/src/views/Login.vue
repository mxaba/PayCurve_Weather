<template>
  <main class="form-signin">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input
          v-model="data.email"
          type="email"
          class="form-control"
          placeholder="name@example.com"
          required
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          required
          v-model="data.password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <p class="fw-normal text-danger">{{ message }}</p>
      <button class="w-100 btn btn-lg btn-success" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
    </form>
  </main>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
import { BACKEND_URL } from '@/constraints';

export default {
  name: "Register",
  setup() {
    const data = reactive({
      email: "",
      password: "",
    });
    const message = ref("");

    const submitFunction = async () => {
      const results = await fetch(`${BACKEND_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });
      console.log(results);
      if (results.status == 200) {
        window.location.href = '/';
      } else {
        message.value = "Invalid email-address or password!";
      }
    };

    return {
      data: data,
      submit: submitFunction,
      message,
    };
  },
};
</script>

<style scoped></style>
