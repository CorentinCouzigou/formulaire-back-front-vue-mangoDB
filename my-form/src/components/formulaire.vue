<template>
  <div class="formulaire__container">
    <h1>Formulaire d'inscription</h1>
    <form class="formulaire">
      <label for="lastname">Votre nom de famille</label>
      <input
        v-model="formData.lastname"
        type="lastname"
        placeholder="Lastname"
        id="lastname"
        class="form-control"
      />
      <label for="firstname">Votre prénom</label>
      <input
        v-model="formData.firstname"
        type="text"
        placeholder="firstname"
        id="firstname"
        class="form-control"
      />
      <button class="btn btn-primary mt-4" v-on:click.prevent="onSubmitForm">
        Valider
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Formulaire",
  data: function () {
    return {
      formData: {
        lastname: "",
        firstname: "",
      },
    };
  },
  methods: {
    onSubmitForm: function () {
      console.log("toto");
    },
  },
};
</script>

<style scoped src="./formulaire.css"></style>
