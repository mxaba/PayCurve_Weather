<template>
  <Index />
</template>

<script lang="ts">
import Index from "@/components/Index.vue";
export default {
  components: {
    Index,
  },
};
</script>

<style lang="css">

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

body {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: rgb(255, 255, 255);
  display: flex;
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

</style>
