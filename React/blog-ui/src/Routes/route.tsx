import { createBrowserRouter } from 'react-router-dom';
import Home from '../Area/Client/Pages/Home';
import AdminHome from '../Area/Admin/Pages/Home';
import Error from '../Area/Shared/Pages/Error';
import Root from '../Area/Client/Pages/Layout';
import RootAdmin from '../Area/Admin/Pages/Layout';
import Post from '../Area/Client/Pages/Post';
const router = createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      errorElement: <Error />,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"/post/:postId",
          element:<Post/>
        }
      ]
    },
    {
      path:"/admin",
      element:<RootAdmin/>,
      errorElement: <Error />,
      children:[
        {
          path:"",
          element:<AdminHome/>
        }
      ]
    }
  ]);
  export default router;