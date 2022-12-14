import HttpResp from "../Models/HttpResponseModel";
import PostModel from "../Models/PostModel";
import IHttp from "./Interfaces/http.interface";
import IPostService from "./Interfaces/IPostService.interface";

export default class PostService implements IPostService {
    private _http:IHttp;
    constructor(http:IHttp){
        this._http = http;
    }
    getAll():PostModel[]{
        let data:PostModel[]= [];
        return data;
    }
    async get(id:number):Promise<HttpResp<PostModel>>{
        const response:HttpResp<PostModel> = await this._http.get<HttpResp<PostModel>>('/post/'+ id);
        return response;
    }
    getLatest():PostModel{
        let data:PostModel= {id:0,title:"",text:"", createdDate:new Date()};
        return data;
    }
    post(item:PostModel):number{
        return 0;
    }
    delete(id:number):number{
        return 0;
    }
}