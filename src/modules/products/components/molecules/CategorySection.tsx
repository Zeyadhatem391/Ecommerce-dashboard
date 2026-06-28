"use client";

import Titel from "@/shared/components/atoms/Titel";
import CheckboxText from "@/shared/components/molecules/CheckboxText";
import { Product } from "../../types/type";
import { categories } from "@/modules/categories/data/Categories";

interface Props {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export default function CategorySection({ product, setProduct }: Props) {
  const handleCategoryChange = (categoryId: string) => {
    setProduct((prev) => ({
      ...prev,
      categoryId: prev.categoryId.includes(categoryId)
        ? prev.categoryId.filter((id) => id !== categoryId)
        : [...prev.categoryId, categoryId],
    }));
  };

  return (
    <div className="ds-bg-alt rounded-xl p-6 shadow-sm">
      <Titel size="lg" className="mb-5 font-semibold">
        Categories
      </Titel>

      <div className="flex flex-col gap-4">
        {categories.map((item) => (
          <CheckboxText
            key={item.id}
            text={item.title}
            checked={product.categoryId.includes(item.id)}
            onChange={() => handleCategoryChange(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
