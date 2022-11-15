using Domain.Infrastructure.Interfaces;
using Domain.Data.DBContext;

namespace Domain.Infrastructure.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IPostRepository PostRepository { get; }

        Task<int> SaveChanges();
    }
}
