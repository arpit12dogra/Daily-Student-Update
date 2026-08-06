import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { filter } from 'rxjs';

interface NavLink {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private router = inject(Router);

  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  currentRoute = signal('');

  navLinks: NavLink[] = [
    { label: 'Home', path: '/', icon: 'home' },
    { label: 'News', path: '/news', icon: 'article' },
    { label: 'Notices', path: '/notices', icon: 'notifications' },
    { label: 'Gallery', path: '/gallery', icon: 'photo_library' },
    { label: 'About', path: '/about', icon: 'info' },
    { label: 'Contact', path: '/contact', icon: 'contact_mail' },
  ];

  ngOnInit(): void {
    // Track scroll for navbar shadow
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled.set(window.scrollY > 20);
      });
    }

    // Track current route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute.set(event.urlAfterRedirects);
      this.isMobileMenuOpen.set(false);
    });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  isActive(path: string): boolean {
    if (path === '/') {
      return this.currentRoute() === '/';
    }
    return this.currentRoute().startsWith(path);
  }
}
