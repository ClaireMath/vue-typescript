
import { defineStore } from "pinia";
import { AuthService } from "@/services/AuthService";
import { storeToRefs } from 'pinia';
import type { UserModel } from "@/models/userModel";

const servAuth: AuthService = new AuthService();

export const useAuthenticationStore = defineStore({
    id: 'authStore',

    //initialisation du state
    state: () => {
        return {
            notConnected: true,
            user: null,
            token: {},
            email: null,
            password: null
        }
    },
    // actions (mettent à jour le state du store)
    actions: {
        async setValues() {
           // this.notConnected = JSON.parse(localStorage.getItem("notConnected"));
           /*  this.token = await servAuth.login(u?.email, u?.password);
       */  },
    }
})

