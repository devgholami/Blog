import PostModel from "../Models/PostModel";

export default function PostsListComponent(props: { Posts: PostModel[] }) {
  return (
    <ul>
      {props.Posts.map((value, index) => {
        return <li key={value.id}>{value.title}</li>
      })}
    </ul>
  );
}
