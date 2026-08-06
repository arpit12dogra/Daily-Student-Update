using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DailyStudentUpdates.API.Models
{
    public class News
    {
        public int Id { get; set; }

        [Required, MaxLength(300)]
        public string Title { get; set; } = string.Empty;

        [Required]
        public string Content { get; set; } = string.Empty;

        [MaxLength(500)]
        public string Excerpt { get; set; } = string.Empty;

        public int CategoryId { get; set; }

        [MaxLength(100)]
        public string Author { get; set; } = "Admin";

        [MaxLength(500)]
        public string? ImageUrl { get; set; }

        [MaxLength(500)]
        public string? PdfUrl { get; set; }

        // Tags stored as comma-separated string
        public string Tags { get; set; } = string.Empty;

        public bool IsPublished { get; set; } = false;
        public bool IsFeatured { get; set; } = false;
        public int ViewCount { get; set; } = 0;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? PublishedAt { get; set; }

        // Navigation
        [ForeignKey("CategoryId")]
        public Category? Category { get; set; }
    }
}
