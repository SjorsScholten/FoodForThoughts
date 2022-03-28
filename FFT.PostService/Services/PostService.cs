using FFT.PostService.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FFT.PostService.Services
{
    public class PostService
    {
        private readonly IMongoCollection<Post> m_PostCollection;

        public PostService (IOptions<PostDatabaseSettings> settings)
        {
            var mongoClient = new MongoClient(settings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(settings.Value.DatabaseName);
            m_PostCollection = mongoDatabase.GetCollection<Post>(settings.Value.PostCollectionName);
        }

        public async Task<List<Post>> GetAsync() =>
            await m_PostCollection.Find(_ => true).ToListAsync();

        public async Task<Post?> GetAsync(string id) =>
            await m_PostCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Post newAccount) =>
            await m_PostCollection.InsertOneAsync(newAccount);

        public async Task UpdateAsync(string id, Post updatedAccount) =>
            await m_PostCollection.ReplaceOneAsync(x => x.Id == id, updatedAccount);

        public async Task RemoveAsync(string id) =>
            await m_PostCollection.DeleteOneAsync(x => x.Id == id);
    }
}
