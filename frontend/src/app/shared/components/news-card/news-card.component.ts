import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { News } from '../../../models/news.model';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule
  ],
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input() news!: News;
  @Input() compact = false;
  @Output() shareClicked = new EventEmitter<News>();

  get categoryName(): string {
    if (!this.news.category) return 'General';
    if (typeof this.news.category === 'string') return this.news.category;
    return (this.news.category as any).name ?? 'General';
  }

  get categoryColor(): string {
    if (!this.news.category) return '#1976d2';
    if (typeof this.news.category === 'object') {
      return (this.news.category as any).color ?? '#1976d2';
    }
    return '#1976d2';
  }

  get formattedDate(): string {
    if (!this.news.publishedAt) return '';
    const date = new Date(this.news.publishedAt);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  get imageUrl(): string {
    return this.news.imageUrl || 'assets/images/news-placeholder.jpg';
  }

  get excerptText(): string {
    if (this.news.excerpt) return this.news.excerpt;
    const text = this.news.content?.replace(/<[^>]*>/g, '') || '';
    return text.length > 150 ? text.substring(0, 150) + '...' : text;
  }

  onShare(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.shareClicked.emit(this.news);

    if (navigator.share) {
      navigator.share({
        title: this.news.title,
        url: `${window.location.origin}/news/${this.news._id}`
      });
    }
  }
}
