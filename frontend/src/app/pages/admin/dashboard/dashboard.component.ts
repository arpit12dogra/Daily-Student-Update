import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NewsService } from '../../../services/news.service';
import { CategoryService } from '../../../services/category.service';
import { AuthService } from '../../../services/auth.service';
import { DashboardStats } from '../../../models/admin.model';
import { News } from '../../../models/news.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatProgressBarModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private newsService = inject(NewsService);
  private categoryService = inject(CategoryService);
  private authService = inject(AuthService);

  readonly currentAdmin = this.authService.currentAdmin;

  stats = signal<DashboardStats>({
    totalNews: 0,
    todaysNews: 0,
    totalCategories: 0,
    totalViews: 0,
    publishedNews: 0,
    featuredNews: 0,
    recentActivity: []
  });

  recentNews = signal<News[]>([]);
  loading = signal(true);

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.loading.set(true);

    // Load stats
    this.newsService.getStats().subscribe({
      next: (res) => {
        if (res.success) {
          this.stats.set(res.data);
        }
      },
      error: () => {}
    });

    // Load recent news
    this.newsService.getAll({ page: 1, limit: 5, sortBy: 'createdAt', sortOrder: 'desc' }).subscribe({
      next: (res) => {
        this.recentNews.set(res.data || []);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });

    // Load category count
    this.categoryService.getAll().subscribe({
      next: (res) => {
        if (res.success) {
          this.stats.update(s => ({ ...s, totalCategories: res.data.length }));
        }
      },
      error: () => {}
    });
  }

  getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  }
}
