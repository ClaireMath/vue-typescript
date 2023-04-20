<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import 'primeflex/primeflex.css';
import Button from 'primevue/button';
import { useAuthenticationStore } from './stores/authStore';

let notConnected: boolean = true
let { token } = useAuthenticationStore();

const logout = () => {
  console.log("bouton cliqué")
  localStorage.removeItem("token");
}

</script>

<template>
  <div class="flex-column align-items-center">
    <header class="flex flex-column align-items-center justify-content-center  w-full">
      <div class="flex justify-content-center align-items-center w-full">
        <img alt="Vue logo" class=" mr-4" src="@/assets/logo.svg" width="125" height="125" />
        <img alt="Typesript logo" class=" ml-4 border-round" src="@/assets/typescriptIcon.png" width="125" height="125" />
      </div>



      <nav class="mt-6">
        <RouterLink to="/" class="ml-2 w-2">Créer un compte |</RouterLink>

        <RouterLink to="/login" class="ml-2 w-2">Se connecter |</RouterLink>
        <RouterLink to="/login" @click="logout" class="ml-2 w-6"> Se déconnecter |</RouterLink>
        <RouterLink to="/articles" class="ml-2 w-6">Blog</RouterLink>
        <RouterLink to="/profile" class="ml-2 w-6">| Profil |</RouterLink>


      </nav>

    </header>

    <RouterView />
  </div>
</template>

<style scoped>
nav a {
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
  font-weight: bold;
}
</style>