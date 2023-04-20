<script setup lang="ts">
import type { ArticleModel } from '@/models/ArticleModel';
import { ArticleService } from '@/services/ArticleService';
import axios from 'axios';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { type Ref, ref, onMounted } from 'vue';

const articlesList: Ref<ArticleModel[]> = ref([]);
const servArticle: ArticleService = new ArticleService();


onMounted(async () => {
  //const notConnected = localStorage.getItem("notConnected").value;

    articlesList.value = await servArticle.getAllArticles();
    console.log(articlesList.value);
    

});

const goToAddArticle = () => {
  console.log("bouton ajouter l'article cliqué")
}

// const articles: 


</script>


<template>
  <div>
    <h1 class="mt-8 text-center">Affichage des articles</h1>

    <RouterLink to="/writeArticle" @click="goToAddArticle">+ Ajouter un article</RouterLink>

    <div v-for="article in articlesList" :key:string="articlesList">
      <div v-for="item in article" class="flex-column justify-content-evenly align-items-center">
        <h3>{{  item.titre }}</h3>
        <img :src=item.photo />
        <p>{{  item.description }}</p>
      </div>
    </div>
  </div>
</template>
