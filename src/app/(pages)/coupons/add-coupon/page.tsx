import CouponInfo from "@/modules/coupons/components/molecules/CouponInfo";
import CouponType from "@/modules/coupons/components/molecules/CouponType";
import AddPageLayout from "@/shared/components/layout/AddPageLayout";

export default function page() {
  return (
    <AddPageLayout titel="Create Coupon">
      <div className="ds-bg-alt rounded-xl p-6 shadow-sm">
        <CouponInfo />

        <div className="my-7 border-b-2 border-gray-200"></div>

        <CouponType />
      </div>
    </AddPageLayout>
  );
}
