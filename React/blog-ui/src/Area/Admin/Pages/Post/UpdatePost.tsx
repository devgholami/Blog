import PostForm from "../../../../Components/Forms/PostFormComponent";
import PostComponent from "../../../../Components/PostComponent";
import PostModel from "../../../../Models/PostModel";
import { APP_CONTEXT } from "../../../../Context/AppContext";
import { useContext, useState } from "react";;

export default function UpdatePostPage(){
    const _post =useContext(APP_CONTEXT).post;
    const [NewPost,setNewPost]= useState(new PostModel(0,"","",new Date()));
    function ChangeCallBack(val:PostModel){
        setNewPost(val);
    }
    function SubmitHandler(data:PostModel){
        _post.post(data).then();
    }
    return<>
    <PostComponent Post={NewPost}></PostComponent>
    <PostForm init={NewPost} onChange={ChangeCallBack} onSubmit={SubmitHandler}></PostForm>
    </>
}