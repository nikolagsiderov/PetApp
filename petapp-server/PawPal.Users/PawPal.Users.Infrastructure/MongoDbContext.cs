using Microsoft.EntityFrameworkCore;
using MongoDB.Bson;
using MongoDB.EntityFrameworkCore.Extensions;
using PawPal.Users.Core.Contracts;
using PawPal.Users.Core.Extensions;
using PawPal.Users.Core.Helpers;
using PawPal.Users.Infrastructure.Entities;

namespace PawPal.Users.Infrastructure
{
    public class MongoDbContext : DbContext
    {
        public const string DbConnectionName = "ReadConnectionString";

        private readonly IUsersContextService _contextService;

        public MongoDbContext(DbContextOptions<MongoDbContext> options, IUsersContextService contextService)
            : base(options)
        {
            _contextService = contextService;
        }

        public DbSet<User> Users { get; set; }

        public async override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            var addedEntities = ChangeTracker.Entries<AuditableEntity>().Where(x => x.IsAdded());
            var modifiedEntities = ChangeTracker.Entries<AuditableEntity>().Where(x => x.IsModified());

            foreach (var entry in addedEntities)
            {
                entry.CurrentValues[nameof(AuditableEntity.CreatedAt)] = DateTime.UtcNow;
                entry.CurrentValues[nameof(AuditableEntity.UpdatedAt)] = DateTime.UtcNow;
                entry.CurrentValues[nameof(AuditableEntity.CreatedBy)] =
                entry.CurrentValues[nameof(AuditableEntity.UpdatedBy)] =
                _contextService.UserId == string.Empty
                    ? new ObjectId(ApplicationConstants.SystemObjectId)
                    : _contextService.UserId;
            }

            foreach (var entry in modifiedEntities)
            {
                entry.CurrentValues[nameof(AuditableEntity.UpdatedAt)] = DateTime.UtcNow;
                entry.CurrentValues[nameof(AuditableEntity.UpdatedBy)] =_contextService.UserId == string.Empty
                    ? new ObjectId(ApplicationConstants.SystemObjectId)
                    : _contextService.UserId;
            }

            return await base.SaveChangesAsync(cancellationToken);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
            => modelBuilder.Entity<User>().ToCollection(nameof(User).ToLower());
    }
}
