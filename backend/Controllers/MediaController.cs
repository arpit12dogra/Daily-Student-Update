using DailyStudentUpdates.API.DTOs;
using DailyStudentUpdates.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace DailyStudentUpdates.API.Controllers
{
    [ApiController]
    [Route("api/media")]
    [Authorize]
    public class MediaController : ControllerBase
    {
        private readonly MediaService _service;

        public MediaController(MediaService service)
        {
            _service = service;
        }

        /// <summary>Get all media files (paginated)</summary>
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] int page = 1, [FromQuery] int limit = 20)
        {
            var result = await _service.GetAllAsync(page, limit);
            return Ok(result);
        }

        /// <summary>Get media file by ID</summary>
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _service.GetByIdAsync(id);
            if (result == null) return NotFound(ApiResponse<object>.Fail("File not found"));
            return Ok(ApiResponse<MediaFileDto>.Ok(result));
        }

        /// <summary>Upload image</summary>
        [HttpPost("upload/image")]
        public async Task<IActionResult> UploadImage(IFormFile image)
        {
            if (image == null || image.Length == 0)
                return BadRequest(ApiResponse<object>.Fail("No image file provided"));

            var adminId = int.Parse(User.FindFirstValue("adminId") ?? "0");

            try
            {
                var result = await _service.UploadImageAsync(image, adminId);
                return Ok(result);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ApiResponse<object>.Fail(ex.Message));
            }
        }

        /// <summary>Upload PDF</summary>
        [HttpPost("upload/pdf")]
        public async Task<IActionResult> UploadPdf(IFormFile pdf)
        {
            if (pdf == null || pdf.Length == 0)
                return BadRequest(ApiResponse<object>.Fail("No PDF file provided"));

            var adminId = int.Parse(User.FindFirstValue("adminId") ?? "0");

            try
            {
                var result = await _service.UploadPdfAsync(pdf, adminId);
                return Ok(result);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ApiResponse<object>.Fail(ex.Message));
            }
        }

        /// <summary>Delete media file</summary>
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _service.DeleteAsync(id);
            if (!result) return NotFound(ApiResponse<object>.Fail("File not found"));
            return Ok(ApiResponse<object>.Ok(null!, "File deleted successfully"));
        }
    }
}
