import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { NewsService } from '../../../services/news.service';
import { CategoryService } from '../../../services/category.service';
import { MediaService } from '../../../services/media.service';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-add-news',
  standalone: true,
  imports: [
    CommonModule,
    NgTemplateOutlet,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {
  private fb = inject(FormBuilder);
  private newsService = inject(NewsService);
  private categoryService = inject(CategoryService);
  private mediaService = inject(MediaService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private snackBar = inject(MatSnackBar);

  isEditMode = signal(false);
  newsId = signal<string | null>(null);
  loading = signal(false);
  categories = signal<Category[]>([]);

  // Upload states
  imageUploading = signal(false);
  imageProgress = signal(0);
  pdfUploading = signal(false);
  pdfProgress = signal(0);
  imagePreview = signal<string | null>(null);

  // Tags chip input
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: string[] = [];

  newsForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    excerpt: ['', [Validators.required, Validators.minLength(20)]],
    content: ['', [Validators.required, Validators.minLength(50)]],
    categoryId: ['', Validators.required],
    author: ['Admin', Validators.required],
    imageUrl: [''],
    pdfUrl: [''],
    isPublished: [false],
    isFeatured: [false]
  });

  ngOnInit(): void {
    this.loadCategories();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode.set(true);
      this.newsId.set(id);
      this.loadNews(id);
    }
  }

  loadCategories(): void {
    this.categoryService.getAll().subscribe({
      next: (res) => { if (res.success) this.categories.set(res.data); }
    });
  }

  loadNews(id: string): void {
    this.loading.set(true);
    this.newsService.getById(id).subscribe({
      next: (res) => {
        if (res.success) {
          const n = res.data;
          this.newsForm.patchValue({
            title: n.title,
            excerpt: n.excerpt,
            content: n.content,
            categoryId: n.categoryId,
            author: n.author,
            imageUrl: n.imageUrl || '',
            pdfUrl: n.pdfUrl || '',
            isPublished: n.isPublished,
            isFeatured: n.isFeatured
          });
          this.tags = [...(n.tags || [])];
          if (n.imageUrl) this.imagePreview.set(n.imageUrl);
        }
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.snackBar.open('Failed to load news', 'Close', { duration: 3000 });
      }
    });
  }

  onImageSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    const file = input.files[0];

    // Preview
    const reader = new FileReader();
    reader.onload = () => this.imagePreview.set(reader.result as string);
    reader.readAsDataURL(file);

    // Upload
    this.imageUploading.set(true);
    this.imageProgress.set(0);

    this.mediaService.uploadImage(file).subscribe({
      next: (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          const progress = Math.round((event.loaded / (event.total || 1)) * 100);
          this.imageProgress.set(progress);
        } else if (event.type === HttpEventType.Response) {
          const res = event.body;
          if (res?.success) {
            this.newsForm.patchValue({ imageUrl: res.url });
            this.snackBar.open('Image uploaded', 'Close', { duration: 2000 });
          }
          this.imageUploading.set(false);
        }
      },
      error: () => {
        this.imageUploading.set(false);
        this.snackBar.open('Image upload failed', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
      }
    });
  }

  onPdfSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    const file = input.files[0];

    this.pdfUploading.set(true);
    this.pdfProgress.set(0);

    this.mediaService.uploadPdf(file).subscribe({
      next: (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          const progress = Math.round((event.loaded / (event.total || 1)) * 100);
          this.pdfProgress.set(progress);
        } else if (event.type === HttpEventType.Response) {
          const res = event.body;
          if (res?.success) {
            this.newsForm.patchValue({ pdfUrl: res.url });
            this.snackBar.open('PDF uploaded', 'Close', { duration: 2000 });
          }
          this.pdfUploading.set(false);
        }
      },
      error: () => {
        this.pdfUploading.set(false);
        this.snackBar.open('PDF upload failed', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
      }
    });
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value && !this.tags.includes(value)) {
      this.tags.push(value);
    }
    event.chipInput!.clear();
  }

  removeTag(tag: string): void {
    this.tags = this.tags.filter(t => t !== tag);
  }

  removeImage(): void {
    this.imagePreview.set(null);
    this.newsForm.patchValue({ imageUrl: '' });
  }

  onSubmit(): void {
    if (this.newsForm.invalid) {
      this.newsForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    const payload = { ...this.newsForm.value, tags: this.tags } as any;

    const request = this.isEditMode()
      ? this.newsService.update(this.newsId()!, payload)
      : this.newsService.create(payload);

    request.subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success) {
          const msg = this.isEditMode() ? 'News updated successfully' : 'News created successfully';
          this.snackBar.open(msg, 'Close', { duration: 3000 });
          this.router.navigate(['/admin/manage-news']);
        }
      },
      error: (err) => {
        this.loading.set(false);
        const msg = err?.error?.message || 'Failed to save news';
        this.snackBar.open(msg, 'Close', { duration: 4000, panelClass: ['error-snackbar'] });
      }
    });
  }
}
