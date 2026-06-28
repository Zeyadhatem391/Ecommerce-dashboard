"use client";
import LeftAddCategoy from "@/modules/categories/components/organisms/LeftAddCategoy";
import RightAddCategoy from "@/modules/categories/components/organisms/RightAddCategoy";
import { categories } from "@/modules/categories/data/Categories";
import { categoriesId } from "@/modules/categories/types/type";
import AddPageLayout from "@/shared/components/layout/AddPageLayout";
import { useParams } from "next/navigation";
export default function page() {
  const { id } = useParams();

  const categoryId = Object.entries(categoriesId).find(
    ([_, value]) => value === id,
  )?.[0];

  const category = categories.find((item) => item.nameRoute === id);

  return (
    <AddPageLayout titel={category?.title}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <LeftAddCategoy id={categoryId} />

        <RightAddCategoy />
      </div>
    </AddPageLayout>
  );
}
