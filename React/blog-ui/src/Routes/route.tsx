import { createBrowserRouter } from "react-router-dom";
import Home from "../Area/Client/Pages/Home";
import AdminHome from "../Area/Admin/Pages/Home";
import Error from "../Area/Shared/Pages/Error";
import Root from "../Area/Client/Pages/Layout";
import RootAdmin from "../Area/Admin/Pages/Layout";
import Post from "../Area/Client/Pages/Post";
import ManagePostsPage from "../Area/Admin/Pages/Post/ManagePosts";
import UpdatePostPage from "../Area/Admin/Pages/Post/UpdatePost";
import NewPostPage from "../Area/Admin/Pages/Post/NewPost";
import { APP_CONTEXT } from "../Context/AppContext";
import { useContext } from "react";
import PostService from "../Services/PostService";
import Http from "../Services/Http";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/post/:postId",
        element: <Post />,
      },
    ],
  },
  {
    path: "/admin",
    element: <RootAdmin />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <AdminHome />,
      },
      {
        path: "/admin/post",
        element: <ManagePostsPage />,
      },
      { path: "/admin/post/:postId",
       element: <UpdatePostPage />,
       loader:UpdatePostLoader
    },
      { path: "/admin/post/new", element: <NewPostPage /> },
    ],
  },
]);
function UpdatePostLoader({params}:any) {
  const _post = new PostService(new Http());
  return _post.get(params.postId).then(q=>q.item);
}
export default router;
