using Domain;
using Service.Models;
using Microsoft.EntityFrameworkCore;
using AutoMapper;

namespace Service
{
    public class PostService : IPostService
    {
        private readonly BlogContext _context;
        private readonly IMapper _mapper;

        public PostService(BlogContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IList<DTOPost>> GetBlogPostAll()
        {
            IList<Post> list = await _context.Posts.ToListAsync();
            IList<DTOPost> dto = _mapper.Map<IList<DTOPost>>(list);
            return dto;
        }

        public async Task<DTOPost> GetBlogPost(int id)
        {
            Post Item = await _context.Posts.FindAsync(id);

            return _mapper.Map<DTOPost>(Item);
        }

        public async Task<IList<DTOPost>> Search(string term)
        {
            IList<DTOPost> Items = (IList<DTOPost>)await _context.Posts.Where(e => e.Title.Contains(term) || e.Text.Contains(term)).ToListAsync();
            return Items;
        }

        public async Task<int> PutBlogPost(DTOPost BlogPost)
        {
            _context.Entry(BlogPost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogPostExists(BlogPost.Id))
                {
                    return -1;
                }
                else
                {
                    throw;
                }
            }

            return 1;
        }

        public async Task<DTOPost> PostBlogPost(DTOPost dto)
        {
            try
            {
                var res = _context.Posts.Add(new Post { Title = dto.Title, Text = dto.Text, CreatedDate = DateTime.UtcNow });
                await _context.SaveChangesAsync();
                if (res.State == EntityState.Added)
                {
                    dto.Id = res.Entity.Id;
                    dto.CreatedDate = res.Entity.CreatedDate;
                }
                return dto;
            }
            catch (Exception e)
            {
                throw e;
                return null;
            }
            finally
            {
                _context.DisposeAsync();
            }

        }

        public async Task<int> DeleteBlogPost(int id)
        {
            var item = await _context.Posts.FindAsync(id);
            if (item == null)
            {
                return -1;
            }

            var res = _context.Posts.Remove(item);
            await _context.SaveChangesAsync();

            if (res.State == EntityState.Deleted)
                return 1;
            else
                return -1;
        }

        private bool BlogPostExists(long id)
        {
            return _context.Posts.Any(e => e.Id == id);
        }
    }
}