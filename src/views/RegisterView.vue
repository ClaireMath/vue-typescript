<script setup lang="ts">
import { ref } from 'vue';
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import 'primeflex/primeflex.css';
import { AuthService } from "@/services/AuthService.js";

const email = ref();
const username = ref();
const pwd = ref();

const servAuth: AuthService = new AuthService();

let respData;
const createUser = async (event: any) => {
  console.log(`bouton register cliqué ${email.value} ${pwd.value} ${username.value}`)
//  const user = { username: username.value, email: email.value, password: pwd.value }
  respData = await servAuth.register({ username: username.value, email: email.value, password: pwd.value })
}

</script>

<template>
  <div>
    <h1 class="mt-8 mb-4 text-center">Bienvenue !</h1>

    <h2 class="mb-8 text-center">Veuillez créer un compte utilisateur.</h2>

    <div class="card flex justify-content-center">
      <div>
        <span class="p-float-label mb-4">
          <InputText id="email" v-model="email" />
          <label for="email">E-mail</label>
        </span>
        <span class="p-float-label mb-4">
          <InputText id="username" v-model="username" />
          <label for="username">Nom d'utilisateur</label>
        </span>
        <span class="p-float-label mb-4">
          <InputText id="pwd" v-model="pwd" />
          <label for="pwd">Mot de passe</label>
        </span>
        <div class="p-float-label mb-2 flex justify-content-center">
          <Button label="Valider" icon="pi pi-check" @click="createUser" />
        </div>
      </div>
    </div>
  </div>
</template>
