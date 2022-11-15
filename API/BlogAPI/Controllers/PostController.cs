using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Service;
using Service.Models;

namespace BlogAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private IPostService _post;
        private ICache _cache;

        public PostController(IPostService post, ICache cache)
        {
            _post = post;
            _cache = cache;
        }

        // GET: api/Post
        [HttpGet("all")]
        public async Task<DTOPostList> GetBlogPostAll()
        {
            try
            {
                List<PostItem> cache = await _cache.Get<List<PostItem>>("allpost");
                if (cache != null)
                    return new DTOPostList() { Items = cache, statusCode = HttpStatusCode.OK, Message = "seccessful" };
                var res = await _post.GetBlogPostAll();
                await _cache.Set("allpost", res.Items);
                return res;
            }
            catch (Exception e)
            {
                return new DTOPostList() { statusCode = HttpStatusCode.ExpectationFailed, Message = e.Message };
            }
        }

        // GET: api/Post/5
        [HttpGet("{id}")]
        public async Task<DTOPost> GetBlogPost(int id)
        {
            try
            {
                return await _post.GetBlogPost(id);
            }
            catch (Exception e)
            {
                return new DTOPost() { statusCode = HttpStatusCode.ExpectationFailed, Message = e.Message };
            }
        }

        // GET: api/Post/Search/exampleTerm
        [HttpGet("Search/{term}")]
        public async Task<DTOPostList> Search(string term)
        {
            try
            {
                return await _post.Search(term);
            }
            catch (Exception e)
            {
                return new DTOPostList() { statusCode = HttpStatusCode.ExpectationFailed, Message = e.Message };
            }
        }

        // PUT: api/Post/5
        [HttpPut()]
        public async Task<DTOResult> PutBlogPost(PostItem BlogPost)
        {
            try
            {
                return await _post.PutBlogPost(BlogPost);
            }
            catch (Exception e)
            {
                return new DTOResult() { statusCode = HttpStatusCode.ExpectationFailed, Message = e.Message };
            }
        }

        // POST: api/Post
        [HttpPost]
        public async Task<DTOPost> PostBlogPost(PostItem BlogPost)
        {
            try
            {
                return await _post.PostBlogPost(BlogPost);
            }
            catch (Exception e)
            {
                return new DTOPost() { statusCode = HttpStatusCode.ExpectationFailed, Message = e.Message };
            }
        }

        // DELETE: api/Post/5
        [HttpDelete("{id}")]
        public async Task<DTOResult> DeleteBlogPost(int id)
        {
            try
            {
                return await _post.DeleteBlogPost(id);
            }
            catch (Exception e)
            {
                return new DTOResult() { statusCode = HttpStatusCode.ExpectationFailed, Message = e.Message };
            }
        }
    }
}
