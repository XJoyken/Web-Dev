import { Component, input, output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  product = input.required<Product>();
  productLike = output<number>();
  productDelete = output<number>();

  getWhatsAppLink(): string {
    const message = `Check out this product: ${this.product().link}`;
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }

  getTelegramLink(): string {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product().name);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  }

  changeMainImage(newImageUrl: string) {
    this.product().image = newImageUrl;
  }

  likeClick() {
    this.productLike.emit(this.product().id);
  }

  deleteClick() {
    this.productDelete.emit(this.product().id);
  }
}
