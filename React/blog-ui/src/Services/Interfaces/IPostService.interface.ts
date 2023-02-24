import HttpResp from "../../Models/HttpResponseModel";
import PostList from "../../Models/PostList";
import PostModel from "../../Models/PostModel";

export default interface IPostService{
    getAll(pageIndex:number,pageLength:number): Promise<HttpResp<PostList>>;
    get(id:number):Promise<HttpResp<PostModel>>;
    getLatest():PostModel;
    post(item:PostModel):Promise<HttpResp<Number>>;
    delete(id:number):number;
}