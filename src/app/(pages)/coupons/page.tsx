import DashbordLayout from "@/shared/components/layout/DashbordLayout";
import AddressSection from "@/shared/components/molecules/AddressSection";
import CouponCard from "@/modules/coupons/components/molecules/CouponCard";
import PaginationSection from "@/shared/components/molecules/PaginationSection";
import Toolbar from "@/shared/components/molecules/Toolbar";
import { couponData } from "@/modules/coupons/data/Coupons";
import TableHeader from "@/shared/components/molecules/TableHeader";
import { couponColumns } from "@/data/TablesHead";
import ButtonsExport from "@/shared/components/molecules/ButtonsExport";

export default function CouponsPage() {
  return (
    <DashbordLayout>
      <div className="flex justify-between mb-3">
        <AddressSection titel="Coupons" />

        <ButtonsExport
          nameButton="Export"
          nameButtonAdd="Create"
          href="/coupons/add-coupon"
          isIcon
          isExport = {false}
        />
      </div>

      <div className="ds-bg-alt w-full p-4 rounded-md shadow-xs">
        <Toolbar />

        <table className="w-full table-fixed ">
          <TableHeader columns={couponColumns} />
          <tbody>
            {couponData.map((item) => (
              <CouponCard key={item.id} {...item} />
            ))}
          </tbody>
        </table>

        <PaginationSection />
      </div>
    </DashbordLayout>
  );
}
