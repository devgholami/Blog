using Domain.Infrastructure.Interfaces;
using Domain.Data.DBContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace Domain.Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {

        private BlogContext _context;
        private PostRepository _postRepository;

        public UnitOfWork(BlogContext context)
        {
            _context = context;
        }

        public IPostRepository PostRepository
        {
            get
            {

                if (this._postRepository == null)
                {
                    this._postRepository = new PostRepository(_context);
                }
                return _postRepository;
            }
        }

        public async Task<int> SaveChanges()
        {
            return await _context.SaveChangesAsync();
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
