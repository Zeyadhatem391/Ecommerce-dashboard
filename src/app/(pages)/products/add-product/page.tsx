"use client";

import { useState } from "react";

import LeftAddProduct from "@/modules/products/components/organisms/LeftAddProduct";
import RightAddProduct from "@/modules/products/components/organisms/RightAddProduct";
import AddPageLayout from "@/shared/components/layout/AddPageLayout";
import { useRouter } from "next/navigation";
import { Product } from "../../../../modules/products/types/type";

export default function AddProducts() {
  const [product, setProduct] = useState<Product>({
    name: "",
    description: "",
    image: "",
    inventory: "",
    price: "",
    discountPrice: "",
    tax: false,
    weight: "",
    country: "",
    color: "",
    digital: false,
    categoryId: [],
    tags: [],
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
