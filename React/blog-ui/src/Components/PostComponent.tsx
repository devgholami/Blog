import PostModel from "../Models/PostModel";

export default function PostComponent(props: { Post: PostModel }) {
  return (
    <>
      <h2>{props.Post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: props.Post.text }}></div>
    </>
  );
}
