<template>
  <suspense>
    <Manage />
  </suspense>
</template>

<script lang="ts">
import Manage from "./Manage.vue";

export default {
  name: "ParentManage",
  components: {
    Manage,
  },
  setup() {
      
    return {};
  },
};
</script>
