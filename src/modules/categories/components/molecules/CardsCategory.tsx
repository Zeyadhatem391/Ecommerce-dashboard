"use client";

import { useEffect, useMemo, useState } from "react";

import { Pencil, Trash2 } from "@/assets/icons/icons";
import Images from "@/shared/components/atoms/Image";
import Text from "@/shared/components/atoms/Text";

import { productData } from "@/modules/products/data/Products";
import { Product } from "@/modules/products/types/type";

export default function CardsCategory({ id }: { id?: string }) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const localProducts: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    setProducts([...productData, ...localProducts]);
  }, []);

  
  const categoryProducts = useMemo(() => {
    if (!id) return [];

    return products.filter((product) =>
      product.categoryId.includes(id)
    );
  }, [products, id]);

  if (!categoryProducts.length) {
    return (
      <Text className="text-center text-gray-500">
        No products found
      </Text>
    );
  }

  return (
    <div className="space-y-3">
      {categoryProducts.map((product) => (
        <div
          key={product.id}
          className="flex justify-between rounded-xl border bg-white p-4 shadow-md items-center"
        >
          <div className="flex gap-5 items-center">
            <div>
              <button className="flex flex-col gap-1">
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              </button>
            </div>

            <div className="relative w-20 h-20">
              <Images
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <Text size="lg" className="font-medium">
              {product.name}
            </Text>
          </div>

          <div className="flex gap-2">
            <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
              <Pencil size={18} />
            </button>

            <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}