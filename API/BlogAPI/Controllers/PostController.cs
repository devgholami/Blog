using System;
using System.Collections.Generic;
using System.Linq;
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

        public PostController(IPostService post)
        {
            _post = post;
        }

        // GET: api/Post
        [HttpGet("all")]
        public async Task<IEnumerable<DTOPost>> GetBlogPost()
        {
            return await _post.GetBlogPostAll();
        }

        // GET: api/Post/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DTOPost>> GetBlogPost(int id)
        {
            var Item = await _post.GetBlogPost(id);

            if (Item == null)
            {
                return NotFound();
            }

            return Item;
        }

        // GET: api/Post/Search/exampleTerm
        [HttpGet("Search/{term}")]
        public async Task<ActionResult<IList<DTOPost>>> Search(string term)
        {
            IList<DTOPost> Items = await _post.Search(term);

            if (Items == null)
            {
                return NotFound();
            }

            return (ActionResult)Items;
        }

        // PUT: api/Post/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut()]
        public async Task<ActionResult<int>> PutBlogPost(DTOPost BlogPost)
        {
            try
            {
                int res = await _post.PutBlogPost(BlogPost);
                if (res == -1)
                {
                    return NotFound();
                }
                else
                {
                    return (ActionResult<int>) res;
                }
            }
            catch
            {
                return -1;
            }
        }

        // POST: api/Post
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DTOPost>> PostBlogPost(DTOPost BlogPost)
        {
            BlogPost = await _post.PostBlogPost(BlogPost);

            return BlogPost;
        }

        // DELETE: api/Post/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<int>> DeleteBlogPost(int id)
        {
            int res = await _post.DeleteBlogPost(id);
            if (res == -1)
            {
                return NotFound();
            }

            return res;
        }
    }
}
