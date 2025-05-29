// lib/data.js
export const products = {
  1: {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    description: "High-quality wireless headphones with noise cancellation",
    image: "/api/placeholder/300/300",
    stock: 15,
    lastUpdated: new Date().toISOString(),
  },
  2: {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    description: "Track your fitness goals with this advanced smartwatch",
    image: "/api/placeholder/300/300",
    stock: 8,
    lastUpdated: new Date().toISOString(),
  },
};

export const similarProducts = [
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "/api/placeholder/200/200",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: 149.99,
    image: "/api/placeholder/200/200",
  },
  {
    id: 5,
    name: "Phone Case",
    price: 29.99,
    image: "/api/placeholder/200/200",
  },
  {
    id: 6,
    name: "Charging Cable",
    price: 19.99,
    image: "/api/placeholder/200/200",
  },
];

export const reviews = [
  {
    id: 1,
    productId: 1,
    author: "John D.",
    rating: 5,
    comment: "Excellent quality!",
    date: "2024-01-15",
  },
  {
    id: 2,
    productId: 1,
    author: "Sarah M.",
    rating: 4,
    comment: "Great sound quality",
    date: "2024-01-20",
  },
  {
    id: 3,
    productId: 1,
    author: "Mike R.",
    rating: 5,
    comment: "Worth every penny",
    date: "2024-01-25",
  },
];
