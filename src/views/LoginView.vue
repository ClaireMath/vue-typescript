<script setup lang="ts">
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import 'primeflex/primeflex.css';
import { onMounted, ref, type Ref } from 'vue';
import { AuthService } from "@/services/AuthService";
import type { TokenInterface } from "@/interfaces/TokenInterface";

const servAuth: AuthService = new AuthService();
const email = ref();
const password = ref();
let token: TokenInterface;

const login = async() => {
console.log(`bouton login cliqué ${email.value} ${password.value}`)
token = await servAuth.login(email.value, password.value)
}


</script>
<template>
  <div class="about ">
    <h1 class="m-8 text-center">Bienvenue sur la page de connexion !</h1>
    <div class="card flex justify-content-center">

      <div>
        <span class="p-float-label mb-4">
          <InputText id="email" v-model="email" />
          <label for="email">E-mail</label>
        </span>
        <span class="p-float-label mb-4">
          <InputText id="mdp" v-model="password" />
          <label for="mdp">Mot de passe</label>
        </span>
         <div class="p-float-label mb-4 flex justify-content-center">
        <Button label="Valider" icon="pi pi-check" @click="login"/>
         </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


</style>
