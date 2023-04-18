<script setup lang="ts">
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import 'primeflex/primeflex.css';


const login = () => {
console.log("bouton login cliqué")

}
</script>
<template>
  <div class="about ">
    <h1 class="m-8 text-center">Bienvenue sur la page de connexion !</h1>
    <div class="card flex justify-content-center">

      <div>
        <span class="p-float-label mb-4">
          <InputText id="email" v-model="value" />
          <label for="email">E-mail</label>
        </span>
        <span class="p-float-label mb-4">
          <InputText id="mdp" v-model="value" />
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
