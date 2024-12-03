using PawPal.Users.Core.Contracts;
using PawPal.Users.Infrastructure.Entities;

namespace PawPal.Users.Services.Factories
{
    public static class UserFactory
    {
        public static User ToEntity(
            this RegisterRequest request,
            string? password,
            string? salt)
            => request is null
            ? throw new ArgumentNullException(nameof(request))
            : new User
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Email,
                Password = password ?? throw new ArgumentNullException(nameof(password)),
                Salt = salt ?? throw new ArgumentNullException(nameof(salt)),
            };
    }
}
