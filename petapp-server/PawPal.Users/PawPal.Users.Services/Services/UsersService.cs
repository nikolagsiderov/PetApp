using PawPal.Users.Core.Contracts;
using PawPal.Users.Core.Helpers;
using PawPal.Users.Core.Results;
using PawPal.Users.Core.Results.Errors;
using PawPal.Users.Infrastructure.Entities;
using PawPal.Users.Services.Factories;

namespace PawPal.Users.Services.Services
{
    public class UsersService : IUsersService
    {
        private readonly IRepository<User> _usersRepository;

        public UsersService(IRepository<User> usersRepository)
        {
            _usersRepository = usersRepository;
        }

        public async Task<Result> RegisterUserAsync(RegisterRequest request)
        {
            var hasher = new PawPalHasher();
            var passwordHash = hasher.HashPasword(request.Password, out var salt);
            var hexStringSalt = Convert.ToHexString(salt);

            var userToCreate = request.ToEntity(passwordHash, hexStringSalt);

            var createdUser = await _usersRepository.AddAsync(userToCreate);

            if (createdUser is null)
                return Result.Failure(PawPalErrors.FailedRegistration);

            return Result.Success();
        }
    }
}
