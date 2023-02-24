using System.Linq.Expressions;
using System;
using System.Collections;
using System.Threading.Tasks;

namespace Domain.Infrastructure.Interfaces
{
    public interface IRepository<T> : IDisposable where T : class
    {
        Task<IList<T>> GetAll(int pageIndex, int pageSize);
        Task<IList<T>> Search(string term);
        Task<T> Get(int Id);

        Task Add(T entity);

        void Update(T entity);

        Task Remove(T item);
        Task<int> Count();
    }
}