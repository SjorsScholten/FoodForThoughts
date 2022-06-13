using FFT.AccountService.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FFT.AccountService.Services
{
    public class AccountService
    {
        private readonly IMongoCollection<Account> m_AccountsCollection;

        public AccountService(IOptions<AccountStoreDatabaseSettings> settings)
        {
            var mongoClient = new MongoClient(settings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(settings.Value.DatabaseName);
            m_AccountsCollection = mongoDatabase.GetCollection<Account>(settings.Value.AccountCollectionName);
        }

        public async Task<List<Account>> GetAsync() =>
            await m_AccountsCollection.Find(_ => true).ToListAsync();

        public async Task<Account?> GetAsync(string id) =>
            await m_AccountsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task<Account?> GetByEmailAsync(string email) =>
            await m_AccountsCollection.Find(x => x.Email == email).FirstOrDefaultAsync();

        public async Task<Account?> GetByNameAsync(string name) =>
            await m_AccountsCollection.Find(x => x.AccountName == name).FirstOrDefaultAsync();

        public async Task CreateAsync(Account newAccount) =>
            await m_AccountsCollection.InsertOneAsync(newAccount);

        public async Task UpdateAsync(string id, Account updatedAccount) =>
            await m_AccountsCollection.ReplaceOneAsync(x => x.Id == id, updatedAccount);

        public async Task RemoveAsync(string id) =>
            await m_AccountsCollection.DeleteOneAsync(x => x.Id == id);

        public async Task<bool> IsEmailUnique(string email){
            var user = await GetByEmailAsync(email);
            return user == null;
        }

        public async Task<bool> IsNameUnique(string name){
            var user = await GetByNameAsync(name);
            return user == null;
        }
    }
}
