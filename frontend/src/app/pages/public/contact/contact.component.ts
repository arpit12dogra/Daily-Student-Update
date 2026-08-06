import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  templateUrl: './contact.component.html',
  styles: [`
    .contact-page { padding: 60px 0; }
    .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
    .contact-form-card { background: white; border-radius: 20px; padding: 40px; border: 1px solid #e0e0e0; }
    .contact-info-item { display: flex; gap: 16px; margin-bottom: 24px; }
    .info-icon { width: 48px; height: 48px; border-radius: 50%; background: #e3f2fd; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .info-icon mat-icon { color: #1976d2; }
    .info-label { font-size: 12px; color: #9e9e9e; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
    .info-value { font-size: 14px; font-weight: 500; color: #212121; margin: 0; }
    .w-100 { width: 100%; }
  `]
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);

  isSubmitting = false;

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    type: ['general'],
    message: ['', [Validators.required, Validators.minLength(20)]]
  });

  contactTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'news', label: 'News Submission' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'support', label: 'Technical Support' },
  ];

  onSubmit(): void {
    if (this.contactForm.invalid) return;
    this.isSubmitting = true;

    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.contactForm.reset({ type: 'general' });
      this.snackBar.open('Your message has been sent successfully!', 'Close', {
        duration: 5000,
        panelClass: 'success-snackbar',
        horizontalPosition: 'end',
        verticalPosition: 'top'
      });
    }, 1500);
  }
}
