using DailyStudentUpdates.API.DTOs;
using DailyStudentUpdates.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DailyStudentUpdates.API.Controllers
{
    [ApiController]
    [Route("api/news")]
    public class NewsController : ControllerBase
    {
        private readonly NewsService _service;

        public NewsController(NewsService service)
        {
            _service = service;
        }

        /// <summary>Get all news with filters (admin)</summary>
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAll([FromQuery] NewsFilterDto filter)
        {
            var result = await _service.GetAllAsync(filter);
            return Ok(result);
        }

        /// <summary>Get published news (public)</summary>
        [HttpGet("published")]
        public async Task<IActionResult> GetPublished([FromQuery] NewsFilterDto filter)
        {
            var result = await _service.GetPublishedAsync(filter);
            return Ok(result);
        }

        /// <summary>Get featured news (public)</summary>
        [HttpGet("featured")]
        public async Task<IActionResult> GetFeatured()
        {
            var result = await _service.GetFeaturedAsync();
            return Ok(ApiResponse<List<NewsDto>>.Ok(result));
        }

        /// <summary>Get latest news (public)</summary>
        [HttpGet("latest")]
        public async Task<IActionResult> GetLatest([FromQuery] int limit = 6)
        {
            var result = await _service.GetLatestAsync(limit);
            return Ok(ApiResponse<List<NewsDto>>.Ok(result));
        }

        /// <summary>Get dashboard stats (admin)</summary>
        [HttpGet("stats")]
        [Authorize]
        public async Task<IActionResult> GetStats()
        {
            var result = await _service.GetStatsAsync();
            return Ok(ApiResponse<DashboardStatsDto>.Ok(result));
        }

        /// <summary>Get news by ID</summary>
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _service.GetByIdAsync(id);
            if (result == null) return NotFound(ApiResponse<object>.Fail("News not found"));
            return Ok(ApiResponse<NewsDto>.Ok(result));
        }

        /// <summary>Create news (admin only)</summary>
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Create([FromBody] CreateNewsDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ApiResponse<object>.Fail("Invalid input"));

            var result = await _service.CreateAsync(dto);
            return CreatedAtAction(nameof(GetById), new { id = result.Id },
                ApiResponse<NewsDto>.Ok(result, "News created successfully"));
        }

        /// <summary>Update news (admin only)</summary>
        [HttpPut("{id:int}")]
        [Authorize]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateNewsDto dto)
        {
            var result = await _service.UpdateAsync(id, dto);
            if (result == null) return NotFound(ApiResponse<object>.Fail("News not found"));
            return Ok(ApiResponse<NewsDto>.Ok(result, "News updated successfully"));
        }

        /// <summary>Delete news (admin only)</summary>
        [HttpDelete("{id:int}")]
        [Authorize]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _service.DeleteAsync(id);
            if (!result) return NotFound(ApiResponse<object>.Fail("News not found"));
            return Ok(ApiResponse<object>.Ok(null!, "News deleted successfully"));
        }

        /// <summary>Toggle publish status (admin only)</summary>
        [HttpPatch("{id:int}/toggle-publish")]
        [Authorize]
        public async Task<IActionResult> TogglePublish(int id)
        {
            var result = await _service.TogglePublishAsync(id);
            if (result == null) return NotFound(ApiResponse<object>.Fail("News not found"));
            return Ok(ApiResponse<NewsDto>.Ok(result));
        }

        /// <summary>Toggle featured status (admin only)</summary>
        [HttpPatch("{id:int}/toggle-featured")]
        [Authorize]
        public async Task<IActionResult> ToggleFeatured(int id)
        {
            var result = await _service.ToggleFeaturedAsync(id);
            if (result == null) return NotFound(ApiResponse<object>.Fail("News not found"));
            return Ok(ApiResponse<NewsDto>.Ok(result));
        }

        /// <summary>Increment view count (public)</summary>
        [HttpPatch("{id:int}/view")]
        public async Task<IActionResult> IncrementView(int id)
        {
            await _service.IncrementViewAsync(id);
            return Ok(ApiResponse<object>.Ok(null!));
        }
    }
}
