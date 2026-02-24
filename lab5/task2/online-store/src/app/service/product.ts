import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { Category } from '../category.model';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 13 128Gb black',
      description: 'The Apple iPhone 13 has received a 6.1-inch Super Retina XDR display, which features incredibly high pixel density — photos, videos, and text look strikingly clear. And thanks to the reduced area of the TrueDepth camera, there is now more image space on the display.',
      price: 296381,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      likes: 0,
      categoryId: [0, 1]
    },
    {
      id: 2,
      name: 'Apple iPhone 16 128Gb black',
      description: 'Phone 16 – new design, bright colors, powerful processor and fresh iOS 18 with artificial intelligence. This iPhone offers even more features than its predecessors, taking the basic model to another level: better, more interesting, more convenient.',
      price: 448800,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
      likes: 0,
      categoryId: [0, 1]
    },
    {
      id: 3,
      name: 'Apple iPhone 15 128Gb light-blue',
      description: 'The Apple iPhone 15 is a smartphone that combines advanced optics, a powerful processor, a long-lasting battery and a memorable design. The smartphone has received a dynamic island, which displays notifications and other important information.',
      price: 376997,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h01/h5f/86303746293790.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h01/h5f/86303746293790.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h56/hbb/83559339065374.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h2e/hae/83559331856414.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000',
      likes: 0,
      categoryId: [0, 1]
    },
    {
      id: 4,
      name: 'Apple iPhone 17 Pro 256Gb orange',
      description: 'The Apple iPhone 17 Pro 256Gb is the epitome of innovation and style, combining unparalleled performance, an amazing camera, and a vibrant OLED display.',
      price: 826989,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pdf/p95/64168415.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
      likes: 0,
      categoryId: [0, 1]
    },
    {
      id: 5,
      name: 'Xiaomi Redmi Note 14 Pro 8GB/256GB Black',
      description: 'The Xiaomi Redmi Note 14 Pro smartphone has the qualities of a true leader in everything. The advanced 200 MP professional-grade camera offers amazing photo and video shooting capabilities. Enjoy super-clear and vivid images on the 6.67-inch AMOLED display with a refresh rate of 120 Hz.',
      price: 160998,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p65/p99/45808873.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p81/p99/45808874.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000',
      likes: 0,
      categoryId: [0, 1]
    },
    {
      id: 6,
      name: 'Apple MacBook Air 13 2020 13.3" Laptop / 8 GB / 256GB SSD / macOS / MGN63RU/A',
      description: 'The first chip designed specifically for Mac. Amazingly, the system on the Apple M1 chip accommodates 16 billion transistors and combines the central and graphics processors, the Neural Engine system, I/O controllers and many other components. The Apple M1 chip enables the use of unique technologies on Macs and delivers incredible performance combined with industry-leading energy efficiency.',
      price: 468068,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
      likes: 0,
      categoryId: [0, 2]
    },
    {
      id: 7,
      name: 'Apple MacBook Air 13 2025 Laptop / 16 GB / 256 GB SSD / macOS / MW123',
      description: 'Introducing the Apple MacBook Air 13 2025, an ultrabook that combines high performance, sleek design, and durability. This laptop is the perfect companion for work and entertainment.',
      price: 523044,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p1e/pc3/35723927.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000',
      likes: 0,
      categoryId: [0, 2]
    },
    {
      id: 8,
      name: 'Apple MacBook Air 15 2024 15.3" Laptop / 24 GB / 512GB SSD / macOS / MC9L4',
      description: 'Introducing the Apple MacBook Air 15 2024, the perfect laptop for work and study that combines high performance, stylish design and durability.',
      price: 889290,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p88/p54/15467562.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p88/p54/15467562.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pff/pe9/22418964.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p53/pea/22418967.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2024-15-3-24-gb-ssd-512-gb-macos-mc9l4-132084410/?c=750000000',
      likes: 0,
      categoryId: [0, 2]
    },
    {
      id: 9,
      name: 'Apple MacBook Pro 16 2023 16.2" Laptop / 36 GB / 512GB SSD / macOS / MRW23RU/A',
      description: 'Apple MacBook Pro 16 M3 Pro 2023 is ideal for professionals in all fields and fields. It will make your work more productive due to increased productivity, battery life, and connectivity.',
      price: 2032412,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/hec/84577505476638.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h23/hec/84577505476638.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h86/h81/84577681145886.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h4b/hf2/84577681211422.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-16-2-36-gb-ssd-512-gb-macos-mrw23ru-a-114862739/?c=750000000',
      likes: 0,
      categoryId: [0, 2]
    },
    {
      id: 10,
      name: 'Lenovo IdeaPad 3 15.6" Laptop / 8GB / 256GB SSD / DOS / 15IGL05 / 81WQ00ERRK',
      description: 'The IdeaPad 3 laptop is quieter and generates less heat due to the use of an optimized mechanical airflow distribution system and intelligent ventilation that prevents mixing of cold and warm air flows. The cooling is controlled by the Q Control system, which offers three fan rotation modes depending on the required performance.',
      price: 171392,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/ha2/h3f/64231926562846.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000',
      likes: 0,
      categoryId: [0, 2]
    },
    {
      id: 11,
      name: 'Apple AirPods 4 Headphones White',
      description: 'The updated Apple AirPods 4 wireless headphones with personalized spatial audio and adaptive equalizer will make music an integral part of your life. The dynamic tracking function accurately reacts to every head movement and creates a three-dimensional live sound comparable to playing in a real concert hall.',
      price: 60880,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
      likes: 0,
      categoryId: [0, 3]
    },
    {
      id: 12,
      name: 'Razer Blackshark V2 X Headphones Black',
      description: 'Fight your enemies in a lightweight esports headset that reveals its advantages under pressure. Introducing the Razer BlackShark V2 X, a triple threat due to its amazing sound, excellent microphone purity, and high-quality sound insulation, proven by pro players.',
      price: 15500,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h98/64136271331358.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h21/h98/64136271331358.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h8b/h67/64136274280478.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h69/h24/64136374943774.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/naushniki-razer-blackshark-v2-x-chernyi-100934284/?c=750000000',
      likes: 0,
      categoryId: [0, 3]
    },
    {
      id: 13,
      name: 'Apple AirPods Pro 3 Headphones White',
      description: 'The Apple AirPods Pro 3 headphones are the perfect choice for those who appreciate excellent sound quality and ease of use.',
      price: 130353,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pa6/pc5/64466279.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p6d/pc5/64466277.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-3-belyi-145554533/?c=750000000',
      likes: 0,
      categoryId: [0, 3]
    },
    {
      id: 14,
      name: 'Marshall Major IV Headphones black',
      description: 'The MARSHALL Major IV Bluetooth headset, thanks to its features, will give you comfortable listening to music of various genres. This model is based on dynamic radiators with a membrane diameter of 40 mm, which, combined with a wide frequency range and high sensitivity, can provide high-quality and rich sound.',
      price: 18499,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p0f/pc2/17680137.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p2b/pc2/17680138.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000',
      likes: 0,
      categoryId: [0, 3]
    },
    {
      id: 15,
      name: 'Samsung Galaxy Buds core Headphones black',
      description: 'Samsung Galaxy Buds core wireless headphones are a compact and stylish solution for those who value sound quality and ease of use.',
      price: 19556,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1f/p7d/53123420.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p1f/p7d/53123420.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p02/p7d/53123421.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pe6/p7c/53123422.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000',
      likes: 0,
      categoryId: [0, 3]
    },
    {
      id: 16,
      name: 'Apple iPad A16 11 2025 Wi-Fi Tablet 11 inch 6GB/128GB Blue',
      description: 'Introducing the iPad A16 2025 — your ideal companion for work and entertainment! This tablet with an 11-inch screen and a powerful Apple A16 processor will provide you with high performance and vivid experience.',
      price: 199896,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pb7/p12/37019481.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p7e/p12/37019483.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-sinii-138202165/?c=750000000',
      likes: 0,
      categoryId: [0, 4]
    },
    {
      id: 17,
      name: 'Xiaomi Redmi Pad 2 4G Tablet 11 inch 8GB/256GB Grey',
      description: 'Xiaomi Redmi Pad 2 4G is a versatile tablet with a bright 11—inch screen and mobile connectivity, ideal for work, study and entertainment.',
      price: 129990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p34/pcd/81439931.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p34/pcd/81439931.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pbd/p9b/46318883.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pa0/p9b/46318884.jpg?format=gallery-medium'],
      link: 'kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-seryi-140640417/?c=750000000',
      likes: 0,
      categoryId: [0, 4]
    },
    {
      id: 18,
      name: 'Huawei MatePad SE AGS6-W09 Tablet 11 inch 4GB/128GB Grey',
      description: 'Introducing Huawei MatePad SE — your ideal companion for work and entertainment! This 11-inch tablet combines high performance and stylish design, making it an excellent choice for any user.',
      price: 69890,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h62/86746767261726.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h2b/h62/86746767261726.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h7d/h39/86952919826462.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/haf/hbb/86952919859230.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-4-gb-128-gb-seryi-122142602/?c=750000000',
      likes: 0,
      categoryId: [0, 4]
    },
    {
      id: 19,
      name: 'Apple iPad Air 11 2025 Wi-Fi Tablet 11 inch 8GB/128GB Grey',
      description: 'The new Apple iPad Air 11 tablet (2025) is a product that brings you the most advanced technology and design from one of the world\'s leading electronics companies, Apple. With the release of this device in March 2025, the Apple brand has once again surprised its fans with its innovative approach to creating technology. The design and materials of the new iPad Air 11 are impressive at first glance.',
      price: 327580,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pbd/p8c/36122455.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p53/p89/36122456.jpeg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-seryi-137965083/?c=750000000',
      likes: 0,
      categoryId: [0, 4]
    },
    {
      id: 20,
      name: 'Samsung Galaxy Tab S9 SM-X716BZEASKZ Tablet 11 inch 8 GB/128 GB Beige',
      description: 'Samsung Galaxy Tab S9 SM-X716BZEASKZ is a powerful and versatile tablet with a bright 11—inch Dynamic AMOLED 2X screen and support for 5G networks.',
      price: 307675,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h39/hbe/82782264557598.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h39/hbe/82782264557598.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf8/pae/78315321.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p87/pae/78315325.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzeaskz-11-djuim-8-gb-128-gb-bezhevyi-112504289/?c=750000000',
      likes: 0,
      categoryId: [0, 4]
    },
  ]

  categories: Category[] = [
    {id: 0, name: "All"},
    {id: 1, name: "Smartphones"},
    {id: 2, name: "Laptop"},
    {id: 3, name: "Headphones"},
    {id: 4, name: "Tablet"}
  ];

  constructor() {}

  getCategories(): Category[] {
    return this.categories;
  }
  getProductsByCategory(c: number): Product[] {
    return this.products.filter(p => p.categoryId.includes(c));
  }
  addProduct(product: Product) {
    this.products.push(product);
  }
}
