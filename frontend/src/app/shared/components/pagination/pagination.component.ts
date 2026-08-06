import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Pagination } from '../../../models/api-response.model';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() pagination!: Pagination;
  @Output() pageChanged = new EventEmitter<number>();

  get pages(): number[] {
    const pages: number[] = [];
    const total = this.pagination.totalPages;
    const current = this.pagination.page;

    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      pages.push(1);
      if (current > 3) pages.push(-1); // ellipsis
      for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
        pages.push(i);
      }
      if (current < total - 2) pages.push(-2); // ellipsis
      pages.push(total);
    }

    return pages;
  }

  goTo(page: number): void {
    if (page > 0 && page <= this.pagination.totalPages) {
      this.pageChanged.emit(page);
    }
  }
}
