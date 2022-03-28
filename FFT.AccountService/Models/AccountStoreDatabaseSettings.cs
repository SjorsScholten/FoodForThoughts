
namespace FFT.AccountService.Models
{
    public class AccountStoreDatabaseSettings
    {
        public string ConnectionString { get; set; } = null;
        public string DatabaseName { get; set; } = null;
        public string AccountCollectionName { get; set; } = null;
    }
}
