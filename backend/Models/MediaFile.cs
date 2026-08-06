using System.ComponentModel.DataAnnotations;

namespace DailyStudentUpdates.API.Models
{
    public class MediaFile
    {
        public int Id { get; set; }

        [Required, MaxLength(300)]
        public string FileName { get; set; } = string.Empty;

        [Required, MaxLength(300)]
        public string OriginalName { get; set; } = string.Empty;

        [MaxLength(100)]
        public string MimeType { get; set; } = string.Empty;

        public long Size { get; set; }

        [Required, MaxLength(500)]
        public string Url { get; set; } = string.Empty;

        [MaxLength(500)]
        public string? ThumbnailUrl { get; set; }

        [MaxLength(20)]
        public string FileType { get; set; } = "image"; // image | pdf

        public int UploadedBy { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
