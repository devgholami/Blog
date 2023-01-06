import { useContext } from "react";
import { Outlet } from "react-router-dom";
import PostsListComponent from "../../../../Components/PostsList";
import { APP_CONTEXT } from "../../../../Context/AppContext";
import IPostService from "../../../../Services/Interfaces/IPostService.interface";

export default function ManagePostsPage(){
    //const postService:IPostService = useContext(APP_CONTEXT).post;
    //postService.getAll();
    return<>
    all list
    <PostsListComponent Posts={[]}></PostsListComponent>

    <Outlet></Outlet>
    </>
}