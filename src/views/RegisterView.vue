<script setup lang="ts">
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import 'primeflex/primeflex.css';

const newUser = () => {
  console.log("bouton cliqué")
}

</script>

<template>
  <div>
    <h1 class="mt-8 mb-4 text-center">Bienvenue !</h1>

    <h2 class="mb-8 text-center">Veuillez créer un compte utilisateur.</h2>

    <div class="card flex justify-content-center">
      <div>
        <span class="p-float-label mb-4">
          <InputText id="email" v-model="value" />
          <label for="email">E-mail</label>
        </span>
        <span class="p-float-label mb-4">
          <InputText id="username" v-model="value" />
          <label for="username">Nom d'utilisateur</label>
        </span>
        <span class="p-float-label mb-4">
          <InputText id="pwd" v-model="value" />
          <label for="pwd">Mot de passe</label>
        </span>
        <div class="p-float-label mb-2 flex justify-content-center">
          <Button label="Valider" icon="pi pi-check" @click="newUser"/>
        </div>
      </div>
    </div>
  </div>
</template>
