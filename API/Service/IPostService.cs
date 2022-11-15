using Domain;
using Service.Models;
using Microsoft.EntityFrameworkCore;

namespace Service
{
    public partial interface IPostService:IDisposable
    {

        Task<DTOPostList> GetBlogPostAll();

        Task<DTOPost> GetBlogPost(int id);

        Task<DTOPostList> Search(string term);

        Task<DTOResult> PutBlogPost(PostItem BlogPost);

        Task<DTOPost> PostBlogPost(PostItem dto);

        Task<DTOResult> DeleteBlogPost(int id);
    }
}