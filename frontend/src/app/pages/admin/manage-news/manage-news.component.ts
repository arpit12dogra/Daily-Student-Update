import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { NewsService } from '../../../services/news.service';
import { CategoryService } from '../../../services/category.service';
import { News, NewsFilter } from '../../../models/news.model';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-manage-news',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  templateUrl: './manage-news.component.html',
  styleUrls: ['./manage-news.component.scss']
})
export class ManageNewsComponent implements OnInit {
  private newsService = inject(NewsService);
  private categoryService = inject(CategoryService);
  private snackBar = inject(MatSnackBar);

  newsList = signal<News[]>([]);
  categories = signal<Category[]>([]);
  loading = signal(false);

  // Filters
  searchTerm = '';
  selectedCategory = '';
  selectedStatus = '';

  // Pagination
  totalItems = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);

  displayedColumns = ['title', 'category', 'status', 'views', 'date', 'actions'];

  ngOnInit(): void {
    this.loadCategories();
    this.loadNews();
  }

  loadCategories(): void {
    this.categoryService.getAll().subscribe({
      next: (res) => { if (res.success) this.categories.set(res.data); },
      error: () => {}
    });
  }

  loadNews(): void {
    this.loading.set(true);
    const filter: NewsFilter = {
      page: this.currentPage(),
      limit: this.pageSize(),
      search: this.searchTerm || undefined,
      category: this.selectedCategory || undefined,
      sortBy: 'createdAt',
      sortOrder: 'desc'
    };

    this.newsService.getAll(filter).subscribe({
      next: (res) => {
        this.newsList.set(res.data || []);
        this.totalItems.set(res.pagination?.total || 0);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  onSearch(): void {
    this.currentPage.set(1);
    this.loadNews();
  }

  onPageChange(event: PageEvent): void {
    this.currentPage.set(event.pageIndex + 1);
    this.pageSize.set(event.pageSize);
    this.loadNews();
  }

  togglePublish(news: News): void {
    this.newsService.togglePublish(news._id).subscribe({
      next: (res) => {
        if (res.success) {
          this.newsList.update(list =>
            list.map(n => n._id === news._id ? res.data : n)
          );
          const status = res.data.isPublished ? 'Published' : 'Unpublished';
          this.snackBar.open(`News ${status} successfully`, 'Close', { duration: 3000 });
        }
      },
      error: () => this.snackBar.open('Failed to update status', 'Close', { duration: 3000, panelClass: ['error-snackbar'] })
    });
  }

  toggleFeatured(news: News): void {
    this.newsService.toggleFeatured(news._id).subscribe({
      next: (res) => {
        if (res.success) {
          this.newsList.update(list =>
            list.map(n => n._id === news._id ? res.data : n)
          );
          this.snackBar.open('Featured status updated', 'Close', { duration: 3000 });
        }
      },
      error: () => {}
    });
  }

  deleteNews(news: News): void {
    if (!confirm(`Delete "${news.title}"? This cannot be undone.`)) return;

    this.newsService.delete(news._id).subscribe({
      next: (res) => {
        if (res.success) {
          this.newsList.update(list => list.filter(n => n._id !== news._id));
          this.totalItems.update(t => t - 1);
          this.snackBar.open('News deleted', 'Close', { duration: 3000 });
        }
      },
      error: () => this.snackBar.open('Failed to delete news', 'Close', { duration: 3000, panelClass: ['error-snackbar'] })
    });
  }

  getCategoryName(news: News): string {
    if (typeof news.category === 'object' && news.category !== null) {
      return (news.category as any).name;
    }
    const cat = this.categories().find(c => c._id === news.categoryId);
    return cat?.name || '—';
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.selectedStatus = '';
    this.currentPage.set(1);
    this.loadNews();
  }
}
