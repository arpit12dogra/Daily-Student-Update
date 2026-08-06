using System.ComponentModel.DataAnnotations;

namespace DailyStudentUpdates.API.DTOs
{
    public class CategoryDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Slug { get; set; } = string.Empty;
        public string Color { get; set; } = string.Empty;
        public string Icon { get; set; } = string.Empty;
        public string? Description { get; set; }
        public bool IsActive { get; set; }
        public int NewsCount { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }

    public class CreateCategoryDto
    {
        [Required, MinLength(2), MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [MaxLength(20)]
        public string Color { get; set; } = "#1565c0";

        [MaxLength(100)]
        public string Icon { get; set; } = "school";

        [MaxLength(500)]
        public string? Description { get; set; }

        public bool IsActive { get; set; } = true;
    }

    public class UpdateCategoryDto
    {
        [MaxLength(100)]
        public string? Name { get; set; }

        [MaxLength(20)]
        public string? Color { get; set; }

        [MaxLength(100)]
        public string? Icon { get; set; }

        [MaxLength(500)]
        public string? Description { get; set; }

        public bool? IsActive { get; set; }
    }
}
