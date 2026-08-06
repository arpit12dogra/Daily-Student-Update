using DailyStudentUpdates.API.Data;
using DailyStudentUpdates.API.DTOs;
using DailyStudentUpdates.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DailyStudentUpdates.API.Services
{
    public class NewsService
    {
        private readonly AppDbContext _db;

        public NewsService(AppDbContext db)
        {
            _db = db;
        }

        public async Task<PaginatedResponse<NewsDto>> GetAllAsync(NewsFilterDto filter)
        {
            var query = _db.News
                .Include(n => n.Category)
                .AsQueryable();

            // Filters
            if (!string.IsNullOrWhiteSpace(filter.Search))
                query = query.Where(n => n.Title.Contains(filter.Search) || n.Content.Contains(filter.Search) || n.Excerpt.Contains(filter.Search));

            if (filter.CategoryId.HasValue)
                query = query.Where(n => n.CategoryId == filter.CategoryId.Value);

            if (filter.IsPublished.HasValue)
                query = query.Where(n => n.IsPublished == filter.IsPublished.Value);

            if (filter.IsFeatured.HasValue)
                query = query.Where(n => n.IsFeatured == filter.IsFeatured.Value);

            // Sort
            query = filter.SortBy?.ToLower() switch
            {
                "title" => filter.SortOrder == "asc" ? query.OrderBy(n => n.Title) : query.OrderByDescending(n => n.Title),
                "views" => filter.SortOrder == "asc" ? query.OrderBy(n => n.ViewCount) : query.OrderByDescending(n => n.ViewCount),
                _ => filter.SortOrder == "asc" ? query.OrderBy(n => n.CreatedAt) : query.OrderByDescending(n => n.CreatedAt)
            };

            var total = await query.CountAsync();
            var items = await query
                .Skip((filter.Page - 1) * filter.Limit)
                .Take(filter.Limit)
                .Select(n => MapToDto(n))
                .ToListAsync();

            return new PaginatedResponse<NewsDto>
            {
                Data = items,
                Pagination = new PaginationInfo
                {
                    Page = filter.Page,
                    Limit = filter.Limit,
                    Total = total,
                    TotalPages = (int)Math.Ceiling((double)total / filter.Limit),
                    HasNext = filter.Page * filter.Limit < total,
                    HasPrev = filter.Page > 1
                }
            };
        }

        public async Task<PaginatedResponse<NewsDto>> GetPublishedAsync(NewsFilterDto filter)
        {
            filter.IsPublished = true;
            return await GetAllAsync(filter);
        }

        public async Task<List<NewsDto>> GetFeaturedAsync()
        {
            return await _db.News
                .Include(n => n.Category)
                .Where(n => n.IsFeatured && n.IsPublished)
                .OrderByDescending(n => n.CreatedAt)
                .Take(6)
                .Select(n => MapToDto(n))
                .ToListAsync();
        }

        public async Task<List<NewsDto>> GetLatestAsync(int limit = 6)
        {
            return await _db.News
                .Include(n => n.Category)
                .Where(n => n.IsPublished)
                .OrderByDescending(n => n.CreatedAt)
                .Take(limit)
                .Select(n => MapToDto(n))
                .ToListAsync();
        }

        public async Task<NewsDto?> GetByIdAsync(int id)
        {
            var news = await _db.News
                .Include(n => n.Category)
                .FirstOrDefaultAsync(n => n.Id == id);

            return news == null ? null : MapToDto(news);
        }

        public async Task<NewsDto> CreateAsync(CreateNewsDto dto)
        {
            var news = new News
            {
                Title = dto.Title,
                Content = dto.Content,
                Excerpt = dto.Excerpt,
                CategoryId = dto.CategoryId,
                Author = dto.Author,
                ImageUrl = dto.ImageUrl,
                PdfUrl = dto.PdfUrl,
                Tags = string.Join(",", dto.Tags ?? new List<string>()),
                IsPublished = dto.IsPublished,
                IsFeatured = dto.IsFeatured,
                PublishedAt = dto.IsPublished ? DateTime.UtcNow : null
            };

            _db.News.Add(news);
            await _db.SaveChangesAsync();

            await _db.Entry(news).Reference(n => n.Category).LoadAsync();
            return MapToDto(news);
        }

        public async Task<NewsDto?> UpdateAsync(int id, UpdateNewsDto dto)
        {
            var news = await _db.News.Include(n => n.Category).FirstOrDefaultAsync(n => n.Id == id);
            if (news == null) return null;

            if (dto.Title != null) news.Title = dto.Title;
            if (dto.Content != null) news.Content = dto.Content;
            if (dto.Excerpt != null) news.Excerpt = dto.Excerpt;
            if (dto.CategoryId.HasValue) news.CategoryId = dto.CategoryId.Value;
            if (dto.Author != null) news.Author = dto.Author;
            if (dto.ImageUrl != null) news.ImageUrl = dto.ImageUrl;
            if (dto.PdfUrl != null) news.PdfUrl = dto.PdfUrl;
            if (dto.Tags != null) news.Tags = string.Join(",", dto.Tags);
            if (dto.IsPublished.HasValue)
            {
                if (dto.IsPublished.Value && !news.IsPublished)
                    news.PublishedAt = DateTime.UtcNow;
                news.IsPublished = dto.IsPublished.Value;
            }
            if (dto.IsFeatured.HasValue) news.IsFeatured = dto.IsFeatured.Value;
            news.UpdatedAt = DateTime.UtcNow;

            await _db.SaveChangesAsync();
            await _db.Entry(news).Reference(n => n.Category).LoadAsync();
            return MapToDto(news);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var news = await _db.News.FindAsync(id);
            if (news == null) return false;
            _db.News.Remove(news);
            await _db.SaveChangesAsync();
            return true;
        }

        public async Task<NewsDto?> TogglePublishAsync(int id)
        {
            var news = await _db.News.Include(n => n.Category).FirstOrDefaultAsync(n => n.Id == id);
            if (news == null) return null;
            news.IsPublished = !news.IsPublished;
            if (news.IsPublished && !news.PublishedAt.HasValue)
                news.PublishedAt = DateTime.UtcNow;
            news.UpdatedAt = DateTime.UtcNow;
            await _db.SaveChangesAsync();
            return MapToDto(news);
        }

        public async Task<NewsDto?> ToggleFeaturedAsync(int id)
        {
            var news = await _db.News.Include(n => n.Category).FirstOrDefaultAsync(n => n.Id == id);
            if (news == null) return null;
            news.IsFeatured = !news.IsFeatured;
            news.UpdatedAt = DateTime.UtcNow;
            await _db.SaveChangesAsync();
            return MapToDto(news);
        }

        public async Task IncrementViewAsync(int id)
        {
            var news = await _db.News.FindAsync(id);
            if (news == null) return;
            news.ViewCount++;
            await _db.SaveChangesAsync();
        }

        public async Task<DashboardStatsDto> GetStatsAsync()
        {
            var today = DateTime.UtcNow.Date;
            return new DashboardStatsDto
            {
                TotalNews = await _db.News.CountAsync(),
                TodaysNews = await _db.News.CountAsync(n => n.CreatedAt.Date == today),
                TotalCategories = await _db.Categories.CountAsync(),
                TotalViews = await _db.News.SumAsync(n => (long)n.ViewCount),
                PublishedNews = await _db.News.CountAsync(n => n.IsPublished),
                FeaturedNews = await _db.News.CountAsync(n => n.IsFeatured)
            };
        }

        private static NewsDto MapToDto(News n) => new()
        {
            Id = n.Id,
            Title = n.Title,
            Content = n.Content,
            Excerpt = n.Excerpt,
            CategoryId = n.CategoryId,
            Category = n.Category == null ? null : new CategoryDto
            {
                Id = n.Category.Id,
                Name = n.Category.Name,
                Slug = n.Category.Slug,
                Color = n.Category.Color,
                Icon = n.Category.Icon
            },
            Author = n.Author,
            ImageUrl = n.ImageUrl,
            PdfUrl = n.PdfUrl,
            Tags = string.IsNullOrWhiteSpace(n.Tags)
                ? new List<string>()
                : n.Tags.Split(',', StringSplitOptions.RemoveEmptyEntries).ToList(),
            IsPublished = n.IsPublished,
            IsFeatured = n.IsFeatured,
            ViewCount = n.ViewCount,
            CreatedAt = n.CreatedAt,
            UpdatedAt = n.UpdatedAt,
            PublishedAt = n.PublishedAt
        };
    }
}
