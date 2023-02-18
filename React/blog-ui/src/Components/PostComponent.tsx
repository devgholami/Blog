import PostModel from "../Models/PostModel";
import styles from "./PostComponent.module.css";

export default function PostComponent(props: { Post: PostModel }) {
  //var date = new Date(props.Post.createdDate).toLocaleDateString('fa-IR');
  var date = new Date(props.Post.createdDate).toLocaleDateString('en-US');
  return (
    <>
      <h2>{props.Post.title}</h2>
      <div>
        <span className={styles.date}>{date}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.Post.text }}></div>
    </>
  );
}
