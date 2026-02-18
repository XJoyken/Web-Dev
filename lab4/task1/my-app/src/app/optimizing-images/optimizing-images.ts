import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-optimizing-images',
  imports: [
    NgOptimizedImage,
  ],
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/InJ.jpg" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
  `,
  styleUrl: './optimizing-images.css',
})
export class OptimizingImages {
  logoUrl = '/InJ.jpg';
  logoAlt = 'Inst logo';
  username = 'youngTech';
}
