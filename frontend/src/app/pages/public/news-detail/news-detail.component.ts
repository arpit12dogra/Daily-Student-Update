import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NewsService } from '../../../services/news.service';
import { News } from '../../../models/news.model';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule
  ],
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  private newsService = inject(NewsService);
  private route = inject(ActivatedRoute);

  news: News | null = null;
  relatedNews: News[] = [];
  isLoading = true;
  error = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadNews(params['id']);
    });
  }

  loadNews(id: string): void {
    this.isLoading = true;
    this.newsService.getById(id).subscribe({
      next: (res) => {
        if (res.success) {
          this.news = res.data;
          this.newsService.incrementView(id).subscribe();
        }
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Failed to load news article';
        this.isLoading = false;
      }
    });
  }

  get categoryName(): string {
    if (!this.news?.category) return 'General';
    if (typeof this.news.category === 'string') return this.news.category;
    return (this.news.category as any).name ?? 'General';
  }

  get categoryColor(): string {
    if (!this.news?.category) return '#1976d2';
    if (typeof this.news.category === 'object') {
      return (this.news.category as any).color ?? '#1976d2';
    }
    return '#1976d2';
  }

  share(): void {
    if (navigator.share && this.news) {
      navigator.share({
        title: this.news.title,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  }
}
