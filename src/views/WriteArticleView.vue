<script setup lang="ts">
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Textarea from 'primevue/textarea';
// const articles: 


const addArticle = (e: Event) => {
  e.preventDefault()
  console.log("bouton ajouter l'article cliqué")
}

</script>

<template>
  <div>
    <h1 class="mt-5 text-center">Ecrire un article</h1>
    <!-- <form
  id="postArticle"
  @submit="checkForm"
  action="https://vuejs.org/"
  method="post"
> -->
    <div class="card flex justify-content-center">
      <div>
        <span class="p-float-label my-4 w-full ">
          
          <!-- <InputText id="articleTitle" v-model="value" class="w-6" /> -->
          <!-- <label for="articleTag"  class="w-6">Tag</label> -->
          <select required v-model="selected" class="w-6">
           
            <!-- <InputText id="articleTitle" v-model="value" class="w-6" /> -->
  <option disabled value="">Tag</option>
  <option value="Asie">Asie</option>
  <option value="Europe">Europe</option>
  <option value="Afrique">Afrique</option>
  <option value="Amérique">Amérique</option>
  <option value="Océanie">Océanie</option>
</select>
        </span>
        <span required class="p-float-label my-4 w-full ">
          <InputText id="articleTitle" v-model="value" class="w-6" />
          <label for="articleTitle">Titre de l'article</label>
        </span>
         <span required class="p-float-label my-4 w-full ">
            <InputText id="articleURL" v-model="value" class="w-6" />
            <label for="articleURL">URL de l'article</label>
          </span>


        <div class="card flex justify-content-center">
          <form @submit="addArticle" class="flex flex-column gap-2">
            <span class="p-float-label">
              <Textarea id="value" v-model="value" rows="14" cols="100" />
              <label for="value">Description</label>
            </span>
             <Button type="submit" label="Ajouter mon article" />
          </form>

        </div>



      </div>
    </div>
    <!-- </form> -->
  </div>
</template>
