import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductListComponent} from './product-list/product-list';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');
}
