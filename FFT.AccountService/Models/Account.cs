using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace FFT.AccountService.Models
{
    public class Account
    {
        public string? Id { get; set; }

        [BsonElement("Name")]
        public string? AccountName { get; set; }

        public string? Email { get; set; }

        public string? Password { get; set; }

        public string? Created { get; set; }

        public string? Role { get; set; }

    }
}
