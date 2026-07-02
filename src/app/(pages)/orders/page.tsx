import DashbordLayout from "@/shared/components/layout/DashbordLayout";
import AddressSection from "@/shared/components/molecules/AddressSection";
import OrderCard from "@/modules/orders/components/molecules/OrderCard";
import PaginationSection from "@/shared/components/molecules/PaginationSection";
import Toolbar from "@/shared/components/molecules/Toolbar";

import { orderData } from "@/modules/orders/data/Orders";
import ButtonsExport from "@/shared/components/molecules/ButtonsExport";
import TableHeader from "@/shared/components/molecules/TableHeader";
import { orderColumns } from "@/shared/data/TablesHead";



export default function OrdersPage() {
  return (
    <DashbordLayout>
      <div className="flex justify-between mb-3">
        <AddressSection titel="Orders" />
        <ButtonsExport
          nameButton="Export"
          nameButtonAdd="Add Order"
          href="/orders/add-order"
          isIcon
        />
      </div>

      <div className="ds-bg-alt w-full p-4 rounded-md shadow-xs">
        <Toolbar />

        <table className="w-full table-fixed ">
          <TableHeader columns={orderColumns} />
          <tbody>
            {orderData.map((item) => (
              <OrderCard key={item.id} {...item} />
            ))}
          </tbody>
        </table>

        <PaginationSection />
      </div>
    </DashbordLayout>
  );
}
