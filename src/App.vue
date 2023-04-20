<!-- <script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import 'primeflex/primeflex.css';
import Button from 'primevue/button';
// import { useAuthenticationStore } from './stores/authStore';
import router from "./router/index";


let notConnected: boolean = true
// let { token } = useAuthenticationStore();

const logout = () => {
  console.log("bouton cliqué")
  localStorage.removeItem("token");
}

const goToRegister = () => {
  console.log("bouton register cliqué")
 router.push({ path: '/' });
}
const goToLogin = () => {
  router.push({ path: '/login' });
}
const goToBlog = () => {
  router.push({ path: '/articles' });
}
const goToProfile = () => {
  router.push({ path: '/profile' });
}


</script>

<template>
  <div class="flex-column align-items-center">
    <header class="flex flex-column align-items-center justify-content-center  w-full">
      <div class="flex justify-content-center align-items-center w-full">
        <img alt="Vue logo" class=" mr-4" src="@/assets/logo.svg" width="125" height="125" />
        <img alt="Typesript logo" class="ml-4" src="@/assets/typescriptIcon.png" width="125" height="125" />
      </div>


      <nav class="mt-6">
          <RouterLink to="/">Créer un compte |</RouterLink>
          <RouterLink to="/login" class="ml-2">Se connecter |</RouterLink>
          <RouterLink to="/login" @click="logout" class="ml-2"> Se déconnecter |</RouterLink>
          <RouterLink to="/articles" class="ml-2">Blog |</RouterLink>
          <RouterLink to="/profile" class="ml-2">Profil |</RouterLink>
  
         <Button label=" Créer un compte" link @click="goToRegister"/>
        <Button label=" Se connecter" link @click="goToLogin" />
        <Button label=" Se déconnecter" link @click="logout" />
        <Button label="Blog" link @click="goToBlog"/>
        <Button label="Profil" link @click="goToProfile"/> -->

     <!--  </nav>

    </header>

    <RouterView />
  </div>
</template>

<style scoped>
nav button {
  text-decoration: none;
}

nav button:hover {
  text-decoration: underline;
  font-weight: bold;
  font-size: 17px;
}
</style> -->
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
        <img alt="Typesript logo" class=" ml-4 rounded" src="@/assets/typescriptIcon.png" width="125" height="125" />
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