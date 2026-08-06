using DailyStudentUpdates.API.Data;
using DailyStudentUpdates.API.DTOs;
using DailyStudentUpdates.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DailyStudentUpdates.API.Services
{
    public class AuthService
    {
        private readonly AppDbContext _db;
        private readonly JwtService _jwt;

        public AuthService(AppDbContext db, JwtService jwt)
        {
            _db = db;
            _jwt = jwt;
        }

        public async Task<LoginResponseDto?> LoginAsync(LoginDto dto)
        {
            var admin = await _db.Admins
                .FirstOrDefaultAsync(a => a.Email == dto.Email);

            if (admin == null) return null;

            if (!BCrypt.Net.BCrypt.Verify(dto.Password, admin.PasswordHash))
                return null;

            // Update last login
            admin.LastLogin = DateTime.UtcNow;
            await _db.SaveChangesAsync();

            var token = _jwt.GenerateToken(admin);

            return new LoginResponseDto
            {
                Token = token,
                ExpiresIn = 86400,
                Admin = new AdminDto
                {
                    Id = admin.Id,
                    Username = admin.Username,
                    Email = admin.Email,
                    Role = admin.Role,
                    CreatedAt = admin.CreatedAt,
                    LastLogin = admin.LastLogin
                }
            };
        }

        public async Task<AdminDto?> GetProfileAsync(int adminId)
        {
            var admin = await _db.Admins.FindAsync(adminId);
            if (admin == null) return null;

            return new AdminDto
            {
                Id = admin.Id,
                Username = admin.Username,
                Email = admin.Email,
                Role = admin.Role,
                CreatedAt = admin.CreatedAt,
                LastLogin = admin.LastLogin
            };
        }
    }
}
