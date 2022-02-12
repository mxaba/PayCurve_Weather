<template>
  <NavBar />
  <div class="col-12">
    <router-view />
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar";

export default {
  components: { NavBar },
};
</script>

<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

@import url("https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap");

body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  background-color: rgb(241, 239, 239);
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
}

* {
  box-sizing: border-box;
  font-family: "Didact Gothic", sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

button:focus {
  outline: 1px solid #000;
}

#app::after {
  z-index: -5;
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-top: 90vh solid #ebedf1;
  border-right: 100vw solid transparent;
  top: 0;
  left: 0;
}

</style>
