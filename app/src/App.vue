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
