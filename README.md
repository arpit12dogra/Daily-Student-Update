# Daily Student Updates

One Platform for Every Student Update

---

## Project Structure

```
daily student updates/
├── frontend/    ← Angular 17 app (http://localhost:4200)
└── backend/     ← ASP.NET Core 8 API (http://localhost:5000)
```

---

## Quick Start

### Step 1 — Setup Database (MySQL)

Open PowerShell in the `backend` folder and run:

```powershell
.\setup-database.ps1 -MySqlPassword "YOUR_MYSQL_ROOT_PASSWORD"
```

This will:
- Create the `DailyStudentUpdatesDB` database
- Update the connection string in `appsettings.json`

### Step 2 — Start Backend API

```powershell
cd backend
dotnet run
```

API runs at: **http://localhost:5000**  
Swagger UI: **http://localhost:5000/swagger**

On first run, it auto-creates:
- ✅ All database tables
- ✅ Admin account: `dailystudent@gmail.com` / `update@07`
- ✅ 12 default categories

### Step 3 — Start Frontend

```powershell
cd frontend
npm install     # only needed first time
ng serve
```

Frontend runs at: **http://localhost:4200**

---

## Admin Login

| Field    | Value                      |
|----------|----------------------------|
| Email    | dailystudent@gmail.com     |
| Password | update@07                  |
| URL      | http://localhost:4200/admin/login |

---

## API Endpoints

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | /api/auth/login | ❌ | Admin login |
| GET | /api/auth/profile | ✅ | Get admin profile |
| GET | /api/news/published | ❌ | Public news list |
| GET | /api/news/latest | ❌ | Latest news |
| GET | /api/news/featured | ❌ | Featured news |
| GET | /api/news | ✅ | All news (admin) |
| POST | /api/news | ✅ | Create news |
| PUT | /api/news/{id} | ✅ | Update news |
| DELETE | /api/news/{id} | ✅ | Delete news |
| GET | /api/categories | ❌ | All categories |
| POST | /api/categories | ✅ | Create category |
| POST | /api/media/upload/image | ✅ | Upload image |
| POST | /api/media/upload/pdf | ✅ | Upload PDF |

---

## Tech Stack

**Frontend:** Angular 17, Angular Material, Bootstrap 5  
**Backend:** ASP.NET Core 8, Entity Framework Core 8  
**Database:** MySQL 8  
**Auth:** JWT Bearer Tokens  
**File Storage:** Local (`backend/wwwroot/uploads/`)
