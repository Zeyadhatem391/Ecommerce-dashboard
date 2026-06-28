"use client";

import Titel from "@/shared/components/atoms/Titel";
import SwitchText from "@/shared/components/molecules/SwitchText";
import { Product } from "../../types/type";

interface Props {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export default function PriceSection({ product, setProduct }: Props) {
  return (
    <div>
      <Titel size="lg" className="mb-6 font-semibold">
        Price
      </Titel>

      <div className="mb-6 flex gap-5">
        {/* Product Price */}
        <div className="flex w-full flex-col gap-2">
          <label className="font-medium">Product Price</label>

          <input
            type="number"
            value={product.price}
            onChange={(e) =>
              setProduct((prev) => ({
                ...prev,
                price: e.target.value,
              }))
            }
            placeholder="Enter price"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          />
        </div>

        {/* Discount Price */}
        <div className="flex w-full flex-col gap-2">
          <label className="font-medium">Discount Price</label>

          <input
            type="number"
            value={product.discountPrice}
            onChange={(e) =>
              setProduct((prev) => ({
                ...prev,
                discountPrice: e.target.value,
              }))
            }
            placeholder="Price at Discount"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          />
        </div>
      </div>

      <SwitchText
        text="Add tax for this product"
        checked={product.tax}
        onCheckedChange={(checked) =>
          setProduct((prev) => ({
            ...prev,
            tax: checked,
          }))
        }
      />
    </div>
  );
}