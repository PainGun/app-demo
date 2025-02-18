import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ContentComponent } from './content/content.component';
import { ThemeService, Theme } from './services/theme.service';
import { ThemeCustomizerComponent } from './content/theme-customizer';
import { SidebarComponent } from './content/shared-component/sidebar/sidebar.component';
import { FormComponent } from './content/shared-component/form/form.component';
import { CalendarioComponent } from "./content/shared-component/calendario/calendario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ThemeCustomizerComponent,
    ContentComponent,
    MatMenuModule,
    SidebarComponent,
    FormComponent
  ],
  template: `
  <app-sidebar></app-sidebar>
    <mat-toolbar>
      <span>Angular Custom Themes</span>
      <button mat-icon-button [matMenuTriggerFor]="themeMenu">
        <mat-icon>format_color_fill</mat-icon>
      </button>
      <mat-menu #themeMenu="matMenu">
        @for (theme of themeService.getThemes(); track theme.id) {
        <button mat-menu-item (click)="themeService.setTheme(theme.id)">
          <div class="theme-menu-item">
            <div
              class="color-preview"
              [style.background-color]="theme.primary"
            ></div>
            <span>{{ theme.displayName }}</span>
          </div>
        </button>
        }
      </mat-menu>
    </mat-toolbar>
    <app-theme-customizer></app-theme-customizer>
    <app-content></app-content>
    <app-form></app-form> 
  `,
  styles: `
    @use '@angular/material' as mat;

    mat-toolbar {
      justify-content: space-between;
      background-color: var(--mat-sys-primary);
      color: var(--mat-sys-on-primary);
    }

    .theme-menu-item {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .color-preview {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
  `,
})
export class AppComponent {
  themeService = inject(ThemeService);
}