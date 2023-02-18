import PostForm from "../../../../Components/Forms/PostFormComponent";
import PostComponent from "../../../../Components/PostComponent";
import PostModel from "../../../../Models/PostModel";
import { useContext, useState } from "react";
import styles from "./EditPost.module.css";
import { APP_CONTEXT } from "../../../../Context/AppContext";
import { toast } from "react-toastify";

export default function NewPostPage() {
  const _post = useContext(APP_CONTEXT).post;
  const initvalue = new PostModel(0, "", "", new Date());
  const [NewPost, setNewPost] = useState(initvalue);
  function ChangeCallBack(e: any) {
    setNewPost((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }
  function SubmitFormHandler(e:PostModel){
    let res = _post.post(e);
    toast.promise(
      res,
      {
        pending: 'New Post is Saving...',
        success: {render({data}){ return `${data?.message}`}, icon:'👌'},
        error: {render({data}){ return `${data}`}, icon:'🤯'}
      }
  )
  }
  return (
    <>
      <div className={styles.wrapperRight}>
        <PostComponent Post={NewPost}></PostComponent>
      </div>
      <div className={styles.wrapperLeft}>
        <PostForm init={NewPost} onChange={ChangeCallBack} onSubmit={SubmitFormHandler}></PostForm>
      </div>
    </>
  );
}
