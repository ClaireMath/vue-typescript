import type { ArticleModel } from "@/models/ArticleModel";
import axios from "axios";


export class ArticleService {


async getAllArticles() : Promise<ArticleModel[]>  {
  const API_BASE_URL = 'http://localhost:8080/article/all';
  const response = await axios.get<ArticleModel[]>(`${API_BASE_URL}`);
  console.log(response);
  
  return response.data;
}

async registerArticle() : Promise<ArticleModel>  {
    const API_BASE_URL = 'http://localhost:8080/article/register';
    const response = await axios.get<ArticleModel>(`${API_BASE_URL}`);
    console.log(response);
    
    return response.data;
  }




}