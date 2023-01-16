import { useContext, useEffect, useState } from "react";
import PostComponent from "../../../Components/PostComponent";
import TableOfContents from "../../../Components/TableOfContents";
import { APP_CONTEXT } from "../../../Context/AppContext";
import { statusCode } from "../../../Models/HttpResponseStatusEnum";
import PostModel from "../../../Models/PostModel";
import IPostService from "../../../Services/Interfaces/IPostService.interface";
import styles from "./home.module.css";

function Home() {
  const postService: IPostService = useContext(APP_CONTEXT).post;
  const [Post, setPost] = useState(new PostModel(0, "", "", new Date()));
  useEffect(() => {
    async function fetchpost() {
      return await postService.get(36);
    }
    fetchpost().then((value) => {
      if (value.statusCode === statusCode.Success) setPost(value.item);
    });
  }, []);
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
      <PostComponent Post={Post} />
      </div>
      <div className={styles.rightSide}>
      <TableOfContents post={Post}/>
      </div>
    </div>
    </>
  );
}
export default Home;
