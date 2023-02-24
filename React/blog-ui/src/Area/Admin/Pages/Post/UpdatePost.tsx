import PostForm from "../../../../Components/Forms/PostFormComponent";
import PostComponent from "../../../../Components/PostComponent";
import PostModel from "../../../../Models/PostModel";
import { APP_CONTEXT } from "../../../../Context/AppContext";
import { useContext, useState, useEffect } from "react";
import styles from "./EditPost.module.css";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";

export default function UpdatePostPage() {
  const initvalue = useLoaderData() as PostModel;
  const _post = useContext(APP_CONTEXT).post;
  const [UpdatePost, setUpdatePost] = useState(initvalue);

  function ChangeCallBack(e: any) {
    setUpdatePost((prevValues: any) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }
  function SubmitFormHandler(e: PostModel) {
    let res = _post.post(e);
    toast.promise(res, {
      pending: "Edited Post is Saving...",
      success: {
        render({ data }) {
          return `${data?.message}`;
        },
        icon: "👌",
      },
      error: {
        render({ data }) {
          return `${data}`;
        },
        icon: "🤯",
      },
    });
  }
  return (
    <>
      <div className={styles.wrapperRight}>
        <PostComponent Post={UpdatePost}></PostComponent>
      </div>
      <div className={styles.wrapperLeft}>
        <PostForm
          init={UpdatePost}
          onChange={ChangeCallBack}
          onSubmit={SubmitFormHandler}
        ></PostForm>
      </div>
    </>
  );
}
