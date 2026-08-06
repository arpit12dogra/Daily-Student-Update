import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  // Public Layout
  {
    path: '',
    loadComponent: () =>
      import('./pages/public/public-layout/public-layout.component').then(m => m.PublicLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/public/home/home.component').then(m => m.HomeComponent),
        title: 'Home - Daily Student Updates'
      },
      {
        path: 'news',
        loadComponent: () =>
          import('./pages/public/news-list/news-list.component').then(m => m.NewsListComponent),
        title: 'News - Daily Student Updates'
      },
      {
        path: 'news/:id',
        loadComponent: () =>
          import('./pages/public/news-detail/news-detail.component').then(m => m.NewsDetailComponent),
        title: 'News Detail - Daily Student Updates'
      },
      {
        path: 'notices',
        loadComponent: () =>
          import('./pages/public/notices/notices.component').then(m => m.NoticesComponent),
        title: 'Notices - Daily Student Updates'
      },
      {
        path: 'gallery',
        loadComponent: () =>
          import('./pages/public/gallery/gallery.component').then(m => m.GalleryComponent),
        title: 'Gallery - Daily Student Updates'
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/public/about/about.component').then(m => m.AboutComponent),
        title: 'About - Daily Student Updates'
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/public/contact/contact.component').then(m => m.ContactComponent),
        title: 'Contact - Daily Student Updates'
      },
    ]
  },

  // Admin Auth
  {
    path: 'admin/login',
    loadComponent: () =>
      import('./pages/admin/login/login.component').then(m => m.LoginComponent),
    title: 'Admin Login - Daily Student Updates'
  },

  // Admin Layout (protected)
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/admin/dashboard/dashboard.component').then(m => m.DashboardComponent),
        title: 'Dashboard - Admin'
      },
      {
        path: 'manage-news',
        loadComponent: () =>
          import('./pages/admin/manage-news/manage-news.component').then(m => m.ManageNewsComponent),
        title: 'Manage News - Admin'
      },
      {
        path: 'add-news',
        loadComponent: () =>
          import('./pages/admin/add-news/add-news.component').then(m => m.AddNewsComponent),
        title: 'Add News - Admin'
      },
      {
        path: 'edit-news/:id',
        loadComponent: () =>
          import('./pages/admin/add-news/add-news.component').then(m => m.AddNewsComponent),
        title: 'Edit News - Admin'
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./pages/admin/categories/categories.component').then(m => m.CategoriesComponent),
        title: 'Categories - Admin'
      },
      {
        path: 'media',
        loadComponent: () =>
          import('./pages/admin/media/media.component').then(m => m.MediaComponent),
        title: 'Media - Admin'
      },
    ]
  },

  // Wildcard
  {
    path: '**',
    redirectTo: ''
  }
];
