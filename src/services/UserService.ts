// import axios from '../api';
import type { UserModel } from '@/models/userModel';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import type { AuthInter } from '@/interfaces/AuthInterface';


export class UserService {

    async getUser(id:string) : Promise<UserModel> {
        const API_BASE_URL = `http://localhost:8080/api/v1/user/${id}`;
        const response = await axios.get<UserModel>(`${API_BASE_URL}`);
        console.log(response);

        return response.data;
    };

    async modifyUser(id: string): Promise<AuthInter> {
        const API_BASE_URL = `localhost:8080/api/v1/user/modified${id}`;
        const response = await axios.put<UserModel>(`${API_BASE_URL}`);
        console.log(response);

        return response.data;
    };


    //getTrainerByEmailAndSubId(email: string, subid: string /*id:number*/): Promise<TrainerModel> {
    //     return this.filter({ subId: subid, email: email }).then(x => x[0]);
    //return this.getElementById(id)
    // };
}
