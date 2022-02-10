<template>
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
    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
  </form>
</template>

<script lang="ts">
import { reactive } from "vue";

export default {
  name: "Register",
  setup() {
    const data = reactive({
      name: "",
      email: "",
      password: "",
    });

    const submitFunction = async() => {
      await fetch('http://localhost:8081/api/register', {
        method: 'POST',
        headers: {'Content-Tpe':'application/json'},
        body: JSON.stringify(data)
      });
    }

    return {
      data,
      submit: submitFunction
    };
  },
};
</script>

<style scoped></style>
