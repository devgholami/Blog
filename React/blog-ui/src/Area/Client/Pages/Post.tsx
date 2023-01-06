import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostComponent from "../../../Components/PostComponent";
import { APP_CONTEXT } from "../../../Context/AppContext";
import HttpResp from "../../../Models/HttpResponseModel";
import PostModel from "../../../Models/PostModel";
import styles from "./Post.module.css";

function Post() {
  const postService = useContext(APP_CONTEXT).post;
  let { postId } = useParams();
  const [Post, setPost] = useState(new PostModel(0, "", "", new Date()));

  useEffect(() => {
    async function fetchpost() {
      //return postId != null ? await postService.get(Number(postId)) :postService.getLatest();
      return await postService.get(Number(postId));
    }
    fetchpost().then((value) => {
      setPost(value.item);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <PostComponent Post={Post} />
    </div>
  );
}
export default Post;
