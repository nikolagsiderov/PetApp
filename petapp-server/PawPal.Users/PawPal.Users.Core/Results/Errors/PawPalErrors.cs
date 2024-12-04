using System.Net;

namespace PawPal.Users.Core.Results.Errors
{
    public class PawPalErrors
    {
        public static readonly Error FailedRegistration = new Error("10001", "Registration failed.", HttpStatusCode.Conflict);
        public static readonly Error InvalidEmailAddress = new Error("10002", "Invalid email address format.", HttpStatusCode.BadRequest);
    }
}
