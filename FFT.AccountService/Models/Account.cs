using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace FFT.AccountService.Models
{
    public class Account
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("Name")]
        public string? AccountName { get; set; }

        public string? Created { get; set; }

        public string? Role { get; set; }

    }
}
