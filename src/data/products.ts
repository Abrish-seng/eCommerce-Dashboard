import type { Product } from '../types'
import img1 from '../assets/1.png'
import dslr from '../assets/dslr-camera.jpeg'
import gamingKeyboard from '../assets/gaming-keyboard.jpeg'
import wirelessGamingController from '../assets/wirelessGameController.jpeg'
import iphone from '../assets/iphone.jpeg'
import gamingLaptop from '../assets/gamingLabtop.jpeg'
export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Noise-cancelling over-ear headphones with 30h battery life.',
    price: 199.99,
    imageUrl: img1,
    category: 'Audio',
    rating: 4.6,
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Fitness tracking, heart-rate monitor, and GPS.',
    price: 149.0,
    imageUrl: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop',
    category: 'Wearables',
    rating: 4.4,
  },
  {
    id: '3',
    name: 'DSLR Camera',
    description: '24MP DSLR with kit lens for stunning photos and videos.',
    price: 549.0,
    imageUrl: dslr,
    category: 'Photography',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Gaming Keyboard',
    description: 'Mechanical keyboard with RGB backlight and hot-swappable keys.',
    price: 89.99,
    imageUrl: gamingKeyboard,
    category: 'Gaming',
    rating: 4.5,
  },
  {
    id: '5',
    name: '4K Monitor',
    description: '27-inch 4K UHD monitor with HDR and 99% sRGB.',
    price: 329.99,
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    category: 'Displays',
    rating: 4.3,
  },
  {
    id: '6',
    name: 'Wireless Gaming Controller',
    description: 'Mechanical keyboard with RGB backlight and hot-swappable keys.',
    price: 135.99,
    imageUrl: wirelessGamingController,
    category: 'Gaming',
    rating: 4.5,
  },
  {
    id: '7',
    name: 'Iphone Pro Max',
    description: 'Mechanical keyboard with RGB backlight and hot-swappable keys.',
    price: 135.99,
    imageUrl: iphone,
    category: 'Mobile',
    rating: 4.5,
  },
  {
    id: '4',
    name: 'Gaming Laptop',
    description: 'Mechanical keyboard with RGB backlight and hot-swappable keys.',
    price: 470.99,
    imageUrl: gamingLaptop,
    category: 'Gaming',
    rating: 5.5,
  },
]