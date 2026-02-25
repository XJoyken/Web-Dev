import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductService } from './service/product';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent, NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  categories: Category[] = [];
  selectedProducts: Product[] = [];
  // printedProducts: Product[] = [];
  selectedId = 0;
  // sortedProducts: Product[] = [];
  // isSorted: boolean = false;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.setProducts(this.selectedId);
  }

  setProducts(id: number) {
    this.selectedId = id;
    this.selectedProducts = this.productService.getProductsByCategory(id);
    // this.sortedProducts = [...this.selectedProducts].sort((a, b) => a.price - b.price);
    // this.updateProducts();
  }

  // sortProducts() {
  //   this.isSorted = !this.isSorted;
  //   this.updateProducts();
  // }

  // updateProducts() {
  //   this.printedProducts = this.isSorted ? this.sortedProducts : this.selectedProducts;
  // }

}
