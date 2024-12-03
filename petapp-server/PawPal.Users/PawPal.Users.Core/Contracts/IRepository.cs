using System.Linq.Expressions;

namespace PawPal.Users.Core.Contracts
{
    public interface IRepository<TEntity>
        where TEntity : class
    {
        Task<TEntity> AddAsync(TEntity entity);


        Task<ICollection<TEntity>> AddManyAsync(ICollection<TEntity> entities);

        Task<TEntity> UpdateAsync(TEntity entity);

        Task<ICollection<TEntity>> UpdateManyAsync(ICollection<TEntity> entities);

        Task<int> DeleteAsync(TEntity entity, bool isHard = false);

        Task<TEntity> FindAsync(Expression<Func<TEntity, bool>> match, bool tracking = false);

        IQueryable<TEntity> GetAll(bool tracking = false);

        Task<int> SaveChangesAsync();
    }
}
