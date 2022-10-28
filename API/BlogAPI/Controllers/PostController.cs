using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BlogAPI.Models;

namespace BlogAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly BlogContext _context;

        public PostController(BlogContext context)
        {
            _context = context;
        }

        // GET: api/Post
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<Post>>> GetBlogPost()
        {
            return await _context.Posts.ToListAsync();
        }

        // GET: api/Post/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> GetBlogPost(long id)
        {
            var BlogItems = await _context.Posts.FindAsync(id);

            if (BlogItems == null)
            {
                return NotFound();
            }

            return BlogItems;
        }

        // GET: api/Post/Search/exampleTerm
        [HttpGet("Search/{term}")]
        public async Task<ActionResult<List<Post>>> Search(string term)
        {
            List<Post> BlogItem = _context.Posts.Where(e => e.Title.Contains(term) || e.Text.Contains(term)).ToList();

            if (BlogItem == null)
            {
                return NotFound();
            }

            return BlogItem;
        }

        // PUT: api/Post/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlogPost(long id, Post BlogPost)
        {
            if (id != BlogPost.Id)
            {
                return BadRequest();
            }

            _context.Entry(BlogPost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogPostExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Post
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Post>> PostBlogPost(Post BlogPost)
        {
            _context.Posts.Add(BlogPost);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBlogPost), new { id = BlogPost.Id }, BlogPost);
        }

        // DELETE: api/Post/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlogPost(long id)
        {
            var BlogPost = await _context.Posts.FindAsync(id);
            if (BlogPost == null)
            {
                return NotFound();
            }

            _context.Posts.Remove(BlogPost);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BlogPostExists(long id)
        {
            return _context.Posts.Any(e => e.Id==id);
        }
    }
}
