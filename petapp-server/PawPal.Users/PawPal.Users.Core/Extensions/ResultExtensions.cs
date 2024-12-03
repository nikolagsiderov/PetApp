using PawPal.Users.Core.Results;
using PawPal.Users.Core.Results.Errors;

namespace PawPal.Users.Core.Extensions
{
    public static class ResultExtensions
    {
        public static T Match<T>(
            this Result result,
            Func<T> onSuccess,
            Func<Error, T> onFailure)
        {
            return result.IsSuccess ? onSuccess() : onFailure(result.Error);
        }
    }
}
