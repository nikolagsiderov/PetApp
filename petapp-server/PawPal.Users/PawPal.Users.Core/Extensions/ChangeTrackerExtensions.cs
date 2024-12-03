using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace PawPal.Users.Core.Extensions
{
    public static class ChangeTrackerExtensions
    {
        public static bool IsAdded(this EntityEntry entry) =>
            entry.State == EntityState.Added;

        public static bool IsModified(this EntityEntry entry) =>
            entry.State == EntityState.Modified;
    }
}
