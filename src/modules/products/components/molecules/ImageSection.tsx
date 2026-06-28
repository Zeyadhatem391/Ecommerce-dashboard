"use client";

import { useRef } from "react";

import Text from "@/shared/components/atoms/Text";
import Titel from "@/shared/components/atoms/Titel";
import { Product } from "../../types/type";
import Image from "next/image";

interface Props {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export default function ImageSection({ product, setProduct }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChooseImage = () => {
    inputRef.current?.click();
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setProduct((prev) => ({
      ...prev,
      image: imageUrl,
    }));
  };

  return (
    <div>
      <Titel size="lg" className="mb-6 font-semibold">
        Images
      </Titel>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleImageChange}
      />

      <div
        onClick={handleChooseImage}
        className="flex h-60 w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-300 transition hover:border-black"
      >
        {product.image ? (
          <Image
            src={product.image}
            alt="Preview"
            fill
            className="h-full w-full object-cover"
          />
        ) : (
          <>
            <button
              type="button"
              className="rounded-lg border border-gray-300 px-5 py-2 font-medium transition hover:bg-gray-100"
            >
              Add File
            </button>

            <Text className="mt-4 text-gray-500">
              Or drag and drop files
            </Text>
          </>
        )}
      </div>
    </div>
  );
}