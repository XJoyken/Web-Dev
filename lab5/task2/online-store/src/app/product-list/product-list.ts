import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from '../product.model';
import {Category} from '../category.model';
import {ProductService} from '../service/product';
import {ProductCardComponent} from '../product-card/product-card';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent implements OnInit {
  categories: Category[] = [];
  selectedProducts: Product[] = [];
  sortedProducts: Product[] = [];
  printedProducts: Product[] = [];
  isSorted = false;
  selectedId = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(){
    this.categories = this.productService.getCategories();
    this.setProducts(this.selectedId);
  }
  setProducts(id: number) {
    this.selectedProducts = this.productService.getProductsByCategory(id);
    this.selectedId = id;
    this.sortedProducts = [...this.selectedProducts].sort((a, b) => a.price - b.price);
    this.updateDisplay();
  }
  sortProducts() {
    this.isSorted = !this.isSorted;
    this.updateDisplay();
  }
  updateDisplay() {
    this.printedProducts = this.isSorted ? this.sortedProducts : this.selectedProducts;
  }

  handleLikes(id: number) {
    let product = this.productService.products.find(p => p.id === id);
    if(product) {
      product.likes+=1;
      this.updateDisplay();
      console.log(product.likes);
    }
  }
}
