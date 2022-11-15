using Domain.Infrastructure.Interfaces;
using Domain.Data.DBContext;
using Microsoft.EntityFrameworkCore;

namespace Domain.Infrastructure
{
    public class PostRepository : IPostRepository
    {
        private BlogContext _context;

        public PostRepository(BlogContext context)
        {
            this._context = context;
        }
        public async Task<IEnumerable<Post>> GetAll()
        {
            return await _context.Posts.ToListAsync();
        }
        public async Task<IEnumerable<Post>> Search(string term)
        {
            return await _context.Posts.Where(e => e.Title.Contains(term) || e.Text.Contains(term)).ToListAsync();
        }
        public async Task<Post> Get(int Id) {
            return await _context.Posts.AsNoTracking().Where(x=>x.Id == Id).FirstOrDefaultAsync();
        }

        public async Task Add(Post entity) {
            await _context.Posts.AddAsync(entity);
        }

        public void Update(Post entity) {
            _context.Entry(entity).State = EntityState.Modified;
        }

        public async Task Remove(Post item) {
            _context.Posts.Remove(item);
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}