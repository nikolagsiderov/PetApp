using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PawPal.Users.Infrastructure.Entities
{
    public abstract class AuditableEntity
    {
        [BsonElement("createdAt")]
        public DateTime CreatedAt { get; set; }

        [BsonElement("createdBy")]
        public ObjectId CreatedBy { get; set; }

        [BsonElement("updatedAt")]
        public DateTime UpdatedAt { get; set; }

        [BsonElement("updatedBy")]
        public ObjectId UpdatedBy { get; set; }
    }
}
