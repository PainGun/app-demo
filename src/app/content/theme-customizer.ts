import { Component, inject, OnInit } from '@angular/core';
import { ThemeService, Theme } from '../services/theme.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-customizer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="customizer-container">
      <h3>Personalizar Tema</h3>

      <!-- Selector de tema -->
      <label for="theme-select">Selecciona un tema:</label>
      <select id="theme-select" (change)="changeTheme($event)">
        <option *ngFor="let theme of themes" [value]="theme.id" [selected]="theme.id === currentTheme.id">
          {{ theme.displayName }}
        </option>
      </select>

      <!-- Selector de tipografía -->
      <label for="font-select">Selecciona una tipografía:</label>
      <select id="font-select" (change)="changeFontFamily($event)">
        <option *ngFor="let font of cssVariables[6].options" [value]="font.value" [selected]="font.value === cssVariables[6].value">
          {{ font.label }}
        </option>
      </select>

      <!-- Editor de variables CSS -->
      <div *ngFor="let variable of cssVariables">
        <label [for]="variable.name">{{ variable.name }}</label>
        <input
          [type]="variable.type"
          [id]="variable.name"
          [(ngModel)]="variable.value"
          [attr.min]="variable.min"
          [attr.max]="variable.max"
          [attr.step]="variable.step"
        />
      </div>

      <!-- Botón de Guardar -->
      <button (click)="saveSettings()">Guardar Configuración</button>
    </div>
  `,
  styles: `
    .customizer-container {
      padding: 16px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    select, input {
      margin-bottom: 10px;
    }
    button {
      padding: 8px 16px;
      background-color: var(--mat-sys-primary);
      color: var(--mat-sys-on-primary);
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: var(--mat-sys-primary-container);
    }
  `
})
export class ThemeCustomizerComponent implements OnInit {
  themeService = inject(ThemeService);
  themes: Theme[] = [];
  currentTheme!: Theme;

  // Lista de variables CSS editables
  cssVariables = [
    { name: '--mat-sys-primary', type: 'color', value: '#C2185B' },
    { name: '--mat-sys-on-primary', type: 'color', value: '#FFFFFF' },
    { name: '--mat-sys-secondary', type: 'color', value: '#9c3e59' },
    { name: '--mat-sys-font-size', type: 'range', value: 16, min: 12, max: 24, step: 1 },
    { name: '--mat-sys-background', type: 'color', value: '#fff8f7' },
    { name: '--mat-sys-surface', type: 'color', value: '#fff8f7' },
    {
      name: '--mat-sys-font-family',
      type: 'select',
      value: 'Arial, sans-serif',
      options: [
        { value: 'Arial, sans-serif', label: 'Arial' },
        { value: 'Georgia, serif', label: 'Georgia' },
        { value: 'Courier New, monospace', label: 'Courier New' },
        { value: 'Times New Roman, serif', label: 'Times New Roman' }
      ]
    }
  ];

  ngOnInit() {
    this.themes = this.themeService.getThemes();
    this.currentTheme = this.themeService.currentTheme();
    this.loadSettings(); // Cargar configuraciones guardadas
  }

  changeTheme(eventOrThemeId: Event | string) {
    let themeId: string;

    if (typeof eventOrThemeId === 'string') {
      themeId = eventOrThemeId;
    } else {
      const selectElement = eventOrThemeId.target as HTMLSelectElement;
      themeId = selectElement.value;
    }

    this.themeService.setTheme(themeId);
    this.currentTheme = this.themeService.currentTheme();
  }

  changeFontFamily(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedFont = selectElement.value;

    // Actualiza el valor de la variable en el array
    const fontVariable = this.cssVariables.find(v => v.name === '--mat-sys-font-family');
    if (fontVariable) {
      fontVariable.value = selectedFont;
    }

    this.applyCustomTheme();
  }

  saveSettings() {
    this.cssVariables.forEach(variable => {
      localStorage.setItem(variable.name, variable.value.toString());
    });

    // Aplicar los cambios inmediatamente
    this.applyCustomTheme();
  }

  loadSettings() {
    this.cssVariables.forEach(variable => {
      const savedValue = localStorage.getItem(variable.name);
      if (savedValue) {
        variable.value = variable.type === 'range' ? parseInt(savedValue, 10) : savedValue;
      }
    });

    this.applyCustomTheme();
  }


  applyCustomTheme() {
    this.cssVariables.forEach(variable => {
      let value = variable.value.toString();
      if (variable.name === '--mat-sys-font-size' && !value.includes('px')) {
        value += 'px'; // Asegura que se aplique como '24px'
      }
      document.documentElement.style.setProperty(variable.name, value);
    });
  }




}