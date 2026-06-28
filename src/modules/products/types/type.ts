export interface Product {
  id?: string;
  name: string;
  description: string;
  image: string;
  inventory: string;
  price: string;
  discountPrice: string;
  tax: boolean;
  weight: string;
  country: string;
  digital: boolean;
  categoryId: string[];
  color: string;
  tags: string[];
  rating: string;
  seoTitle: string;
  seoDescription: string;
  options: boolean;
  size: string;
  sizeValue: string;
}