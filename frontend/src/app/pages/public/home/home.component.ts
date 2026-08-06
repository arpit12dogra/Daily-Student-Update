import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { NewsCardComponent } from '../../../shared/components/news-card/news-card.component';
import { NewsService } from '../../../services/news.service';
import { CategoryService } from '../../../services/category.service';
import { News } from '../../../models/news.model';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
    NewsCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private newsService = inject(NewsService);
  private categoryService = inject(CategoryService);

  featuredNews: News[] = [];
  latestNews: News[] = [];
  notices: News[] = [];
  categories: Category[] = [];
  isLoading = true;
  error = '';

  defaultCategories = [
    { name: 'Academic', icon: 'school', color: '#1976d2' },
    { name: 'Sports', icon: 'sports_soccer', color: '#43a047' },
    { name: 'Events', icon: 'event', color: '#e91e63' },
    { name: 'Science', icon: 'science', color: '#7b1fa2' },
    { name: 'Arts', icon: 'palette', color: '#ff6f00' },
    { name: 'Notices', icon: 'notifications', color: '#f44336' },
  ];

  quickLinks = [
    { label: 'News', path: '/news', icon: 'article', color: '#1976d2' },
    { label: 'Gallery', path: '/gallery', icon: 'photo_library', color: '#43a047' },
    { label: 'Notices', path: '/notices', icon: 'notifications', color: '#f44336' },
    { label: 'About', path: '/about', icon: 'info', color: '#7b1fa2' },
  ];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;

    this.categoryService.getActive().subscribe({
      next: (res) => { if (res.success) this.categories = res.data; },
      error: () => {}
    });

    this.newsService.getFeatured().subscribe({
      next: (res) => { if (res.success) this.featuredNews = res.data.slice(0, 3); },
      error: () => {}
    });

    this.newsService.getLatest(8).subscribe({
      next: (res) => {
        if (res.success) this.latestNews = res.data;
        this.isLoading = false;
      },
      error: () => { this.isLoading = false; }
    });

    this.newsService.getByCategory('notices', 1).subscribe({
      next: (res) => { if (res.success) this.notices = res.data.slice(0, 5); },
      error: () => {}
    });
  }

  getCategoryIcon(category: Category): string {
    return category.icon || 'category';
  }
}
