import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewsCardComponent } from '../../../shared/components/news-card/news-card.component';
import { SearchBarComponent } from '../../../shared/components/search-bar/search-bar.component';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { NewsService } from '../../../services/news.service';
import { CategoryService } from '../../../services/category.service';
import { News } from '../../../models/news.model';
import { Category } from '../../../models/category.model';
import { Pagination } from '../../../models/api-response.model';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatSelectModule,
    MatFormFieldModule,
    NewsCardComponent,
    SearchBarComponent,
    PaginationComponent
  ],
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  private newsService = inject(NewsService);
  private categoryService = inject(CategoryService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  news: News[] = [];
  categories: Category[] = [];
  pagination!: Pagination;
  isLoading = true;

  currentPage = 1;
  searchQuery = '';
  selectedCategory = '';
  sortBy = 'publishedAt';

  sortOptions = [
    { value: 'publishedAt', label: 'Latest First' },
    { value: 'viewCount', label: 'Most Viewed' },
    { value: 'title', label: 'Title A-Z' },
  ];

  ngOnInit(): void {
    this.categoryService.getActive().subscribe({
      next: (res) => { if (res.success) this.categories = res.data; }
    });

    this.route.queryParams.subscribe(params => {
      this.currentPage = +params['page'] || 1;
      this.searchQuery = params['search'] || '';
      this.selectedCategory = params['category'] || '';
      this.loadNews();
    });
  }

  loadNews(): void {
    this.isLoading = true;
    this.newsService.getPublished({
      page: this.currentPage,
      limit: 9,
      search: this.searchQuery,
      category: this.selectedCategory,
      sortBy: this.sortBy,
      sortOrder: 'desc'
    }).subscribe({
      next: (res) => {
        if (res.success) {
          this.news = res.data;
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
    this.updateRoute();
  }

  onCategoryChange(categorySlug: string): void {
    this.selectedCategory = categorySlug;
    this.currentPage = 1;
    this.updateRoute();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateRoute();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onSortChange(): void {
    this.currentPage = 1;
    this.loadNews();
  }

  private updateRoute(): void {
    const queryParams: Record<string, any> = { page: this.currentPage };
    if (this.searchQuery) queryParams['search'] = this.searchQuery;
    if (this.selectedCategory) queryParams['category'] = this.selectedCategory;
    this.router.navigate([], { queryParams, replaceUrl: true });
  }

  getCategoryName(slug: string): string {
    const cat = this.categories.find(c => c.slug === slug);
    return cat?.name || slug;
  }
}
