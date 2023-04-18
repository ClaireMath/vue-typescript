<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import 'primeflex/primeflex.css';
import Button from 'primevue/button';

/* function logout() {
  console.log("bouton cliqué")
} */
const logout = () => {
  console.log("bouton cliqué")
}

</script>

<template>
  <header class="flex flex-column align-items-center">
    <div class="w-5 flex justify-content-center align-items-center">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <img alt="Typesript logo" class="logo" src="@/assets/typescriptIcon.png" width="125" height="125" />
    </div>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Créer un compte</RouterLink>
        
        <RouterLink v-if="true" to="/login">Se connecter</RouterLink>
         <RouterLink v-else to="/login" @click="logout">Se déconnecter</RouterLink>
         <RouterLink to="/articles">Blog</RouterLink>

      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 35px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
