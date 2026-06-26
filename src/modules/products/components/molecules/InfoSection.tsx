"use client";

import { Product } from "@/app/(pages)/products/add-product/page";
import Titel from "@/shared/components/atoms/Titel";

interface Props {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export default function InfoSection({ product, setProduct }: Props) {
  return (
    <div>
      <Titel size="lg" className="mb-6 font-semibold">
        Information
      </Titel>

      <div className="flex flex-col gap-5">
        {/* Product Name */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">Product Name</label>

          <input
            type="text"
            value={product.name}
            onChange={(e) =>
              setProduct((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            placeholder="Summer T-Shirt"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          />
        </div>

        {/* Product Description */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">Product Description</label>

          <textarea
            rows={3}
            value={product.description}
            onChange={(e) =>
              setProduct((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            placeholder="Product description"
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          />
        </div>
      </div>
    </div>
  );
}