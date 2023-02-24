import { Link } from "react-router-dom";
import PostList from "../Models/PostList";

export default function PostsListComponent(props: {
  Posts: PostList;
  PageIndex: number;
  PageSize: number;
  onPageChange: Function;
  onPageSizeChange: Function;
}) {
  var totalPages = props.Posts.totalCount / props.PageSize;
  var paginationHtml=[];
  for(let i=1;i<=totalPages;i++){
    paginationHtml.push(<li key={i}><button onClick={()=>{props.onPageChange(i)}}>{i}</button></li>);
  }
  console.log(props.Posts.totalCount,props.PageSize);
  return (
    <>
      <ul>
        {props.Posts.data.map((value, index) => {
          return (
            <li key={value.id}>
              <Link to={"/admin/post/" + value.id}>{value.title}</Link>
            </li>
          );
        })}
      </ul>
      <div>
        <ul>
          {paginationHtml}
        </ul>
      </div>
    </>
  );
}
