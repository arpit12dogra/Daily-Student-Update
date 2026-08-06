using System.ComponentModel.DataAnnotations;

namespace DailyStudentUpdates.API.DTOs
{
    public class NewsDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string Excerpt { get; set; } = string.Empty;
        public int CategoryId { get; set; }
        public CategoryDto? Category { get; set; }
        public string Author { get; set; } = string.Empty;
        public string? ImageUrl { get; set; }
        public string? PdfUrl { get; set; }
        public List<string> Tags { get; set; } = new();
        public bool IsPublished { get; set; }
        public bool IsFeatured { get; set; }
        public int ViewCount { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public DateTime? PublishedAt { get; set; }
    }

    public class CreateNewsDto
    {
        [Required, MinLength(5), MaxLength(300)]
        public string Title { get; set; } = string.Empty;

        [Required, MinLength(50)]
        public string Content { get; set; } = string.Empty;

        [Required, MinLength(20), MaxLength(500)]
        public string Excerpt { get; set; } = string.Empty;

        [Required]
        public int CategoryId { get; set; }

        [MaxLength(100)]
        public string Author { get; set; } = "Admin";

        [MaxLength(500)]
        public string? ImageUrl { get; set; }

        [MaxLength(500)]
        public string? PdfUrl { get; set; }

        public List<string> Tags { get; set; } = new();
        public bool IsPublished { get; set; } = false;
        public bool IsFeatured { get; set; } = false;
    }

    public class UpdateNewsDto
    {
        [MaxLength(300)]
        public string? Title { get; set; }

        public string? Content { get; set; }

        [MaxLength(500)]
        public string? Excerpt { get; set; }

        public int? CategoryId { get; set; }

        [MaxLength(100)]
        public string? Author { get; set; }

        [MaxLength(500)]
        public string? ImageUrl { get; set; }

        [MaxLength(500)]
        public string? PdfUrl { get; set; }

        public List<string>? Tags { get; set; }
        public bool? IsPublished { get; set; }
        public bool? IsFeatured { get; set; }
    }

    public class NewsFilterDto
    {
        public int Page { get; set; } = 1;
        public int Limit { get; set; } = 10;
        public string? Search { get; set; }
        public int? CategoryId { get; set; }
        public bool? IsPublished { get; set; }
        public bool? IsFeatured { get; set; }
        public string SortBy { get; set; } = "createdAt";
        public string SortOrder { get; set; } = "desc";
    }

    public class DashboardStatsDto
    {
        public int TotalNews { get; set; }
        public int TodaysNews { get; set; }
        public int TotalCategories { get; set; }
        public long TotalViews { get; set; }
        public int PublishedNews { get; set; }
        public int FeaturedNews { get; set; }
    }
}
