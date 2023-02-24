import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import PostsListComponent from "../../../../Components/PostsList";
import { APP_CONTEXT } from "../../../../Context/AppContext";
import PostList from "../../../../Models/PostList";

export default function ManagePostsPage(){
    const _post = useContext(APP_CONTEXT).post;
    const [data,setData]=useState<PostList>(new PostList([],0));
    const [pageIndex,setPageIndex]=useState(1);
    const [pageSize,setPageSize]=useState(10);
    useEffect(()=>{
        async function GetPageData() {
            return (await _post.getAll(pageIndex,pageSize));
        }
        var res = GetPageData();
        res.then(q=> {setData(q.items)});
        toast.promise(
            res,
            {
              pending: 'Posts are Loading...',
              success: {render({data}){ return `${data?.message}`}, icon:'👌'},
              error: {render({data}){ return `${data}`}, icon:'🤯'}
            });
    },[pageIndex,pageSize])
    function PageChangeHandler(newPage:number){
        setPageIndex(newPage);
    }
    function PageSizeChangeHandler(newPage:number){
        setPageIndex(newPage);
    }
    return<>
    All Posts With Pagination
    <PostsListComponent Posts={data} PageIndex={pageIndex} PageSize={pageSize} onPageChange={PageChangeHandler} onPageSizeChange={PageSizeChangeHandler}></PostsListComponent>
    </>
}