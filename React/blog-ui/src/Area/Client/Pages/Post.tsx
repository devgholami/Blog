import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostComponent from "../../../Components/PostComponent";
import TableOfContents from "../../../Components/TableOfContents";
import { APP_CONTEXT } from "../../../Context/AppContext";
import PostModel from "../../../Models/PostModel";
import styles from "./Post.module.css";

function Post() {
  const postService = useContext(APP_CONTEXT).post;
  let { postId } = useParams();
  const [Post, setPost] = useState(new PostModel(0, "", "", new Date()));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchpost() {
      //return postId != null ? await postService.get(Number(postId)) :postService.getLatest();
      return await postService.get(Number(postId));
    }
    fetchpost().then((value) => {
      setPost(value.item);
      setLoaded(true);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <PostComponent Post={Post} />
      <TableOfContents root={"." + styles.wrapper} loaded={loaded}/>
    </div>
  );
}
export default Post;
