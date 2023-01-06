import PostForm from "../../../../Components/Forms/PostFormComponent";
import PostComponent from "../../../../Components/PostComponent";
import PostModel from "../../../../Models/PostModel";
import {useState} from "react";

export default function UpdatePostPage(){
    const [NewPost,setNewPost]= useState(new PostModel(0,"","",new Date()));
    function ChangeCallBack(val:PostModel){
        setNewPost(val);
    }
    return<>
    <PostComponent Post={NewPost}></PostComponent>
    <PostForm init={NewPost} onChange={ChangeCallBack}></PostForm>
    </>
}