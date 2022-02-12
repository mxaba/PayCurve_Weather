<template>
    <div class="container">
        <h3 class="p-3 text-center">Vue.js - Display a list of items with v-for</h3>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in arrayData" :key="user._id">
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td> <button class="btn btn-danger" type="submit">Delete</button> </td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script lang="ts">
import { BACKEND_URL } from "../constraints";

export default {
  name: "Manage",
  async setup() {

    const results = await fetch(`${BACKEND_URL}/usersList`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const content = await results.json();
    const arrayData = [];
    for (const key in content) {
      if (content[key]["email"] != "admin@admin.com") {
        arrayData.push(content[key]);
      }
    }
    console.log(arrayData)
    return { arrayData };
  },
};
</script>

<style lang="css" scoped>
*{
  display: flex;
}
</style>
