<script setup lang="ts">
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

const goToAddArticle = () => {
  console.log("bouton ajouter l'article cliqué")
}
// const articles: 


</script>

<template>
  <div>
    <h1 class="mt-8 text-center">Affichage des articles</h1>

    <RouterLink to="/writeArticle" @click="goToAddArticle">+ Ajouter un article</RouterLink>


    <div class="card flex justify-content-center">

    
    </div>
  </div>
</template>
