using Microsoft.AspNetCore.Http;
using PawPal.Users.Core.Contracts;

namespace PawPal.Users.Services.Services
{
    public class UsersContextService : IUsersContextService
    {
        private readonly HttpContext? _context;
        private string? _userId;

        public UsersContextService(IHttpContextAccessor contextAccessor)
        {
            _context = contextAccessor?.HttpContext;
        }

        public string UserId
        {
            get
            {
                if (_userId == null)
                    _userId = _context?.User?.Claims.SingleOrDefault(x => x.Type == "Id")?.Value ?? string.Empty;

                return _userId;
            }
            set => _userId = value;
        }
    }
}
