"use client";

import Titel from "@/shared/components/atoms/Titel";
import SwitchText from "@/shared/components/molecules/SwitchText";
import { Product } from "../../types/type";

interface Props {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export default function OptionsSection({ product, setProduct }: Props) {
  return (
    <div>
      <Titel size="lg" className="mb-6 font-semibold">
        Different Options
      </Titel>

      <SwitchText
        text="This product has multiple options"
        checked={product.options}
        onCheckedChange={(checked) =>
          setProduct((prev) => ({
            ...prev,
            options: checked,
          }))
        }
      />

      {product.options && (
        <>
          <div>
            <Titel size="lg" className="my-6 font-semibold">
              Option 1
            </Titel>

            <div className="mb-6 flex gap-5">
              <div className="flex w-full flex-col gap-2">
                <label className="font-medium">Size</label>

                <input
                  type="text"
                  value={product.size}
                  onChange={(e) =>
                    setProduct((prev) => ({
                      ...prev,
                      size: e.target.value,
                    }))
                  }
                  placeholder="Size"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                />
              </div>

              <div className="flex w-full flex-col gap-2">
                <label className="font-medium">Value</label>

                <input
                  type="text"
                  value={product.sizeValue}
                  onChange={(e) =>
                    setProduct((prev) => ({
                      ...prev,
                      sizeValue: e.target.value,
                    }))
                  }
                  placeholder="Value"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                />
              </div>
            </div>
          </div>

          <div>
            <Titel size="lg" className="my-6 font-semibold">
              Option 2
            </Titel>

            <div className="mb-6 flex gap-5">
              <div className="flex w-full flex-col gap-2">
                <label className="font-medium">Color</label>

                <input
                  type="text"
                  value={product.color}
                  onChange={(e) =>
                    setProduct((prev) => ({
                      ...prev,
                      color: e.target.value,
                    }))
                  }
                  placeholder="Color"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                />
              </div>

            </div>
          </div>

          <div>
            <Titel size="lg" className="my-6 font-semibold">
              Option 2
            </Titel>

            <div className="mb-6 flex gap-5">
              <div className="flex w-full flex-col gap-2">
                <label className="font-medium">Inventory</label>

                <input
                  type="text"
                  value={product.inventory}
                  onChange={(e) =>
                    setProduct((prev) => ({
                      ...prev,
                      inventory: e.target.value,
                    }))
                  }
                  placeholder="Quantity"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="cursor-pointer font-medium text-blue-600 hover:underline"
          >
            + Add More
          </button>
        </>
      )}
    </div>
  );
}
