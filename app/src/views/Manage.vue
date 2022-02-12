<template>
  <div class="container" v-if="isAdmin">
    <table class="table table-striped table-bordered text-dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in arrayData" :key="index">
          <td>{{ user["name"] }}</td>
          <td>{{ user["email"] }}</td>
          <td>{{ user["roleName"] }}</td>
          <td>
            <button class="btn btn-danger" type="submit" @click="() =>deleteUserByID(user['_id'])">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { BACKEND_URL } from "../constraints";
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Manage",
  async setup() {
     const store = useStore();
    const isAdmin = computed(() => store.state.isAdmin);
    const arrayData: any[] = [];
    const results = await fetch(`${BACKEND_URL}/usersList`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const currentUser = await fetch(`${BACKEND_URL}/user`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const user = await currentUser.json();

    const content = await results.json();
    for (const key in content) {
      if (content[key]["email"] != user.email) {
        if (content[key]["role"]) {
          content[key]["roleName"] = "Admin";
        } else {
          content[key]["roleName"] = "Client";
        }
        arrayData.push(content[key]);
      }
    }

    const deleteUserByID = async (_id: any) => {
        console.log(_id);
      await fetch(`${BACKEND_URL}/delete/${_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      window.location.reload();
    };

    return { isAdmin, arrayData, deleteUserByID };
  },
});
</script>

<style lang="css" scoped></style>
