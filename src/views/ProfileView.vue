<script setup lang="ts">
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import { type Ref, ref, onMounted } from 'vue';
import type { UserModel } from "@/models/userModel";
import { UserService } from "@/services/UserService";

const user: Ref<UserModel> = ref({});
const servUser: UserService = new UserService();
let newPassword: string = "";
const idUser: string = "643fffa9b4378067d0668bfd";

onMounted(async () => {

  user.value = await servUser.getUser(idUser);
  console.log(user.value)

});


/* const modifyProfile = (e: Event) => {
  servUser.modifyUser(id: string): Promise<AuthInter>
  console.log("bouton 'modifier le profile' cliqué")
} */

const modifyPwd = (e: Event) => {
  
  console.log(`nouveau mot de passe : ${newPassword}`)
}
</script>

<template>
  <div>
    <h1 class="mt-5 text-center">Profil</h1>
    <div class="card flex justify-content-center">
      <div class="mt-8">
        <span class="p-float-label mb-4">
          <InputText id="email" v-model="user.email" />
          <label for="email">E-mail</label>
        </span>
        <span class="p-float-label mb-4">
          <InputText id="username" v-model="user.username" />
          <label for="username">Nom d'utilisateur</label>
        </span>
         <span class="p-float-label mb-4">
            <InputText id="password" v-model="newPassword" />
            <label for="password">Nouveau mot de passe</label>
          </span>
        <div class="p-float-label mb-2 flex justify-content-center">
          <Button type="submit" label="Modifier le profil" @click="modifyProfile" class="w-full align-self-center" />
        </div>
        <div class="p-float-label mb-2 flex justify-content-center">
          <Button type="submit" label="Modifier le mot de oasse" @click="modifyPwd" class="w-full align-self-center" />

        </div>
      </div>

    </div>

  </div>
</template>
