<script setup lang="ts">
import type { ArticleModel } from '@/models/ArticleModel';
import { ArticleService } from '@/services/ArticleService';
import axios from 'axios';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { type Ref, ref, onMounted } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import router from "../router/index";

const selectedCity = ref();
const cities = ref([
  { name: 'Afrique' },
  { name: 'Amerique' },
  { name: 'Asie' },
  { name: 'Europe' },
  { name: 'Oceanie' }
]);

const articlesList: Ref<ArticleModel[]> = ref([]);
const servArticle: ArticleService = new ArticleService();

onMounted(async () => {
  // const notConnected = localStorage.getItem("notConnected").value;

  articlesList.value = await servArticle.getAllArticles();
  console.log(articlesList.value);


});

const goToAddArticle = () => {
  router.push({ path: '/writeArticle' })
  console.log("bouton ajouter l'article cliqué")
}

// const articles: 


</script>


<template>
  <div>
    <!--  <RouterLink to="/writeArticle" @click="goToAddArticle">+ Ajouter un article</RouterLink>
          <Button label="+ Ajouter un article" link @click="goToAddArticle" /> -->
    <div class="my-6 flex justify-content-between">
      <div></div>
      <h1 class=" text-center">Retrouvez nos articles</h1>
      <Button type="button" label="Nouvel article" icon="pi pi-pencil" @click="goToAddArticle" />
    </div>
    <span class="p-float-label my-4 w-full ">


      <Dropdown id="continent" v-model="tag" :options="cities" optionLabel="name" placeholder="Select a continent"
        class="w-full md:w-14rem" />
      <label for="continent">Continent</label>
    </span>
    <div v-for="article in articlesList" :key:string="articlesList">


      <div v-for="item in article" class="bg-cyan-100 mb-8 flex-column justify-content-center align-items-evenly">
        <h2 class="text-center mb-4 bg-pink-100 font-bold">{{ item.titre }}</h2>
        <div class="bg-yellow-100 w-full flex">
          <img :src=item.photo class="align-self-center justify-self-center rounded w-4 mb-4 mb-4 bg-purple-100" />
        </div>
        <p class="text-justify bg-purple-100">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
