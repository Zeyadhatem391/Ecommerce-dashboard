"use client";

import Titel from "@/shared/components/atoms/Titel";
import SwitchText from "@/shared/components/molecules/SwitchText";
import { Product } from "../../types/type";

interface Props {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export default function ShippingSection({
  product,
  setProduct,
}: Props) {
  return (
    <div>
      <Titel size="lg" className="mb-6 font-semibold">
        Shipping
      </Titel>

      <div className="flex gap-5 mb-6">
        {/* Weight */}
        <div className="flex flex-col gap-2 w-full">
          <label className="font-medium">Weight</label>

          <input
            type="text"
            value={product.weight}
            onChange={(e) =>
              setProduct((prev) => ({
                ...prev,
                weight: e.target.value,
              }))
            }
            placeholder="Enter Weight"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          />
        </div>

        {/* Country */}
        <div className="flex flex-col gap-2 w-full">
          <label className="font-medium">Country</label>

          <input
            type="text"
            value={product.country}
            onChange={(e) =>
              setProduct((prev) => ({
                ...prev,
                country: e.target.value,
              }))
            }
            placeholder="Select Country"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          />
        </div>
      </div>

      <SwitchText
        text="This is digital item"
        checked={product.digital}
        onCheckedChange={(checked) =>
          setProduct((prev) => ({
            ...prev,
            digital: checked,
          }))
        }
      />
    </div>
  );
}