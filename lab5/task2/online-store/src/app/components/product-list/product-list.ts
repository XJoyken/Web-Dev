import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products = input.required<Product[]>();
  excludedId = new Set<number>();

  get printedProducts(): Product[] {
    return this.products().filter(product => !this.excludedId.has(product.id));
  }

  handleLikes(id: number) {
    const product = this.products().find(p => p.id === id);
    if (product) {
      product.likes++;
    }
  }

  handleDelete(id: number) {
    let confirm = window.confirm('Are you sure you want to delete this product?');
    if(confirm) {
      this.excludedId.add(id);
    }
  }
}
