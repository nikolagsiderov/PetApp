using PawPal.Users.Core.Results;

namespace PawPal.Users.Core.Contracts
{
    public interface IUsersService
    {
        Task<Result> RegisterUserAsync(RegisterRequest request);
    }
}
