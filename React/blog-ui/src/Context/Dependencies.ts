import { AppContext } from "./AppContext";
import IPostService from "../Services/Interfaces/IPostService.interface";
import PostService from "../Services/PostService";
import IHttp from "../Services/Interfaces/http.interface";
import Http from "../Services/Http";

const http: IHttp = new Http();
const post: IPostService = new PostService(http);
export const appDependencies: AppContext = {
  post: post
}