import { Product } from '@/types';

export const sampleProducts: Product[] = [
  // Phones
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    description: 'The most advanced iPhone yet with titanium design, A17 Pro chip, and pro camera system.',
    price: 129999,
    originalPrice: 139999,
    discount: 7,
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400',
    ],
    category: 'phones',
    brand: 'Apple',
    inStock: true,
    stockQuantity: 15,
    rating: 4.8,
    reviewCount: 124,
    features: ['5G Ready', 'Wireless Charging', 'Water Resistant', 'Face ID'],
    specifications: {
      'Screen Size': '6.7"',
      'Storage': '256GB',
      'RAM': '8GB',
      'Camera': '48MP Triple Camera',
      'Battery': '4441mAh',
      'OS': 'iOS 17'
    }
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Premium Android flagship with S Pen, 200MP camera, and AI features.',
    price: 119999,
    originalPrice: 129999,
    discount: 8,
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400',
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400',
    ],
    category: 'phones',
    brand: 'Samsung',
    inStock: true,
    stockQuantity: 8,
    rating: 4.7,
    reviewCount: 89,
    features: ['5G Ready', 'S Pen Included', 'Wireless Charging', 'Water Resistant'],
    specifications: {
      'Screen Size': '6.8"',
      'Storage': '256GB',
      'RAM': '12GB',
      'Camera': '200MP Quad Camera',
      'Battery': '5000mAh',
      'OS': 'Android 14'
    }
  },
  {
    id: '3',
    name: 'Google Pixel 8 Pro',
    description: 'AI-powered photography and pure Android experience with Magic Eraser.',
    price: 89999,
    originalPrice: 99999,
    discount: 10,
    images: [
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400',
    ],
    category: 'phones',
    brand: 'Google',
    inStock: true,
    stockQuantity: 12,
    rating: 4.6,
    reviewCount: 67,
    features: ['5G Ready', 'AI Photography', 'Wireless Charging', 'Pure Android'],
    specifications: {
      'Screen Size': '6.7"',
      'Storage': '128GB',
      'RAM': '12GB',
      'Camera': '50MP Triple Camera',
      'Battery': '5050mAh',
      'OS': 'Android 14'
    }
  },
  {
    id: '4',
    name: 'OnePlus 12',
    description: 'Flagship killer with Snapdragon 8 Gen 3 and ultra-fast charging.',
    price: 74999,
    originalPrice: 79999,
    discount: 6,
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    ],
    category: 'phones',
    brand: 'OnePlus',
    inStock: true,
    stockQuantity: 20,
    rating: 4.5,
    reviewCount: 45,
    features: ['5G Ready', '100W Fast Charging', 'OxygenOS', 'Gaming Mode'],
    specifications: {
      'Screen Size': '6.82"',
      'Storage': '256GB',
      'RAM': '16GB',
      'Camera': '50MP Triple Camera',
      'Battery': '5400mAh',
      'OS': 'OxygenOS 14'
    }
  },
  {
    id: '5',
    name: 'iPhone 14',
    description: 'Reliable iPhone with great camera and all-day battery life.',
    price: 79999,
    originalPrice: 89999,
    discount: 11,
    images: [
      'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400',
      'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400',
    ],
    category: 'phones',
    brand: 'Apple',
    inStock: true,
    stockQuantity: 25,
    rating: 4.4,
    reviewCount: 156,
    features: ['5G Ready', 'Wireless Charging', 'Face ID', 'Water Resistant'],
    specifications: {
      'Screen Size': '6.1"',
      'Storage': '128GB',
      'RAM': '6GB',
      'Camera': '12MP Dual Camera',
      'Battery': '3279mAh',
      'OS': 'iOS 17'
    }
  },

  // Accessories
  {
    id: '6',
    name: 'AirPods Pro (2nd Gen)',
    description: 'Premium wireless earbuds with active noise cancellation and spatial audio.',
    price: 24999,
    originalPrice: 27999,
    discount: 11,
    images: [
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400',
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400',
    ],
    category: 'accessories',
    brand: 'Apple',
    inStock: true,
    stockQuantity: 30,
    rating: 4.7,
    reviewCount: 89,
    features: ['Active Noise Cancellation', 'Spatial Audio', 'Water Resistant', '6hrs Battery'],
    specifications: {
      'Battery Life': '6hrs + 24hrs case',
      'Connectivity': 'Bluetooth 5.3',
      'Water Rating': 'IPX4',
      'Features': 'ANC, Transparency Mode'
    }
  },
  {
    id: '7',
    name: 'Samsung Galaxy Buds2 Pro',
    description: 'Premium earbuds with 360 Audio and intelligent ANC.',
    price: 18999,
    originalPrice: 21999,
    discount: 14,
    images: [
      'https://images.unsplash.com/photo-1590658165737-15a047b7972f?w=400',
      'https://images.unsplash.com/photo-1590658165737-15a047b7972f?w=400',
    ],
    category: 'accessories',
    brand: 'Samsung',
    inStock: true,
    stockQuantity: 18,
    rating: 4.5,
    reviewCount: 76,
    features: ['Active Noise Cancellation', '360 Audio', 'Water Resistant', '5hrs Battery'],
    specifications: {
      'Battery Life': '5hrs + 18hrs case',
      'Connectivity': 'Bluetooth 5.3',
      'Water Rating': 'IPX7',
      'Features': 'ANC, Ambient Sound'
    }
  },
  {
    id: '8',
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charger compatible with all Qi-enabled devices.',
    price: 2999,
    originalPrice: 3999,
    discount: 25,
    images: [
      'https://images.unsplash.com/photo-1586953002871-b4fa9b3ec126?w=400',
      'https://images.unsplash.com/photo-1586953002871-b4fa9b3ec126?w=400',
    ],
    category: 'accessories',
    brand: 'Generic',
    inStock: true,
    stockQuantity: 50,
    rating: 4.2,
    reviewCount: 234,
    features: ['15W Fast Charging', 'Qi Compatible', 'LED Indicator', 'Over-heat Protection'],
    specifications: {
      'Power Output': '15W Max',
      'Compatibility': 'All Qi devices',
      'Input': 'USB-C',
      'Safety': 'Over-voltage protection'
    }
  },
  {
    id: '9',
    name: 'Protective Phone Case - Clear',
    description: 'Crystal clear case with military-grade drop protection.',
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    images: [
      'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
      'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
    ],
    category: 'accessories',
    brand: 'Generic',
    inStock: true,
    stockQuantity: 100,
    rating: 4.3,
    reviewCount: 145,
    features: ['Drop Protection', 'Crystal Clear', 'Wireless Charging Compatible', 'Scratch Resistant'],
    specifications: {
      'Material': 'TPU + PC',
      'Drop Protection': '10ft',
      'Compatibility': 'Multiple Models',
      'Thickness': '1.2mm'
    }
  },
  {
    id: '10',
    name: 'USB-C to Lightning Cable',
    description: 'Official MFi certified fast charging cable for iPhone.',
    price: 1999,
    originalPrice: 2499,
    discount: 20,
    images: [
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
    ],
    category: 'accessories',
    brand: 'Apple',
    inStock: true,
    stockQuantity: 75,
    rating: 4.6,
    reviewCount: 198,
    features: ['MFi Certified', 'Fast Charging', '2m Length', 'Durable Design'],
    specifications: {
      'Length': '2 meters',
      'Certification': 'MFi Certified',
      'Data Transfer': 'Up to 480Mbps',
      'Power Delivery': 'Up to 60W'
    }
  },
  {
    id: '11',
    name: 'Portable Power Bank 20000mAh',
    description: 'High capacity power bank with fast charging for multiple devices.',
    price: 4999,
    originalPrice: 5999,
    discount: 17,
    images: [
      'https://images.unsplash.com/photo-1609592787443-eb47a9e97c50?w=400',
      'https://images.unsplash.com/photo-1609592787443-eb47a9e97c50?w=400',
    ],
    category: 'accessories',
    brand: 'Anker',
    inStock: true,
    stockQuantity: 35,
    rating: 4.5,
    reviewCount: 167,
    features: ['20000mAh Capacity', '22.5W Fast Charging', 'Multiple Ports', 'LED Display'],
    specifications: {
      'Capacity': '20000mAh',
      'Input': 'USB-C PD 18W',
      'Output': 'USB-A & USB-C',
      'Display': 'LED Power Indicator'
    }
  },
  {
    id: '12',
    name: 'Car Mount Phone Holder',
    description: 'Magnetic car mount with 360-degree rotation and strong grip.',
    price: 1299,
    originalPrice: 1799,
    discount: 28,
    images: [
      'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=400',
      'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=400',
    ],
    category: 'accessories',
    brand: 'Generic',
    inStock: true,
    stockQuantity: 42,
    rating: 4.1,
    reviewCount: 89,
    features: ['360° Rotation', 'Magnetic Mount', 'Dashboard/Windshield', 'One-Hand Operation'],
    specifications: {
      'Mount Type': 'Magnetic',
      'Rotation': '360 degrees',
      'Compatibility': 'All smartphones',
      'Installation': 'Dashboard/Windshield'
    }
  }
];

export const brands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Anker', 'Generic'];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'phones', name: 'Phones' },
  { id: 'accessories', name: 'Accessories' }
];