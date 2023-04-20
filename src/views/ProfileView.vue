<script setup lang="ts">
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import { ref, onMounted } from "vue";

// const articles: 
onMounted(async () => {

});


const modifyProfile = (e: Event) => {
  e.preventDefault()
  console.log("bouton 'modifier le profile' cliqué")
}
</script>

<template>
  <div>
    <h1 class="mt-5 text-center">Profil</h1>

    <div class="card flex justify-content-center">
      <div>
        <span class="p-float-label my-4 w-full ">
          <InputText id="photoArticle" v-model="value" class="w-6" />
          <label for="photoArticle">Photo</label>
        </span>
       
        <span class="p-float-label my-4 w-full ">
          <InputText id="articleTitle" v-model="value" class="w-6" />
          <label for="articleTitle">Titre de l'article</label>
        </span>
        <div class="card flex justify-content-center">
          <form @submit="addArticle" class="flex flex-column gap-2">
            <span class="p-float-label">
              <Textarea id="value" v-model="value" rows="14" cols="100" />
              <label for="value">Description</label>
            </span>
            <Button type="submit" label="Modifier le profil" @click="modifyProfile" class="w-5 align-self-center"/>
          </form>

        </div>



      </div>
    </div>
  </div>
</template>
