import { Component, input, output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {
  product = input.required<Product>();
  productLike = output<number>();
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
    this.productLike.emit(this.product().id)
  }
}
