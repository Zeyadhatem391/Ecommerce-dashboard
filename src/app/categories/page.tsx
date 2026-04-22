import DashbordLayout from "@/components/layout/DashbordLayout";
import AddressSection from "@/components/molecules/AddressSection";

import { categories } from "@/data/Categories";
import CategoryCard from "../../components/molecules/CategoryCard";

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
