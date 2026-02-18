import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Product} from '../product.model';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 13 128Gb black',
      description: 'The Apple iPhone 13 has received a 6.1-inch Super Retina XDR display, which features incredibly high pixel density — photos, videos, and text look strikingly clear. And thanks to the reduced area of the TrueDepth camera, there is now more image space on the display.',
      price: 296381,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      id: 2,
      name: 'Apple iPhone 16 128Gb black',
      description: 'Phone 16 – new design, bright colors, powerful processor and fresh iOS 18 with artificial intelligence. This iPhone offers even more features than its predecessors, taking the basic model to another level: better, more interesting, more convenient.',
      price: 448800,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000'
    },
    {
      id: 3,
      name: 'Apple iPhone 15 128Gb light-blue',
      description: 'The Apple iPhone 15 is a smartphone that combines advanced optics, a powerful processor, a long-lasting battery and a memorable design. The smartphone has received a dynamic island, which displays notifications and other important information.',
      price: 376997,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h01/h5f/86303746293790.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h01/h5f/86303746293790.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h56/hbb/83559339065374.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h2e/hae/83559331856414.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000'
    },
    {
      id: 4,
      name: 'Xiaomi Redmi Note 14 Pro 8GB/256GB Black',
      description: 'The Xiaomi Redmi Note 14 Pro smartphone has the qualities of a true leader in everything. The advanced 200 MP professional-grade camera offers amazing photo and video shooting capabilities. Enjoy super-clear and vivid images on the 6.67-inch AMOLED display with a refresh rate of 120 Hz.',
      price: 160998,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p65/p99/45808873.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p81/p99/45808874.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000'
    },
    {
      id: 5,
      name: 'Braun CG9167 steel grill',
      description: 'The Braun MultiGrill 9 Pro CG9167 electric grill is a versatile device that allows you to cook a variety of dishes with minimal effort. Modern technology, compact design and high-quality materials make this grill an ideal choice for those who appreciate delicious and healthy food prepared at home.',
      price: 184980,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p61/pf9/50662360.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p61/pf9/50662360.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p29/pf9/50662362.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p0d/pf9/50662363.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/gril-braun-cg9167-stal-noi-115936112/?c=750000000'
    },
    {
      id: 6,
      name: 'Washing machine Samsung WW60AK4S00CELT white',
      description: 'Samsung washing machine is an effective solution for your home, providing high—quality washing and saving resources.',
      price: 168900,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p36/65659429.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p24/p36/65659429.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pb8/p33/65659430.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p9c/p33/65659431.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-ww60ak4s00celt-belyi-145907861/?c=750000000'
    },
    {
      id: 7,
      name: 'Neoline Deepscan WI-FI DVR Black',
      description: 'The Neoline Deepscan WI-FI DVR is your reliable assistant on the road, providing high—quality recording and protection in all situations.',
      price: 179990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he1/h86/85331322667038.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/he1/h86/85331322667038.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hbd/hfa/85331322732574.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h17/he5/85331322798110.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/videoregistrator-neoline-deepscan-wi-fi-chernyi-117116702/?c=750000000'
    },
    {
      id: 8,
      name: 'Mary Kay illuminea perfume PARFUM 50 ml, for women',
      description: 'Mary Kay Illuminea perfume is a luxurious fragrance that will emphasize your personality and confidence. The combination of oriental floral notes creates a unique atmosphere that will accompany you throughout the day.',
      price: 43994,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/hab/86498407514142.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h07/hab/86498407514142.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hdd/h72/86498407579678.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h50/h19/86498407645214.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/mary-kay-illuminea-duhi-parfum-50-ml-dlja-zhenschin-121245626/?c=750000000'
    },
    {
      id: 9,
      name: 'Xerox Phaser 3020BI White',
      description: 'The Xerox Phaser 3020 is a monochrome laser printer that is perfect for personal use. The white matte case and stylish design will look organically on any desk. Due to its low weight and compact size, this model can be placed anywhere, and if necessary, it can be easily removed.',
      price: 66195,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd2/hf9/63757710032926.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hd2/hf9/63757710032926.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h6c/h70/63757710655518.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h68/hab/63757711343646.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xerox-phaser-3020bi-belyi-1500208/?c=750000000'
    },
    {
      id: 10,
      name: 'Merlin SV-11 vacuum cleaner white',
      description: 'Lightweight and maneuverable. The weight of only 1.5 kg and the vertical design make it easy to clean the hallway, kitchen and other rooms — effortlessly.',
      price: 16409,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb2/pc9/58188025.jpeg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pb2/pc9/58188025.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p48/pc6/58188026.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pdf/pc2/58188027.jpeg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/merlin-sv-11-belyi-137842834/?c=750000000'
    },
  ];
  getWhatsAppLink(product: Product): string {
    const message = `Check out this product: ${product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }
  getTelegramLink(product: Product): string {
    const url = encodeURIComponent(product.link);
    const text = encodeURIComponent(product.name);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  }
  changeMainImage(product: Product, newImageUrl: string) {
    product.image = newImageUrl;
    console.log('Клик сработал! Заменяем на:', newImageUrl);
  }
}
