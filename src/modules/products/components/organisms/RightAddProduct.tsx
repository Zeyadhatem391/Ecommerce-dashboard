"use client";

import { X } from "@/assets/icons/icons";
import Titel from "@/shared/components/atoms/Titel";
import CheckboxText from "@/shared/components/molecules/CheckboxText";
import { category } from "../../data/Products";
import { Product } from "@/app/(pages)/products/add-product/page";

interface RightAddProductProps {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export default function RightAddProduct({
  product,
  setProduct,
}: RightAddProductProps) {
  const handleCategoryChange = (categoryName: string) => {
    setProduct((prev) => ({
      ...prev,
      category: prev.category.includes(categoryName)
        ? prev.category.filter((c) => c !== categoryName)
        : [...prev.category, categoryName],
    }));
  };

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
    <div className="flex flex-col gap-6">
      {/* Categories */}
      <div className="ds-bg-alt rounded-xl p-6 shadow-sm">
        <Titel size="lg" className="mb-5 font-semibold">
          Categories
        </Titel>

        <div className="flex flex-col gap-4">
          {category.map((item) => (
            <CheckboxText
              key={item.title}
              text={item.title}
              checked={product.category.includes(item.title)}
              onChange={() => handleCategoryChange(item.title)}
            />
          ))}
        </div>

        <button className="mt-6 w-full rounded-lg border border-dashed border-gray-300 py-3 transition hover:bg-gray-100">
          + Create New
        </button>
      </div>

      {/* Tags */}
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

      {/* SEO */}
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
    </div>
  );
}
