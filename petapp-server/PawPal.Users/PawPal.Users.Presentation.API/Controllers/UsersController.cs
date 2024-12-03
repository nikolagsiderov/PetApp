using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PawPal.Users.Core.Contracts;
using PawPal.Users.Core.Extensions;

namespace PawPal.Users.Presentation.API.Controllers
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUsersService _usersService;

        public UsersController(IUsersService usersService)
        {
            _usersService = usersService ?? throw new ArgumentNullException(nameof(usersService));
        }

        [HttpPost(nameof(RegisterAsync)), AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IResult> RegisterAsync([FromBody] RegisterRequest request)
        {
            var result = await _usersService.RegisterUserAsync(request);

            return result.Match(
                onSuccess: Results.NoContent,
                onFailure: error => Results.Conflict(error));
        }
    }
}
