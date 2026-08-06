using DailyStudentUpdates.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DailyStudentUpdates.API.Data
{
    public static class DbSeeder
    {
        public static async Task SeedAsync(AppDbContext db)
        {
            // Run pending migrations
            await db.Database.MigrateAsync();

            // Seed default admin if none exists
            if (!await db.Admins.AnyAsync())
            {
                var admin = new Admin
                {
                    Username = "DailyStudent",
                    Email = "dailystudent@gmail.com",
                    PasswordHash = BCrypt.Net.BCrypt.HashPassword("update@07"),
                    Role = "super-admin",
                    CreatedAt = DateTime.UtcNow
                };
                db.Admins.Add(admin);
                await db.SaveChangesAsync();
                Console.WriteLine("✅ Default admin seeded: dailystudent@gmail.com / update@07");
            }

            // Seed default categories if none exist
            if (!await db.Categories.AnyAsync())
            {
                var categories = new List<Category>
                {
                    new() { Name = "College Notice",    Slug = "college-notice",    Color = "#1565c0", Icon = "campaign" },
                    new() { Name = "Exam Updates",      Slug = "exam-updates",      Color = "#2e7d32", Icon = "quiz" },
                    new() { Name = "Placement",         Slug = "placement",         Color = "#e65100", Icon = "work" },
                    new() { Name = "Internship",        Slug = "internship",        Color = "#6a1b9a", Icon = "laptop_mac" },
                    new() { Name = "Scholarship",       Slug = "scholarship",       Color = "#00695c", Icon = "school" },
                    new() { Name = "Results",           Slug = "results",           Color = "#ad1457", Icon = "assignment_turned_in" },
                    new() { Name = "College Events",    Slug = "college-events",    Color = "#f57f17", Icon = "event" },
                    new() { Name = "Government Jobs",   Slug = "government-jobs",   Color = "#37474f", Icon = "account_balance" },
                    new() { Name = "Private Jobs",      Slug = "private-jobs",      Color = "#0277bd", Icon = "business_center" },
                    new() { Name = "Admission",         Slug = "admission",         Color = "#558b2f", Icon = "how_to_reg" },
                    new() { Name = "Library",           Slug = "library",           Color = "#4527a0", Icon = "menu_book" },
                    new() { Name = "Hostel",            Slug = "hostel",            Color = "#c62828", Icon = "home" },
                };
                db.Categories.AddRange(categories);
                await db.SaveChangesAsync();
                Console.WriteLine($"✅ {categories.Count} default categories seeded");
            }
        }
    }
}
