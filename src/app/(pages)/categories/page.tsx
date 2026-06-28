import DashbordLayout from "@/shared/components/layout/DashbordLayout";
import AddressSection from "@/shared/components/molecules/AddressSection";

import CategoryCard from "@/modules/categories/components/molecules/CategoryCard";
import { categories } from "@/modules/categories/data/Categories";

export default function CategoriesPage() {
  return (
    <DashbordLayout>
      <AddressSection titel="Categories" />

      <div className="grid grid-cols-3 gap-6">
        {categories.map((item) => (
          <CategoryCard key={item.id} {...item}/>
        ))}
      </div>
    </DashbordLayout>
  );
}
