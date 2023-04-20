// import axios from '../api';
import type { UserModel } from '@/models/userModel';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import type { AuthInter } from '@/interfaces/AuthInterface';
import type { TokenInterface } from '@/interfaces/TokenInterface';

export class AuthService {



    /*  register(obj: UserModel, url: string = 'http://localhost:8080/api/v1/user/register'): Promise<UserModel> {
         return axios.post<UserModel>(`${url}`, obj).then(this.respPromise) as Promise<T>;
     } */
    register (obj: UserModel, url: string = 'http://localhost:8080/api/v1/user/register'): Promise<AuthInter> {
        return axios.post<AuthInter>(`${url}`, obj).then(response => {
            return response.data;
        });
    }

    async login(email: string, password: string, url: string = 'http://localhost:8080/api/v1/user/login'): Promise<TokenInterface> {
        return await axios.post<TokenInterface>(`${url}`, { email, password }).then(response => {
            console.log(response.data.token);
            if ((!response.data.token) || (response.data.token === null)) {
                alert("Erreur dans le login ou le mot de passe.")
            }
            else {
                localStorage.setItem('token', JSON.stringify(response.data));
                alert("Vous êtes connecté.")
            }
            return response.data;
        });
    }

    //getTrainerByEmailAndSubId(email: string, subid: string /*id:number*/): Promise<TrainerModel> {
    //     return this.filter({ subId: subid, email: email }).then(x => x[0]);
    //return this.getElementById(id)
    // };

    logOut() {
        // remove JWT from Local Storage
        localStorage.removeItem('user')
    }
}
