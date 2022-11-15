using Microsoft.Extensions.Caching.Distributed;
using Newtonsoft.Json;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace BlogAPI
{
    internal class CacheRedis : ICache
    {
        private readonly IConnectionMultiplexer _cache;
        private readonly IDatabaseAsync _redis;

        public CacheRedis(IConnectionMultiplexer cache)
        {
            _cache = cache;
            _redis = _cache.GetDatabase();
        }
        public async Task<T> Get<T>(string key)
        {
            try
            {
                
                var value = await _redis.StringGetAsync(key);

                if (value.HasValue)
                {
                    return JsonConvert.DeserializeObject<T>(value);
                }

                return default;
            }
            catch (Exception e)
            {
                return default;
            }
        }

        public async Task<bool> Set<T>(string key, T value, TimeSpan? expiry = null)
        {
            try
            {
                return await _redis.StringSetAsync(key, JsonConvert.SerializeObject(value), expiry ?? TimeSpan.FromHours(1));
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}
