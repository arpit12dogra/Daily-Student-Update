# ============================================================
# Daily Student Updates - Database Setup Script
# ============================================================
# Run this once to set up your MySQL database
# Usage: .\setup-database.ps1 -MySqlPassword "your_password"
# ============================================================

param(
    [Parameter(Mandatory=$true)]
    [string]$MySqlPassword
)

$mysql = "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe"

Write-Host ""
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  Daily Student Updates - DB Setup   " -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# 1. Test connection
Write-Host "Testing MySQL connection..." -ForegroundColor Yellow
$test = & $mysql -u root -p"$MySqlPassword" -e "SELECT 1;" 2>&1
if ($test -like "*ERROR*") {
    Write-Host "ERROR: Cannot connect to MySQL. Check your password." -ForegroundColor Red
    Write-Host $test -ForegroundColor Red
    exit 1
}
Write-Host "MySQL connection OK" -ForegroundColor Green

# 2. Create database
Write-Host "Creating database..." -ForegroundColor Yellow
& $mysql -u root -p"$MySqlPassword" -e "CREATE DATABASE IF NOT EXISTS DailyStudentUpdatesDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
Write-Host "Database created: DailyStudentUpdatesDB" -ForegroundColor Green

# 3. Update appsettings.json with correct password
Write-Host "Updating connection string..." -ForegroundColor Yellow
$settingsPath = Join-Path $PSScriptRoot "appsettings.json"
$settings = Get-Content $settingsPath -Raw | ConvertFrom-Json
$settings.ConnectionStrings.DefaultConnection = "Server=localhost;Port=3306;Database=DailyStudentUpdatesDB;User=root;Password=$MySqlPassword;AllowZeroDateTime=True;ConvertZeroDateTime=True;"
$settings | ConvertTo-Json -Depth 10 | Set-Content $settingsPath -Encoding UTF8
Write-Host "Connection string updated" -ForegroundColor Green

Write-Host ""
Write-Host "======================================" -ForegroundColor Green
Write-Host "  Setup complete! Now run the API:   " -ForegroundColor Green
Write-Host "  dotnet run                         " -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Green
Write-Host ""
Write-Host "Admin Login:" -ForegroundColor Cyan
Write-Host "  Email   : dailystudent@gmail.com" -ForegroundColor White
Write-Host "  Password: update@07" -ForegroundColor White
Write-Host ""
