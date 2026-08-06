import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpEventType } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MediaService } from '../../../services/media.service';
import { MediaFile } from '../../../models/api-response.model';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatChipsModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  private mediaService = inject(MediaService);
  private snackBar = inject(MatSnackBar);

  mediaFiles = signal<MediaFile[]>([]);
  loading = signal(false);
  totalItems = signal(0);
  currentPage = signal(1);
  pageSize = signal(20);

  // Upload states
  imageUploading = signal(false);
  imageProgress = signal(0);
  pdfUploading = signal(false);
  pdfProgress = signal(0);

  selectedFile = signal<MediaFile | null>(null);

  ngOnInit(): void {
    this.loadMedia();
  }

  loadMedia(): void {
    this.loading.set(true);
    this.mediaService.getAll(this.currentPage(), this.pageSize()).subscribe({
      next: (res) => {
        this.mediaFiles.set(res.data || []);
        this.totalItems.set(res.pagination?.total || 0);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  onImageDrop(event: DragEvent): void {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    if (file && file.type.startsWith('image/')) this.uploadImage(file);
  }

  onImageSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) this.uploadImage(input.files[0]);
  }

  uploadImage(file: File): void {
    this.imageUploading.set(true);
    this.imageProgress.set(0);

    this.mediaService.uploadImage(file).subscribe({
      next: (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.imageProgress.set(Math.round((event.loaded / (event.total || 1)) * 100));
        } else if (event.type === HttpEventType.Response && event.body?.success) {
          this.imageUploading.set(false);
          this.snackBar.open('Image uploaded successfully', 'Close', { duration: 3000 });
          this.loadMedia();
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
    if (input.files?.length) this.uploadPdf(input.files[0]);
  }

  uploadPdf(file: File): void {
    this.pdfUploading.set(true);
    this.pdfProgress.set(0);

    this.mediaService.uploadPdf(file).subscribe({
      next: (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.pdfProgress.set(Math.round((event.loaded / (event.total || 1)) * 100));
        } else if (event.type === HttpEventType.Response && event.body?.success) {
          this.pdfUploading.set(false);
          this.snackBar.open('PDF uploaded successfully', 'Close', { duration: 3000 });
          this.loadMedia();
        }
      },
      error: () => {
        this.pdfUploading.set(false);
        this.snackBar.open('PDF upload failed', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
      }
    });
  }

  deleteFile(file: MediaFile): void {
    if (!confirm(`Delete "${file.originalName}"?`)) return;

    this.mediaService.delete(file._id).subscribe({
      next: (res) => {
        if (res.success) {
          this.mediaFiles.update(list => list.filter(f => f._id !== file._id));
          this.snackBar.open('File deleted', 'Close', { duration: 3000 });
          if (this.selectedFile()?._id === file._id) this.selectedFile.set(null);
        }
      },
      error: () => this.snackBar.open('Failed to delete file', 'Close', { duration: 3000, panelClass: ['error-snackbar'] })
    });
  }

  copyUrl(file: MediaFile): void {
    navigator.clipboard.writeText(file.url).then(() => {
      this.snackBar.open('URL copied to clipboard', 'Close', { duration: 2000 });
    });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage.set(event.pageIndex + 1);
    this.pageSize.set(event.pageSize);
    this.loadMedia();
  }

  formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  }

  isImage(file: MediaFile): boolean {
    return file.mimetype?.startsWith('image/');
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }
}
