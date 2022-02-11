<template>
  <main class="form-signin">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Register</h1>

      <div class="form-floating">
        <input
          v-model="data.name"
          type="text"
          class="form-control"
          placeholder="John"
          required
        />
        <label for="floatingInput">Name</label>
      </div>
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
          v-model="data.password"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        />
        <label for="floatingPassword">Password</label>
      </div>
      <p class="fw-normal text-danger">{{ message }}</p>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
    </form>
  </main>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { BACKEND_URL } from "@/constraints";

export default {
  name: "Register",
  setup() {
    const data = reactive({
      name: "",
      email: "",
      password: "",
    });
    const message = ref("");

    const router = useRouter();

    const submitFunction = async () => {
      const results = await fetch(`${BACKEND_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (results.status == 200) {
        await router.push("/login");
      } else {
        message.value = "The user is already register, You can login";
      }
    };

    return {
      data,
      submit: submitFunction,
      message,
    };
  },
};
</script>

<style scoped></style>
