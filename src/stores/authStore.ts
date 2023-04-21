import { defineStore } from "pinia";

export const useAuthenticationStore = defineStore({
    id: 'authStore',

    //initialisation du state
    state: () => {
        return {
         //   isAuthenticated: true,
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

