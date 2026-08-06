import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { SearchBarComponent } from '../../../shared/components/search-bar/search-bar.component';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { NewsService } from '../../../services/news.service';
import { News } from '../../../models/news.model';
import { Pagination } from '../../../models/api-response.model';

@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    SearchBarComponent,
    PaginationComponent
  ],
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {
  private newsService = inject(NewsService);

  notices: News[] = [];
  pagination!: Pagination;
  isLoading = true;
  currentPage = 1;
  searchQuery = '';

  ngOnInit(): void {
    this.loadNotices();
  }

  loadNotices(): void {
    this.isLoading = true;
    this.newsService.getByCategory('notices', this.currentPage).subscribe({
      next: (res) => {
        if (res.success) {
          this.notices = res.data;
          this.pagination = res.pagination;
        }
        this.isLoading = false;
      },
      error: () => { this.isLoading = false; }
    });
  }

  onSearch(query: string): void {
    this.searchQuery = query;
    this.currentPage = 1;
    this.loadNotices();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadNotices();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
