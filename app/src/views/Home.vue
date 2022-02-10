<template>{{ message }}</template>

<script lang="ts">
import {onMounted, ref} from 'vue';
import {useStore} from "vuex";

export default {

    name: "Home", 
         setup() {
    const message = ref('You are not logged in!');
    const store = useStore();
    
    onMounted(async () => {
      
      const results = await fetch('http://localhost:5000/api/user', {
        method: 'GET',
        headers: {'Content-Type':'application/json'},
        credentials: 'include',
      });

      const content = await results.json(); 
      message.value = `Hello ${content.name}`;
    });

    return {
      message
    }
  }
    
}
</script>
