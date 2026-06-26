"use client";

import { useState } from "react";

import LeftAddProduct from "@/modules/products/components/organisms/LeftAddProduct";
import RightAddProduct from "@/modules/products/components/organisms/RightAddProduct";
import AddPageLayout from "@/shared/components/layout/AddPageLayout";
import { useRouter } from "next/navigation";

export interface Product {
  id?: number;
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
  category: string[];
  color: string;
  tags: string[];
  colorOption: string;
  rating: string;
  seoTitle: string;
  seoDescription: string;
  options: boolean;
  size: string;
  sizeValue: string;
}

export default function AddProducts() {
  const [product, setProduct] = useState<Product>({
    name: "",
    description: "",
    image: "",
    inventory: "96 in stock",
    price: "",
    discountPrice: "",
    tax: false,
    weight: "",
    country: "",
    color: "",
    digital: false,
    category: [],
    tags: [],
    colorOption: "",
    rating: "5.0 (32 Votes)",
    seoTitle: "",
    seoDescription: "",
    options: false,
    size: "",
    sizeValue: "",
  });

  const router = useRouter();

  const handleSave = () => {
    const products = JSON.parse(localStorage.getItem("products") || "[]");

    products.push({
      ...product,
      id: Date.now(),
    });

    localStorage.setItem("products", JSON.stringify(products));

    router.push("/products");
  };

  return (
    <AddPageLayout titel="Add Product" onSave={handleSave}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <LeftAddProduct product={product} setProduct={setProduct} />

        <RightAddProduct product={product} setProduct={setProduct} />
      </div>
    </AddPageLayout>
  );
}
