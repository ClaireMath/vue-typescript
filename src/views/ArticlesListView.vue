<script setup lang="ts">
import type { ArticleModel } from '@/models/ArticleModel';
import { ArticleService } from '@/services/ArticleService';
import axios from 'axios';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { type Ref, ref, onMounted } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';
import router from "../router/index";
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'

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
    <div class="flex align-items-end justify-content-end">
      <div class="my-6 flex justify-content-between w-7 bg-pink-100">

        <h1 class=" text-center">Retrouvez nos articles</h1>
        <Button type="button" label="Nouvel article" icon="pi pi-pencil" @click="goToAddArticle" />
      </div>
    </div>
    <div class="bg-orange-100 flex-column align-items-center">
    <div class="flex flex-wrap gap-6 mb-4 bg-teal-200 w-8 align-self-center">
      <div class="flex align-items-center">
        <RadioButton v-model="tag" inputId="afrique" name="afrique" value="afrique" />
        <label for="afrique" class="ml-2">Afrique</label>
      </div>
      <div class="flex align-items-center">
        <RadioButton v-model="tag" inputId="amerique" name="amerique" value="amerique" />
        <label for="amerique" class="ml-2">Amerique</label>
      </div>
      <div class="flex align-items-center">
        <RadioButton v-model="tag" inputId="oceanie" name="oceanie" value="oceanie" />
        <label for="oceanie" class="ml-2">Oceanie</label>
      </div>
      <div class="flex align-items-center">
        <RadioButton v-model="tag" inputId="europe" name="europe" value="europe" />
        <label for="europe" class="ml-2">Europe</label>
      </div>
      <div class="flex align-items-center">
        <RadioButton v-model="tag" inputId="asie" name="asie" value="asie" />
        <label for="asie" class="ml-2">Asie</label>
      </div>
    </div>
    <div v-for="article in articlesList" :key:string="articlesList"
      class="flex-column justify-content-center align-items-center">


      <Card v-for="item in article"
        class="w-8 bg-cyan-100 mb-8 flex-column justify-content-center align-items-between ">

        <template #content>
          <h2 class="text-center mb-4 bg-pink-100 font-bold w-full">{{ item.titre }}</h2>

          <div class="bg-yellow-100 w-full flex justify-content-center border-round">
            <img :src=item.photo class="align-self-center justify-self-center border-round w-4 mb-4 mb-4 bg-purple-100" />
          </div>
          <p class="text-justify bg-purple-100">{{ item.description }}</p>
        </template>
      </Card>

  </div>


  </div>
</div></template>