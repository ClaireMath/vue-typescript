<script setup lang="ts">
import type { ArticleModel } from '@/models/ArticleModel';
import { ArticleService } from '@/services/ArticleService';
import axios from 'axios';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { type Ref, ref, onMounted, watch } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';
import router from "../router/index";
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'

const articlesList: Ref<ArticleModel[]> = ref([]);
const articlesTagList: Ref<ArticleModel[]> = ref([]);
const tag: Ref<string> = ref('');

const servArticle: ArticleService = new ArticleService();

onMounted(async () => {
  // const notConnected = localStorage.getItem("notConnected").value;

  articlesList.value = await servArticle.getAllArticles();
  console.log(articlesList.value);


});

watch(tag, async (newTag) => {
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
    <div class="px-8 flex align-items-end justify-content-end align-self-center">
      <div class="my-6 flex justify-content-between w-7">

        <h1 class=" text-center">Retrouvez nos articles</h1>
        <Button type="button" label="Nouvel article" icon="pi pi-pencil" @click="goToAddArticle" />
      </div>
    </div>
    <div class="flex-column align-items-center px-8">
      <div class="flex flex-wrap gap-6 mb-4  align-items-center align-self-center justify-content-center">
        <div class="flex align-items-center">
          <RadioButton v-model="tag" inputId="" name="" value="" />
          <label for="" class="ml-2">Tous nos articles</label>
        </div>
        <div class="flex align-items-center">
          <RadioButton v-model="tag" inputId="afrique" name="afrique" value="afrique" />
          <label for="afrique" class="ml-2">Afrique</label>
        </div>
        <div class="flex align-items-center">
          <RadioButton v-model="tag" inputId="amerique" name="amerique" value="amerique" />
          <label for="amerique" class="ml-2">Amérique</label>
        </div>
        <div class="flex align-items-center">
          <RadioButton v-model="tag" inputId="oceanie" name="oceanie" value="oceanie" />
          <label for="oceanie" class="ml-2">Océanie</label>
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
      <div v-if="tag === ''">
        <div v-for="article in articlesList" :key:string="articlesList"
          class="flex-column justify-content-center align-items-center align-self-center ">


          <Card v-for="item in article"
            class=" mb-8 flex-column justify-content-center align-items-between align-self-center ">

            <template #content>
              <h2 class="text-center mb-4 font-bold w-full">{{ item.titre }}</h2>

              <div class="w-full flex justify-content-center border-round">
                <img :src=item.photo class="align-self-center justify-self-center border-round w-6 mb-4" />
              </div>
              <div class="w-full flex justify-content-center border-round">
                <p class="align-self-center w-8 text-justify">{{ item.description }}</p>
              </div>
            </template>
          </Card>

        </div>
        


      </div>
       <div v-else>
          <div v-for="article in articlesTagList" :key:string="articlesTagList"
            class="flex-column justify-content-center align-items-center align-self-center ">


            <Card v-for="item in article"
              class=" mb-8 flex-column justify-content-center align-items-between align-self-center ">

              <template #content>
                <h2 class="text-center mb-4 font-bold w-full">{{ item.titre }}</h2>

                <div class="w-full flex justify-content-center border-round">
                  <img :src=item.photo class="align-self-center justify-self-center border-round mb-4" />
                </div>
                <div class="w-full flex justify-content-center border-round">
                  <p class="align-self-center w-8 text-justify">{{ item.description }}</p>
                </div>
              </template>
            </Card>

          </div>
        


        </div>
      
    </div>

  </div>
</template>