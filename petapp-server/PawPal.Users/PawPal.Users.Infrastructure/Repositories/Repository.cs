using PawPal.Users.Core.Contracts;
using System.Linq.Expressions;

namespace PawPal.Users.Infrastructure.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity>
        where TEntity : class
    {
        protected MongoDbContext _context;

        public Repository(MongoDbContext context)
        {
            _context = context;
        }

        public async Task<TEntity> AddAsync(TEntity entity)
        {
            _context.Set<TEntity>().Add(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public Task<ICollection<TEntity>> AddManyAsync(ICollection<TEntity> entities)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteAsync(TEntity entity, bool isHard = false)
        {
            throw new NotImplementedException();
        }

        public Task<TEntity> FindAsync(Expression<Func<TEntity, bool>> match, bool tracking = false)
        {
            throw new NotImplementedException();
        }

        public IQueryable<TEntity> GetAll(bool tracking = false)
        {
            throw new NotImplementedException();
        }

        public Task<int> SaveChangesAsync()
        {
            throw new NotImplementedException();
        }

        public Task<TEntity> UpdateAsync(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<ICollection<TEntity>> UpdateManyAsync(ICollection<TEntity> entities)
        {
            throw new NotImplementedException();
        }
    }
}
