using System.ComponentModel.DataAnnotations;

namespace DailyStudentUpdates.API.Models
{
    public class Category
    {
        public int Id { get; set; }

        [Required, MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [Required, MaxLength(100)]
        public string Slug { get; set; } = string.Empty;

        [MaxLength(20)]
        public string Color { get; set; } = "#1565c0";

        [MaxLength(100)]
        public string Icon { get; set; } = "school";

        [MaxLength(500)]
        public string? Description { get; set; }

        public bool IsActive { get; set; } = true;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        // Navigation
        public ICollection<News> NewsList { get; set; } = new List<News>();
    }
}
