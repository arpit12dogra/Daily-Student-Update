using DailyStudentUpdates.API.DTOs;
using DailyStudentUpdates.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DailyStudentUpdates.API.Controllers
{
    [ApiController]
    [Route("api/categories")]
    public class CategoriesController : ControllerBase
    {
        private readonly CategoryService _service;

        public CategoriesController(CategoryService service)
        {
            _service = service;
        }

        /// <summary>Get all categories (public)</summary>
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _service.GetAllAsync();
            return Ok(ApiResponse<List<CategoryDto>>.Ok(result));
        }

        /// <summary>Get active categories only (public)</summary>
        [HttpGet("active")]
        public async Task<IActionResult> GetActive()
        {
            var result = await _service.GetActiveAsync();
            return Ok(ApiResponse<List<CategoryDto>>.Ok(result));
        }

        /// <summary>Get category by ID (public)</summary>
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _service.GetByIdAsync(id);
            if (result == null) return NotFound(ApiResponse<object>.Fail("Category not found"));
            return Ok(ApiResponse<CategoryDto>.Ok(result));
        }

        /// <summary>Get category by slug (public)</summary>
        [HttpGet("slug/{slug}")]
        public async Task<IActionResult> GetBySlug(string slug)
        {
            var result = await _service.GetBySlugAsync(slug);
            if (result == null) return NotFound(ApiResponse<object>.Fail("Category not found"));
            return Ok(ApiResponse<CategoryDto>.Ok(result));
        }

        /// <summary>Create category (admin only)</summary>
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Create([FromBody] CreateCategoryDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ApiResponse<object>.Fail("Invalid input"));

            var result = await _service.CreateAsync(dto);
            return CreatedAtAction(nameof(GetById), new { id = result.Id },
                ApiResponse<CategoryDto>.Ok(result, "Category created successfully"));
        }

        /// <summary>Update category (admin only)</summary>
        [HttpPut("{id:int}")]
        [Authorize]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateCategoryDto dto)
        {
            var result = await _service.UpdateAsync(id, dto);
            if (result == null) return NotFound(ApiResponse<object>.Fail("Category not found"));
            return Ok(ApiResponse<CategoryDto>.Ok(result, "Category updated successfully"));
        }

        /// <summary>Delete category (admin only)</summary>
        [HttpDelete("{id:int}")]
        [Authorize]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _service.DeleteAsync(id);
            if (!result) return NotFound(ApiResponse<object>.Fail("Category not found"));
            return Ok(ApiResponse<object>.Ok(null!, "Category deleted successfully"));
        }

        /// <summary>Toggle active status (admin only)</summary>
        [HttpPatch("{id:int}/toggle")]
        [Authorize]
        public async Task<IActionResult> ToggleActive(int id)
        {
            var result = await _service.ToggleActiveAsync(id);
            if (result == null) return NotFound(ApiResponse<object>.Fail("Category not found"));
            return Ok(ApiResponse<CategoryDto>.Ok(result));
        }
    }
}
