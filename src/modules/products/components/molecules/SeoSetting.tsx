"use client";
import Titel from "@/shared/components/atoms/Titel";
import { Product } from "../../types/type";

interface Props {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export default function SeoSetting({ product, setProduct }: Props) {
  return (
    <div className="ds-bg-alt rounded-xl p-6 shadow-sm">
      <Titel size="lg" className="mb-6 font-semibold">
        SEO Settings
      </Titel>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="font-medium">Title</label>

          <input
            type="text"
            value={product.seoTitle}
            onChange={(e) =>
              setProduct((prev) => ({
                ...prev,
                seoTitle: e.target.value,
              }))
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium">Description</label>

          <textarea
            rows={6}
            value={product.seoDescription}
            onChange={(e) =>
              setProduct((prev) => ({
                ...prev,
                seoDescription: e.target.value,
              }))
            }
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          />
        </div>
      </div>
    </div>
  );
}
