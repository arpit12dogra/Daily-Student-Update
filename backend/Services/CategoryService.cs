using DailyStudentUpdates.API.Data;
using DailyStudentUpdates.API.DTOs;
using DailyStudentUpdates.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DailyStudentUpdates.API.Services
{
    public class CategoryService
    {
        private readonly AppDbContext _db;

        public CategoryService(AppDbContext db)
        {
            _db = db;
        }

        public async Task<List<CategoryDto>> GetAllAsync()
        {
            return await _db.Categories
                .OrderBy(c => c.Name)
                .Select(c => new CategoryDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    Slug = c.Slug,
                    Color = c.Color,
                    Icon = c.Icon,
                    Description = c.Description,
                    IsActive = c.IsActive,
                    NewsCount = c.NewsList.Count(n => n.IsPublished),
                    CreatedAt = c.CreatedAt,
                    UpdatedAt = c.UpdatedAt
                })
                .ToListAsync();
        }

        public async Task<List<CategoryDto>> GetActiveAsync()
        {
            return await _db.Categories
                .Where(c => c.IsActive)
                .OrderBy(c => c.Name)
                .Select(c => new CategoryDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    Slug = c.Slug,
                    Color = c.Color,
                    Icon = c.Icon,
                    Description = c.Description,
                    IsActive = c.IsActive,
                    NewsCount = c.NewsList.Count(n => n.IsPublished),
                    CreatedAt = c.CreatedAt,
                    UpdatedAt = c.UpdatedAt
                })
                .ToListAsync();
        }

        public async Task<CategoryDto?> GetByIdAsync(int id)
        {
            var c = await _db.Categories
                .Include(x => x.NewsList)
                .FirstOrDefaultAsync(x => x.Id == id);

            if (c == null) return null;

            return MapToDto(c);
        }

        public async Task<CategoryDto?> GetBySlugAsync(string slug)
        {
            var c = await _db.Categories
                .Include(x => x.NewsList)
                .FirstOrDefaultAsync(x => x.Slug == slug);

            if (c == null) return null;
            return MapToDto(c);
        }

        public async Task<CategoryDto> CreateAsync(CreateCategoryDto dto)
        {
            var slug = GenerateSlug(dto.Name);

            // Ensure unique slug
            var existing = await _db.Categories.AnyAsync(c => c.Slug == slug);
            if (existing) slug += "-" + DateTime.UtcNow.Ticks;

            var category = new Category
            {
                Name = dto.Name,
                Slug = slug,
                Color = dto.Color,
                Icon = dto.Icon,
                Description = dto.Description,
                IsActive = dto.IsActive
            };

            _db.Categories.Add(category);
            await _db.SaveChangesAsync();
            return MapToDto(category);
        }

        public async Task<CategoryDto?> UpdateAsync(int id, UpdateCategoryDto dto)
        {
            var category = await _db.Categories.FindAsync(id);
            if (category == null) return null;

            if (dto.Name != null) { category.Name = dto.Name; category.Slug = GenerateSlug(dto.Name); }
            if (dto.Color != null) category.Color = dto.Color;
            if (dto.Icon != null) category.Icon = dto.Icon;
            if (dto.Description != null) category.Description = dto.Description;
            if (dto.IsActive.HasValue) category.IsActive = dto.IsActive.Value;
            category.UpdatedAt = DateTime.UtcNow;

            await _db.SaveChangesAsync();
            return MapToDto(category);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var category = await _db.Categories.FindAsync(id);
            if (category == null) return false;

            _db.Categories.Remove(category);
            await _db.SaveChangesAsync();
            return true;
        }

        public async Task<CategoryDto?> ToggleActiveAsync(int id)
        {
            var category = await _db.Categories.FindAsync(id);
            if (category == null) return null;

            category.IsActive = !category.IsActive;
            category.UpdatedAt = DateTime.UtcNow;
            await _db.SaveChangesAsync();
            return MapToDto(category);
        }

        private static string GenerateSlug(string name)
        {
            return name.ToLower()
                .Replace(" ", "-")
                .Replace("_", "-")
                .Replace("&", "and")
                .Replace("/", "-");
        }

        private static CategoryDto MapToDto(Category c) => new()
        {
            Id = c.Id,
            Name = c.Name,
            Slug = c.Slug,
            Color = c.Color,
            Icon = c.Icon,
            Description = c.Description,
            IsActive = c.IsActive,
            NewsCount = c.NewsList?.Count(n => n.IsPublished) ?? 0,
            CreatedAt = c.CreatedAt,
            UpdatedAt = c.UpdatedAt
        };
    }
}
