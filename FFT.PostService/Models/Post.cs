using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace FFT.PostService.Models
{
    public class Post
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string AccountId { get; set; }

        public string Created { get; set; }

        public string ParentId { get; set; }

        public string ParentType { get; set; }

        public string Data { get; set; }

    }
}
