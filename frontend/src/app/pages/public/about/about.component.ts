import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './about.component.html',
  styles: [`
    .about-page { padding: 60px 0; }
    .container { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
    .about-hero { background: #e3f2fd; border-radius: 20px; padding: 60px 40px; margin-bottom: 60px; }
    .feature-card { background: white; border-radius: 16px; padding: 32px 24px; border: 1px solid #e0e0e0; text-align: center; height: 100%; }
    .feature-icon { width: 72px; height: 72px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
    .feature-icon mat-icon { font-size: 32px; }
    .team-card { background: white; border-radius: 16px; padding: 24px; border: 1px solid #e0e0e0; text-align: center; }
    .team-avatar { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #1976d2, #42a5f5); display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; color: white; font-size: 28px; font-weight: 700; font-family: 'Poppins', sans-serif; }
    .stats-banner { background: linear-gradient(135deg, #1976d2, #1565c0); border-radius: 20px; padding: 50px 40px; color: white; text-align: center; margin: 60px 0; }
    .stat-num { font-size: 2.5rem; font-weight: 800; display: block; }
    .stat-lbl { font-size: 14px; opacity: 0.8; }
  `]
})
export class AboutComponent {
  features = [
    { icon: 'article', color: '#1976d2', bg: '#e3f2fd', title: 'Latest News', desc: 'Stay updated with real-time school news and announcements.' },
    { icon: 'notifications', color: '#f44336', bg: '#fce4ec', title: 'Important Notices', desc: 'Never miss critical notices and official communications.' },
    { icon: 'photo_library', color: '#43a047', bg: '#e8f5e9', title: 'Photo Gallery', desc: 'Relive school events through our curated photo gallery.' },
    { icon: 'search', color: '#7b1fa2', bg: '#f3e5f5', title: 'Easy Search', desc: 'Find any news or notice quickly with our powerful search.' },
  ];

  team = [
    { name: 'John Doe', role: 'Editor-in-Chief', initial: 'JD' },
    { name: 'Jane Smith', role: 'Web Developer', initial: 'JS' },
    { name: 'Mike Johnson', role: 'Content Writer', initial: 'MJ' },
    { name: 'Sarah Williams', role: 'Photographer', initial: 'SW' },
  ];
}
