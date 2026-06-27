import LeftAddCategoy from "@/modules/categories/components/organisms/LeftAddCategoy";
import RightAddCategoy from "@/modules/categories/components/organisms/RightAddCategoy";
import AddPageLayout from "@/shared/components/layout/AddPageLayout";

export default function page() {
  return (
    <AddPageLayout titel="Women Clothes">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <LeftAddCategoy />

        <RightAddCategoy />
      </div>
    </AddPageLayout>
  );
}
