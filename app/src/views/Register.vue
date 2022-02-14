<template>
  <div>
    <form @submit.prevent="submit" class="login-form">
      <h1>Register Your Account</h1>
      <input
          v-model="data.name"
          type="text"
          class="form-control"
          placeholder="Mcebo"
          required
        />
      <input
        v-model="data.email"
        type="email"
        class="form-control"
        placeholder="name@example.com"
        required
      />
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        required
        v-model="data.password"
      />
      <p class="fw-normal text-danger">{{ message }}</p>
      <button class="w-100 btn btn-lg btn-warning" type="submit">Submit</button>
    </form>

    <router-link to="/login">Have an account login here</router-link>
  </div>
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
      password: ""
    });
    const message = ref("");

    const router = useRouter();

    const submitFunction = async () => {
      const results = await fetch(`${BACKEND_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
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
      message
    };
  }
};
</script>

<style lang="scss" scoped>
// Variables
$green: #9bcb3b;

// Fonts
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);

* {
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  text-align: center;
}

h1 {
  font-size: 18px;
  font-weight: normal;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
}

form.login-form {
  background-color: #fff;
  border-radius: 5px;
  margin: 50px auto 0 auto;
  padding: 25px 15px;
  text-align: center;
  width: 100%;
}

input,
button {
  border-radius: 3px;
}

input {
  border: 1px solid #dbd9d9;
  display: block;
  font-size: 12px;
  margin-bottom: 15px;
  outline: 0;
  padding: 9px 12px;
  width: 100%;
  &:focus {
    border: 1px solid darken(#dbd9d9, 20%);
    outline: 0;
  }
}

button {
  background-color: $green;
  border: 0;
  font-size: 14px;
  font-weight: bold;
  height: 50px;
  margin-top: 10px;
  outline: 0;
  text-transform: uppercase;
  width: 100%;
  &:hover {
    background-color: darken($green, 10%);
    cursor: pointer;
  }
  &:active {
    background-color: darken($green, 20%);
  }
  &[disabled] {
    background-color: darken($green, 20%);
    color: lighten(#000, 10%);
    cursor: auto;
  }
}

@media (min-width: 768px) {
  body {
    background-color: #dadbdd;
  }
  form.login-form {
    margin-top: 150px;
    width: 375px;
  }
}
</style>
