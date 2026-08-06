namespace DailyStudentUpdates.API.DTOs
{
    public class MediaFileDto
    {
        public int Id { get; set; }
        public string FileName { get; set; } = string.Empty;
        public string OriginalName { get; set; } = string.Empty;
        public string MimeType { get; set; } = string.Empty;
        public long Size { get; set; }
        public string Url { get; set; } = string.Empty;
        public string? ThumbnailUrl { get; set; }
        public string FileType { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
    }

    public class UploadResponseDto
    {
        public bool Success { get; set; }
        public MediaFileDto? File { get; set; }
        public string Url { get; set; } = string.Empty;
        public string? Message { get; set; }
    }
}
