import DashbordLayout from "@/components/layout/DashbordLayout";
import AddressSection from "@/components/molecules/AddressSection";
import OrderCard from "@/components/molecules/OrderCard";
import PaginationSection from "@/components/molecules/PaginationSection";
import Toolbar from "@/components/molecules/Toolbar";
import { orderData } from "@/data/Orders";

export default function OrdersPage() {
  return (
    <DashbordLayout>
      <AddressSection titel="Orders" />

      <div className="ds-bg-alt w-full p-4 rounded-md shadow-xs">
        <Toolbar />

        <table className="w-full table-fixed ">
          <thead className="border-b-2 border-gray-200">
            <tr className="ds-text-disabled">
              <th className="w-1/6 text-left p-3 font-normal">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                  <span>Order</span>
                </div>
              </th>

              <th className="w-1/6 text-left p-3 font-normal">Date</th>
              <th className="w-1/6 text-left p-3 font-normal">Customer</th>
              <th className="w-1/6 text-left p-3 font-normal">
                Payment status
              </th>
              <th className="w-1/6 text-left p-3 font-normal">Order Status</th>
              <th className="w-1/6 text-left p-3 font-normal">Total</th>
            </tr>
          </thead>

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
