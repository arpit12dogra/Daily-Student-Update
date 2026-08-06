using DailyStudentUpdates.API.DTOs;
using DailyStudentUpdates.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace DailyStudentUpdates.API.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        /// <summary>Admin Login</summary>
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ApiResponse<object>.Fail("Invalid input"));

            var result = await _authService.LoginAsync(dto);
            if (result == null)
                return Unauthorized(ApiResponse<object>.Fail("Invalid email or password"));

            return Ok(result);
        }

        /// <summary>Get current admin profile</summary>
        [HttpGet("profile")]
        [Authorize]
        public async Task<IActionResult> GetProfile()
        {
            var adminId = int.Parse(User.FindFirstValue("adminId")!);
            var admin = await _authService.GetProfileAsync(adminId);

            if (admin == null)
                return NotFound(ApiResponse<object>.Fail("Admin not found"));

            return Ok(ApiResponse<AdminDto>.Ok(admin));
        }
    }
}
