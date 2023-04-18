<script setup lang="ts">
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import 'primeflex/primeflex.css';

</script>

<template>
  <div >
      <h1 class="m-8 text-center">Bienvenue sur la page de création de compte !</h1>
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
          <Button label="Valider" icon="pi pi-check" />
           </div>
        </div>
      </div>
    </div>
</template>
