using Domain;
using Service.Models;
using Microsoft.EntityFrameworkCore;

namespace Service
{
    public partial interface IPostService
    {

        Task<IList<DTOPost>> GetBlogPostAll();

        Task<DTOPost> GetBlogPost(int id);

        Task<IList<DTOPost>> Search(string term);

        Task<int> PutBlogPost(DTOPost BlogPost);

        Task<DTOPost> PostBlogPost(DTOPost dto);

        Task<int> DeleteBlogPost(int id);
    }
}