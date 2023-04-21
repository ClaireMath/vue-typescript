<script setup lang="ts">
import type { ArticleModel } from '@/models/ArticleModel';
import { ArticleService } from '@/services/ArticleService';
import axios from 'axios';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { type Ref, ref, onMounted, watch } from 'vue';
import Button from 'primevue/button';
import router from "../router/index";
import RadioButton from 'primevue/radiobutton';


const articlesList: Ref<ArticleModel[]> = ref([]);
const articlesTagList: Ref<ArticleModel[]> = ref([]);
const tag: Ref<string> = ref('');


const servArticle: ArticleService = new ArticleService();

onMounted(async () => {
  // const notConnected = localStorage.getItem("notConnected").value;
  articlesList.value = await servArticle.getAllArticles();
  console.log(articlesList.value);

});

watch (tag, async (newTag) => {
  articlesTagList.value = await servArticle.getArticlesByTag(tag.value)
})

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
      <div class="flex align-items-center">
        <RadioButton v-model="tag" inputId="" name="" value="" />
        <label for="" class="ml-2">tous nos articles</label>
    </div>
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
      <h1 class=" text-center">Retrouvez nos articles</h1>
      <Button type="button" label="Nouvel article" icon="pi pi-pencil" @click="goToAddArticle" />
    </div>
    <div v-if="tag === ''">
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
    <div v-else>
      <div v-for="article in articlesTagList" :key:string="articlesTagList">
        <div v-for="item in article" class="bg-cyan-100 mb-8 flex-column justify-content-center align-items-evenly">
          <h2 class="text-center mb-4 bg-pink-100 font-bold">{{ item.titre }}</h2>
          <div class="bg-yellow-100 w-full flex">
            <img :src=item.photo class="align-self-center justify-self-center rounded w-4 mb-4 mb-4 bg-purple-100" />
          </div>
          <p class="text-justify bg-purple-100">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
