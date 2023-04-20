<script setup lang="ts">
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import { ref } from "vue";
import { ArticleService } from "@/services/ArticleService";
import RadioButton from 'primevue/radiobutton';

// const articles: 

const titre = ref();
const description = ref();
const tag = ref();
const photo = ref();

const servArticle: ArticleService = new ArticleService();

let respData;
const createArticle = async (event: any) => {
  console.log(`bouton register cliqué ${titre.value} ${photo.value} ${description.value} ${tag.value}`)
  respData = await servArticle.registerArticle({ titre: titre.value, description: description.value, tag: tag.value, photo: photo.value })
}



const addArticle = (e: Event) => {
  e.preventDefault()
  console.log("bouton ajouter l'article cliqué")
}

//checker pour passer la liste en string
const selectedCity = ref();
const cities = ref([
    { name: 'Afrique'},
    { name: 'Amerique'},
    { name: 'Asie'},
    { name: 'Europe'},
    { name: 'Oceanie'}
]);
selectedCity.value

</script>

<template>
  <div>
    <h1 class="mt-5 text-center">Ecrire un article</h1>

    <div class="card flex justify-content-center">
      <div>
        <span class="p-float-label my-4 w-full ">
            <InputText id="photoArticle" v-model="photo" class="w-6" />
            <label for="photoArticle">Photo</label>
          </span>
        <span class="p-float-label my-4 w-full ">
          <p>Choisissez un Tag (continent) : </p>
          <div class="flex flex-wrap gap-8">
    <div class="flex align-items-center">
        <RadioButton v-model="tag" inputId="afrique" name="afrique" value="afrique" />
        <label for="afrique" class="ml-4">Afrique</label>
    </div>
    <div class="flex align-items-center">
        <RadioButton v-model="tag" inputId="europe" name="europe" value="europe" />
        <label for="europe" class="ml-4">Europe</label>
    </div>
    <div class="flex align-items-center">
        <RadioButton v-model="tag" inputId="amerique" name="amerique" value="amerique" />
        <label for="amerique" class="ml-4">Amerique</label>
    </div>
    <div class="flex align-items-center">
        <RadioButton v-model="tag" inputId="asie" name="asie" value="asie" />
        <label for="asie" class="ml-4">Asie</label>
    </div>
    <div class="flex align-items-center">
        <RadioButton v-model="tag" inputId="oceanie" name="oceanie" value="oceanie" />
        <label for="oceanie" class="ml-4">Oceanie</label>
    </div>
</div>
        </span>
        <span class="p-float-label my-4 w-full ">
          <InputText id="articleTitle" v-model="titre" class="w-6" />
          <label for="articleTitle">Titre de l'article</label>
        </span>
        <div class="card flex justify-content-center">
          <form @submit="addArticle" class="flex flex-column gap-2">
            <span class="p-float-label">
              <Textarea id="value" v-model="description" rows="14" cols="100" />
              <label for="value">Description</label>
            </span>

             <Button type="submit" label="Ajouter mon article" class="w-5 align-self-center" @click="createArticle"/>

          </form>

        </div>



      </div>
    </div>
  </div>
</template>
