"use client";
import Titel from "@/shared/components/atoms/Titel";
import { Product } from "../../types/type";
import { X } from "@/assets/icons/icons";

interface Props {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export default function TagsSection({ product, setProduct }: Props) {
  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    const value = e.currentTarget.value.trim();

    if (!value) return;

    if (!product.tags.includes(value)) {
      setProduct((prev) => ({
        ...prev,
        tags: [...prev.tags, value],
      }));
    }

    e.currentTarget.value = "";
  };

  const removeTag = (tag: string) => {
    setProduct((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };

  return (
    <div className="ds-bg-alt rounded-xl p-6 shadow-sm">
      <Titel size="lg" className="mb-5 font-semibold">
        Tags
      </Titel>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Add Tags</label>

        <input
          type="text"
          placeholder="Enter tag name"
          onKeyDown={handleTagKeyDown}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-black"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {product.tags.map((tag) => (
          <div
            key={tag}
            className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm"
          >
            <span>{tag}</span>

            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="rounded-full p-1 transition hover:bg-gray-200"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
