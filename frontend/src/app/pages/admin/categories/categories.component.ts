import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { CategoryService } from '../../../services/category.service';
import { Category, CreateCategoryDto } from '../../../models/category.model';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatDividerModule
  ],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  private categoryService = inject(CategoryService);
  private snackBar = inject(MatSnackBar);
  private fb = inject(FormBuilder);

  categories = signal<Category[]>([]);
  loading = signal(false);
  formLoading = signal(false);
  showForm = signal(false);
  editingCategory = signal<Category | null>(null);

  displayedColumns = ['color', 'name', 'icon', 'news', 'status', 'actions'];

  // Preset colors
  colorOptions = [
    '#1565c0', '#2e7d32', '#e65100', '#6a1b9a',
    '#00695c', '#ad1457', '#f57f17', '#37474f',
    '#c62828', '#0277bd', '#558b2f', '#4527a0'
  ];

  categoryForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    icon: ['school', Validators.required],
    color: ['#1565c0', Validators.required],
    description: [''],
    isActive: [true]
  });

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.loading.set(true);
    this.categoryService.getAll().subscribe({
      next: (res) => {
        if (res.success) this.categories.set(res.data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  openAddForm(): void {
    this.editingCategory.set(null);
    this.categoryForm.reset({ icon: 'school', color: '#1565c0', isActive: true });
    this.showForm.set(true);
  }

  editCategory(cat: Category): void {
    this.editingCategory.set(cat);
    this.categoryForm.patchValue({
      name: cat.name,
      icon: cat.icon,
      color: cat.color,
      description: cat.description || '',
      isActive: cat.isActive
    });
    this.showForm.set(true);
    // Scroll to form
    setTimeout(() => {
      document.querySelector('.form-card')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  cancelForm(): void {
    this.showForm.set(false);
    this.editingCategory.set(null);
    this.categoryForm.reset({ icon: 'school', color: '#1565c0', isActive: true });
  }

  onSubmit(): void {
    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      return;
    }

    this.formLoading.set(true);
    const payload = this.categoryForm.value as CreateCategoryDto;
    const editing = this.editingCategory();

    const request = editing
      ? this.categoryService.update(editing._id, payload)
      : this.categoryService.create(payload);

    request.subscribe({
      next: (res) => {
        this.formLoading.set(false);
        if (res.success) {
          const msg = editing ? 'Category updated' : 'Category created';
          this.snackBar.open(msg, 'Close', { duration: 3000 });
          this.cancelForm();
          this.loadCategories();
        }
      },
      error: (err) => {
        this.formLoading.set(false);
        const msg = err?.error?.message || 'Failed to save category';
        this.snackBar.open(msg, 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
      }
    });
  }

  toggleActive(cat: Category): void {
    this.categoryService.toggleActive(cat._id).subscribe({
      next: (res) => {
        if (res.success) {
          this.categories.update(list => list.map(c => c._id === cat._id ? res.data : c));
          this.snackBar.open('Status updated', 'Close', { duration: 2000 });
        }
      },
      error: () => {}
    });
  }

  deleteCategory(cat: Category): void {
    if (!confirm(`Delete category "${cat.name}"? This cannot be undone.`)) return;

    this.categoryService.delete(cat._id).subscribe({
      next: (res) => {
        if (res.success) {
          this.categories.update(list => list.filter(c => c._id !== cat._id));
          this.snackBar.open('Category deleted', 'Close', { duration: 3000 });
        }
      },
      error: () => this.snackBar.open('Failed to delete category', 'Close', { duration: 3000, panelClass: ['error-snackbar'] })
    });
  }
}
