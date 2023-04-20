<script setup lang="ts">
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import { ref } from "vue";

// const articles: 

const addArticle = (e: Event) => {
  e.preventDefault()
  console.log("bouton ajouter l'article cliqué")
}

const selectedCity = ref();
const cities = ref([
    { name: 'Afrique', code: 'NY' },
    { name: 'Amerique', code: 'RM' },
    { name: 'Asie', code: 'LDN' },
    { name: 'Europe', code: 'IST' },
    { name: 'Oceanie', code: 'PRS' }
]);
selectedCity.value

</script>

<template>
  <div>
    <h1 class="mt-5 text-center">Ecrire un article</h1>

    <div class="card flex justify-content-center">
      <div>
        <span class="p-float-label my-4 w-full ">
            <InputText id="photoArticle" v-model="value" class="w-6" />
            <label for="photoArticle">Photo</label>
          </span>
        <span class="p-float-label my-4 w-full ">
          <p>Choisissez un Tag (continent) : </p>
          <div class="card flex justify-content-center">
        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
    </div>
          <select>
            
            <option disabled value="Tag">Tag</option>
            <option>Afrique</option>
            <option>Amerique</option>
            <option>Asie</option>
            <option>Europe</option>
            <option>Oceanie</option>
          </select>
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
             <Button type="submit" label="Ajouter mon article" class="w-5 align-self-center"/>
          </form>

        </div>



      </div>
    </div>
  </div>
</template>
