<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input v-model="data.email" type="email" class="form-control" placeholder="name@example.com" required/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input v-model="data.password" type="password" class="form-control" placeholder="Password" required/>
      <label for="floatingPassword">Password</label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
  </form>
</template>

<script lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Register",
  setup() {
    const data = reactive({
      email: "",
      password: "",
    });

    const router = useRouter();

    const submitFunction = async() => {
      await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        credentials: 'include',
        body: JSON.stringify(data)
      });

      await router.push('/');
    }

    return {
      data,
      submit: submitFunction
    };
  },
};
</script>



<style scoped></style>
