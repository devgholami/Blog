import PostForm from "../../../../Components/Forms/PostFormComponent";
import PostComponent from "../../../../Components/PostComponent";
import PostModel from "../../../../Models/PostModel";
import { useState } from "react";
import styles from "./EditPost.module.css";

export default function NewPostPage() {
    const initvalue =new PostModel(0, "", "", new Date());
  const [NewPost, setNewPost] = useState(initvalue);
  function ChangeCallBack(e: any) {
    setNewPost((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <>
      <div className={styles.wrapper}>
        <PostComponent Post={NewPost}></PostComponent>
      </div>
      <div className={styles.wrapper}>
        <PostForm init={initvalue} onChange={ChangeCallBack}></PostForm>
      </div>
    </>
  );
}
