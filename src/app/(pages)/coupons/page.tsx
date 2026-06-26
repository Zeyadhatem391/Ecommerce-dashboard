import DashbordLayout from "@/shared/components/layout/DashbordLayout";
import AddressSection from "@/shared/components/molecules/AddressSection";
import CouponCard from "@/modules/coupons/components/molecules/CouponCard";
import PaginationSection from "@/shared/components/molecules/PaginationSection";
import Toolbar from "@/shared/components/molecules/Toolbar";
import { couponData } from "@/data/Coupons";
import TableHeader from "@/shared/components/molecules/TableHeader";
import { couponColumns } from "@/data/TablesHead";



export default function CouponsPage() {
  return (
    <DashbordLayout>
      <AddressSection titel="Customers" />

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
