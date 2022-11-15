using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogAPI
{
    public interface ICache
    {
        public Task<T> Get<T>(string key);
        public Task<bool> Set<T>(string key, T value, TimeSpan? expiry = null);

    }
}
