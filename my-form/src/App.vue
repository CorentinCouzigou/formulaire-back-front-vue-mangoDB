<template>
  <div id="app">
    <formulaire></formulaire>
    <table-of-data v-bind:dataOfUsers="users"></table-of-data>
  </div>
</template>

<script>
import Formulaire from "./components/formulaire.vue";
import TableOfData from "./components/TableOfData.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    formulaire: Formulaire,
    "table-of-data": TableOfData,
  },
  data: function () {
    return {
      users: [
        { _id: 1, lastname: "doe", firstname: "john" },
        { _id: 2, lastname: "Poutine", firstname: "Vladimir" },
      ],
    };
  },
  methods: {
    getUsers: async function () {
      const dataUsers = await axios.get("http://localhost:3002/");
      // console.log("data", dataUsers.data[0]);
      this.users = dataUsers.data;
      console.log("usersinmethod", this.users[0].firstname);
    },
  },
  created: function () {
    console.log("il est créé");
    this.getUsers();
    console.log("users", this.users);
  },
};
</script>

<style scoped src="./App.css"></style>
