using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PawPal.Users.Infrastructure.Entities
{
    public class User : AuditableEntity, IActivatable
    {
        [BsonId]
        public ObjectId Id { get; set; }

        [BsonElement("firstName")]
        public string FirstName { get; set; } = string.Empty;

        [BsonElement("lastName")]
        public string LastName { get; set; } = string.Empty;

        [BsonElement("email")]
        public string Email { get; set; } = string.Empty;

        [BsonElement("password")]
        public string Password { get; set; } = string.Empty;

        [BsonElement("salt")]
        public string Salt { get; set; } = string.Empty;

        [BsonElement("isActive")]
        public bool IsActive { get; set; } = true;
    }
}
