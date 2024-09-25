import { Product } from './types';

export const productParagraphs = [
  {
    id: 0,
    title: "Description",
    role: (product: Product) => product.description,
  },
  {
    id: 1,
    title: "Rating",
    role: (product: Product) => `${product.rating}/5`,
  },
  {
    id: 2,
    title: "Warranty Information",
    role: (product: Product) => product.warrantyInformation,
  },
  {
    id: 3,
    title: "Dimensions",
    role: (product: Product) => `${Math.round(product.dimensions.width)} x ${Math.round(product.dimensions.height)} cm`,  },
  {
    id: 4,
    title: "Weight",
    role: (product: Product) => `${product.weight}00g`,
  },
];
