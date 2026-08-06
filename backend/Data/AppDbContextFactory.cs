using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace DailyStudentUpdates.API.Data
{
    /// <summary>
    /// Design-time factory used by EF migrations (dotnet ef migrations add)
    /// Uses a dummy connection string so migrations work without a running DB.
    /// </summary>
    public class AppDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
    {
        public AppDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();
            optionsBuilder.UseMySql(
                "Server=localhost;Port=3306;Database=DailyStudentUpdatesDB;User=root;Password=;",
                new MySqlServerVersion(new Version(8, 0, 0))
            );
            return new AppDbContext(optionsBuilder.Options);
        }
    }
}
