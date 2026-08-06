import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MediaService } from '../../../services/media.service';
import { MediaFile } from '../../../models/api-response.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  private mediaService = inject(MediaService);
  private dialog = inject(MatDialog);

  images: MediaFile[] = [];
  isLoading = true;
  currentPage = 1;
  selectedImage: MediaFile | null = null;

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.isLoading = true;
    this.mediaService.getAll(this.currentPage, 24).subscribe({
      next: (res) => {
        if (res.success) {
          this.images = res.data.filter(f =>
            f.mimetype?.startsWith('image/')
          );
        }
        this.isLoading = false;
      },
      error: () => { this.isLoading = false; }
    });
  }

  openImage(image: MediaFile): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }

  navigateImage(direction: 'prev' | 'next'): void {
    if (!this.selectedImage) return;
    const idx = this.images.indexOf(this.selectedImage);
    if (direction === 'prev' && idx > 0) {
      this.selectedImage = this.images[idx - 1];
    } else if (direction === 'next' && idx < this.images.length - 1) {
      this.selectedImage = this.images[idx + 1];
    }
  }
}
