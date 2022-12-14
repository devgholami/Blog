import HttpResp from "../../Models/HttpResponseModel";
import PostModel from "../../Models/PostModel";

export default interface IPostService{
    getAll(): PostModel[];
    get(id:number):Promise<HttpResp<PostModel>>;
    getLatest():PostModel;
    post(item:PostModel):number;
    delete(id:number):number;
}